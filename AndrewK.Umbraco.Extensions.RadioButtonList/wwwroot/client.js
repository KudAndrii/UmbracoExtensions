import { UmbChangeEvent as d } from "@umbraco-cms/backoffice/event";
import { html as m, state as y, property as p, customElement as _ } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as f, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as E } from "@umbraco-cms/backoffice/validation";
var g = Object.defineProperty, A = Object.getOwnPropertyDescriptor, h = (t) => {
  throw TypeError(t);
}, o = (t, e, a, r) => {
  for (var s = r > 1 ? void 0 : r ? A(e, a) : e, n = t.length - 1, l; n >= 0; n--)
    (l = t[n]) && (s = (r ? l(e, a, s) : l(s)) || s);
  return r && s && g(e, a, s), s;
}, b = (t, e, a) => e.has(t) || h("Cannot " + a), C = (t, e, a) => e.has(t) ? h("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, a), B = (t, e, a) => (b(t, e, "access private method"), a), u, v;
let i = class extends f(c) {
  constructor() {
    super(...arguments), C(this, u), this._list = [], this.readonly = !1, this.mandatoryMessage = E;
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("items"), a = t.getValueByAlias("default");
    !this.value && a && (this.value = a, this.dispatchEvent(new d())), Array.isArray(e) && e.length && (this._list = e.map((r) => ({
      label: r.value,
      value: r.key
    })), this.value && !this._list.find((r) => r.value === this.value) && this._list.push({ label: this.value, value: this.value, invalid: !0 }));
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-radio-button-list"));
  }
  render() {
    return m`
			<umb-input-radio-button-list
				.list=${this._list}
				.required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				.value=${this.value ?? ""}
				?readonly=${this.readonly}
				@change=${B(this, u, v)}>
			</umb-input-radio-button-list>
		`;
  }
};
u = /* @__PURE__ */ new WeakSet();
v = function(t) {
  this.value = t.target.value, this.dispatchEvent(new d());
};
o([
  y()
], i.prototype, "_list", 2);
o([
  p({ type: Boolean, reflect: !0 })
], i.prototype, "readonly", 2);
o([
  p({ type: Boolean })
], i.prototype, "mandatory", 2);
o([
  p({ type: String })
], i.prototype, "mandatoryMessage", 2);
i = o([
  _("ak-property-editor-ui-radio-button-list")
], i);
const I = i;
export {
  i as AkPropertyEditorUIRadioButtonListElement,
  I as default
};
//# sourceMappingURL=client.js.map
