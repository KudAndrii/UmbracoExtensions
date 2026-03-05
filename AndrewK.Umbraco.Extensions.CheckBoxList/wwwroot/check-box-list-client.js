import { repeat as y, classMap as v, html as c, css as m, state as u, property as l, customElement as g } from "@umbraco-cms/backoffice/external/lit";
import { UmbFormControlMixin as k, UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as A } from "@umbraco-cms/backoffice/validation";
import { UmbChangeEvent as p } from "@umbraco-cms/backoffice/event";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { UMB_DOCUMENT_WORKSPACE_CONTEXT as C } from "@umbraco-cms/backoffice/document";
var O = Object.defineProperty, x = Object.getOwnPropertyDescriptor, f = (t) => {
  throw TypeError(t);
}, r = (t, i, e, o) => {
  for (var s = o > 1 ? void 0 : o ? x(i, e) : i, n = t.length - 1, h; n >= 0; n--)
    (h = t[n]) && (s = (o ? h(i, e, s) : h(s)) || s);
  return o && s && O(i, e, s), s;
}, M = (t, i, e) => i.has(t) || f("Cannot " + e), b = (t, i, e) => i.has(t) ? f("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(t) : i.set(t, e), w = (t, i, e) => (M(t, i, "access private method"), e), d, _;
let a = class extends k(E, []) {
  constructor() {
    super(), b(this, d), this._defaultApplied = !1, this._value = [], this._options = [], this.readonly = !1, this.mandatory = !1, this.mandatoryMessage = A, this.getFormElement = () => {
    }, this.addValidator(
      "valueMissing",
      () => this.mandatoryMessage,
      () => !this.readonly && this.mandatory && !this.value?.length
    );
  }
  set value(t) {
    let i;
    if (Array.isArray(t))
      i = t.filter((e) => !!e && typeof e == "string");
    else if (t && typeof t == "string")
      i = [t];
    else
      return;
    this._value = i;
    try {
      JSON.stringify(t) !== JSON.stringify(i) && (this.pristine = !1, this.updateComplete.then(() => {
        this.dispatchEvent(new p());
      }));
    } catch (e) {
      console.error("Failed to compare items: ", e);
    }
  }
  get value() {
    return this._value || [];
  }
  set config(t) {
    if (!t) return;
    const i = t.getValueByAlias("items");
    this._defaultValues = t.getValueByAlias("default")?.split(",").map((e) => e.trim()).filter(Boolean), Array.isArray(i) && i.length && (this._options = i.filter((e) => !!e?.key).map((e) => ({
      label: this.localize.string(e.value) || e.key,
      value: e.key,
      checked: this._value.includes(e.key)
    })), this._value.forEach((e) => {
      this._options.find((o) => o.value === e) || this._options.push({
        label: e,
        value: e,
        checked: !0,
        invalid: !0
      });
    }));
  }
  render() {
    return c`
      ${y(
      this._options,
      (t) => t.value,
      (t) => c`
          <uui-checkbox
            class=${v({ invalid: !!t.invalid })}
            label=${t.label + (t.invalid ? ` (${this.localize.term("validation_legacyOption")})` : "")}
            title=${t.invalid ? this.localize.term("validation_legacyOptionDescription") : ""}
            value=${t.value}
            @change=${w(this, d, _)}
            ?checked=${t.checked}
            ?readonly=${this.readonly}
          ></uui-checkbox>
        `
    )}
    `;
  }
  firstUpdated() {
    this.consumeContext(C, (t) => {
      t && this.observe(t.isNew, (i) => {
        i && !this._defaultApplied && this._defaultValues?.length && !this.value?.length && (this._options.forEach((e) => e.checked = this._defaultValues.includes(e.value)), this.value = this._options.filter((e) => e.checked).map((e) => e.value), this._defaultApplied = !0, this.dispatchEvent(new p()));
      });
    });
  }
};
d = /* @__PURE__ */ new WeakSet();
_ = function(t) {
  const i = this._options.findIndex((e) => e.value === t.target.value);
  i !== -1 && (this._options[i].checked = t.target.checked, this.value = this._options.filter((e) => e.checked).map((e) => e.value), this.dispatchEvent(new p()));
};
a.styles = [
  m`
      uui-checkbox {
        width: 100%;

        &.invalid {
          text-decoration: line-through;
        }
      }
    `
];
r([
  u()
], a.prototype, "_value", 2);
r([
  u()
], a.prototype, "_options", 2);
r([
  l({ type: Array })
], a.prototype, "value", 1);
r([
  l({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
r([
  l({ type: Boolean, reflect: !0 })
], a.prototype, "mandatory", 2);
r([
  l({ type: String })
], a.prototype, "mandatoryMessage", 2);
a = r([
  g("ak-property-editor-ui-check-box-list")
], a);
const V = a;
export {
  a as AkPropertyEditorUICheckBoxList,
  V as default
};
