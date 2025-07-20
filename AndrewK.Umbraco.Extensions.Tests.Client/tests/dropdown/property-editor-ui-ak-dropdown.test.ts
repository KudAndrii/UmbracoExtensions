import { fixture, html, expect } from '@open-wc/testing'
import {
    AkPropertyEditorUIDropdownElement
} from '../../../AndrewK.Umbraco.Extensions.Dropdown/client/src/property-editor-ui-ak-dropdown.element'
import type {
    UmbPropertyEditorConfigCollection,
    CustomPropertyEditorElement
} from '../shared/import-utils'

describe('UmbPropertyEditorUIAkDropdownElement', () => {
    let element: CustomPropertyEditorElement<AkPropertyEditorUIDropdownElement, Array<string>>
    const getSlSelect = () =>
        element?.shadowRoot?.querySelector('sl-select') as HTMLElement & { value: Array<string> | string }

    beforeEach(async () => {
        element = await fixture(html`<ak-property-editor-ui-dropdown></ak-property-editor-ui-dropdown>`)
    })

    describe('Basic Rendering', () => {
        it('should render without errors', () => {
            expect(element).to.exist
            expect(element.shadowRoot).to.exist
        })

        it('can be created with its own instance', () => {
            expect(element).to.exist
            expect(element).to.be.instanceOf(AkPropertyEditorUIDropdownElement)
        })

        it('should be defined in custom elements registry', () => {
            expect(customElements.get('ak-property-editor-ui-dropdown')).to.equal(AkPropertyEditorUIDropdownElement)
        })
    })

    describe('Properties and Attributes', () => {
        it('should have correct default values', () => {
            expect(element.value).to.deep.equal([])
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
    })

    describe('Configuration', () => {
        it('should handle null configuration', async () => {
            element.config = null as UmbPropertyEditorConfigCollection
            await element.updateComplete

            const select = element.shadowRoot?.querySelector('sl-select')
            expect(select).to.exist
        })

        it('should handle options configuration', async () => {
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return [
                        { key: '1', value: 'Option 1' },
                        { key: '2', value: 'Option 2' },
                        { key: '3', value: 'Option 3' }
                    ]
                    if (alias === 'default') return '1'
                    if (alias === 'multiple') return false
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            await element.updateComplete

            const options = element.shadowRoot?.querySelectorAll('sl-option')
            expect(options?.length).to.be.greaterThan(0)
        })

        it('should handle multiple selection configuration', async () => {
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return [
                        { key: '1', value: 'Option 1' },
                        { key: '2', value: 'Option 2' },
                        { key: '3', value: 'Option 3' }
                    ]
                    if (alias === 'default') return '1, 2'
                    if (alias === 'multiple') return true
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            await element.updateComplete

            const select = element.shadowRoot?.querySelector('sl-select')
            expect(select).to.have.attribute('multiple')
        })
    })

    describe('Value Handling', () => {
        it('should handle default value', async () => {
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return [ { key: '0', value: 'zero' }, { key: '1', value: 'one' } ]
                    if (alias === 'default') return '1'
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection
            element.firstUpdated()

            expect(element.value).to.deep.equal(['1'])
        })

        it('should handle multiple default values', async () => {
            document.documentElement.lang = 'en'
            Object.defineProperty(window.navigator, 'language', {
                value: 'en-US',
                configurable: true,
            })
            console.warn('setupTests.ts loaded')
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return [ { key: '0', value: 'zero' }, { key: '1', value: 'one' } ]
                    if (alias === 'default') return '0, 1'
                    if (alias === 'multiple') return true
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection
            element.firstUpdated()

            expect(element.value).to.deep.equal(['0', '1'])
        })

        it('should handle falsy or non string values as empty array', () => {
            element.value = null
            expect(element.value).to.deep.equal([])

            element.value = undefined
            expect(element.value).to.deep.equal([])

            // @ts-ignore
            element.value = 0
            expect(element.value).to.deep.equal([])

            // @ts-ignore
            element.value = []
            expect(element.value).to.deep.equal([])
            // @ts-ignore
            element.value = true
            expect(element.value).to.deep.equal([])
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

            expect(element.value).to.deep.equal([initialValue])
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

            const expectedValue = ['option2']
            element.value = expectedValue
            await element.updateComplete

            expect(element.value).to.deep.equal(expectedValue)
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
            const initialValue = ['option1']
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

            const slSelect = getSlSelect()
            slSelect?.dispatchEvent(new CustomEvent('sl-change', {
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
            element.firstUpdated()

            expect(changeEventFired).to.be.true
        })
    })

    describe('Rendering States', () => {
        it('should render with readonly state', async () => {
            element.readonly = true
            await element.updateComplete

            const slSelect = getSlSelect()
            expect(slSelect?.hasAttribute('disabled')).to.be.true
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

            const expectedValue = ['option1']
            element.value = expectedValue
            await element.updateComplete

            // Test that the element behaves as a form control
            expect(element.value).to.deep.equal(expectedValue)
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
            const slSelect = getSlSelect()
            expect(slSelect).to.exist
        })
    })
})