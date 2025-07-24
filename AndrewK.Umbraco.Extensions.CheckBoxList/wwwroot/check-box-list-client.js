import { repeat as y, classMap as _, html as c, css as f, state as d, property as l, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbChangeEvent as g } from "@umbraco-cms/backoffice/event";
import { UUIFormControlMixin as k } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as E } from "@umbraco-cms/backoffice/lit-element";
import { UMB_VALIDATION_EMPTY_LOCALIZATION_KEY as A } from "@umbraco-cms/backoffice/validation";
var x = Object.defineProperty, C = Object.getOwnPropertyDescriptor, u = (e) => {
  throw TypeError(e);
}, s = (e, i, t, o) => {
  for (var r = o > 1 ? void 0 : o ? C(i, t) : i, n = e.length - 1, h; n >= 0; n--)
    (h = e[n]) && (r = (o ? h(i, t, r) : h(r)) || r);
  return o && r && x(i, t, r), r;
}, O = (e, i, t) => i.has(e) || u("Cannot " + t), $ = (e, i, t) => i.has(e) ? u("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(e) : i.set(e, t), B = (e, i, t) => (O(e, i, "access private method"), t), p, v;
let a = class extends k(E, []) {
  constructor() {
    super(), $(this, p), this._value = [], this._options = [], this.readonly = !1, this.mandatory = !1, this.mandatoryMessage = A, this.getFormElement = () => {
    }, this.addValidator(
      "valueMissing",
      () => this.mandatoryMessage,
      () => !this.readonly && this.mandatory && !this.value?.length
    );
  }
  set value(e) {
    if (JSON.stringify(this._value) !== JSON.stringify(e)) {
      if (Array.isArray(e))
        this._value = e.filter((i) => !!i && typeof i == "string");
      else if (e && typeof e == "string")
        this._value = [e];
      else
        return;
      this.dispatchEvent(new g());
    }
  }
  get value() {
    return this._value || [];
  }
  set config(e) {
    if (!e) return;
    const i = e.getValueByAlias("items");
    this._defaultValues = e.getValueByAlias("default")?.split(",").map((t) => t.trim()).filter(Boolean), Array.isArray(i) && i.length && (this._options = i.map((t) => ({
      label: this.localize.string(t.value) || t.key,
      value: t.key,
      checked: this._value.includes(t.key)
    })), this._value.forEach((t) => {
      this._options.find((o) => o.value === t) || this._options.push({
        label: t,
        value: t,
        checked: !0,
        invalid: !0
      });
    }));
  }
  render() {
    return c`
          ${y(
      this._options,
      (e) => e.value,
      (e) => c`
              <uui-checkbox
                class=${_({ invalid: !!e.invalid })}
                label=${e.label + (e.invalid ? ` (${this.localize.term("validation_legacyOption")})` : "")}
                title=${e.invalid ? this.localize.term("validation_legacyOptionDescription") : ""}
                value=${e.value}
                @change=${B(this, p, v)}
                ?checked=${e.checked}
                ?readonly=${this.readonly}
              ></uui-checkbox>
            `
    )}
        `;
  }
  firstUpdated() {
    this._defaultValues?.length && !this.value?.length && (this._options.forEach((e) => e.checked = this._defaultValues.includes(e.value)), this.value = this._options.filter((e) => e.checked).map((e) => e.value));
  }
};
p = /* @__PURE__ */ new WeakSet();
v = function(e) {
  const i = this._options.findIndex((t) => t.value === e.target.value);
  i !== -1 && (this._options[i].checked = e.target.checked, this.value = this._options.filter((t) => t.checked).map((t) => t.value));
};
a.styles = [
  f`
            uui-checkbox {
                width: 100%;

                &.invalid {
                    text-decoration: line-through;
                }
            }
        `
];
s([
  d()
], a.prototype, "_value", 2);
s([
  d()
], a.prototype, "_options", 2);
s([
  l({ type: Array })
], a.prototype, "value", 1);
s([
  l({ type: Boolean, reflect: !0 })
], a.prototype, "readonly", 2);
s([
  l({ type: Boolean, reflect: !0 })
], a.prototype, "mandatory", 2);
s([
  l({ type: String })
], a.prototype, "mandatoryMessage", 2);
a = s([
  m("ak-property-editor-ui-check-box-list")
], a);
const L = a;
export {
  a as AkPropertyEditorUICheckBoxListElement,
  L as default
};
//# sourceMappingURL=check-box-list-client.js.map
