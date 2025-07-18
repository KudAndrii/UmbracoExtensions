import type { UmbPropertyEditorConfigCollection } from '@umbraco-cms/backoffice/property-editor'
import { expect, fixture, html } from '@open-wc/testing'
import { AkPropertyEditorUIDictionaryElement } from './property-editor-ui-ak-dictionary.element.ts'

describe('AkPropertyEditorUIDictionaryElement', () => {
    let element: AkPropertyEditorUIDictionaryElement

    beforeEach(async () => {
        element = await fixture(html`
          <ak-property-editor-ui-dictionary></ak-property-editor-ui-dictionary>
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
            expect(element).to.be.instanceOf(AkPropertyEditorUIDictionaryElement)
        })

        it('should render add button by default', () => {
            const addButton = element.shadowRoot?.querySelector('#action')
            expect(addButton).to.exist
        })
    })

    describe('Properties and Attributes', () => {
        it('should have correct default values', () => {
            expect(element.value).to.deep.equal([])
            expect(element.disabled).to.be.false
            expect(element.readonly).to.be.false
            expect(element.mandatory).to.be.false
        })

        it('should reflect disabled, readonly and mandatory properties', async () => {
            element.readonly = true
            element.disabled = true
            element.mandatory = true
            await element.updateComplete

            expect(element.disabled).to.be.true
            expect(element.readonly).to.be.true
            expect(element.mandatory).to.be.true
            expect(element.hasAttribute('disabled')).to.be.true
            expect(element.hasAttribute('readonly')).to.be.true
            expect(element.hasAttribute('mandatory')).to.be.true
        })

        it('should hide add button when disabled', async () => {
            element.disabled = true
            await element.updateComplete

            const addButton = element.shadowRoot?.querySelector('#action')
            expect(addButton).to.not.exist
        })

        it('should hide add button when readonly', async () => {
            element.readonly = true
            await element.updateComplete

            const addButton = element.shadowRoot?.querySelector('#action')
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
        it('should handle string value', () => {
            element.value = 'test-key'
            expect(element.value).to.deep.equal([ { key: 'test-key', value: 'test-key' } ])
        })

        it('should handle array value', () => {
            const testValue = [ { key: 'key1', value: 'value1' } ]
            element.value = testValue
            expect(element.value).to.deep.equal(testValue)
        })

        it('should handle empty array', () => {
            element.value = []
            expect(element.value).to.deep.equal([])
        })

        it('should handle null/undefined value', () => {
            element.value = null
            expect(element.value).to.deep.equal([])

            element.value = undefined
            expect(element.value).to.deep.equal([])
        })

        it('should handle mixed array types', () => {
            element.value = [
                'string-item',
                { key: 'object-key', value: 'object-value' },
                { key: 'partial-key' },
                null,
                123
            ]

            expect(element.value).to.deep.equal([
                { key: 'string-item', value: 'string-item' },
                { key: 'object-key', value: 'object-value' },
                { key: 'partial-key', value: '' }
            ])
        })

        it('should dispatch change event when value changes', async () => {
            let changeEventFired = false
            element.addEventListener('change', () => {
                changeEventFired = true
            })

            element.value = [ { key: 'test', value: 'value' } ]
            await element.updateComplete

            expect(changeEventFired).to.be.true
        })

        it('should not dispatch change event when value stays the same', async () => {
            const initialValue = [ { key: 'test', value: 'value' } ]
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

    describe('Item Rendering', () => {
        it('should render items correctly', async () => {
            element.value = [
                { key: 'key1', value: 'value1' },
                { key: 'key2', value: 'value2' }
            ]
            await element.updateComplete

            const items = element.shadowRoot?.querySelectorAll('ak-input-dictionary-item')
            expect(items).to.have.lengthOf(2)
        })

        it('should render no items for empty value', async () => {
            element.value = []
            await element.updateComplete

            const items = element.shadowRoot?.querySelectorAll('ak-input-dictionary-item')
            expect(items).to.have.lengthOf(0)
        })

        it('should pass correct props to items', async () => {
            element.disabled = true
            element.readonly = true
            element.value = [ { key: 'test', value: 'value' } ]
            await element.updateComplete

            const item = element.shadowRoot?.querySelector('ak-input-dictionary-item')
            expect(item?.hasAttribute('disabled')).to.be.true
            expect(item?.hasAttribute('readonly')).to.be.true
            expect(item?.hasAttribute('required')).to.be.true
        })
    })

    describe('Add Functionality', () => {
        it('should add new item, dispatch change event and mark element as not pristine when add button clicked', async () => {
            let changeEventFired = false
            element.addEventListener('change', () => {
                changeEventFired = true
            })
            const addButton = element.shadowRoot?.querySelector('#action') as HTMLElement

            addButton.click()
            await element.updateComplete

            expect(element.value).to.have.lengthOf(1)
            expect(element.value[0]).to.deep.equal({ key: '', value: '' })
            expect(changeEventFired).to.be.true
            expect(element.pristine).to.be.false
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
            const items = element.shadowRoot?.querySelectorAll('ak-input-dictionary-item')
            const deleteEvent = new CustomEvent('delete', { bubbles: true })

            items?.[1].dispatchEvent(deleteEvent)
            await element.updateComplete

            expect(element.value).to.have.lengthOf(2)
            expect(element.value[0]).to.deep.equal({ key: 'key1', value: 'value1' })
            expect(element.value[1]).to.deep.equal({ key: 'key3', value: 'value3' })
            expect(changeEventFired).to.be.true
            expect(element.pristine).to.be.false
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
            const items = element.shadowRoot?.querySelectorAll('ak-input-dictionary-item')
            const inputEvent = new CustomEvent('input', {
                bubbles: true,
                detail: { value: { key: 'updated-key', value: 'updated-value' } }
            })

            Object.defineProperty(inputEvent, 'currentTarget', {
                value: { value: { key: 'updated-key', value: 'updated-value' } }
            })

            items?.[1].dispatchEvent(inputEvent)
            await element.updateComplete

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

            const infoBlock = element.shadowRoot?.querySelector('.info-block')
            expect(infoBlock).to.not.exist
        })

        it('should show info block for duplicate keys', async () => {
            element.value = [
                { key: 'duplicate', value: 'value1' },
                { key: 'duplicate', value: 'value2' }
            ]
            await element.updateComplete

            const infoBlock = element.shadowRoot?.querySelector('.info-block')
            expect(infoBlock).to.exist
        })

        it('should not show info block for empty array', async () => {
            element.value = []
            await element.updateComplete

            const infoBlock = element.shadowRoot?.querySelector('.info-block')
            expect(infoBlock).to.not.exist
        })
    })

    describe('Validation', () => {
        it('should validate mandatory field', async () => {
            element.mandatory = true
            element.value = []
            await element.updateComplete

            const isValid = element.checkValidity()
            expect(isValid).to.be.false
        })

        it('should validate missing keys', async () => {
            element.value = [
                { key: '', value: 'value1' },
                { key: 'key2', value: 'value2' }
            ]
            await element.updateComplete

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
            element.value = [ { key: 'key1', value: 'value1' } ]
            await element.updateComplete

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

            const isValid = element.checkValidity()
            expect(isValid).to.be.true
        })
    })

    describe('Keyboard Interactions', () => {
        it('should add new item on enter key', async () => {
            element.value = [ { key: 'key1', value: 'value1' } ]
            await element.updateComplete

            const items = element.shadowRoot?.querySelectorAll('ak-input-dictionary-item')
            const enterEvent = new CustomEvent('enter', { bubbles: true })

            items?.[0].dispatchEvent(enterEvent)
            await element.updateComplete

            expect(element.value).to.have.lengthOf(2)
        })
    })

    describe('Error Handling', () => {
        it('should handle corrupt data gracefully', () => {
            expect(() => {
                element.value = { corrupted: 'data' }
            }).to.not.throw()
        })

        it('should handle circular references', () => {
            const circular: any = { key: 'test' }
            circular.self = circular

            expect(() => {
                element.value = [ circular ]
            }).to.not.throw()
        })
    })

    describe('Edge Cases', () => {
        it('should handle empty string keys', async () => {
            element.value = [ { key: '', value: 'value' } ]
            await element.updateComplete

            expect(element.value).to.deep.equal([ { key: '', value: 'value' } ])
        })

        it('should handle special characters in keys', async () => {
            element.value = [ { key: '!@#$%^&*()', value: 'special' } ]
            await element.updateComplete

            expect(element.value).to.deep.equal([ { key: '!@#$%^&*()', value: 'special' } ])
        })

        it('should handle unicode characters', async () => {
            element.value = [ { key: '🔑', value: '🎯' } ]
            await element.updateComplete

            expect(element.value).to.deep.equal([ { key: '🔑', value: '🎯' } ])
        })
    })
})