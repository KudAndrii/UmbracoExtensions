import { css, customElement, html, map, nothing, property, state } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { UmbChangeEvent } from '@umbraco-cms/backoffice/event'
import { UUISelectElement } from '@umbraco-cms/backoffice/external/uui';
import type {
	UmbPropertyEditorConfigCollection,
	UmbPropertyEditorUiElement,
} from '@umbraco-cms/backoffice/property-editor';
import type { UUISelectEvent } from '@umbraco-cms/backoffice/external/uui';

@customElement('ak-property-editor-ui-dropdown')
export class UmbPropertyEditorUIDropdownElement extends UmbLitElement implements UmbPropertyEditorUiElement {
	#selection: Array<string> = [];

	@property({ type: Array })
	public set value(value: Array<string> | string | undefined) {
		this.#selection = Array.isArray(value) ? value : value ? [value] : [];
	}
	public get value(): Array<string> | undefined {
		return this.#selection;
	}

	@property({ type: Boolean, reflect: true }) readonly = false;

	public set config(config: UmbPropertyEditorConfigCollection | undefined) {
		console.warn('config', config)
		if (!config) return;
		
		console.warn('config', config)

		const items: Array<{ key: string, value: string }> | undefined = config.getValueByAlias('items');
		const defaultValue: string | undefined = config.getValueByAlias('default');

		console.warn('before default')
		if (!!defaultValue && this.#selection.length === 0) {
			console.warn('setting default: ', defaultValue)
			this.#selection.push(defaultValue);
			//this.#setValue([defaultValue]);
		}

		if (Array.isArray(items) && items.length > 0) {
			this._options = items.map((item) => ({
				name: item.value,
				value: item.key,
				selected: this.#selection.includes(item.key)
			}));

			// If selection includes a value not in the list, add it to the list
			this.#selection.forEach((value) => {
				if (!this._options.find((item) => item.value === value)) {
					this._options.push({
						name: `${value} (${this.localize.term('validation_legacyOption')})`,
						value,
						selected: true,
						invalid: true,
					});
				}
			});
		}

		this._multiple = config.getValueByAlias<boolean>('multiple') ?? false;
	}

	@state() private _multiple: boolean = false;

	@state() private _options: Array<Option & { invalid?: boolean }> = [];

	#onChange(event: UUISelectEvent) {
		const value = event.target.value as string;
		console.warn('value', value);
		this.#setValue(value ? [value] : []);
	}

	#onChangeMultiple(event: Event & { target: HTMLSelectElement }) {
		const selected = event.target.selectedOptions;
		const value = selected ? Array.from(selected).map((option) => option.value) : [];
		this.#setValue(value);
	}

	#setValue(value: Array<string> | string | null | undefined) {
		if (!value) return;
		this.value = value;
		this.dispatchEvent(new UmbChangeEvent());
	}

	override render() {
		return this._multiple ? this.#renderDropdownMultiple() : this.#renderDropdownSingle();
	}

	#renderDropdownMultiple() {
		if (this.readonly) {
			return html`<div>${this.value?.join(', ')}</div>`;
		}

		return html`
			<select id="native" multiple @change=${this.#onChangeMultiple}>
				${map(
					this._options,
					(item) => html`
						<option value=${item.value} ?selected=${item.selected}>${item.name}</option>
					`,
				)}
			</select>
			${this.#renderDropdownValidation()}
		`;
	}

	#renderDropdownSingle() {
		return html`
			<umb-input-dropdown-list
				.options=${this._options}
				@change=${this.#onChange}
				?readonly=${this.readonly}></umb-input-dropdown-list>
			${this.#renderDropdownValidation()}
		`;
	}

	#renderDropdownValidation() {
		const selectionHasInvalids = this.#selection.some((value) => {
			const option = this._options.find((item) => item.value === value);
			return option ? option.invalid : false;
		});

		if (selectionHasInvalids) {
			return html`<div class="error"><umb-localize key="validation_legacyOptionDescription"></umb-localize></div>`;
		}

		return nothing;
	}

	static override readonly styles = [
		UUISelectElement.styles,
		css`
			#native {
				height: auto;
			}

			.error {
				color: var(--uui-color-danger);
				font-size: var(--uui-font-size-small);
			}
		`,
	];
}

export default UmbPropertyEditorUIDropdownElement;

declare global {
	interface HTMLElementTagNameMap {
		'ak-property-editor-ui-dropdown': UmbPropertyEditorUIDropdownElement;
	}
}
