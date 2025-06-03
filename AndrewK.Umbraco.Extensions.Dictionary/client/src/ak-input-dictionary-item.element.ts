import { css, customElement, html, nothing, property, query, state, when } from '@umbraco-cms/backoffice/external/lit'
import { umbConfirmModal } from '@umbraco-cms/backoffice/modal'
import { UmbChangeEvent, UmbInputEvent, UmbDeleteEvent } from '@umbraco-cms/backoffice/event'
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element'
import { UUIFormControlMixin } from '@umbraco-cms/backoffice/external/uui'
import type { UUIInputElement, UUIInputEvent } from '@umbraco-cms/backoffice/external/uui'

@customElement('ak-input-dictionary-item')
export class AkInputDictionaryItemElement extends UUIFormControlMixin(UmbLitElement, undefined) {
    @state() private _kvp: { key: string, value: string } = { key: '', value: '' }

    constructor() {
        super()
    }

    @property({ type: Boolean, reflect: true }) disabled = false
    @property({ type: Boolean, reflect: true }) readonly = false

    @property({ type: Object})
    public get kvp(): { key: string, value: string } {
        return this._kvp
    }

    public set kvp(kvp: { key: string, value: string }) {
        this._kvp = kvp ?? { key: '', value: '' }
    }

    @query('#input-key') protected _keyInput?: UUIInputElement
    @query('#input-value') protected _valueInput?: UUIInputElement

    async #onDelete() {
        await umbConfirmModal(this, {
            headline: `Delete ${ this._kvp.value || 'item' }`,
            content: 'Are you sure you want to delete this item?',
            color: 'danger',
            confirmLabel: 'Delete',
        })

        this.dispatchEvent(new UmbDeleteEvent())
    }

    #onKeyInput(event: UUIInputEvent) {
        event.stopPropagation()
        const target = event.currentTarget as UUIInputElement
        this._kvp = { ...this._kvp, key: target.value as string }
        this.dispatchEvent(new UmbInputEvent())
    }

    #onValueInput(event: UUIInputEvent) {
        event.stopPropagation()
        const target = event.currentTarget as UUIInputElement
        this._kvp = { ...this._kvp, value: target.value as string }
        this.dispatchEvent(new UmbInputEvent())
    }

    #onKeydown(event: KeyboardEvent) {
        event.stopPropagation()
        //TODO: focus empty input (either key or value) if any, then dispatch 'enter'
        if (event.key === 'Enter' && !!this._kvp.key) {
            this.dispatchEvent(new CustomEvent('enter'))
        }
    }

    #onKeyChange(event: UUIInputEvent) {
        event.stopPropagation()
        const target = event.currentTarget as UUIInputElement
        this._kvp = { ...this._kvp, key: target.value as string }
        this.dispatchEvent(new UmbChangeEvent())
        console.warn('this._kvp: ', this._kvp)
    }
    
    #onValueChange(event: UUIInputEvent) {
        event.stopPropagation()
        const target = event.currentTarget as UUIInputElement
        this._kvp = { ...this._kvp, value: target.value as string }
        this.dispatchEvent(new UmbChangeEvent())
    }

    #onValid = (event: Event) => event.stopPropagation()
    #onInvalid = (event: Event) => event.stopPropagation()

    public override async focus() {
        await this.updateComplete
        this._keyInput?.focus()
    }

    override render() {
        return html`
          ${ this.disabled || this.readonly ? nothing : html`
            <uui-icon name="icon-navigation" class="handle"></uui-icon>` }

          <umb-form-validation-message id="validation-message" @invalid=${ this.#onInvalid } @valid=${ this.#onValid }>
            <div class="kvp-holder">
              <uui-input
                id="input-key"
                label="Key"
                value=${ this._kvp.key }
                @keydown=${ this.#onKeydown }
                @input=${ this.#onKeyInput }
                @change=${ this.#onKeyChange }
                ?disabled=${ this.disabled }
                ?readonly=${ this.readonly }
                required=${ this.required }
                required-message="Key is missing"
              ></uui-input>
              <uui-input
                id="input-value"
                label="Value"
                value=${ this._kvp.value }
                @keydown=${ this.#onKeydown }
                @input=${ this.#onValueInput }
                @change=${ this.#onValueChange }
                ?disabled=${ this.disabled }
                ?readonly=${ this.readonly }
              ></uui-input>
            </div>
          </umb-form-validation-message>

          ${ when(
            !this.readonly,
            () => html`
              <uui-button
                compact
                color="danger"
                label="${ this.localize.term('general_remove') } ${ this.value }"
                look="outline"
                ?disabled=${ this.disabled }
                @click=${ this.#onDelete }>
                <uui-icon name="icon-trash"></uui-icon>
              </uui-button>
            `,
          ) }
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

            .kvp-holder {
                display: inline-flex;
                justify-content: space-between;
                gap: 5px;
                width: 100%;
                
                & > * {
                    flex: 1;
                }
            }

            .handle {
                cursor: move;
            }
        `,
    ]

    protected override getFormElement = () => undefined
}

export default AkInputDictionaryItemElement

declare global {
    interface HTMLElementTagNameMap {
        'ak-input-dictionary-item': AkInputDictionaryItemElement
    }
}
