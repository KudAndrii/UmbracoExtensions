import { fixture, html, expect } from '@open-wc/testing'
import { AkPropertyEditorUICheckBoxListElement } from '../../../AndrewK.Umbraco.Extensions.CheckBoxList/client/src/property-editor-ui-ak-check-box-list.element.ts'
import type {
    UmbPropertyEditorConfigCollection,
    CustomPropertyEditorElement
} from '../shared/import-utils'
import { UUIBooleanInputElement } from '@umbraco-ui/uui-boolean-input'

describe('UmbPropertyEditorUIAkDropdownElement', () => {
    let element: CustomPropertyEditorElement<AkPropertyEditorUICheckBoxListElement, Array<string>>
    const getFirstCheckboxElement = () =>
        element?.shadowRoot?.querySelector('uui-checkbox') as HTMLElement

    beforeEach(async () => {
        element = await fixture(html`<ak-property-editor-ui-check-box-list></ak-property-editor-ui-check-box-list>`)
    })

    describe('Basic Rendering', () => {
        it('should render without errors', () => {
            expect(element).to.exist
            expect(element.shadowRoot).to.exist
        })

        it('can be created with its own instance', () => {
            expect(element).to.exist
            expect(element).to.be.instanceOf(AkPropertyEditorUICheckBoxListElement)
        })

        it('should be defined in custom elements registry', () => {
            expect(customElements.get('ak-property-editor-ui-check-box-list')).to.equal(AkPropertyEditorUICheckBoxListElement)
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
        it('should handle null configuration', () => {
            expect(async () => {
                element.config = null as UmbPropertyEditorConfigCollection
                await element.updateComplete
            }).to.not.throw()
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
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            element.firstUpdated()

            expect(element.value).to.deep.equal(['1'])
        })

        it('should handle multiple default values in configuration', async () => {
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return [
                        { key: '1', value: 'Option 1' },
                        { key: '2', value: 'Option 2' },
                        { key: '3', value: 'Option 3' }
                    ]
                    if (alias === 'default') return '1, 2'
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            element.firstUpdated()

            expect(element.value).to.deep.equal(['1', '2'])
        })
    })

    describe('Value Handling', () => {
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
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'items') return [ { key: '0', value: 'zero' } ]
                    if (alias === 'default') return '0'
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection
            element.readonly = true
            await element.updateComplete

            const firstCheckboxElement = getFirstCheckboxElement()
            expect((firstCheckboxElement as UUIBooleanInputElement).readonly).to.be.true
        })
    })

    describe('Edge Cases', () => {
        it('should handle malformed config items gracefully', () => {
            expect(async ()  => {
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
            }).to.not.throw()
        })
    })
})