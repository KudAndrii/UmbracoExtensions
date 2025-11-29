import selectTheme from '@shoelace-style/shoelace/dist/themes/light.styles.js'

import '@shoelace-style/shoelace/dist/components/select/select.js'
import '@shoelace-style/shoelace/dist/components/option/option.js'

import type {
  UmbPropertyEditorConfigCollection,
  UmbPropertyEditorUiElement
} from '@umbraco-cms/backoffice/property-editor'

import { css, customElement, html, map, property, state, query } from '@umbraco-cms/backoffice/external/lit'
import { UmbFormControlMixin } from '@umbraco-cms/backoffice/validation'
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element'
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event'

// import { UMB_SUBMITTABLE_WORKSPACE_CONTEXT } from '@umbraco-cms/backoffice/workspace'
// import { UMB_VARIANT_CONTEXT } from '@umbraco-cms/backoffice/variant'

@customElement('ak-property-editor-ui-dropdown')
export class AkPropertyEditorUIDropdown
  extends UmbFormControlMixin<Array<string>, typeof UmbLitElement, undefined>(UmbLitElement)
  implements UmbPropertyEditorUiElement
{
  private _defaultValues?: Array<string>
  @state() private _multiple: boolean = false
  @state() private _options: Array<Option & { alias: string; invalid?: boolean }> = []
  @state() private _value?: Array<string> = undefined

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
    return this._value ?? []
  }

  @property({ type: Boolean, reflect: true }) readonly = false
  @property({ type: Boolean, reflect: true }) mandatory = false

  @query('sl-select') _input?: HTMLElement

  public set config(config: UmbPropertyEditorConfigCollection | undefined) {
    if (!config) return

    this._multiple = !!config.getValueByAlias<boolean>('multiple')
    const items: Array<{ key: string; value: string }> | undefined = config.getValueByAlias('items')
    const defaultValueString = config.getValueByAlias<string>('default')

    if (this._multiple) {
      this._defaultValues = defaultValueString
        ?.split(',')
        .map(value => value.trim())
        .filter(Boolean)
    } else if (!!defaultValueString) {
      this._defaultValues = [defaultValueString]
    }

    if (Array.isArray(items) && items.length > 0) {
      this._options = items
        .filter(item => !!item?.key)
        .map(item => ({
          name: this.localize.string(item.value) || item.key,
          value: item.key,
          alias: this.toSlSelectAlias(item.key),
          selected: !!this._value?.includes(item.key)
        }))

      // If selection includes a value not from the list, add it to the list and mark invalid
      this._value?.forEach(value => {
        if (!this._options.find(item => item.value === value)) {
          this._options.push({
            name: `${value} (${this.localize.term('validation_legacyOption')})`,
            value,
            alias: this.toSlSelectAlias(value),
            selected: true,
            invalid: true
          })
        }
      })
    }
  }

  override getFormElement = () => this._input

  #onChange(event: Event & { target: { value?: Array<string> | string } }) {
    const newValues = Array.isArray(event?.target?.value) ? event.target.value : [event.target.value]

    this.value = this._options.filter(option => newValues.includes(option.alias)).map(option => option.value)
    this.dispatchEvent(new UmbChangeEvent())
  }

  override render() {
    return html`
      <sl-select
        value=${this.value.join(' ')}
        @sl-change=${this.#onChange}
        placeholder=${this._multiple ? 'Select multiple' : 'Select one'}
        size="small"
        clearable
        ?disabled=${this.readonly}
        ?multiple=${this._multiple}
      >
        ${map(
          this._options,
          item => html`
            <sl-option value=${item.alias} ?disabled=${item.invalid}>${item.name}</sl-option>
          `
        )}
        <span slot="help-text" class="error">${this._legacyOptionMessage}</span>
      </sl-select>
    `
  }

  protected override firstUpdated() {
    if (!!this._defaultValues?.length && !this._value) {
      this.value = this._defaultValues
      this.dispatchEvent(new UmbChangeEvent())
    }
  }

  private get _legacyOptionMessage() {
    const selectionHasInvalids = !!this._value?.some(value => {
      const option = this._options.find(item => item.value === value)
      return option ? option.invalid : false
    })

    return selectionHasInvalids ? this.localize.term('validation_legacyOptionDescription') : ''
  }

  /**
   * <sl-select> doesn't allow spaces for values, so need to format it
   * @param value - available option value
   * @return string where all the whitespaces replaced with underscores
   */
  private toSlSelectAlias(value: string): string {
    return value.trim().replace(/\s+/g, '_')
  }

  static override readonly styles = [
    selectTheme,
    css`
      .error {
        color: var(--uui-color-danger);
        font-size: var(--uui-font-size-small);
      }
    `
  ]
}

export default AkPropertyEditorUIDropdown

declare global {
  interface HTMLElementTagNameMap {
    'ak-property-editor-ui-dropdown': AkPropertyEditorUIDropdown
  }
}
