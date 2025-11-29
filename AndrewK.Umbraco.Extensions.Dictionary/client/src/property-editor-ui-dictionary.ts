import type {
  UmbPropertyEditorConfigCollection,
  UmbPropertyEditorUiElement
} from '@umbraco-cms/backoffice/property-editor'
import type { AkInputDictionary } from './input-dictionary.ts'
import type { KeyValuePair } from './types'

import { customElement, html, property, state } from '@umbraco-cms/backoffice/external/lit'
import { umbBindToValidation, UmbFormControlMixin } from '@umbraco-cms/backoffice/validation'
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element'
import { UMB_PROPERTY_CONTEXT } from '@umbraco-cms/backoffice/property'
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event'

import './input-dictionary.ts'

@customElement('ak-property-editor-ui-dictionary')
export class AkPropertyEditorUIDictionary
  extends UmbFormControlMixin<Array<KeyValuePair>, typeof UmbLitElement, undefined>(UmbLitElement)
  implements UmbPropertyEditorUiElement
{
  public set config(config: UmbPropertyEditorConfigCollection | undefined) {
    if (!config) return

    this._min = Number(config.getValueByAlias('min')) || 0
    this._max = Number(config.getValueByAlias('max')) || Infinity
  }

  /**
   * Disables the Multiple Text String Property Editor UI
   * @type {boolean}
   * @attr
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  disabled: boolean = false

  /**
   * Makes the Multiple Text String Property Editor UI readonly
   * @type {boolean}
   * @attr
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  readonly: boolean = false

  /**
   * Makes the Multiple Text String Property Editor UI mandatory
   * @type {boolean}
   * @attr
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  required: boolean = false

  @state()
  private _label?: string

  @state()
  private _min = 0

  @state()
  private _max = Infinity

  constructor() {
    super()

    this.consumeContext(UMB_PROPERTY_CONTEXT, context => {
      this._label = context?.getLabel()
    })
  }

  protected override firstUpdated() {
    if (this._min && this._max && this._min > this._max) {
      console.warn(
        `Property '${this._label}' (Dictionary) has been misconfigured, 'min' is greater than 'max'. Please correct your data type configuration.`,
        this
      )
    }
    this.addFormControlElement(this.shadowRoot!.querySelector('ak-input-dictionary')!)
  }

  #onChange(event: UmbChangeEvent) {
    event.stopPropagation()
    const target = event.currentTarget as AkInputDictionary
    this.value = target.items
    this.dispatchEvent(new UmbChangeEvent())
  }

  override render() {
    return html`
      <ak-input-dictionary
        max=${this._max}
        min=${this._min}
        .items=${this.value ?? []}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ?required=${this.required}
        @change=${this.#onChange}
        ${umbBindToValidation(this)}
      ></ak-input-dictionary>
    `
  }
}

export default AkPropertyEditorUIDictionary

declare global {
  interface HTMLElementTagNameMap {
    'ak-property-editor-ui-dictionary': AkPropertyEditorUIDictionary
  }
}
