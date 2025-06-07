import { css as D, property as y, state as w, customElement as C, html as u, map as O, nothing as P } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as I } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as V } from "@umbraco-cms/backoffice/event";
import { UUISelectElement as z } from "@umbraco-cms/backoffice/external/uui";
var S = Object.defineProperty, B = Object.getOwnPropertyDescriptor, g = (t) => {
  throw TypeError(t);
}, c = (t, e, i, r) => {
  for (var o = r > 1 ? void 0 : r ? B(e, i) : e, h = t.length - 1, d; h >= 0; h--)
    (d = t[h]) && (o = (r ? d(e, i, o) : d(o)) || o);
  return r && o && S(e, i, o), o;
}, f = (t, e, i) => e.has(t) || g("Cannot " + i), p = (t, e, i) => (f(t, e, "read from private field"), i ? i.call(t) : e.get(t)), m = (t, e, i) => e.has(t) ? g("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), M = (t, e, i, r) => (f(t, e, "write to private field"), e.set(t, i), i), a = (t, e, i) => (f(t, e, "access private method"), i), s, n, E, $, v, A, U, _;
let l = class extends I {
  constructor() {
    super(...arguments), m(this, n), m(this, s, []), this.readonly = !1, this._multiple = !1, this._options = [];
  }
  set value(t) {
    M(this, s, Array.isArray(t) ? t : t ? [t] : []);
  }
  get value() {
    return p(this, s);
  }
  set config(t) {
    if (console.warn("config", t), !t) return;
    console.warn("config", t);
    const e = t.getValueByAlias("items"), i = t.getValueByAlias("default");
    console.warn("before default"), i && p(this, s).length === 0 && (console.warn("setting default: ", i), p(this, s).push(i)), Array.isArray(e) && e.length > 0 && (this._options = e.map((r) => ({
      name: r.value,
      value: r.key,
      selected: p(this, s).includes(r.key)
    })), p(this, s).forEach((r) => {
      this._options.find((o) => o.value === r) || this._options.push({
        name: `${r} (${this.localize.term("validation_legacyOption")})`,
        value: r,
        selected: !0,
        invalid: !0
      });
    })), this._multiple = t.getValueByAlias("multiple") ?? !1;
  }
  render() {
    return this._multiple ? a(this, n, A).call(this) : a(this, n, U).call(this);
  }
};
s = /* @__PURE__ */ new WeakMap();
n = /* @__PURE__ */ new WeakSet();
E = function(t) {
  const e = t.target.value;
  console.warn("value", e), a(this, n, v).call(this, e ? [e] : []);
};
$ = function(t) {
  const e = t.target.selectedOptions, i = e ? Array.from(e).map((r) => r.value) : [];
  a(this, n, v).call(this, i);
};
v = function(t) {
  t && (this.value = t, this.dispatchEvent(new V()));
};
A = function() {
  var t;
  return this.readonly ? u`<div>${(t = this.value) == null ? void 0 : t.join(", ")}</div>` : u`
			<select id="native" multiple @change=${a(this, n, $)}>
				${O(
    this._options,
    (e) => u`
						<option value=${e.value} ?selected=${e.selected}>${e.name}</option>
					`
  )}
			</select>
			${a(this, n, _).call(this)}
		`;
};
U = function() {
  return u`
			<umb-input-dropdown-list
				.options=${this._options}
				@change=${a(this, n, E)}
				?readonly=${this.readonly}></umb-input-dropdown-list>
			${a(this, n, _).call(this)}
		`;
};
_ = function() {
  return p(this, s).some((e) => {
    const i = this._options.find((r) => r.value === e);
    return i ? i.invalid : !1;
  }) ? u`<div class="error"><umb-localize key="validation_legacyOptionDescription"></umb-localize></div>` : P;
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
c([
  y({ type: Array })
], l.prototype, "value", 1);
c([
  y({ type: Boolean, reflect: !0 })
], l.prototype, "readonly", 2);
c([
  w()
], l.prototype, "_multiple", 2);
c([
  w()
], l.prototype, "_options", 2);
l = c([
  C("ak-property-editor-ui-dropdown")
], l);
const H = l;
export {
  l as UmbPropertyEditorUIDropdownElement,
  H as default
};
//# sourceMappingURL=client.js.map
