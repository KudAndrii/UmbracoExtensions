import { html as v, property as h, state as E, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as _ } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as A } from "@umbraco-cms/backoffice/lit-element";
import { UmbFormControlMixin as k, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as C } from "@umbraco-cms/backoffice/validation";
var x = Object.defineProperty, w = Object.getOwnPropertyDescriptor, f = (t) => {
  throw TypeError(t);
}, l = (t, e, r, s) => {
  for (var i = s > 1 ? void 0 : s ? w(e, r) : e, p = t.length - 1, c; p >= 0; p--)
    (c = t[p]) && (i = (s ? c(e, r, i) : c(i)) || i);
  return s && i && x(e, r, i), i;
}, y = (t, e, r) => e.has(t) || f("Cannot " + r), n = (t, e, r) => (y(t, e, "read from private field"), r ? r.call(t) : e.get(t)), u = (t, e, r) => e.has(t) ? f("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), B = (t, e, r, s) => (y(t, e, "write to private field"), e.set(t, r), r), M = (t, e, r) => (y(t, e, "access private method"), r), a, d, m;
let o = class extends k(
  A,
  void 0
) {
  constructor() {
    super(...arguments), u(this, d), u(this, a, []), this.readonly = !1, this.mandatoryMessage = C, this._list = [];
  }
  set value(t) {
    B(this, a, Array.isArray(t) ? t : t ? [t] : []);
  }
  get value() {
    return n(this, a);
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("items"), r = t.getValueByAlias("default");
    r && n(this, a).length === 0 && (r.split(",").map((s) => s.trim()).filter(Boolean).forEach((s) => n(this, a).push(s)), this.dispatchEvent(new _())), Array.isArray(e) && e.length && (this._list = e.map((s) => ({
      label: s.value,
      value: s.key,
      checked: n(this, a).includes(s.key)
    })), n(this, a).forEach((s) => {
      this._list.find((i) => i.value === s) || this._list.push({ label: s, value: s, checked: !0, invalid: !0 });
    }));
  }
  firstUpdated() {
    this.addFormControlElement(this.shadowRoot.querySelector("umb-input-checkbox-list"));
  }
  render() {
    return v`
			<umb-input-checkbox-list
				.list=${this._list}
				.required=${this.mandatory}
				.requiredMessage=${this.mandatoryMessage}
				.selection=${n(this, a)}
				?readonly=${this.readonly}
				@change=${M(this, d, m)}>
			</umb-input-checkbox-list>
		`;
  }
};
a = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
m = function(t) {
  t != null && t.target && "selection" in t.target && (this.value = t.target.selection, this.dispatchEvent(new _()));
};
l([
  h({ type: Array })
], o.prototype, "value", 1);
l([
  h({ type: Boolean, reflect: !0 })
], o.prototype, "readonly", 2);
l([
  h({ type: Boolean })
], o.prototype, "mandatory", 2);
l([
  h({ type: String })
], o.prototype, "mandatoryMessage", 2);
l([
  E()
], o.prototype, "_list", 2);
o = l([
  g("ak-property-editor-ui-check-box-list")
], o);
const O = o;
export {
  o as AkPropertyEditorUICheckBoxListElement,
  O as default
};
//# sourceMappingURL=client.js.map
