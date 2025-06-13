import { css as D, property as y, state as g, customElement as C, html as h, map as O, nothing as P } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as V } from "@umbraco-cms/backoffice/event";
import { UUISelectElement as z } from "@umbraco-cms/backoffice/external/uui";
var S = Object.defineProperty, B = Object.getOwnPropertyDescriptor, w = (t) => {
  throw TypeError(t);
}, u = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? B(e, i) : e, d = t.length - 1, v; d >= 0; d--)
    (v = t[d]) && (n = (r ? v(e, i, n) : v(n)) || n);
  return r && n && S(e, i, n), n;
}, f = (t, e, i) => e.has(t) || w("Cannot " + i), p = (t, e, i) => (f(t, e, "read from private field"), i ? i.call(t) : e.get(t)), m = (t, e, i) => e.has(t) ? w("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), M = (t, e, i, r) => (f(t, e, "write to private field"), e.set(t, i), i), o = (t, e, i) => (f(t, e, "access private method"), i), a, s, E, $, c, A, U, _;
let l = class extends I {
  constructor() {
    super(...arguments), m(this, s), m(this, a, []), this.readonly = !1, this._multiple = !1, this._options = [];
  }
  set value(t) {
    M(this, a, Array.isArray(t) ? t : t ? [t] : []);
  }
  get value() {
    return p(this, a);
  }
  set config(t) {
    if (!t) return;
    const e = t.getValueByAlias("items"), i = t.getValueByAlias("default");
    i && p(this, a).length === 0 && o(this, s, c).call(this, [i]), Array.isArray(e) && e.length > 0 && (this._options = e.map((r) => ({
      name: r.value,
      value: r.key,
      selected: p(this, a).includes(r.key)
    })), p(this, a).forEach((r) => {
      this._options.find((n) => n.value === r) || this._options.push({
        name: `${r} (${this.localize.term("validation_legacyOption")})`,
        value: r,
        selected: !0,
        invalid: !0
      });
    })), this._multiple = t.getValueByAlias("multiple") ?? !1;
  }
  render() {
    return this._multiple ? o(this, s, A).call(this) : o(this, s, U).call(this);
  }
};
a = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakSet();
E = function(t) {
  const e = t.target.value;
  o(this, s, c).call(this, e ? [e] : []);
};
$ = function(t) {
  const e = t.target.selectedOptions, i = e ? Array.from(e).map((r) => r.value) : [];
  o(this, s, c).call(this, i);
};
c = function(t) {
  t && (this.value = t, this.dispatchEvent(new V()));
};
A = function() {
  var t;
  return this.readonly ? h`
              <div>${(t = this.value) == null ? void 0 : t.join(", ")}</div>` : h`
          <select id="native" multiple @change=${o(this, s, $)}>
            ${O(
    this._options,
    (e) => h`
                <option value=${e.value} ?selected=${e.selected}>${e.name}</option>
              `
  )}
          </select>
          ${o(this, s, _).call(this)}
        `;
};
U = function() {
  return h`
          <umb-input-dropdown-list
            .options=${this._options}
            @change=${o(this, s, E)}
            ?readonly=${this.readonly}></umb-input-dropdown-list>
          ${o(this, s, _).call(this)}
        `;
};
_ = function() {
  return p(this, a).some((e) => {
    const i = this._options.find((r) => r.value === e);
    return i ? i.invalid : !1;
  }) ? h`
              <div class="error">
                <umb-localize key="validation_legacyOptionDescription"></umb-localize>
              </div>` : P;
};
l.styles = [
  z.styles,
  D`
            #native {
                height: auto;
            }

            .error {
                color: var(--uui-color-danger);
                font-size: var(--uui-font-size-small);
            }
        `
];
u([
  y({ type: Array })
], l.prototype, "value", 1);
u([
  y({ type: Boolean, reflect: !0 })
], l.prototype, "readonly", 2);
u([
  g()
], l.prototype, "_multiple", 2);
u([
  g()
], l.prototype, "_options", 2);
l = u([
  C("ak-property-editor-ui-dropdown")
], l);
const H = l;
export {
  l as UmbPropertyEditorUIDropdownElement,
  H as default
};
//# sourceMappingURL=client.js.map
