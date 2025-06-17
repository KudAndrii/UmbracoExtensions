import { customElement, html, property, state } from '@umbraco-cms/backoffice/external/lit'
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event'
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element'
import { UMB_VALIDATION_EMPTY_LOCALIZATION_KEY, UmbFormControlMixin } from '@umbraco-cms/backoffice/validation'
import type {
	UmbPropertyEditorConfigCollection,
	UmbPropertyEditorUiElement,
} from '@umbraco-cms/backoffice/property-editor'

@customElement('ak-property-editor-ui-check-box-list')
export class AkPropertyEditorUICheckBoxListElement
	extends UmbFormControlMixin<Array<string> | string | undefined, typeof UmbLitElement, undefined>(
		UmbLitElement,
		undefined,
	)
	implements UmbPropertyEditorUiElement
{
	#selection: Array<string> = []

	@property({ type: Array })
	public override set value(value: Array<string> | string | undefined) {
		this.#selection = Array.isArray(value) ? value : value ? [value] : []
	}
	public override get value(): Array<string> | undefined {
		return this.#selection
	}

	public set config(config: UmbPropertyEditorConfigCollection | undefined) {
		if (!config) return

		const items: Array<{ key: string, value: string }> | undefined = config.getValueByAlias('items')
		const defaultValue: string | undefined = config.getValueByAlias('default')

		if (!!defaultValue && this.#selection.length === 0) {
			this.#selection.push(defaultValue)
			this.dispatchEvent(new UmbChangeEvent())
		}

		if (Array.isArray(items) && items.length) {
			this._list = items.map((item) => ({
				label: item.value,
				value: item.key,
				checked: this.#selection.includes(item.key),
			}))

			// If selection includes a value that is not in the list, add it to the list
			this.#selection.forEach((value) => {
				if (!this._list.find((item) => item.value === value)) {
					this._list.push({ label: value, value, checked: true, invalid: true })
				}
			})
		}
	}

	@property({ type: Boolean, reflect: true }) readonly = false
	@property({ type: Boolean }) mandatory?: boolean
	@property({ type: String }) mandatoryMessage = UMB_VALIDATION_EMPTY_LOCALIZATION_KEY

	@state()
	private _list: Array<{ label: string, value: string, checked: boolean, invalid?: boolean }> = []

	protected override firstUpdated() {
		this.addFormControlElement(this.shadowRoot!.querySelector('umb-input-checkbox-list')!)
	}

	#onChange(event: CustomEvent) {
		if (!!event?.target && 'selection' in event.target) {
			this.value = event.target.selection as Array<string>
			this.dispatchEvent(new UmbChangeEvent())	
		}
	}

	override render() {
		return html`
			<umb-input-checkbox-list
				.list=${this._list}
				.required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				.selection=${this.#selection}
				?readonly=${this.readonly}
				@change=${this.#onChange}>
			</umb-input-checkbox-list>
		`
	}
}

export default AkPropertyEditorUICheckBoxListElement

declare global {
	interface HTMLElementTagNameMap {
		'ak-property-editor-ui-check-box-list': AkPropertyEditorUICheckBoxListElement
	}
}
