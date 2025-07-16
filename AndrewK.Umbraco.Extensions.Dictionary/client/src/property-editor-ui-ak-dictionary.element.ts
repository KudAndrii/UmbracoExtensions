import { customElement, html, property, query, state } from '@umbraco-cms/backoffice/external/lit'
import { umbBindToValidation, UmbValidationContext } from '@umbraco-cms/backoffice/validation'
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element'
import { UMB_PROPERTY_CONTEXT } from '@umbraco-cms/backoffice/property'
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event'
import {
    UMB_SUBMITTABLE_WORKSPACE_CONTEXT,
    UmbSubmittableWorkspaceContextBase,
} from '@umbraco-cms/backoffice/workspace'
import type {
    UmbPropertyEditorConfigCollection,
    UmbPropertyEditorUiElement,
} from '@umbraco-cms/backoffice/property-editor'

import AkInputDictionaryElement from "./ak-input-dictionary.element"

@customElement('ak-property-editor-ui-dictionary')
export class AkPropertyEditorUIDictionaryElement extends UmbLitElement implements UmbPropertyEditorUiElement {
    @state() private _label?: string
    @state() private _min = 0
    @state() private _max = Infinity
    private _value: Array<{ key: string, value: string }> = []

    protected _validationContext = new UmbValidationContext(this)

    @query('#input', true) protected _inputElement?: AkInputDictionaryElement

    constructor() {
        super()

        this.consumeContext(UMB_PROPERTY_CONTEXT, (context) => {
            this._label = context?.getLabel()
        })

        this.consumeContext(UMB_SUBMITTABLE_WORKSPACE_CONTEXT, (context) => {
            if (context instanceof UmbSubmittableWorkspaceContextBase) {
                context.addValidationContext(this._validationContext)
            }
        })
    }

    @property({ type: Array })
    public get value(): Array<{ key: string, value: string }> {
        return this._value || []
    }

    public set value(value: unknown) {
        let newValues: Array<{ key: string, value: string }> = []

        switch (typeof value) {
            case 'string':
                newValues.push({ key: value, value: value })
                break;

            case 'object':
                if (Array.isArray(value)) {
                    newValues = this.updateFromArray((value as Array<unknown>))
                }
                break;
        }

        this._value = newValues
        this.dispatchEvent(new UmbChangeEvent())
    }

    @property({ type: Boolean, reflect: true }) disabled = false
    @property({ type: Boolean, reflect: true }) readonly = false
    @property({ type: Boolean, reflect: true }) required = false

    public set config(config: UmbPropertyEditorConfigCollection | undefined) {
        if (!config) return

        this._min = Number(config.getValueByAlias('min')) || 0
        this._max = Number(config.getValueByAlias('max')) || Infinity
    }

    #onChange(event: UmbChangeEvent) {
        event.stopPropagation()
        const target = event.currentTarget as AkInputDictionaryElement
        this.value = target.items
        this.dispatchEvent(new UmbChangeEvent())
    }

    #onValid = (event: Event) => event.stopPropagation()
    #onInvalid = (event: Event) => event.stopPropagation()

    override render() {
        return html`
          <umb-form-validation-message
            id="validation-message"
            @invalid=${ this.#onInvalid }
            @valid=${ this.#onValid }
          >
            <ak-input-dictionary
              id="input"
              max=${ this._max }
              min=${ this._min }
              .items=${ this.value ?? [] }
              ?disabled=${ this.disabled }
              ?readonly=${ this.readonly }
              ?required=${ this.required }
              @change=${ this.#onChange }
              ${ umbBindToValidation(this) }
            ></ak-input-dictionary>
          </umb-form-validation-message>
        `
    }

    protected override firstUpdated() {
        if (this._min && this._max && this._min > this._max) {
            console.warn(
                `Property '${ this._label }' (Dictionary) has been misconfigured, 'min' is greater than 'max'. Please correct your data type configuration.`,
                this,
            )
        }
    }

    private updateFromArray(newValue: Array<unknown>): Array<{ key: string, value: string }> {
        const result: Array<{ key: string, value: string }> = []

        for (let newValueItem of newValue) {
            let resultItem: { key: string, value: string } | undefined = undefined

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
}

export default AkPropertyEditorUIDictionaryElement

declare global {
    interface HTMLElementTagNameMap {
        'ak-property-editor-ui-dictionary': AkPropertyEditorUIDictionaryElement
    }
}
