import { classMap as e, css as t, customElement as n, html as r, property as i, repeat as a, state as o } from "@umbraco-cms/backoffice/external/lit";
import { UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as s, UmbFormControlMixin as c } from "@umbraco-cms/backoffice/validation";
import { UmbChangeEvent as l } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as u } from "@umbraco-cms/backoffice/lit-element";
import { UMB_DOCUMENT_WORKSPACE_CONTEXT as d } from "@umbraco-cms/backoffice/document";
//#region \0@oxc-project+runtime@0.139.0/helpers/esm/decorate.js
function f(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
//#endregion
//#region src/property-editor-ui-check-box-list.ts
var p = class extends c(u, []) {
	constructor() {
		super(), this._defaultApplied = !1, this._value = [], this._options = [], this.readonly = !1, this.mandatory = !1, this.mandatoryMessage = s, this.getFormElement = () => void 0, this.addValidator("valueMissing", () => this.mandatoryMessage, () => !this.readonly && this.mandatory && !this.value?.length);
	}
	set value(e) {
		let t;
		if (Array.isArray(e)) t = e.filter((e) => !!e && typeof e == "string");
		else if (e && typeof e == "string") t = [e];
		else return;
		this._value = t;
		try {
			JSON.stringify(e) !== JSON.stringify(t) && (this.pristine = !1, this.updateComplete.then(() => {
				this.dispatchEvent(new l());
			}));
		} catch (e) {
			console.error("Failed to compare items: ", e);
		}
	}
	get value() {
		return this._value || [];
	}
	set config(e) {
		if (!e) return;
		let t = e.getValueByAlias("items");
		this._defaultValues = e.getValueByAlias("default")?.split(",").map((e) => e.trim()).filter(Boolean), Array.isArray(t) && t.length && (this._options = t.filter((e) => !!e?.key).map((e) => ({
			label: this.localize.string(e.value) || e.key,
			value: e.key,
			checked: this._value.includes(e.key)
		})), this._value.forEach((e) => {
			this._options.find((t) => t.value === e) || this._options.push({
				label: e,
				value: e,
				checked: !0,
				invalid: !0
			});
		}));
	}
	#e(e) {
		let t = this._options.findIndex((t) => t.value === e.target.value);
		t !== -1 && (this._options[t].checked = e.target.checked, this.value = this._options.filter((e) => e.checked).map((e) => e.value), this.dispatchEvent(new l()));
	}
	render() {
		return r`
      ${a(this._options, (e) => e.value, (t) => r`
          <uui-checkbox
            class=${e({ invalid: !!t.invalid })}
            label=${t.label + (t.invalid ? ` (${this.localize.term("validation_legacyOption")})` : "")}
            title=${t.invalid ? this.localize.term("validation_legacyOptionDescription") : ""}
            value=${t.value}
            @change=${this.#e}
            ?checked=${t.checked}
            ?readonly=${this.readonly}
          ></uui-checkbox>
        `)}
    `;
	}
	firstUpdated() {
		this.consumeContext(d, (e) => {
			e && this.observe(e.isNew, (e) => {
				e && !this._defaultApplied && this._defaultValues?.length && !this.value?.length && (this._options.forEach((e) => e.checked = this._defaultValues.includes(e.value)), this.value = this._options.filter((e) => e.checked).map((e) => e.value), this._defaultApplied = !0, this.dispatchEvent(new l()));
			});
		});
	}
	static {
		this.styles = [t`
      uui-checkbox {
        width: 100%;

        &.invalid {
          text-decoration: line-through;
        }
      }
    `];
	}
};
f([o()], p.prototype, "_value", void 0), f([o()], p.prototype, "_options", void 0), f([i({ type: Array })], p.prototype, "value", null), f([i({
	type: Boolean,
	reflect: !0
})], p.prototype, "readonly", void 0), f([i({
	type: Boolean,
	reflect: !0
})], p.prototype, "mandatory", void 0), f([i({ type: String })], p.prototype, "mandatoryMessage", void 0), p = f([n("ak-property-editor-ui-check-box-list")], p);
var m = p;
//#endregion
export { p as AkPropertyEditorUICheckBoxList, m as default };
