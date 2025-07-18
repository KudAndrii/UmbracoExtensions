import type {
    UmbPropertyEditorConfigCollection,
    UmbPropertyEditorUiElement,
} from '@umbraco-cms/backoffice/property-editor'
import type { UmbInputEvent, UmbDeleteEvent } from '@umbraco-cms/backoffice/event'
import type { KeyValuePair } from "./types"

import { css, customElement, html, state, property, repeat, nothing } from '@umbraco-cms/backoffice/external/lit'
import { UmbValidationContext } from '@umbraco-cms/backoffice/validation'
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element'
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event'
import { UMB_PROPERTY_CONTEXT } from '@umbraco-cms/backoffice/property'
import {
    UMB_SUBMITTABLE_WORKSPACE_CONTEXT,
    UmbSubmittableWorkspaceContextBase,
} from '@umbraco-cms/backoffice/workspace'
import { UUIFormControlMixin } from "@umbraco-cms/backoffice/external/uui"
import { UmbSorterController } from '@umbraco-cms/backoffice/sorter'
import AkInputDictionaryItemElement from "./ak-input-dictionary-item.element.ts"

@customElement('ak-property-editor-ui-dictionary')
export class AkPropertyEditorUIDictionaryElement
    extends UUIFormControlMixin<Array<KeyValuePair>, typeof UmbLitElement, undefined>(UmbLitElement, undefined)
    implements UmbPropertyEditorUiElement {
    #sorter = new UmbSorterController(this, {
        getUniqueOfElement: (element: HTMLElement) => element.getAttribute('data-sort-entry-id'),
        getUniqueOfModel: (modelEntry: KeyValuePair) => modelEntry.key,
        identifier: 'AndrewK.SorterIdentifier.Dictionary',
        itemSelector: 'ak-input-dictionary-item',
        containerSelector: '#sorter-wrapper',
        onChange: ({ model }: { model: Array<KeyValuePair> }) => {
            this._value = model
            this.dispatchEvent(new UmbChangeEvent())
        },
    })

    @state() private _label?: string
    @state() private _min = 0
    @state() private _max = Infinity
    @state() private _disabled: boolean = false
    @state() private _readonly: boolean = false
    @state() private _value: Array<KeyValuePair> = []

    protected _validationContext = new UmbValidationContext(this)

    constructor() {
        super()


        this.addValidator(
            'valueMissing',
            () => 'Value is required',
            () => !this.readonly && this.mandatory && !this.value?.length,
        )

        this.addValidator(
            'badInput',
            () => 'A key is missing',
            () => !this.readonly && !this.value.map(x => x.key).every(Boolean),
        )

        this.addValidator(
            'rangeUnderflow',
            () => `At least ${ this._min } items are required`,
            () => !!this._min && this._value.length < this._min,
        )
        this.addValidator(
            'rangeOverflow',
            () => `Maximum ${ this._max } items allowed`,
            () => !!this._max && this._value.length > this._max,
        )

        this.consumeContext(UMB_PROPERTY_CONTEXT, (context) => {
            this._label = context?.getLabel()
        })

        this.consumeContext(UMB_SUBMITTABLE_WORKSPACE_CONTEXT, (context) => {
            if (context instanceof UmbSubmittableWorkspaceContextBase) {
                context.addValidationContext(this._validationContext)
            }
        })
    }

    @property({ type: Boolean, reflect: true }) mandatory = false

    @property({ type: Array })
    public get value(): Array<KeyValuePair> {
        return this._value || []
    }

    public set value(value: unknown) {
        let newValues: Array<KeyValuePair> = []

        switch (typeof value) {
            case 'string':
                newValues.push({ key: value, value: value })
                break;

            case 'object':
                if (Array.isArray(value)) {
                    newValues = this.#updateFromArray((value as Array<unknown>))
                }
                break;
        }

        if (JSON.stringify(this._value) !== JSON.stringify(newValues)) {
            this._value = newValues
            this.dispatchEvent(new UmbChangeEvent())
        }

        this.#sorter.setModel(this.value)
    }

    @property({ type: Boolean, reflect: true })
    public set disabled(value) {
        this._disabled = value
        if (value) {
            this.#sorter.disable()
        }
    }

    public get disabled() {
        return this._disabled
    }

    @property({ type: Boolean, reflect: true })
    public set readonly(value) {
        this._readonly = value
        if (value) {
            this.#sorter.disable()
        }
    }

    public get readonly() {
        return this._readonly
    }

    public set config(config: UmbPropertyEditorConfigCollection | undefined) {
        if (!config) return

        this._min = Number(config.getValueByAlias('min')) || 0
        this._max = Number(config.getValueByAlias('max')) || Infinity
    }

    async #onAdd() {
        this._value = [ ...this._value, { key: '', value: '' } ]
        this.pristine = false
        this.dispatchEvent(new UmbChangeEvent())
        await this.#focusNewItem()
    }

    #onInput(event: UmbInputEvent, currentIndex: number) {
        event.stopPropagation()

        const target = event.currentTarget as AkInputDictionaryItemElement
        const value = target.value
        this._value = this._value
            .map((item, index) => (index === currentIndex ? value : item))
        this.pristine = false
        this.dispatchEvent(new UmbChangeEvent())
    }

    #deleteItem(event: UmbDeleteEvent, itemIndex: number) {
        event.stopPropagation()

        this._value = this._value.filter((_item, index) => index !== itemIndex)
        this.pristine = false
        this.dispatchEvent(new UmbChangeEvent())
    }

    async #focusNewItem() {
        await this.updateComplete
        const items = this.shadowRoot?.querySelectorAll(
            'ak-input-dictionary-item',
        ) as NodeListOf<AkInputDictionaryItemElement>

        if (!items?.length) {
            return
        }

        const newItem = items[items.length - 1]
        await newItem.focus()
    }

    override render() {
        return html`
          <umb-form-validation-message
            id="validation-message"
            @invalid=${ (event: Event) => event.stopPropagation() }
            @valid=${ (event: Event) => event.stopPropagation() }
          >
            <div id="sorter-wrapper">
              ${ this.#renderItems() }
            </div>
            ${ this.#renderInfoBlock() }
            ${ this.#renderAddButton() }
          </umb-form-validation-message>
        `
    }

    #renderItems() {
        return html`
          ${ repeat(
            this._value,
            (_, index) => index,
            (kvp, index) => html`
              <ak-input-dictionary-item
                name="item-${ index }"
                data-sort-entry-id=${ kvp.key }
                required
                required-message="Item ${ index + 1 } is missing a value"
                .value=${ kvp }
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

    #renderInfoBlock() {
        const keys = this._value.map(x => x.key)
        const uniqueKeys = new Set(keys)

        if (!keys.length ||
            keys.length === uniqueKeys.size) {
            return nothing
        }

        return html`
          <uui-box class="info-block">
            <div slot="headline" class="info-block-headline">
              <uui-icon name="icon-info"></uui-icon>
              <p>Duplicated keys detected.</p>
            </div>
          </uui-box>
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

            .info-block {
                background-color: var(--uui-color-disabled-standalone);
                margin-bottom: var(--uui-size-space-3);
            }

            .info-block-headline {
                display: flex;
                align-items: center;
                gap: var(--uui-size-space-3);
            }
        `,
    ]

    protected override firstUpdated() {
        if (this._min && this._max && this._min > this._max) {
            console.warn(
                `Property '${ this._label }' (Dictionary) has been misconfigured, 'min' is greater than 'max'. Please correct your data type configuration.`,
                this,
            )
        }
    }

    #updateFromArray(newValue: Array<unknown>): Array<KeyValuePair> {
        const result: Array<KeyValuePair> = []

        for (let newValueItem of newValue) {
            let resultItem: KeyValuePair | undefined = undefined

            switch (typeof newValueItem) {
                case 'string':
                    resultItem = { key: newValueItem, value: newValueItem }
                    break;

                case 'object':
                    if (!!newValueItem && 'key' in newValueItem && typeof newValueItem.key === 'string') {
                        resultItem = { key: newValueItem.key, value: '' }

                        if ('value' in newValueItem && typeof newValueItem.value === 'string' && !!newValueItem.value) {
                            resultItem.value = newValueItem.value
                        }
                    }
                    break;
            }

            if (!!resultItem) {
                result.push(resultItem)
            }
        }

        return result
    }

    override getFormElement = () => undefined
}

export default AkPropertyEditorUIDictionaryElement

declare global {
    interface HTMLElementTagNameMap {
        'ak-property-editor-ui-dictionary': AkPropertyEditorUIDictionaryElement
    }
}
