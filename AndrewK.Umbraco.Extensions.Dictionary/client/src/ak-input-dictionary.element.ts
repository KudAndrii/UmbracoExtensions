import type { UmbInputEvent, UmbDeleteEvent } from '@umbraco-cms/backoffice/event'
import { css, html, nothing, repeat, customElement, property, state } from '@umbraco-cms/backoffice/external/lit'
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event'
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element'
import { UmbSorterController } from '@umbraco-cms/backoffice/sorter'
import { UUIFormControlMixin } from "@umbraco-cms/backoffice/external/uui"

import AkInputDictionaryItemElement from './ak-input-dictionary-item.element'

@customElement('ak-input-dictionary')
export class AkInputDictionaryElement extends UUIFormControlMixin(UmbLitElement, undefined) {
    @state() private _items: Array<string> = []

    #disabled = false
    #readonly = false
    
    #sorter = new UmbSorterController(this, {
        getUniqueOfElement: (element) => element.getAttribute('data-sort-entry-id'),
        getUniqueOfModel: (modelEntry: string) => modelEntry,
        identifier: 'AndrewK.SorterIdentifier.Dictionary',
        itemSelector: 'ak-input-dictionary-item',
        containerSelector: '#sorter-wrapper',
        onChange: ({ model }) => {
            const oldValue = this._items
            this._items = model
            this.requestUpdate('_items', oldValue)
            this.dispatchEvent(new UmbChangeEvent())
        },
    })

    constructor() {
        super()

        // TODO: we need a way to overwrite the missing value validator. Se we can validate on other properties than value
        /*
        this.removeValidator('valueMissing')

        this.addValidator(
            'valueMissing',
            () => this.requiredMessage,
            () => this.items.length > 0
        )
        */

        this.addValidator(
            'rangeUnderflow',
            () => this.minMessage,
            () => !!this.min && this._items.length < this.min,
        )
        this.addValidator(
            'rangeOverflow',
            () => this.maxMessage,
            () => !!this.max && this._items.length > this.max,
        )
    }

    @property({ type: Number }) min?: number
    @property({ type: String, attribute: 'min-message' }) minMessage = 'This field need more items'
    @property({ type: Number }) max?: number

    @property({ type: String, attribute: 'min-message' })
    maxMessage = 'This field exceeds the allowed amount of items'

    @property({ type: Boolean, reflect: true })
    public set disabled(value) {
        this.#disabled = value
        if (value) {
            this.#sorter.disable()
        }
    }

    public get disabled() {
        return this.#disabled
    }

    @property({ type: Boolean, reflect: true })
    public set readonly(value) {
        this.#readonly = value
        if (value) {
            this.#sorter.disable()
        }
    }

    public get readonly() {
        return this.#readonly
    }

    @property({ type: Array })
    public get items(): Array<string> {
        return this._items
    }

    public set items(items: Array<string>) {
        // TODO: when we have a way to overwrite the missing value validator we can remove this
        this.value = items?.length > 0 ? 'some value' : ''
        this._items = items ?? []
        this.#sorter.setModel(this.items)
    }

    // TODO: Some inputs might not have a value that is either FormDataEntryValue or FormData.
    //  How do we handle this?
    /*
    @property()
    public set value(value: FormDataEntryValue | FormData) {
        throw new Error(`${this} does not support to set the value directly. Use items instead.`)
    }
    public get value() {
        throw new Error(`${this} does not support to get the value directly. Use items instead.`)
    }
    */

    override render() {
        return html`
          <div id="sorter-wrapper">
            ${ this.#renderItems() }
          </div>
          ${ this.#renderAddButton() }
        `
    }

    async #onAdd() {
        this._items = [ ...this._items, '' ]
        this.pristine = false
        this.dispatchEvent(new UmbChangeEvent())
        await this.#focusNewItem()
    }

    #onInput(event: UmbInputEvent, currentIndex: number) {
        event.stopPropagation()
        const target = event.currentTarget as AkInputDictionaryItemElement
        const value = target.value as string
        this._items = this._items.map((item, index) => (index === currentIndex ? value : item))
        this.dispatchEvent(new UmbChangeEvent())
    }

    async #focusNewItem() {
        await this.updateComplete
        const items = this.shadowRoot?.querySelectorAll(
            'ak-input-dictionary-item',
        ) as NodeListOf<AkInputDictionaryItemElement>
        const newItem = items[items.length - 1]
        await newItem.focus()
    }

    #deleteItem(event: UmbDeleteEvent, itemIndex: number) {
        event.stopPropagation()
        this._items = this._items.filter((_item, index) => index !== itemIndex)
        this.pristine = false
        this.dispatchEvent(new UmbChangeEvent())
    }

    #renderItems() {
        return html`
          ${ repeat(
            this._items,
            (_item, index) => index,
            (item, index) => html`
              <ak-input-dictionary-item
                name="item-${ index }"
                data-sort-entry-id=${ item }
                required
                required-message="Item ${ index + 1 } is missing a value"
                value=${ item }
                ?disabled=${ this.disabled }
                ?readonly=${ this.readonly }
                @enter=${ this.#onAdd }
                @delete=${ (event: UmbDeleteEvent) => this.#deleteItem(event, index) }
                @input=${ (event: UmbInputEvent) => this.#onInput(event, index) }
              ></ak-input-dictionary-item>
            `,
          ) }
        `
    }

    #renderAddButton() {
        if (this.disabled || this.readonly) return nothing
        return html`
          <uui-button
            color="default"
            id="action"
            label="Add"
            look="placeholder"
            ?disabled=${ this.disabled }
            @click=${ this.#onAdd }
          ></uui-button>
        `
    }

    static override styles = [
        css`
            #action {
                display: block;
            }

            .--umb-sorter-placeholder {
                position: relative;
                visibility: hidden;
            }

            .--umb-sorter-placeholder::after {
                content: '';
                position: absolute;
                inset: 0;
                border-radius: var(--uui-border-radius);
                border: 1px dashed var(--uui-color-divider-emphasis);
            }
        `,
    ]

    override getFormElement = () => undefined
}

export default AkInputDictionaryElement

declare global {
    interface HTMLElementTagNameMap {
        'ak-input-dictionary': AkInputDictionaryElement
    }
}
