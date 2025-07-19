import { UmbChangeEvent as h } from "@umbraco-cms/backoffice/event";
import { html as m, state as y, property as p, query as _, customElement as c } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as f } from "@umbraco-cms/backoffice/lit-element";
import { UUIFormControlMixin as E } from "@umbraco-cms/backoffice/external/uui";
import { UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as g } from "@umbraco-cms/backoffice/validation";
var A = Object.defineProperty, b = Object.getOwnPropertyDescriptor, d = (t) => {
  throw TypeError(t);
}, o = (t, e, r, a) => {
  for (var s = a > 1 ? void 0 : a ? b(e, r) : e, n = t.length - 1, l; n >= 0; n--)
    (l = t[n]) && (s = (a ? l(e, r, s) : l(s)) || s);
  return a && s && A(e, r, s), s;
}, B = (t, e, r) => e.has(t) || d("Cannot " + r), C = (t, e, r) => e.has(t) ? d("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), I = (t, e, r) => (B(t, e, "access private method"), r), u, v;
let i = class extends E(f) {
  constructor() {
    super(...arguments), C(this, u), this._list = [], this.readonly = !1, this.mandatoryMessage = g, this.getFormElement = () => this._input;
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("items"), r = t.getValueByAlias("default");
    !this.value && r && (this.value = r, this.dispatchEvent(new h())), Array.isArray(e) && e.length && (this._list = e.map((a) => ({
      label: this.localize.string(a.value) || a.value,
      value: a.key
    })), this.value && !this._list.find((a) => a.value === this.value) && this._list.push({ label: this.value, value: this.value, invalid: !0 }));
  }
  render() {
    return m`
          <umb-input-radio-button-list
            .list=${this._list}
            .required=${this.mandatory}
            .requiredMessage=${this.mandatoryMessage}
            .value=${this.value ?? ""}
            ?readonly=${this.readonly}
            @change=${I(this, u, v)}
          ></umb-input-radio-button-list>
        `;
  }
};
u = /* @__PURE__ */ new WeakSet();
v = function(t) {
  this.value = t.target.value, this.dispatchEvent(new h());
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
o([
  _("umb-input-radio-button-list")
], i.prototype, "_input", 2);
i = o([
  c("ak-property-editor-ui-radio-button-list")
], i);
const $ = i;
export {
  i as AkPropertyEditorUIRadioButtonListElement,
  $ as default
};
//# sourceMappingURL=client.js.map
