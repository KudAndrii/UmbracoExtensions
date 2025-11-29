import { expect, fixture, html } from '@open-wc/testing'
import { AkPropertyEditorUIDictionary } from '../../../AndrewK.Umbraco.Extensions.Dictionary/client/src/property-editor-ui-dictionary'
import { AkInputDictionary } from '../../../AndrewK.Umbraco.Extensions.Dictionary/client/src/input-dictionary'
import { AkInputDictionaryItem } from '../../../AndrewK.Umbraco.Extensions.Dictionary/client/src/input-dictionary-item'
import type {
    UmbPropertyEditorConfigCollection,
    KeyValuePair,
    CustomElement,
    CustomPropertyEditorElement
} from '../shared/import-utils'

describe('AkPropertyEditorUIDictionaryElement', () => {
    let element: CustomPropertyEditorElement<AkPropertyEditorUIDictionary, Array<KeyValuePair>>

    const getDictionaryElement = () =>
      element?.shadowRoot?.querySelector('ak-input-dictionary') as AkInputDictionary

    const getAddButton = async () => {
        await element.updateComplete
        const dict = getDictionaryElement()
        await dict?.updateComplete
        return dict?.shadowRoot?.querySelector('#action')
    }

    const getDictionaryItemElements = async () => {
        await element.updateComplete
        const dict = getDictionaryElement()
        await dict?.updateComplete
        return dict?.shadowRoot?.querySelectorAll('ak-input-dictionary-item')
    }

    const getInfoBlock = async () => {
        await element.updateComplete
        const dict = getDictionaryElement()
        await dict?.updateComplete
        return dict?.shadowRoot?.querySelector('.info-block')
    }

    beforeEach(async () => {
        element = await fixture(html`
            <ak-property-editor-ui-dictionary></ak-property-editor-ui-dictionary>
        `)
        await element.updateComplete
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
            expect(element).to.be.instanceOf(AkPropertyEditorUIDictionary)
        })

        it('should render add button by default', async () => {
            const addButton = await getAddButton()
            expect(addButton).to.exist
        })
    })

    describe('Properties and Attributes', () => {
        it('should have correct default values', () => {
            expect(element.value).to.equal(undefined)
            expect(element.disabled).to.be.false
            expect(element.readonly).to.be.false
        })

        it('should reflect disabled, readonly and mandatory properties', async () => {
            element.readonly = true
            element.disabled = true
            element.required = true
            await element.updateComplete

            expect(element.disabled).to.be.true
            expect(element.readonly).to.be.true
            expect(element.required).to.be.true
            expect(element.hasAttribute('disabled')).to.be.true
            expect(element.hasAttribute('readonly')).to.be.true
            expect(element.hasAttribute('required')).to.be.true
        })

        it('should hide add button when disabled', async () => {
            element.disabled = true
            await element.updateComplete

            const addButton = await getAddButton()
            expect(addButton).to.not.exist
        })

        it('should hide add button when readonly', async () => {
            element.readonly = true
            await element.updateComplete

            const addButton = await getAddButton()
            expect(addButton).to.not.exist
        })
    })

    describe('Configuration', () => {
        it('should handle valid/invalid/empty config', async () => {
            expect(async () => {
                element.config = {
                    getValueByAlias: (alias: string) => {
                        if (alias === 'min') return 1
                        if (alias === 'max') return 5
                        return undefined
                    }
                } as UmbPropertyEditorConfigCollection

                element.config = undefined

                element.config = {
                    getValueByAlias: (alias: string) => {
                        if (alias === 'min') return 'invalid'
                        return undefined
                    }
                } as UmbPropertyEditorConfigCollection

                await element.updateComplete

                expect(element).to.exist
            }).to.not.throw()
        })
    })

    describe('Value Handling', () => {
        it('should handle string value', async () => {
            // @ts-ignore
            element.value = 'test-key'
            await element.updateComplete
            const dict = getDictionaryElement()
            await dict.updateComplete

            expect(element.value).to.deep.equal([{ key: 'test-key', value: 'test-key' }])
        })

        it('should handle array value', async () => {
            const testValue = [{ key: 'key1', value: 'value1' }]
            element.value = testValue
            await element.updateComplete

            expect(element.value).to.deep.equal(testValue)
        })

        it('should handle empty array', async () => {
            element.value = []
            await element.updateComplete

            expect(element.value).to.deep.equal([])
        })

        it('should handle mixed array types', async () => {
            // @ts-ignore
            element.value = [
                'string-item',
                { key: 'object-key', value: 'object-value' },
                { key: 'partial-key' },
                null,
                123
            ]
            await element.updateComplete
            const dict = getDictionaryElement()
            await dict.updateComplete

            expect(element.value).to.deep.equal([
                { key: 'string-item', value: 'string-item' },
                { key: 'object-key', value: 'object-value' },
                { key: 'partial-key', value: '' }
            ])
        })

        it('should not dispatch change event when value stays the same', async () => {
            const initialValue = [{ key: 'test', value: 'value' }]
            element.value = initialValue
            await element.updateComplete
            const dict = getDictionaryElement()
            await dict.updateComplete

            let changeEventCount = 0
            element.addEventListener('change', () => {
                changeEventCount++
            })

            element.value = initialValue
            await element.updateComplete
            await dict.updateComplete

            expect(changeEventCount).to.equal(0)
        })
    })

    describe('Item Rendering', () => {
        it('should render items correctly', async () => {
            element.value = [
                { key: 'key1', value: 'value1' },
                { key: 'key2', value: 'value2' }
            ]
            await element.updateComplete

            const items = await getDictionaryItemElements()
            expect(items).to.have.lengthOf(2)
        })

        it('should render no items for empty value', async () => {
            element.value = []
            await element.updateComplete

            const items = await getDictionaryItemElements()
            expect(items).to.have.lengthOf(0)
        })

        it('should pass correct props to items', async () => {
            element.disabled = true
            element.readonly = true
            element.value = [{ key: 'test', value: 'value' }]
            await element.updateComplete

            const items = await getDictionaryItemElements()
            const item = items?.[0] as CustomElement<AkInputDictionaryItem, KeyValuePair> | undefined

            expect(item?.hasAttribute('disabled')).to.be.true
            expect(item?.hasAttribute('readonly')).to.be.true
        })
    })

    describe('Add Functionality', () => {
        it('should add new item, dispatch change event and mark element as not pristine when add button clicked', async () => {
            let changeEventFired = false
            element.addEventListener('change', () => {
                changeEventFired = true
            })

            const addButton = await getAddButton() as HTMLElement
            expect(addButton).to.exist

            addButton.click()
            await element.updateComplete
            const dict = getDictionaryElement()
            await dict.updateComplete

            expect(element.value).to.have.lengthOf(1)
            expect(element.value[0]).to.deep.equal({ key: '', value: '' })
            expect(changeEventFired).to.be.true
            expect(dict.pristine).to.be.false
        })
    })

    describe('Delete Functionality', () => {
        beforeEach(async () => {
            element.value = [
                { key: 'key1', value: 'value1' },
                { key: 'key2', value: 'value2' },
                { key: 'key3', value: 'value3' }
            ]
            await element.updateComplete
        })

        it('should delete item at correct index, dispatch change event and mark element as not pristine', async () => {
            let changeEventFired = false
            element.addEventListener('change', () => {
                changeEventFired = true
            })

            const items = await getDictionaryItemElements() as NodeListOf<CustomElement<AkInputDictionaryItem, KeyValuePair>>
            expect(items).to.have.lengthOf(3)

            const deleteEvent = new CustomEvent('delete', { bubbles: true })
            items[1].dispatchEvent(deleteEvent)

            await element.updateComplete
            const dict = getDictionaryElement()
            await dict.updateComplete

            expect(element.value).to.have.lengthOf(2)
            expect(element.value[0]).to.deep.equal({ key: 'key1', value: 'value1' })
            expect(element.value[1]).to.deep.equal({ key: 'key3', value: 'value3' })
            expect(changeEventFired).to.be.true
            expect(dict.pristine).to.be.false
        })
    })

    describe('Input Functionality', () => {
        beforeEach(async () => {
            element.value = [
                { key: 'key1', value: 'value1' },
                { key: 'key2', value: 'value2' }
            ]
            await element.updateComplete
        })

        it('should update item value and dispatch change event on input event', async () => {
            let changeEventFired = false
            element.addEventListener('change', () => {
                changeEventFired = true
            })

            const items = await getDictionaryItemElements() as NodeListOf<CustomElement<AkInputDictionaryItem, KeyValuePair>>
            expect(items).to.have.lengthOf(2)

            const inputEvent = new CustomEvent('input', {
                bubbles: true,
                detail: { value: { key: 'updated-key', value: 'updated-value' } }
            })

            Object.defineProperty(inputEvent, 'currentTarget', {
                value: { value: { key: 'updated-key', value: 'updated-value' } }
            })

            items[1].dispatchEvent(inputEvent)
            await element.updateComplete
            const dict = getDictionaryElement()
            await dict.updateComplete

            expect(element.value[1]).to.deep.equal({ key: 'updated-key', value: 'updated-value' })
            expect(changeEventFired).to.be.true
        })
    })

    describe('Info Block (Duplicate Detection)', () => {
        it('should not show info block for unique keys', async () => {
            element.value = [
                { key: 'key1', value: 'value1' },
                { key: 'key2', value: 'value2' }
            ]
            await element.updateComplete

            const infoBlock = await getInfoBlock()
            expect(infoBlock).to.not.exist
        })

        it('should show info block for duplicate keys', async () => {
            element.value = [
                { key: 'duplicate', value: 'value1' },
                { key: 'duplicate', value: 'value2' }
            ]
            await element.updateComplete

            const infoBlock = await getInfoBlock()
            expect(infoBlock).to.exist
        })

        it('should not show info block for empty array', async () => {
            element.value = []
            await element.updateComplete

            const infoBlock = await getInfoBlock()
            expect(infoBlock).to.not.exist
        })
    })

    describe('Validation', () => {
        it('should validate missing keys', async () => {
            element.value = [
                { key: '', value: 'value1' },
                { key: 'key2', value: 'value2' }
            ]
            await element.updateComplete
            const dict = getDictionaryElement()
            await dict.updateComplete

            const isValid = element.checkValidity()
            expect(isValid).to.be.false
        })

        it('should validate minimum items', async () => {
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'min') return 2
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            element.value = [{ key: 'key1', value: 'value1' }]
            await element.updateComplete
            const dict = getDictionaryElement()
            await dict.updateComplete

            const isValid = element.checkValidity()
            expect(isValid).to.be.false
        })

        it('should validate maximum items', async () => {
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'max') return 1
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            element.value = [
                { key: 'key1', value: 'value1' },
                { key: 'key2', value: 'value2' }
            ]
            await element.updateComplete
            const dict = getDictionaryElement()
            await dict.updateComplete

            const isValid = element.checkValidity()
            expect(isValid).to.be.false
        })

        it('should pass validation with valid data', async () => {
            element.config = {
                getValueByAlias: (alias: string) => {
                    if (alias === 'min') return 1
                    if (alias === 'max') return 3
                    return undefined
                }
            } as UmbPropertyEditorConfigCollection

            element.value = [
                { key: 'key1', value: 'value1' },
                { key: 'key2', value: 'value2' }
            ]
            await element.updateComplete
            const dict = getDictionaryElement()
            await dict.updateComplete

            const isValid = element.checkValidity()
            expect(isValid).to.be.true
        })
    })

    describe('Keyboard Interactions', () => {
        it('should add new item on enter key', async () => {
            element.value = [{ key: 'key1', value: 'value1' }]
            await element.updateComplete

            const items = await getDictionaryItemElements() as NodeListOf<CustomElement<AkInputDictionaryItem, KeyValuePair>>
            expect(items).to.have.lengthOf(1)

            const enterEvent = new CustomEvent('enter', { bubbles: true })
            items[0].dispatchEvent(enterEvent)

            await element.updateComplete
            const dict = getDictionaryElement()
            await dict.updateComplete

            expect(element.value).to.have.lengthOf(2)
        })
    })

    describe('Error Handling', () => {
        it('should handle corrupt data gracefully', async () => {
            expect(() => {
                // @ts-ignore
                element.value = { corrupted: 'data' }
            }).to.not.throw()

            await element.updateComplete
        })

        it('should handle circular references', async () => {
            const circular: any = { key: 'test' }
            circular.self = circular

            expect(() => {
                element.value = [circular]
            }).to.not.throw()

            await element.updateComplete
        })
    })

    describe('Edge Cases', () => {
        it('should handle empty string keys', async () => {
            element.value = [{ key: '', value: 'value' }]
            await element.updateComplete

            expect(element.value).to.deep.equal([{ key: '', value: 'value' }])
        })

        it('should handle special characters in keys', async () => {
            element.value = [{ key: '!@#$%^&*()', value: 'special' }]
            await element.updateComplete

            expect(element.value).to.deep.equal([{ key: '!@#$%^&*()', value: 'special' }])
        })

        it('should handle unicode characters', async () => {
            element.value = [{ key: '🔑', value: '🎯' }]
            await element.updateComplete

            expect(element.value).to.deep.equal([{ key: '🔑', value: '🎯' }])
        })
    })
})