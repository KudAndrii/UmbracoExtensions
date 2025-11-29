import type {
  UmbPropertyEditorConfigCollection,
  UmbPropertyEditorUiElement
} from '@umbraco-cms/backoffice/property-editor'
import type { UmbInputRadioButtonListElement, UmbRadioButtonItem } from '@umbraco-cms/backoffice/components'

import { UmbFormControlMixin } from '@umbraco-cms/backoffice/validation'
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event'
import { html, customElement, property, state, query } from '@umbraco-cms/backoffice/external/lit'
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element'
import { UMB_VALIDATION_EMPTY_LOCALIZATION_KEY } from '@umbraco-cms/backoffice/validation'

@customElement('ak-property-editor-ui-radio-button-list')
export class AkPropertyEditorUIRadioButtonList
  extends UmbFormControlMixin<string | undefined, typeof UmbLitElement, undefined>(UmbLitElement, undefined)
  implements UmbPropertyEditorUiElement
{
  @state() private _list: Array<UmbRadioButtonItem> = []
  @state() private _value?: string = undefined

  @property({ type: Boolean, reflect: true }) readonly = false

  @property({ type: Boolean, reflect: true }) mandatory = false

  @property({ type: String }) mandatoryMessage = UMB_VALIDATION_EMPTY_LOCALIZATION_KEY

  @property({ type: String })
  public get value(): string | undefined {
    return this._value
  }

  public set value(value: unknown) {
    if (!value || typeof value !== 'string') {
      return
    }

    if ((!!this._list?.length && !this._list.some(item => item.value === value)) || this._value === value) {
      return
    }

    this._value = value
  }

  @query('umb-input-radio-button-list') _input?: UmbInputRadioButtonListElement

  public set config(config: UmbPropertyEditorConfigCollection | undefined) {
    if (!config) return

    const items = config.getValueByAlias('items')
    const defaultValue = config.getValueByAlias('default')
    
    if (!this.value && !!defaultValue) {
      this.value = defaultValue
      this.dispatchEvent(new UmbChangeEvent())
    }

    if (Array.isArray(items) && !!items.length) {
      this._list = items
        .filter(item => !!item?.key)
        .map(item => ({
          label: this.localize.string(item.value) || item.key,
          value: item.key
        }))

      // If selection includes a value which is not in the list, add it to the list as invalid
      if (this.value && !this._list.find(item => item.value === this.value)) {
        this._list.push({ label: this.value, value: this.value, invalid: true })
      }
    }
  }

  #onChange(event: CustomEvent & { target: UmbInputRadioButtonListElement }) {
    this.value = event.target.value
    this.dispatchEvent(new UmbChangeEvent())
  }

  override render() {
    return html`
      <umb-input-radio-button-list
        .list=${this._list}
        .required=${this.mandatory}
        .requiredMessage=${this.mandatoryMessage}
        .value=${this.value ?? ''}
        ?readonly=${this.readonly}
        @change=${this.#onChange}
      ></umb-input-radio-button-list>
    `
  }

  override getFormElement = () => this._input
}

export default AkPropertyEditorUIRadioButtonList

declare global {
  interface HTMLElementTagNameMap {
    'ak-property-editor-ui-radio-button-list': AkPropertyEditorUIRadioButtonList
  }
}
