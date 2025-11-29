import type { UUIInputElement, UUIInputEvent } from '@umbraco-cms/backoffice/external/uui'
import type { KeyValuePair } from './types'

import { css, customElement, html, nothing, property, query, when } from '@umbraco-cms/backoffice/external/lit'
import { umbConfirmModal } from '@umbraco-cms/backoffice/modal'
import { UmbChangeEvent, UmbInputEvent, UmbDeleteEvent } from '@umbraco-cms/backoffice/event'
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element'
import { UUIFormControlMixin } from '@umbraco-cms/backoffice/external/uui'

@customElement('ak-input-dictionary-item')
export class AkInputDictionaryItem extends UUIFormControlMixin<KeyValuePair, typeof UmbLitElement, undefined>(
  UmbLitElement,
  undefined
) {
  /**
   * Disables the input
   * @type {boolean}
   * @attr
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  disabled: boolean = false

  /**
   * Disables the input
   * @type {boolean}
   * @attr
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  readonly: boolean = false

  @query('#input-key') protected _keyInput?: UUIInputElement
  @query('#input-value') protected _valueInput?: UUIInputElement

  async #onDelete() {
    await umbConfirmModal(this, {
      headline: `Delete ${this.value?.key || 'item'}`,
      content: 'Are you sure you want to delete this item?',
      color: 'danger',
      confirmLabel: 'Delete'
    })

    this.dispatchEvent(new UmbDeleteEvent())
  }

  #onKeydown(event: KeyboardEvent) {
    event.stopPropagation()
    if (event.key !== 'Enter') {
      return
    }
    if (!this.value?.key) {
      this._keyInput?.focus()
    } else if (!this.value.value) {
      this._valueInput?.focus()
    } else {
      this.dispatchEvent(new CustomEvent('enter'))
    }
  }

  #onInput(event: UUIInputEvent, type: 'key' | 'value') {
    this.#updateValue(event, type)
    this.dispatchEvent(new UmbInputEvent())
  }

  #onChange(event: UUIInputEvent, type: 'key' | 'value') {
    this.#updateValue(event, type)
    this.dispatchEvent(new UmbChangeEvent())
  }

  #updateValue(event: UUIInputEvent, type: 'key' | 'value') {
    event.stopPropagation()
    const target = event.currentTarget as UUIInputElement
    const currentValue = this.value ?? { key: '', value: '' }
    this.value = {
      ...currentValue,
      [type]: target.value as string
    }
  }

  // Prevent valid events from bubbling outside the message element
  #onValid(event: Event) {
    event.stopPropagation()
  }

  // Prevent invalid events from bubbling outside the message element
  #onInvalid(event: Event) {
    event.stopPropagation()
  }

  public override async focus() {
    await this.updateComplete
    this._keyInput?.focus()
  }

  protected override getFormElement() {
    return undefined
  }

  override render() {
    return html`
      ${this.disabled || this.readonly
        ? nothing
        : html`
            <uui-icon name="icon-grip" class="handle"></uui-icon>
          `}

      <umb-form-validation-message id="validation-message" @invalid=${this.#onInvalid} @valid=${this.#onValid}>
        <div class="kvp-holder">
          <uui-input
            id="input-key"
            label="Key"
            placeholder="Key"
            value=${this.value?.key ?? ''}
            @keydown=${this.#onKeydown}
            @input=${(event: UUIInputEvent) => this.#onInput(event, 'key')}
            @change=${(event: UUIInputEvent) => this.#onChange(event, 'key')}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            required
            required-message="Key is missing"
          ></uui-input>
          <uui-input
            id="input-value"
            label="Value"
            placeholder="Value"
            value=${this.value?.value ?? ''}
            @keydown=${this.#onKeydown}
            @input=${(event: UUIInputEvent) => this.#onInput(event, 'value')}
            @change=${(event: UUIInputEvent) => this.#onChange(event, 'value')}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
          ></uui-input>
        </div>
      </umb-form-validation-message>

      ${when(
        !this.readonly,
        () => html`
          <uui-button
            compact
            label="${this.localize.term('general_remove')} ${this.value}"
            look="outline"
            ?disabled=${this.disabled}
            @click=${this.#onDelete}
          >
            <uui-icon name="icon-trash"></uui-icon>
          </uui-button>
        `
      )}
    `
  }

  static override styles = [
    css`
      :host {
        display: flex;
        align-items: center;
        margin-bottom: var(--uui-size-space-3);
        gap: var(--uui-size-space-3);
      }

      #validation-message {
        flex: 1;
      }

      #input {
        width: 100%;
      }

      .handle {
        cursor: grab;
      }

      .handle:active {
        cursor: grabbing;
      }
    `,
    css`
      .kvp-holder {
        display: inline-flex;
        justify-content: space-between;
        gap: 5px;
        width: 100%;

        & > * {
          flex: 1;
        }
      }
    `
  ]
}

export default AkInputDictionaryItem

declare global {
  interface HTMLElementTagNameMap {
    'ak-input-dictionary-item': AkInputDictionaryItem
  }
}
