import { css as e, customElement as t, html as n, nothing as r, property as i, query as a, repeat as o, state as s, when as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbFormControlMixin as l, umbBindToValidation as u } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as d } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as f } from "@umbraco-cms/backoffice/property";
import { UmbChangeEvent as p, UmbDeleteEvent as m, UmbInputEvent as h } from "@umbraco-cms/backoffice/event";
import { UmbSorterController as g } from "@umbraco-cms/backoffice/sorter";
import { umbConfirmModal as _ } from "@umbraco-cms/backoffice/modal";
import { UUIFormControlMixin as v } from "@umbraco-cms/backoffice/external/uui";
//#region \0@oxc-project+runtime@0.132.0/helpers/decorate.js
function y(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
//#endregion
//#region src/input-dictionary-item.ts
var b = class extends v(d, void 0) {
	constructor(...e) {
		super(...e), this.disabled = !1, this.readonly = !1;
	}
	async #e() {
		await _(this, {
			headline: `Delete ${this.value?.key || "item"}`,
			content: "Are you sure you want to delete this item?",
			color: "danger",
			confirmLabel: "Delete"
		}), this.dispatchEvent(new m());
	}
	#t(e) {
		e.stopPropagation(), e.key === "Enter" && (this.value?.key ? this.value.value ? this.dispatchEvent(new CustomEvent("enter")) : this._valueInput?.focus() : this._keyInput?.focus());
	}
	#n(e, t) {
		this.#i(e, t), this.dispatchEvent(new h());
	}
	#r(e, t) {
		this.#i(e, t), this.dispatchEvent(new p());
	}
	#i(e, t) {
		e.stopPropagation();
		let n = e.currentTarget, r = this.value ?? {
			key: "",
			value: ""
		};
		this.value = {
			...r,
			[t]: n.value
		};
	}
	#a(e) {
		e.stopPropagation();
	}
	#o(e) {
		e.stopPropagation();
	}
	async focus() {
		await this.updateComplete, this._keyInput?.focus();
	}
	getFormElement() {}
	render() {
		return n`
      ${this.disabled || this.readonly ? r : n`
            <uui-icon name="icon-grip" class="handle"></uui-icon>
          `}

      <umb-form-validation-message id="validation-message" @invalid=${this.#o} @valid=${this.#a}>
        <div class="kvp-holder">
          <uui-input
            id="input-key"
            label="Key"
            placeholder="Key"
            value=${this.value?.key ?? ""}
            @keydown=${this.#t}
            @input=${(e) => this.#n(e, "key")}
            @change=${(e) => this.#r(e, "key")}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            required
            required-message="Key is missing"
          ></uui-input>
          <uui-input
            id="input-value"
            label="Value"
            placeholder="Value"
            value=${this.value?.value ?? ""}
            @keydown=${this.#t}
            @input=${(e) => this.#n(e, "value")}
            @change=${(e) => this.#r(e, "value")}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
          ></uui-input>
        </div>
      </umb-form-validation-message>

      ${c(!this.readonly, () => n`
          <uui-button
            compact
            label="${this.localize.term("general_remove")} ${this.value}"
            look="outline"
            ?disabled=${this.disabled}
            @click=${this.#e}
          >
            <uui-icon name="icon-trash"></uui-icon>
          </uui-button>
        `)}
    `;
	}
	static {
		this.styles = [e`
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
    `, e`
      .kvp-holder {
        display: inline-flex;
        justify-content: space-between;
        gap: 5px;
        width: 100%;

        & > * {
          flex: 1;
        }
      }
    `];
	}
};
y([i({
	type: Boolean,
	reflect: !0
})], b.prototype, "disabled", void 0), y([i({
	type: Boolean,
	reflect: !0
})], b.prototype, "readonly", void 0), y([a("#input-key")], b.prototype, "_keyInput", void 0), y([a("#input-value")], b.prototype, "_valueInput", void 0), b = y([t("ak-input-dictionary-item")], b);
//#endregion
//#region src/input-dictionary.ts
var x = class extends l(d, void 0) {
	#e;
	set disabled(e) {
		this.#t = e, e && this.#e.disable();
	}
	get disabled() {
		return this.#t;
	}
	#t;
	set readonly(e) {
		this.#n = e, e && this.#e.disable();
	}
	get readonly() {
		return this.#n;
	}
	#n;
	constructor() {
		super(), this.#e = new g(this, {
			getUniqueOfElement: (e) => e.getAttribute("data-sort-entry-id"),
			getUniqueOfModel: (e) => e.key,
			identifier: "AndrewK.SorterIdentifier.Dictionary",
			itemSelector: "ak-input-dictionary-item",
			containerSelector: "#sorter-wrapper",
			onChange: ({ model: e }) => {
				let t = this._items;
				this._items = e, this.requestUpdate("_items", t), this.dispatchEvent(new p());
			}
		}), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.#t = !1, this.#n = !1, this._items = [], this.addValidator("badInput", () => "A key is missing", () => !this.readonly && !!this._items?.length && !this._items.map((e) => e.key).every(Boolean)), this.addValidator("rangeUnderflow", () => this.minMessage, () => !!this.min && this._items.length < this.min), this.addValidator("rangeOverflow", () => this.maxMessage, () => !!this.max && this._items.length > this.max);
	}
	get items() {
		return this._items;
	}
	set items(e) {
		let t = [];
		switch (typeof e) {
			case "string":
				e && t.push({
					key: e,
					value: e
				});
				break;
			case "object":
				Array.isArray(e) && (t = this.#s(e));
				break;
		}
		this.value = t?.length > 0 ? "some value" : "", this._items = t, this.#e.setModel(this.items);
		try {
			JSON.stringify(e) !== JSON.stringify(t) && (this.pristine = !1, this.updateComplete.then(() => {
				this.dispatchEvent(new p());
			}));
		} catch (e) {
			console.error("Failed to compare items: ", e);
		}
	}
	async #r() {
		this._items = [...this._items, {
			key: "",
			value: ""
		}], this.pristine = !1, this.dispatchEvent(new p()), await this.#a();
	}
	#i(e, t) {
		e.stopPropagation();
		let n = e.currentTarget.value;
		this._items = this._items.map((e, r) => r === t ? n : e), this.dispatchEvent(new p());
	}
	async #a() {
		await this.updateComplete;
		let e = this.shadowRoot?.querySelectorAll("ak-input-dictionary-item");
		await e[e.length - 1].focus();
	}
	#o(e, t) {
		e.stopPropagation(), this._items = this._items.filter((e, n) => n !== t), this.pristine = !1, this.dispatchEvent(new p());
	}
	getFormElement() {}
	#s(e) {
		let t = [];
		for (let n of e) {
			let e;
			switch (typeof n) {
				case "string":
					e = {
						key: n,
						value: n
					};
					break;
				case "object":
					n && "key" in n && typeof n.key == "string" && (e = {
						key: n.key,
						value: ""
					}, "value" in n && typeof n.value == "string" && n.value && (e.value = n.value));
					break;
			}
			e && t.push(e);
		}
		return t;
	}
	render() {
		return n`
      <div id="sorter-wrapper">${this.#c()}</div>
      ${this.#u()} ${this.#l()}
    `;
	}
	#c() {
		return n`
      ${o(this._items, (e, t) => t, (e, t) => n`
          <ak-input-dictionary-item
            name="item-${t}"
            data-sort-entry-id=${e.key}
            required
            required-message="Item ${t + 1} is missing a value"
            .value=${e}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            @enter=${this.#r}
            @delete=${(e) => this.#o(e, t)}
            @input=${(e) => this.#i(e, t)}
          ></ak-input-dictionary-item>
        `)}
    `;
	}
	#l() {
		return this.disabled || this.readonly || this.max === 1 && this._items.length > 0 ? r : n`
      <uui-button
        color="default"
        id="action"
        label="Add"
        look="placeholder"
        ?disabled=${this.disabled}
        @click=${this.#r}
      ></uui-button>
    `;
	}
	#u() {
		if (!this._items?.length) return r;
		let e = this._items.map((e) => e.key), t = new Set(e);
		return !e.length || e.length === t.size ? r : n`
      <uui-box class="info-block">
        <div slot="headline" class="info-block-headline">
          <uui-icon name="icon-info"></uui-icon>
          <p>Duplicated keys detected.</p>
        </div>
      </uui-box>
    `;
	}
	static {
		this.styles = [e`
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
    `, e`
      .info-block {
        background-color: var(--uui-color-disabled-standalone);
        margin-bottom: var(--uui-size-space-3);
      }

      .info-block-headline {
        display: flex;
        align-items: center;
        gap: var(--uui-size-space-3);
      }
    `];
	}
};
y([i({ type: Number })], x.prototype, "min", void 0), y([i({
	type: String,
	attribute: "min-message"
})], x.prototype, "minMessage", void 0), y([i({ type: Number })], x.prototype, "max", void 0), y([i({
	type: String,
	attribute: "min-message"
})], x.prototype, "maxMessage", void 0), y([i({
	type: Boolean,
	reflect: !0
})], x.prototype, "disabled", null), y([i({
	type: Boolean,
	reflect: !0
})], x.prototype, "readonly", null), y([s()], x.prototype, "_items", void 0), y([i({ type: Array })], x.prototype, "items", null), x = y([t("ak-input-dictionary")], x);
//#endregion
//#region src/property-editor-ui-dictionary.ts
var S = class extends l(d) {
	set config(e) {
		e && (this._min = Number(e.getValueByAlias("min")) || 0, this._max = Number(e.getValueByAlias("max")) || Infinity);
	}
	constructor() {
		super(), this.disabled = !1, this.readonly = !1, this.required = !1, this._min = 0, this._max = Infinity, this.consumeContext(f, (e) => {
			this._label = e?.getLabel();
		});
	}
	firstUpdated() {
		this._min && this._max && this._min > this._max && console.warn(`Property '${this._label}' (Dictionary) has been misconfigured, 'min' is greater than 'max'. Please correct your data type configuration.`, this), this.addFormControlElement(this.shadowRoot.querySelector("ak-input-dictionary"));
	}
	#e(e) {
		e.stopPropagation();
		let t = e.currentTarget;
		this.value = t.items, this.dispatchEvent(new p());
	}
	render() {
		return n`
      <ak-input-dictionary
        max=${this._max}
        min=${this._min}
        .items=${this.value ?? []}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ?required=${this.required}
        @change=${this.#e}
        ${u(this)}
      ></ak-input-dictionary>
    `;
	}
};
y([i({
	type: Boolean,
	reflect: !0
})], S.prototype, "disabled", void 0), y([i({
	type: Boolean,
	reflect: !0
})], S.prototype, "readonly", void 0), y([i({
	type: Boolean,
	reflect: !0
})], S.prototype, "required", void 0), y([s()], S.prototype, "_label", void 0), y([s()], S.prototype, "_min", void 0), y([s()], S.prototype, "_max", void 0), S = y([t("ak-property-editor-ui-dictionary")], S);
var C = S;
//#endregion
export { S as AkPropertyEditorUIDictionary, C as default };
