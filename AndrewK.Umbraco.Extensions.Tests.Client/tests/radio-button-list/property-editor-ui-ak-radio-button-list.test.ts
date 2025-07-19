import { fixture, html, expect } from '@open-wc/testing'
import type {
    UmbInputRadioButtonListElement,
    UmbRadioButtonItem
// @ts-ignore
} from '@umbraco-cms/backoffice/dist-cms/packages/core/components'
import {
    AkPropertyEditorUIRadioButtonListElement
} from '../../../AndrewK.Umbraco.Extensions.RadioButtonList/client/src/property-editor-ui-ak-radio-button-list.element'
import type {
    UmbPropertyEditorConfigCollection,
    CustomElement,
    CustomPropertyEditorElement
} from '../shared/import-utils'

describe('AkPropertyEditorUIRadioButtonListElement', () => {
    let element: CustomPropertyEditorElement<AkPropertyEditorUIRadioButtonListElement, string>
    const getRadioButtonList = () => element?.shadowRoot?.querySelector('umb-input-radio-button-list') as CustomElement<UmbInputRadioButtonListElement, string>

    beforeEach(async () => {
        element = await fixture(html`
          <ak-property-editor-ui-radio-button-list></ak-property-editor-ui-radio-button-list>
        `)
    })

    afterEach(() => {
        element = undefined!
    })

    describe('Basic Rendering', () => {
        it('should render without errors', () => {
            expect(element).to.exist
            expect(element.shadowRoot).to.exist
        })

        it('can be created with its own instance', () => {
            expect(element).to.exist
            expect(element).to.be.instanceOf(AkPropertyEditorUIRadioButtonListElement)
        })
    })

    describe('Properties and Attributes', () => {
        it('should have correct default values', () => {
            expect(element.value).to.deep.equal(undefined)
            expect(element.readonly).to.be.false
            expect(element.mandatory).to.be.false
        })

        it('should reflect readonly and mandatory properties', async () => {
            element.readonly = true
            element.mandatory = true
            await element.updateComplete

            expect(element.readonly).to.be.true
            expect(element.mandatory).to.be.true
            expect(element.hasAttribute('readonly')).to.be.true
            expect(element.hasAttribute('mandatory')).to.be.true
        })

        it('should handle mandatoryMessage property', () => {
            const customMessage = 'Custom validation message'
            element.mandatoryMessage = customMessage

            expect(element.mandatoryMessage).to.equal(customMessage)
        })
    })

    describe('Configuration', () => {
        it('should handle valid/invalid/empty config', async () => {
            expect(async () => {
                element.config = {
                    getValueByAlias: (alias: string) => {
                        if (alias === 'items') return [ { key: '0', value: 'zero' }, { key: '1', value: 'one' } ]
                        if (alias === 'default') return '1'
                        return undefined
                    }
                } as UmbPropertyEditorConfigCollection
                element.config = undefined
                element.config = {
                    getValueByAlias: (alias: string) => {
                        if (alias === 'items') return 'invalid'
                        return undefined
                    }
                } as UmbPropertyEditorConfigCollection

                await element.updateComplete

                expect(element).to.exist
            }).to.not.throw()
        })

        it('should populate list from config items', async () => {
            const testItems = [
                { key: 'option1', value: 'Option One' },
                { key: 'option2', value: 'Option Two' },
                { key: 'option3', value: 'Option Three' }
            ]
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return testItems
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            await element.updateComplete

            const radioButtonList = getRadioButtonList()
            expect(radioButtonList).to.exist
            expect(radioButtonList?.list).to.have.length(testItems.length)
            expect(radioButtonList?.list[0].value).to.equal(testItems[0].key)
            expect(radioButtonList?.list[1].label).to.equal(testItems[1].value)
        })

        it('should handle empty items array', async () => {
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return []
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            await element.updateComplete

            const radioButtonList = getRadioButtonList()
            expect(radioButtonList?.list).to.have.length(0)
        })

        it('should add invalid option when value is not in list', async () => {
            const invalidOption = 'invalidOption'
            const testItems = [
                { key: 'option1', value: 'Option One' },
                { key: 'option2', value: 'Option Two' }
            ]

            element.value = invalidOption

            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return testItems
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            await element.updateComplete

            expect(element.value).to.equal(invalidOption)
            const radioButtonList = getRadioButtonList()
            expect(radioButtonList?.list).to.have.length(3)
            const invalidItem = radioButtonList?.list
                .find((item: UmbRadioButtonItem) => item.value === 'invalidOption')
            expect(invalidItem).to.exist
            expect(invalidItem?.invalid).to.be.true
            expect(invalidItem?.label).to.equal(invalidOption)
        })

        it('should not add invalid option when value is in list', async () => {
            const testItems = [
                { key: 'option1', value: 'Option One' },
                { key: 'option2', value: 'Option Two' }
            ]

            element.value = 'option1'

            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return testItems
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            await element.updateComplete

            const radioButtonList = getRadioButtonList()
            expect(radioButtonList?.list).to.have.length(2)
            expect(radioButtonList?.list.every((item: UmbRadioButtonItem) => !item.invalid)).to.be.true
        })

        it('should not set invalid option when list is defined', async () => {
            const initialValue = 'option1'
            const testItems = [
                { key: 'option1', value: 'Option One' },
                { key: 'option2', value: 'Option Two' }
            ]
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return testItems
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection
            
            element.value = initialValue
            await element.updateComplete
            element.value = 'option3'

            const radioButtonList = getRadioButtonList()
            expect(element.value).to.be.equal(initialValue)
            expect(radioButtonList?.list).to.have.length(2)
            expect(radioButtonList?.list.every((item: UmbRadioButtonItem) => !item.invalid)).to.be.true
        })
    })

    describe('Value Handling', () => {
        it('should handle default value', () => {
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return [ { key: '0', value: 'zero' }, { key: '1', value: 'one' } ]
                    if (alias === 'default') return '1'
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            expect(element.value).to.be.equal('1')
        })

        it('should handle falsy or non string values as undefined', () => {
            element.value = null
            expect(element.value).to.be.equal(undefined)

            element.value = undefined
            expect(element.value).to.be.equal(undefined)

            // @ts-ignore
            element.value = 0
            expect(element.value).to.be.equal(undefined)

            // @ts-ignore
            element.value = []
            expect(element.value).to.be.equal(undefined)
            // @ts-ignore
            element.value = true
            expect(element.value).to.be.equal(undefined)
        })

        it('should not override existing value with default', () => {
            const initialValue = '0'
            element.value = initialValue
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return [ { key: '0', value: 'zero' }, { key: '1', value: 'one' } ]
                    if (alias === 'default') return '1'
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            expect(element.value).to.equal(initialValue)
        })

        it('should handle value changes', async () => {
            const testItems = [
                { key: 'option1', value: 'Option One' },
                { key: 'option2', value: 'Option Two' }
            ]

            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return testItems
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            await element.updateComplete

            element.value = 'option2'
            await element.updateComplete

            const radioButtonList = getRadioButtonList()
            expect(radioButtonList?.value).to.equal('option2')
        })

        it('should dispatch change event when value changes', async () => {
            let changeEventFired = false
            element.addEventListener('change', () => {
                changeEventFired = true
            })
            const testItems = [
                { key: 'option1', value: 'Option One' },
                { key: 'option2', value: 'Option Two' }
            ]
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return testItems
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            element.value = 'option1'
            await element.updateComplete

            expect(changeEventFired).to.be.true
        })

        it('should not dispatch change event when value stays the same', async () => {
            const testItems = [
                { key: 'option1', value: 'Option One' },
                { key: 'option2', value: 'Option Two' }
            ]
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return testItems
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection
            const initialValue = 'option1'
            element.value = initialValue
            await element.updateComplete

            let changeEventCount = 0
            element.addEventListener('change', () => {
                changeEventCount++
            })

            element.value = initialValue
            await element.updateComplete

            expect(changeEventCount).to.equal(0)
        })
    })

    describe('Event Handling', () => {
        it('should emit change event when value changes', async () => {
            const testItems = [
                { key: 'option1', value: 'Option One' },
                { key: 'option2', value: 'Option Two' }
            ]

            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return testItems
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            await element.updateComplete

            let changeEventFired = false
            element.addEventListener('change', () => {
                changeEventFired = true
            })

            const radioButtonList = getRadioButtonList()
            radioButtonList?.dispatchEvent(new CustomEvent('change', {
                detail: { target: { value: 'option2' } },
                bubbles: true
            }))

            expect(changeEventFired).to.be.true
        })

        it('should emit change event when default value is set', () => {
            let changeEventFired = false
            element.addEventListener('change', () => {
                changeEventFired = true
            })

            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return [ { key: '0', value: 'zero' }, { key: '1', value: 'one' } ]
                    if (alias === 'default') return '1'
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            expect(changeEventFired).to.be.true
        })
    })

    describe('Rendering States', () => {
        it('should render with readonly state', async () => {
            element.readonly = true
            await element.updateComplete

            const radioButtonList = getRadioButtonList()
            expect(radioButtonList?.hasAttribute('readonly')).to.be.true
        })

        it('should render with mandatory state', async () => {
            element.mandatory = true
            await element.updateComplete

            const radioButtonList = getRadioButtonList()
            expect(radioButtonList?.required).to.be.true
        })

        it('should pass mandatory message to inner component', async () => {
            const customMessage = 'This field is required'
            element.mandatory = true
            element.mandatoryMessage = customMessage
            await element.updateComplete

            const radioButtonList = getRadioButtonList()
            expect(radioButtonList?.requiredMessage).to.equal(customMessage)
        })

        it('should render with empty value as empty string', async () => {
            element.value = undefined
            await element.updateComplete

            const radioButtonList = getRadioButtonList()
            expect(radioButtonList?.value).to.equal('')
        })
    })

    describe('Form Integration', () => {
        it('should return form element', () => {
            const formElement = element.getFormElement()
            expect(formElement).to.exist
        })

        it('should have correct form control behavior', async () => {
            const testItems = [
                { key: 'option1', value: 'Option One' },
                { key: 'option2', value: 'Option Two' }
            ]

            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return testItems
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            element.value = 'option1'
            await element.updateComplete

            // Test that the element behaves as a form control
            expect(element.value).to.equal('option1')
            expect(typeof element.getFormElement).to.equal('function')
        })
    })

    describe('Edge Cases', () => {
        it('should handle malformed config items gracefully', async () => {
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return [
                        { key: 'valid', value: 'Valid Option' },
                        { key: null, value: 'Null Key' },
                        { value: 'Missing Key' },
                        null,
                        undefined
                    ]
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            await element.updateComplete

            // Should not throw and should handle valid items
            const radioButtonList = getRadioButtonList()
            expect(radioButtonList).to.exist
        })

        it('should handle config without items or default', async () => {
            element.config = {
                getValueByAlias: (_: string) => undefined
            } as UmbPropertyEditorConfigCollection

            await element.updateComplete

            const radioButtonList = getRadioButtonList()
            expect(radioButtonList?.list).to.have.length(0)
            expect(element.value).to.be.undefined
        })
    })

})