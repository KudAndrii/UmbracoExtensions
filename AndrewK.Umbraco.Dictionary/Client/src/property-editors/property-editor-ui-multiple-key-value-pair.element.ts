import { customElement, html, property, query, state } from '@umbraco-cms/backoffice/external/lit';
import { umbBindToValidation, UmbValidationContext } from '@umbraco-cms/backoffice/validation';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { UmbPropertyValueChangeEvent } from '@umbraco-cms/backoffice/property-editor';
import { UMB_PROPERTY_CONTEXT } from '@umbraco-cms/backoffice/property';
import {
    UMB_SUBMITTABLE_WORKSPACE_CONTEXT,
    UmbSubmittableWorkspaceContextBase,
} from '@umbraco-cms/backoffice/workspace';
import type { UmbChangeEvent } from '@umbraco-cms/backoffice/event';
import type { UmbInputMultipleTextStringElement } from '@umbraco-cms/backoffice/components';
import type {
    UmbPropertyEditorConfigCollection,
    UmbPropertyEditorUiElement,
} from '@umbraco-cms/backoffice/property-editor';

import { KeyValuePair } from "../types";
import UmbInputMultipleKeyValuePairElement from "./input-multiple-key-value-pair.element.ts";

import './input-multiple-key-value-pair-item.element.ts'
import './input-multiple-key-value-pair.element.ts'

/**
 * @element property-editor-ui-multiple-key-value-pair
 */
@customElement('property-editor-ui-multiple-key-value-pair')
export class UmbPropertyEditorUIMultipleKeyValuePairsElement extends UmbLitElement implements UmbPropertyEditorUiElement {
    @property({ type: Array })
    value?: Array<KeyValuePair>;

    public set config(config: UmbPropertyEditorConfigCollection | undefined) {
        if (!config) return;

        this._min = Number(config.getValueByAlias('min')) || 0;
        this._max = Number(config.getValueByAlias('max')) || Infinity;
    }

    /**
     * Disables the Multiple Text String Property Editor UI
     * @type {boolean}
     * @attr
     * @default false
     */
    @property({ type: Boolean, reflect: true })
    disabled = false;

    /**
     * Makes the Multiple Text String Property Editor UI readonly
     * @type {boolean}
     * @attr
     * @default false
     */
    @property({ type: Boolean, reflect: true })
    readonly = false;

    /**
     * Makes the Multiple Text String Property Editor UI mandatory
     * @type {boolean}
     * @attr
     * @default false
     */
    @property({ type: Boolean, reflect: true })
    required = false;

    @state()
    private _label?: string;

    @state()
    private _min = 0;

    @state()
    private _max = Infinity;

    @query('#input', true)
    protected _inputElement?: UmbInputMultipleTextStringElement;

    protected _validationContext = new UmbValidationContext(this);

    constructor() {
        super();
        console.debug('log from property-editor-ui-multiple-key-value-pair.element');

        this.consumeContext(UMB_PROPERTY_CONTEXT, (context) => {
            this._label = context.getLabel();
        });

        this.consumeContext(UMB_SUBMITTABLE_WORKSPACE_CONTEXT, (context) => {
            if (context instanceof UmbSubmittableWorkspaceContextBase) {
                context.addValidationContext(this._validationContext);
            }
        });
    }

    protected override firstUpdated() {
        if (this._min && this._max && this._min > this._max) {
            console.warn(
                `Property '${ this._label }' (Multiple Key Value Pair) has been misconfigured, 'min' is greater than 'max'. Please correct your data type configuration.`,
                this,
            );
        }
    }

    #onChange(event: UmbChangeEvent) {
        event.stopPropagation();
        const target = event.currentTarget as UmbInputMultipleKeyValuePairElement;
        this.value = target.items;
        this.dispatchEvent(new UmbPropertyValueChangeEvent());
    }

    // Prevent valid events from bubbling outside the message element
    #onValid(event: Event) {
        event.stopPropagation();
    }

    // Prevent invalid events from bubbling outside the message element
    #onInvalid(event: Event) {
        event.stopPropagation();
    }

    override render() {
        return html`
          <umb-form-validation-message id="validation-message" @invalid=${ this.#onInvalid } @valid=${ this.#onValid }>
            <input-multiple-key-value-pair
              id="input"
              min=${ this._min }
              max=${ this._max }
              .items=${ this.value ?? [] }
              ?disabled=${ this.disabled }
              ?readonly=${ this.readonly }
              ?required=${ this.required }
              @change=${ this.#onChange }
              ${ umbBindToValidation(this) }>
            </input-multiple-key-value-pair>
          </umb-form-validation-message>
        `;
    }
}

export default UmbPropertyEditorUIMultipleKeyValuePairsElement;

declare global {
    interface HTMLElementTagNameMap {
        'property-editor-ui-multiple-key-value-pair': UmbPropertyEditorUIMultipleKeyValuePairsElement;
    }
}
