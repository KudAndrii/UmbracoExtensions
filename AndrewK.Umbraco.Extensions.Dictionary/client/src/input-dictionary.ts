import type { UmbInputEvent, UmbDeleteEvent } from '@umbraco-cms/backoffice/event'
import type { AkInputDictionaryItem } from './input-dictionary-item.ts'
import type { KeyValuePair } from './types'

import { css, html, nothing, repeat, customElement, property, state } from '@umbraco-cms/backoffice/external/lit'
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event'
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element'
import { UmbSorterController } from '@umbraco-cms/backoffice/sorter'
import { UmbFormControlMixin } from '@umbraco-cms/backoffice/validation'

import './input-dictionary-item.ts'

@customElement('ak-input-dictionary')
export class AkInputDictionary extends UmbFormControlMixin<undefined | string, typeof UmbLitElement>(
  UmbLitElement,
  undefined
) {
  #sorter = new UmbSorterController(this, {
    getUniqueOfElement: element => {
      return element.getAttribute('data-sort-entry-id')
    },
    getUniqueOfModel: (modelEntry: KeyValuePair) => {
      return modelEntry.key
    },
    identifier: 'AndrewK.SorterIdentifier.Dictionary',
    itemSelector: 'ak-input-dictionary-item',
    containerSelector: '#sorter-wrapper',
    onChange: ({ model }) => {
      const oldValue = this._items
      this._items = model
      this.requestUpdate('_items', oldValue)
      this.dispatchEvent(new UmbChangeEvent())
    }
  })

  /**
   * This is a minimum number of selected items in this input.
   * @type {number}
   * @attr
   * @default undefined
   */
  @property({ type: Number })
  min?: number

  /**
   * Min validation message.
   * @type {boolean}
   * @attr
   * @default
   */
  @property({ type: String, attribute: 'min-message' })
  minMessage: string = 'This field need more items'

  /**
   * This is the maximum number of selected items in this input.
   * @type {number}
   * @attr
   * @default undefined
   */
  @property({ type: Number })
  max?: number

  /**
   * Max validation message.
   * @type {boolean}
   * @attr
   * @default
   */
  @property({ type: String, attribute: 'min-message' })
  maxMessage: string = 'This field exceeds the allowed amount of items'

  /**
   * Disables the input
   * @type {boolean}
   * @attr
   * @default
   */
  @property({ type: Boolean, reflect: true })
  public set disabled(value) {
    this.#disabled = value
    if (value) {
      this.#sorter.disable()
    }
  }
  public get disabled() {
    return this.#disabled
  }
  #disabled = false

  /**
   * Makes the input readonly
   * @type {boolean}
   * @attr
   * @default
   */
  @property({ type: Boolean, reflect: true })
  public set readonly(value) {
    this.#readonly = value
    if (value) {
      this.#sorter.disable()
    }
  }
  public get readonly() {
    return this.#readonly
  }
  #readonly = false

  constructor() {
    super()

    this.addValidator(
      'badInput',
      () => 'A key is missing',
      () => !this.readonly && !!this._items?.length && !this._items.map(x => x.key).every(Boolean)
    )

    this.addValidator(
      'rangeUnderflow',
      () => this.minMessage,
      () => !!this.min && this._items.length < this.min
    )
    this.addValidator(
      'rangeOverflow',
      () => this.maxMessage,
      () => !!this.max && this._items.length > this.max
    )
  }

  @state()
  private _items: Array<KeyValuePair> = []

  @property({ type: Array })
  public get items(): Array<KeyValuePair> {
    return this._items
  }
  public set items(items: unknown) {
    let newItems: Array<KeyValuePair> = []
    switch (typeof items) {
      case 'string':
        if (!!items) {
          newItems.push({ key: items, value: items })
        }
        break

      case 'object':
        if (Array.isArray(items)) {
          newItems = this.#updateFromArray(items as Array<unknown>)
        }
        break
    }
    // workaround for correct validation
    this.value = newItems?.length > 0 ? 'some value' : ''
    this._items = newItems
    this.#sorter.setModel(this.items)

    try {
      // if initial items were transformed need to persist changes,
      // it means the data-type was changed to this one and stored value needs to be transformed
      if (JSON.stringify(items) !== JSON.stringify(newItems)) {
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

  async #onAdd() {
    this._items = [...this._items, { key: '', value: '' }]
    this.pristine = false
    this.dispatchEvent(new UmbChangeEvent())
    await this.#focusNewItem()
  }

  #onInput(event: UmbInputEvent, currentIndex: number) {
    event.stopPropagation()
    const target = event.currentTarget as AkInputDictionaryItem
    const value = target.value!
    this._items = this._items.map((item, index) => (index === currentIndex ? value : item))
    this.dispatchEvent(new UmbChangeEvent())
  }

  async #focusNewItem() {
    await this.updateComplete
    const items = this.shadowRoot?.querySelectorAll('ak-input-dictionary-item') as NodeListOf<AkInputDictionaryItem>
    const newItem = items[items.length - 1]
    await newItem.focus()
  }

  #deleteItem(event: UmbDeleteEvent, itemIndex: number) {
    event.stopPropagation()
    this._items = this._items.filter((_, index) => index !== itemIndex)
    this.pristine = false
    this.dispatchEvent(new UmbChangeEvent())
  }

  override getFormElement() {
    return undefined
  }

  #updateFromArray(newValue: Array<unknown>): Array<KeyValuePair> {
    const result: Array<KeyValuePair> = []

    for (let newValueItem of newValue) {
      let resultItem: KeyValuePair | undefined = undefined

      switch (typeof newValueItem) {
        case 'string':
          resultItem = { key: newValueItem, value: newValueItem }
          break

        case 'object':
          if (!!newValueItem && 'key' in newValueItem && typeof newValueItem.key === 'string') {
            resultItem = { key: newValueItem.key, value: '' }

            if ('value' in newValueItem && typeof newValueItem.value === 'string' && !!newValueItem.value) {
              resultItem.value = newValueItem.value
            }
          }
          break
      }

      if (!!resultItem) {
        result.push(resultItem)
      }
    }

    return result
  }

  override render() {
    return html`
      <div id="sorter-wrapper">${this.#renderItems()}</div>
      ${this.#renderInfoBlock()} ${this.#renderAddButton()}
    `
  }

  #renderItems() {
    return html`
      ${repeat(
        this._items,
        (_, index) => index,
        (item, index) => html`
          <ak-input-dictionary-item
            name="item-${index}"
            data-sort-entry-id=${item.key}
            required
            required-message="Item ${index + 1} is missing a value"
            .value=${item}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            @enter=${this.#onAdd}
            @delete=${(event: UmbDeleteEvent) => this.#deleteItem(event, index)}
            @input=${(event: UmbInputEvent) => this.#onInput(event, index)}
          ></ak-input-dictionary-item>
        `
      )}
    `
  }

  #renderAddButton() {
    if (this.disabled || this.readonly) return nothing
    if (this.max === 1 && this._items.length > 0) return nothing
    return html`
      <uui-button
        color="default"
        id="action"
        label="Add"
        look="placeholder"
        ?disabled=${this.disabled}
        @click=${this.#onAdd}
      ></uui-button>
    `
  }

  #renderInfoBlock() {
    if (!this._items?.length) {
      return nothing
    }

    const keys = this._items.map(x => x.key)
    const uniqueKeys = new Set(keys)

    if (!keys.length || keys.length === uniqueKeys.size) {
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
        inset: 0px;
        border-radius: var(--uui-border-radius);
        border: 1px dashed var(--uui-color-divider-emphasis);
      }
    `,
    css`
      .info-block {
        background-color: var(--uui-color-disabled-standalone);
        margin-bottom: var(--uui-size-space-3);
      }

      .info-block-headline {
        display: flex;
        align-items: center;
        gap: var(--uui-size-space-3);
      }
    `
  ]
}

export default AkInputDictionary

declare global {
  interface HTMLElementTagNameMap {
    'ak-input-dictionary': AkInputDictionary
  }
}
