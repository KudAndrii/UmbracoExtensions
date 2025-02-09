import {css, html, nothing, repeat, customElement, property, state, when} from '@umbraco-cms/backoffice/external/lit';
import {UmbChangeEvent} from '@umbraco-cms/backoffice/event';
import {UmbLitElement} from '@umbraco-cms/backoffice/lit-element';
import type {UmbInputEvent, UmbDeleteEvent} from '@umbraco-cms/backoffice/event';
import {UmbFormControlMixin} from '@umbraco-cms/backoffice/validation';
import type {UmbInputMultipleTextStringItemElement} from "@umbraco-cms/backoffice/components";

/**
 * @element input-multiple-key-value-pair
 */
@customElement('input-multiple-key-value-pair')
export class InputMultipleKeyValuePairElement extends UmbFormControlMixin<undefined | string, typeof UmbLitElement>(
    UmbLitElement,
    undefined,
) {
    @property({type: Number}) min?: number;
    @property({type: String, attribute: 'min-message'}) minMessage = 'This field needs more items';
    @property({type: Number}) max?: number;
    @property({type: String, attribute: 'max-message'}) maxMessage = 'This field exceeds the allowed amount of items';

    @property({type: Boolean, reflect: true}) public disabled = false;
    @property({type: Boolean, reflect: true}) public readonly = false;

    constructor() {
        super();

        this.addValidator(
            'rangeUnderflow',
            () => this.minMessage,
            () => !!this.min && Object.keys(this._items).length < this.min,
        );
        this.addValidator(
            'rangeOverflow',
            () => this.maxMessage,
            () => !!this.max && Object.keys(this._items).length > this.max,
        );
    }

    @state()
    private _items: Record<string, string> = {};

    @property({type: Object})
    public get items(): Record<string, string> {
        return this._items;
    }

    public set items(items: Record<string, string>) {
        this.value = Object.keys(items).length > 0 ? 'some value' : '';
        this._items = items ?? {};
    }

    // Prevent valid events from bubbling outside the message element
    #onValid(event: Event) {
        event.stopPropagation();
    }

    // Prevent invalid events from bubbling outside the message element
    #onInvalid(event: Event) {
        event.stopPropagation();
    }

    /**
     * Handles input event for the key.
     * Adds the new key only if it's unique.
     */
    #onKeyInput(event: UmbInputEvent, oldKey: string) {
        event.stopPropagation();
        const target = event.currentTarget as UmbInputMultipleTextStringItemElement;
        const newKey = String(target.value).trim();

        if (!newKey || newKey === oldKey) return; // Ignore empty or unchanged key

        const updatedItems = {...this._items};

        if (!this._items[newKey]) {
            // Rename the key
            updatedItems[newKey] = updatedItems[oldKey];
            delete updatedItems[oldKey];
            this._items = updatedItems;
            this.dispatchEvent(new UmbChangeEvent());
        } else {
            // Prevent duplicate keys (Optionally show a warning)
            console.warn(`Key "${newKey}" already exists.`);
        }
    }

    /**
     * Handles input event for the value.
     * Updates the corresponding key-value pair.
     */
    #onValueInput(event: UmbInputEvent, key: string) {
        event.stopPropagation();
        const target = event.currentTarget as UmbInputMultipleTextStringItemElement;
        const value = target.value as string;

        this._items = {...this._items, [key]: value};
        this.dispatchEvent(new UmbChangeEvent());
    }

    /**
     * Adds a new empty entry when a user types a new key.
     */
    #onKeyFocusOut(event: UmbInputEvent) {
        const target = event.currentTarget as UmbInputMultipleTextStringItemElement;
        const key = String(target.value).trim();

        if (key && !this._items[key]) {
            this._items = {...this._items, [key]: ''};
            this.dispatchEvent(new UmbChangeEvent());
        }
    }

    #onAdd() {
        // Add a temporary empty key-value pair
        this._items = {...this._items, "": ""};

        // Trigger change event
        this.dispatchEvent(new UmbChangeEvent());

        // Ensure UI updates
        this.requestUpdate();
    }

    #deleteItem(event: UmbDeleteEvent, key: string) {
        event.stopPropagation();
        const updatedItems = {...this._items};
        delete updatedItems[key];
        this._items = updatedItems;
        this.pristine = false;
        this.dispatchEvent(new UmbChangeEvent());
    }

    override render() {
        return html`
          <div id="sorter-wrapper" class="dictionary">${this.#renderItems()}</div>
          ${this.#renderAddButton()}`;
    }

    #renderItems() {
        return html`
          ${repeat(
            Object.entries(this._items),
            ([key]) => key,
            ([itemKey, itemValue]) => html`
              <div class="key-value-pair">
                ${this.disabled || this.readonly ? nothing : html`
                  <uui-icon name="icon-navigation" class="handle"></uui-icon>`}

                <umb-form-validation-message
                  id="validation-message"
                  @invalid=${this.#onInvalid}
                  @valid=${this.#onValid}
                >
                  <uui-input
                    name="key-${itemKey}"
                    data-sort-entry-id=${itemKey}
                    label="key-${itemKey}"
                    value=${itemKey}
                    @input=${(event: UmbInputEvent) => this.#onKeyInput(event, itemKey)}
                    @focusout=${this.#onKeyFocusOut}
                    ?disabled=${this.disabled}
                    ?readonly=${this.readonly}
                    required
                    required-message="Key is required"
                  ></uui-input>
                  :
                  <uui-input
                    name="value-${itemKey}"
                    data-sort-entry-id="${itemKey}-value"
                    label="value-${itemKey}"
                    value=${itemValue}
                    @input=${(event: UmbInputEvent) => this.#onValueInput(event, itemKey)}>
                      ?disabled=${this.disabled}
                      ?readonly=${this.readonly}
                    >
                  </uui-input>
                </umb-form-validation-message>

                ${when(
                  !this.readonly,
                  () => html`
                    <uui-button
                      compact
                      color="danger"
                      label="${this.localize.term('general_remove')} ${this.value}"
                      look="outline"
                      ?disabled=${this.disabled || this.readonly}
                      @click=${(event: UmbDeleteEvent) => this.#deleteItem(event, itemKey)}
                    >
                      <uui-icon name="icon-trash"></uui-icon>
                    </uui-button>
                  `,
                )}
              </div>
            `,
          )}
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
            ?disabled=${this.disabled}
            @click=${this.#onAdd}></uui-button>
        `;
    }

    static override styles = [
        css`
            :host {
                display: flex;
                flex-direction: column;
                row-gap: 4px;
                align-items: start;
            }

            .dictionary {
                display: flex;
                flex-direction: column;
                row-gap: 4px;
            }

            .key-value-pair {
                display: flex;
                column-gap: 4px;
                align-items: center;
            }
        `,
    ];
}

export default InputMultipleKeyValuePairElement;

declare global {
    interface HTMLElementTagNameMap {
        'input-multiple-key-value-pair': InputMultipleKeyValuePairElement;
    }
}