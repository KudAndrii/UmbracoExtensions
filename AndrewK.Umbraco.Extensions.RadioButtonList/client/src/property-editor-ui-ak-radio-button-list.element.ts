import type { UmbInputRadioButtonListElement, UmbRadioButtonItem } from '@umbraco-cms/backoffice/components'
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event'
import { html, customElement, property, state } from '@umbraco-cms/backoffice/external/lit'
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element'
import { UMB_VALIDATION_EMPTY_LOCALIZATION_KEY, UmbFormControlMixin } from '@umbraco-cms/backoffice/validation'
import type {
	UmbPropertyEditorConfigCollection,
	UmbPropertyEditorUiElement,
} from '@umbraco-cms/backoffice/property-editor'

@customElement('ak-property-editor-ui-radio-button-list')
export class AkPropertyEditorUIRadioButtonListElement
	extends UmbFormControlMixin<string | undefined, typeof UmbLitElement, undefined>(UmbLitElement)
	implements UmbPropertyEditorUiElement
{
	@state()
	private _list: Array<UmbRadioButtonItem> = []

	@property({ type: Boolean, reflect: true }) readonly = false

	@property({ type: Boolean }) mandatory?: boolean

	@property({ type: String }) mandatoryMessage = UMB_VALIDATION_EMPTY_LOCALIZATION_KEY

	public set config(config: UmbPropertyEditorConfigCollection | undefined) {
		if (!config) return

		const items = config.getValueByAlias('items')
		const defaultValue: string | undefined = config.getValueByAlias('default')
		
		if (!this.value && !!defaultValue) {
			this.value = defaultValue
			this.dispatchEvent(new UmbChangeEvent())
		}

		if (Array.isArray(items) && !!items.length) {
			this._list = items.map((item) => ({
				label: item.value,
				value: item.key
			}))

			// If selection includes a value which is not in the list, add it to the list as invalid
			if (this.value && !this._list.find((item) => item.value === this.value)) {
				this._list.push({ label: this.value, value: this.value, invalid: true })
			}
		}
	}

	protected override firstUpdated() {
		this.addFormControlElement(this.shadowRoot!.querySelector('umb-input-radio-button-list')!)
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
				@change=${this.#onChange}>
			</umb-input-radio-button-list>
		`
	}
}

export default AkPropertyEditorUIRadioButtonListElement

declare global {
	interface HTMLElementTagNameMap {
		'ak-property-editor-ui-radio-button-list': AkPropertyEditorUIRadioButtonListElement
	}
}
