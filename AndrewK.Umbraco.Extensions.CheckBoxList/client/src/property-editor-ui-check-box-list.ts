import type { UUIBooleanInputEvent } from '@umbraco-cms/backoffice/external/uui'
import type {
  UmbPropertyEditorConfigCollection,
  UmbPropertyEditorUiElement
} from '@umbraco-cms/backoffice/property-editor'
import type { KeyValuePair } from 'dictionary-client/src/types'

import { customElement, html, css, property, state, classMap, repeat } from '@umbraco-cms/backoffice/external/lit'
import { UmbFormControlMixin } from '@umbraco-cms/backoffice/validation'
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event'
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element'
import { UMB_VALIDATION_EMPTY_LOCALIZATION_KEY } from '@umbraco-cms/backoffice/validation'

import { UMB_DOCUMENT_WORKSPACE_CONTEXT } from '@umbraco-cms/backoffice/document'

type CheckBoxOption = { label: string; value: string; checked: boolean; invalid?: boolean }

@customElement('ak-property-editor-ui-check-box-list')
export class AkPropertyEditorUICheckBoxList
  extends UmbFormControlMixin<Array<string>, typeof UmbLitElement, Array<string>>(UmbLitElement, [])
  implements UmbPropertyEditorUiElement
{
  private _defaultApplied: boolean = false
  private _defaultValues?: Array<string>
  @state() private _value: Array<string> = []
  @state() private _options: Array<CheckBoxOption> = []

  constructor() {
    super()

    this.addValidator(
      'valueMissing',
      () => this.mandatoryMessage,
      () => !this.readonly && this.mandatory && !this.value?.length
    )
  }

  @property({ type: Array })
  public set value(value: unknown) {
    let newValue: Array<string>

    if (Array.isArray(value)) {
      newValue = value.filter(item => !!item && typeof item === 'string')
    } else if (!!value && typeof value === 'string') {
      newValue = [value]
    } else {
      return
    }

    this._value = newValue

    try {
      // if initial items were transformed need to persist changes,
      // it means the data-type was changed to this one and stored value needs to be transformed
      if (JSON.stringify(value) !== JSON.stringify(newValue)) {
        this.pristine = false
        // at this point form was not setup properly so need to delay dispatch
        this.updateComplete.then(() => {
          this.dispatchEvent(new UmbChangeEvent())
        })
      }
    } catch (error) {
      console.error('Failed to compare items: ', error)
    }
  }

  public get value(): Array<string> {
    return this._value || []
  }

  @property({ type: Boolean, reflect: true }) readonly = false
  @property({ type: Boolean, reflect: true }) mandatory = false
  @property({ type: String }) mandatoryMessage = UMB_VALIDATION_EMPTY_LOCALIZATION_KEY

  public set config(config: UmbPropertyEditorConfigCollection | undefined) {
    if (!config) return

    const items: Array<KeyValuePair> | undefined = config.getValueByAlias('items')
    this._defaultValues = config
      .getValueByAlias<string>('default')
      ?.split(',')
      .map(value => value.trim())
      .filter(Boolean)

    if (Array.isArray(items) && items.length) {
      this._options = items
        .filter(item => !!item?.key)
        .map(item => ({
          label: this.localize.string(item.value) || item.key,
          value: item.key,
          checked: this._value.includes(item.key)
        }))

      // If selection includes a value not in the list, add it to the list
      this._value.forEach(value => {
        if (!this._options.find(item => item.value === value)) {
          this._options.push({
            label: value,
            value,
            checked: true,
            invalid: true
          })
        }
      })
    }
  }

  override getFormElement = () => undefined

  #onChange(event: UUIBooleanInputEvent) {
    const index = this._options.findIndex(x => x.value === event.target.value)

    if (index === -1) {
      return
    }

    this._options[index].checked = event.target.checked
    this.value = this._options.filter(x => x.checked).map(x => x.value)
    this.dispatchEvent(new UmbChangeEvent())
  }

  override render() {
    return html`
      ${repeat(
        this._options,
        item => item.value,
        item => html`
          <uui-checkbox
            class=${classMap({ invalid: !!item.invalid })}
            label=${item.label + (item.invalid ? ` (${this.localize.term('validation_legacyOption')})` : '')}
            title=${item.invalid ? this.localize.term('validation_legacyOptionDescription') : ''}
            value=${item.value}
            @change=${this.#onChange}
            ?checked=${item.checked}
            ?readonly=${this.readonly}
          ></uui-checkbox>
        `
      )}
    `
  }

  protected override firstUpdated() {
    this.consumeContext(UMB_DOCUMENT_WORKSPACE_CONTEXT, context => {
      if (!context) return

      // default values must be applied only to the brand new nodes
      this.observe(context.isNew, isNew => {
        if (!!isNew && !this._defaultApplied && !!this._defaultValues?.length && !this.value?.length) {
          this._options.forEach(option => (option.checked = this._defaultValues!.includes(option.value)))
          this.value = this._options.filter(x => x.checked).map(x => x.value)
          this._defaultApplied = true
          this.dispatchEvent(new UmbChangeEvent())
        }
      })
    })
  }

  static override readonly styles = [
    css`
      uui-checkbox {
        width: 100%;

        &.invalid {
          text-decoration: line-through;
        }
      }
    `
  ]
}

export default AkPropertyEditorUICheckBoxList

declare global {
  interface HTMLElementTagNameMap {
    'ak-property-editor-ui-check-box-list': AkPropertyEditorUICheckBoxList
  }
}
