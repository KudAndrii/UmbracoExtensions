import { UmbChangeEvent as p } from "@umbraco-cms/backoffice/event";
import { html as _, state as d, property as n, query as m, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
import { UUIFormControlMixin as g } from "@umbraco-cms/backoffice/external/uui";
import { UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as E } from "@umbraco-cms/backoffice/validation";
var A = Object.defineProperty, b = Object.getOwnPropertyDescriptor, v = (t) => {
  throw TypeError(t);
}, s = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? b(e, r) : e, l = t.length - 1, u; l >= 0; l--)
    (u = t[l]) && (o = (i ? u(e, r, o) : u(o)) || o);
  return i && o && A(e, r, o), o;
}, B = (t, e, r) => e.has(t) || v("Cannot " + r), C = (t, e, r) => e.has(t) ? v("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), I = (t, e, r) => (B(t, e, "access private method"), r), h, y;
let a = class extends g(c, void 0) {
  constructor() {
    super(...arguments), C(this, h), this._list = [], this._value = void 0, this.readonly = !1, this.mandatory = !1, this.mandatoryMessage = E, this.getFormElement = () => this._input;
  }
  get value() {
    return this._value;
  }
  set value(t) {
    !t || typeof t != "string" || this._list?.length && !this._list.some((e) => e.value === t) || this._value === t || (this._value = t, this.dispatchEvent(new p()));
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("items"), r = t.getValueByAlias("default");
    !this.value && r && (this.value = r, this.dispatchEvent(new p())), Array.isArray(e) && e.length && (this._list = e.filter((i) => !!i?.key).map((i) => ({
      label: this.localize.string(i.value) || i.key,
      value: i.key
    })), this.value && !this._list.find((i) => i.value === this.value) && this._list.push({ label: this.value, value: this.value, invalid: !0 }));
  }
  render() {
    return _`
          <umb-input-radio-button-list
            .list=${this._list}
            .required=${this.mandatory}
            .requiredMessage=${this.mandatoryMessage}
            .value=${this.value ?? ""}
            ?readonly=${this.readonly}
            @change=${I(this, h, y)}
          ></umb-input-radio-button-list>
        `;
  }
};
h = /* @__PURE__ */ new WeakSet();
y = function(t) {
  this.value = t.target.value, this.dispatchEvent(new p());
};
s([
  d()
], a.prototype, "_list", 2);
s([
  d()
], a.prototype, "_value", 2);
s([
  n({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
s([
  n({ type: Boolean, reflect: !0 })
], a.prototype, "mandatory", 2);
s([
  n({ type: String })
], a.prototype, "mandatoryMessage", 2);
s([
  n({ type: String })
], a.prototype, "value", 1);
s([
  m("umb-input-radio-button-list")
], a.prototype, "_input", 2);
a = s([
  f("ak-property-editor-ui-radio-button-list")
], a);
const O = a;
export {
  a as AkPropertyEditorUIRadioButtonListElement,
  O as default
};
