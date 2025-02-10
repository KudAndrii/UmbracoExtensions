import { css, html, nothing, repeat, customElement, property, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { UmbSorterController } from '@umbraco-cms/backoffice/sorter';
import type { UmbInputEvent, UmbDeleteEvent } from '@umbraco-cms/backoffice/event';
import { UmbFormControlMixin } from '@umbraco-cms/backoffice/validation';

import type { KeyValuePair } from "../types";
import type { UmbInputMultipleKeyValuePairItemElement } from './input-multiple-key-value-pair-item.element.ts';

/**
 * @element input-multiple-key-value-pair
 */
@customElement('input-multiple-key-value-pair')
export class UmbInputMultipleKeyValuePairElement extends UmbFormControlMixin<KeyValuePair[], typeof UmbLitElement>(
    UmbLitElement,
    undefined,
) {
    #sorter = new UmbSorterController(this, {
        getUniqueOfElement: (element) => {
            return element.getAttribute('data-sort-entry-id');
        },
        getUniqueOfModel: (modelEntry: KeyValuePair) => {
            return modelEntry.key;
        },
        itemSelector: 'input-multiple-key-value-pair-item',
        containerSelector: '#sorter-wrapper',
        onChange: ({ model }) => {
            const oldValue = this._items;
            this._items = model;
            this.requestUpdate('_items', oldValue);
            this.dispatchEvent(new UmbChangeEvent());
        },
    });

    /**
     * This is a minimum amount of selected items in this input.
     * @type {number}
     * @attr
     * @default undefined
     */
    @property({ type: Number })
    min?: number;

    /**
     * Min validation message.
     * @type {boolean}
     * @attr
     * @default
     */
    @property({ type: String, attribute: 'min-message' })
    minMessage = 'This field need more items';

    /**
     * This is a maximum amount of selected items in this input.
     * @type {number}
     * @attr
     * @default undefined
     */
    @property({ type: Number })
    max?: number;

    /**
     * Max validation message.
     * @type {boolean}
     * @attr
     * @default
     */
    @property({ type: String, attribute: 'min-message' })
    maxMessage = 'This field exceeds the allowed amount of items';

    /**
     * Disables the input
     * @type {boolean}
     * @attr
     * @default
     */
    @property({ type: Boolean, reflect: true })
    public set disabled(value) {
        this.#disabled = value;
        if (value) {
            this.#sorter.disable();
        }
    }

    public get disabled() {
        return this.#disabled;
    }

    #disabled = false;

    /**
     * Makes the input readonly
     * @type {boolean}
     * @attr
     * @default
     */
    @property({ type: Boolean, reflect: true })
    public set readonly(value) {
        this.#readonly = value;
        if (value) {
            this.#sorter.disable();
        }
    }

    public get readonly() {
        return this.#readonly;
    }

    #readonly = false;

    constructor() {
        super();
        console.debug('log from input-multiple-key-value-pair.element');

        // TODO: we need a way to overwrite the missing value validator. Se we can validate on other properties than value
        /*
        this.removeValidator('valueMissing');

        this.addValidator(
            'valueMissing',
            () => this.requiredMessage,
            () => this.items.length > 0
        );
        */

        this.addValidator(
            'rangeUnderflow',
            () => this.minMessage,
            () => !!this.min && this._items.length < this.min,
        );
        this.addValidator(
            'rangeOverflow',
            () => this.maxMessage,
            () => !!this.max && this._items.length > this.max,
        );
    }

    @state()
    private _items: Array<KeyValuePair> = [];

    @property({ type: Array })
    public get items(): Array<KeyValuePair> {
        return this._items;
    }

    public set items(items: Array<KeyValuePair>) {
        // TODO: when we have a way to overwrite the missing value validator we can remove this
        this._items = items ?? [];
        this.value = this._items;
        this.#sorter.setModel(this.items);
    }

    // TODO: Some inputs might not have a value that is either FormDataEntryValue or FormData.
    //  How do we handle this?
    /*
    @property()
    public set value(value: FormDataEntryValue | FormData) {
        throw new Error(`${this} does not support to set the value directly. Use items instead.`);
    }
    public get value() {
        throw new Error(`${this} does not support to get the value directly. Use items instead.`);
    }
    */

    #onAdd() {
        this._items = [ ...this._items, { key: '', value: '' } ];
        this.pristine = false;
        this.dispatchEvent(new UmbChangeEvent());
        this.#focusNewItem();
    }

    #onInput(event: UmbInputEvent, currentIndex: number) {
        event.stopPropagation();
        const target = event.currentTarget as UmbInputMultipleKeyValuePairItemElement;
        const value = target.value as string;
        this._items = this._items.map((item, index) => {
            if (index === currentIndex) {
                item.key = value;
            }

            return item;
        });
        this.dispatchEvent(new UmbChangeEvent());
    }

    async #focusNewItem() {
        await this.updateComplete;
        const items = this.shadowRoot?.querySelectorAll(
            'input-multiple-key-value-pair-item',
        ) as NodeListOf<UmbInputMultipleKeyValuePairItemElement>;
        const newItem = items[items.length - 1];
        newItem.focus();
    }

    #deleteItem(event: UmbDeleteEvent, itemIndex: number) {
        event.stopPropagation();
        this._items = this._items.filter((_, index) => index !== itemIndex);
        this.pristine = false;
        this.dispatchEvent(new UmbChangeEvent());
    }

    override getFormElement() {
        return undefined;
    }

    override render() {
        return html`
          <div id="sorter-wrapper">${ this.#renderItems() }</div>
          ${ this.#renderAddButton() }`;
    }

    #renderItems() {
        return html`
          ${ repeat(
            this._items,
            (_, index) => index,
            (item, index) => html`
              <input-multiple-key-value-pair-item
                name="item-${ index }"
                data-sort-entry-id=${ item }
                required
                required-message="Item ${ index + 1 } is missing a key"
                value=${ item.key }
                ?disabled=${ this.disabled }
                ?readonly=${ this.readonly }
                @enter=${ this.#onAdd }
                @delete=${ (event: UmbDeleteEvent) => this.#deleteItem(event, index) }
                @input=${ (event: UmbInputEvent) => this.#onInput(event, index) }>
              </input-multiple-key-value-pair-item>
            `,
          ) }
        `;
    }

    #renderAddButton() {
        if (this.disabled || this.readonly) return nothing;
        return html`
          <uui-button
            color="default"
            id="action"
            label="Add"
            look="placeholder"
            ?disabled=${ this.disabled }
            @click=${ this.#onAdd }></uui-button>
        `;
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
    ];
}

export default UmbInputMultipleKeyValuePairElement;

declare global {
    interface HTMLElementTagNameMap {
        'input-multiple-key-value-pair': UmbInputMultipleKeyValuePairElement;
    }
}
