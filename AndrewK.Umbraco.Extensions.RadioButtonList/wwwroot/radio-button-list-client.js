import { UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as e, UmbFormControlMixin as t } from "@umbraco-cms/backoffice/validation";
import { UmbChangeEvent as n } from "@umbraco-cms/backoffice/event";
import { customElement as r, html as i, property as a, query as o, state as s } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
//#region \0@oxc-project+runtime@0.126.0/helpers/decorate.js
function l(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
//#endregion
//#region src/property-editor-ui-radio-button-list.ts
var u = class extends t(c, void 0) {
	constructor(...t) {
		super(...t), this._list = [], this._value = void 0, this.readonly = !1, this.mandatory = !1, this.mandatoryMessage = e, this.getFormElement = () => this._input;
	}
	get value() {
		return this._value;
	}
	set value(e) {
		!e || typeof e != "string" || this._list?.length && !this._list.some((t) => t.value === e) || this._value === e || (this._value = e);
	}
	set config(e) {
		if (!e) return;
		let t = e.getValueByAlias("items"), r = e.getValueByAlias("default");
		!this.value && r && (this.value = r, this.dispatchEvent(new n())), Array.isArray(t) && t.length && (this._list = t.filter((e) => !!e?.key).map((e) => ({
			label: this.localize.string(e.value) || e.key,
			value: e.key
		})), this.value && !this._list.find((e) => e.value === this.value) && this._list.push({
			label: this.value,
			value: this.value,
			invalid: !0
		}));
	}
	#e(e) {
		this.value = e.target.value, this.dispatchEvent(new n());
	}
	render() {
		return i`
      <umb-input-radio-button-list
        .list=${this._list}
        .required=${this.mandatory}
        .requiredMessage=${this.mandatoryMessage}
        .value=${this.value ?? ""}
        ?readonly=${this.readonly}
        @change=${this.#e}
      ></umb-input-radio-button-list>
    `;
	}
};
l([s()], u.prototype, "_list", void 0), l([s()], u.prototype, "_value", void 0), l([a({
	type: Boolean,
	reflect: !0
})], u.prototype, "readonly", void 0), l([a({
	type: Boolean,
	reflect: !0
})], u.prototype, "mandatory", void 0), l([a({ type: String })], u.prototype, "mandatoryMessage", void 0), l([a({ type: String })], u.prototype, "value", null), l([o("umb-input-radio-button-list")], u.prototype, "_input", void 0), u = l([r("ak-property-editor-ui-radio-button-list")], u);
var d = u;
//#endregion
export { u as AkPropertyEditorUIRadioButtonList, d as default };
