import { nothing as T, when as pe, html as u, css as F, state as $, property as r, query as S, customElement as B, repeat as de } from "@umbraco-cms/backoffice/external/lit";
import { UmbValidationContext as he, umbBindToValidation as ue } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as V } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as ce } from "@umbraco-cms/backoffice/property";
import { UmbDeleteEvent as me, UmbInputEvent as L, UmbChangeEvent as _ } from "@umbraco-cms/backoffice/event";
import { UMB_SUBMITTABLE_WORKSPACE_CONTEXT as ve, UmbSubmittableWorkspaceContextBase as ye } from "@umbraco-cms/backoffice/workspace";
import { UmbSorterController as _e } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as R } from "@umbraco-cms/backoffice/external/uui";
import { umbConfirmModal as fe } from "@umbraco-cms/backoffice/modal";
var ge = Object.defineProperty, ke = Object.getOwnPropertyDescriptor, G = (e) => {
  throw TypeError(e);
}, g = (e, t, i, a) => {
  for (var s = a > 1 ? void 0 : a ? ke(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (s = (a ? o(t, i, s) : o(s)) || s);
  return a && s && ge(t, i, s), s;
}, X = (e, t, i) => t.has(e) || G("Cannot " + i), K = (e, t, i) => (X(e, t, "read from private field"), i ? i.call(e) : t.get(e)), I = (e, t, i) => t.has(e) ? G("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), f = (e, t, i) => (X(e, t, "access private method"), i), h, Y, H, J, x, Q, Z, A, M;
let c = class extends R(V, void 0) {
  constructor() {
    super(), I(this, h), this._kvp = { key: "", value: "" }, this.disabled = !1, this.readonly = !1, I(this, A, (e) => e.stopPropagation()), I(this, M, (e) => e.stopPropagation()), this.getFormElement = () => {
    };
  }
  get kvp() {
    return this._kvp;
  }
  set kvp(e) {
    this._kvp = e ?? { key: "", value: "" };
  }
  async focus() {
    var e;
    await this.updateComplete, (e = this._keyInput) == null || e.focus();
  }
  render() {
    return u`
          ${this.disabled || this.readonly ? T : u`
            <uui-icon name="icon-navigation" class="handle"></uui-icon>`}

          <umb-form-validation-message id="validation-message" @invalid=${K(this, M)} @valid=${K(this, A)}>
            <div class="kvp-holder">
              <uui-input
                id="input-key"
                label="Key"
                value=${this._kvp.key}
                @keydown=${f(this, h, x)}
                @input=${f(this, h, H)}
                @change=${f(this, h, Q)}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                required=${this.required}
                required-message="Key is missing"
              ></uui-input>
              <uui-input
                id="input-value"
                label="Value"
                value=${this._kvp.value}
                @keydown=${f(this, h, x)}
                @input=${f(this, h, J)}
                @change=${f(this, h, Z)}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
              ></uui-input>
            </div>
          </umb-form-validation-message>

          ${pe(
      !this.readonly,
      () => u`
              <uui-button
                compact
                color="danger"
                label="${this.localize.term("general_remove")} ${this.value}"
                look="outline"
                ?disabled=${this.disabled}
                @click=${f(this, h, Y)}>
                <uui-icon name="icon-trash"></uui-icon>
              </uui-button>
            `
    )}
        `;
  }
};
h = /* @__PURE__ */ new WeakSet();
Y = async function() {
  await fe(this, {
    headline: `Delete ${this._kvp.value || "item"}`,
    content: "Are you sure you want to delete this item?",
    color: "danger",
    confirmLabel: "Delete"
  }), this.dispatchEvent(new me());
};
H = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this._kvp = { ...this._kvp, key: t.value }, this.dispatchEvent(new L());
};
J = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this._kvp = { ...this._kvp, value: t.value }, this.dispatchEvent(new L());
};
x = function(e) {
  e.stopPropagation(), e.key === "Enter" && this._kvp.key && this.dispatchEvent(new CustomEvent("enter"));
};
Q = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this._kvp = { ...this._kvp, key: t.value }, this.dispatchEvent(new _());
};
Z = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this._kvp = { ...this._kvp, value: t.value }, this.dispatchEvent(new _());
};
A = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
c.styles = [
  F`
            :host {
                display: flex;
                align-items: center;
                margin-bottom: var(--uui-size-space-3);
                gap: var(--uui-size-space-3);
            }

            #validation-message {
                flex: 1;
            }

            .kvp-holder {
                display: inline-flex;
                justify-content: space-between;
                gap: 5px;
                width: 100%;
                
                & > * {
                    flex: 1;
                }
            }

            .handle {
                cursor: move;
            }
        `
];
g([
  $()
], c.prototype, "_kvp", 2);
g([
  r({ type: Boolean, reflect: !0 })
], c.prototype, "disabled", 2);
g([
  r({ type: Boolean, reflect: !0 })
], c.prototype, "readonly", 2);
g([
  r({ type: Object })
], c.prototype, "kvp", 1);
g([
  S("#input-key")
], c.prototype, "_keyInput", 2);
g([
  S("#input-value")
], c.prototype, "_valueInput", 2);
c = g([
  B("ak-input-dictionary-item")
], c);
var be = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, j = (e) => {
  throw TypeError(e);
}, m = (e, t, i, a) => {
  for (var s = a > 1 ? void 0 : a ? $e(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (s = (a ? o(t, i, s) : o(s)) || s);
  return a && s && be(t, i, s), s;
}, W = (e, t, i) => t.has(e) || j("Cannot " + i), k = (e, t, i) => (W(e, t, "read from private field"), i ? i.call(e) : t.get(e)), w = (e, t, i) => t.has(e) ? j("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), N = (e, t, i, a) => (W(e, t, "write to private field"), t.set(e, i), i), y = (e, t, i) => (W(e, t, "access private method"), i), E, C, b, d, q, ee, te, ie, ae, se, re;
let l = class extends R(V, void 0) {
  constructor() {
    super(), w(this, d), this._items = [], w(this, E, !1), w(this, C, !1), w(this, b, new _e(this, {
      getUniqueOfElement: (e) => e.getAttribute("data-sort-entry-id"),
      getUniqueOfModel: (e) => e.key,
      identifier: "AndrewK.SorterIdentifier.Dictionary",
      itemSelector: "ak-input-dictionary-item",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: e }) => {
        const t = this._items;
        this._items = e, this.requestUpdate("_items", t), this.dispatchEvent(new _());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", this.getFormElement = () => {
    }, this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this._items.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this._items.length > this.max
    );
  }
  set disabled(e) {
    N(this, E, e), e && k(this, b).disable();
  }
  get disabled() {
    return k(this, E);
  }
  set readonly(e) {
    N(this, C, e), e && k(this, b).disable();
  }
  get readonly() {
    return k(this, C);
  }
  get items() {
    return this._items;
  }
  set items(e) {
    this.value = (e == null ? void 0 : e.length) > 0 ? "some value" : "", this._items = e ?? [], k(this, b).setModel(this.items);
  }
  // TODO: Some inputs might not have a value that is either FormDataEntryValue or FormData.
  //  How do we handle this?
  /*
  @property()
  public set value(value: FormDataEntryValue | FormData) {
      throw new Error(`${this} does not support to set the value directly. Use items instead.`)
  }
  public get value() {
      throw new Error(`${this} does not support to get the value directly. Use items instead.`)
  }
  */
  render() {
    return u`
          <div id="sorter-wrapper">
            ${y(this, d, ae).call(this)}
          </div>
          ${y(this, d, re).call(this)}
          ${y(this, d, se).call(this)}
        `;
  }
};
E = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
q = async function() {
  this._items = [...this._items, { key: "", value: "" }], this.pristine = !1, this.dispatchEvent(new _()), await y(this, d, te).call(this);
};
ee = function(e, t) {
  e.stopPropagation();
  const a = e.currentTarget.kvp;
  this._items = this._items.map((s, n) => n === t ? a : s), this.dispatchEvent(new _());
};
te = async function() {
  var i;
  await this.updateComplete;
  const e = (i = this.shadowRoot) == null ? void 0 : i.querySelectorAll(
    "ak-input-dictionary-item"
  );
  await e[e.length - 1].focus();
};
ie = function(e, t) {
  e.stopPropagation(), this._items = this._items.filter((i, a) => a !== t), this.pristine = !1, this.dispatchEvent(new _());
};
ae = function() {
  return u`
          ${de(
    this._items,
    (e, t) => t,
    (e, t) => u`
              <ak-input-dictionary-item
                name="item-${t}"
                data-sort-entry-id=${e.key}
                required
                required-message="Item ${t + 1} is missing a value"
                .kvp=${e}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                @enter=${y(this, d, q)}
                @delete=${(i) => y(this, d, ie).call(this, i, t)}
                @input=${(i) => y(this, d, ee).call(this, i, t)}
              ></ak-input-dictionary-item>
            `
  )}
        `;
};
se = function() {
  return this.disabled || this.readonly ? T : u`
          <uui-button
            color="default"
            id="action"
            label="Add"
            look="placeholder"
            ?disabled=${this.disabled}
            @click=${y(this, d, q)}
          ></uui-button>
        `;
};
re = function() {
  return this.items.length === new Set(this.items.map((e) => e.key)).size ? T : u`
          <uui-box class="info-block">
            <div slot="headline" class="info-block-headline">
              <uui-icon name="icon-info"></uui-icon>
              <p>Duplicated keys detected.</p>
            </div>
          </uui-box>
        `;
};
l.styles = [
  F`
            #action {
                display: block;
            }

            .--umb-sorter-placeholder {
                position: relative;
                visibility: hidden;
            }

            .--umb-sorter-placeholder::after {
                content: '';
                position: absolute;
                inset: 0;
                border-radius: var(--uui-border-radius);
                border: 1px dashed var(--uui-color-divider-emphasis);
            }
            
            .info-block {
                background-color: var(--uui-color-disabled-standalone);
                margin-bottom: var(--uui-size-space-3);
            }
            
            .info-block-headline {
                display: flex;
                align-items: center;
                gap: var(--uui-size-space-3);
            }
        `
];
m([
  $()
], l.prototype, "_items", 2);
m([
  r({ type: Number })
], l.prototype, "min", 2);
m([
  r({ type: String, attribute: "min-message" })
], l.prototype, "minMessage", 2);
m([
  r({ type: Number })
], l.prototype, "max", 2);
m([
  r({ type: String, attribute: "min-message" })
], l.prototype, "maxMessage", 2);
m([
  r({ type: Boolean, reflect: !0 })
], l.prototype, "disabled", 1);
m([
  r({ type: Boolean, reflect: !0 })
], l.prototype, "readonly", 1);
m([
  r({ type: Array })
], l.prototype, "items", 1);
l = m([
  B("ak-input-dictionary")
], l);
var we = Object.defineProperty, Ee = Object.getOwnPropertyDescriptor, ne = (e) => {
  throw TypeError(e);
}, v = (e, t, i, a) => {
  for (var s = a > 1 ? void 0 : a ? Ee(t, i) : t, n = e.length - 1, o; n >= 0; n--)
    (o = e[n]) && (s = (a ? o(t, i, s) : o(s)) || s);
  return a && s && we(t, i, s), s;
}, oe = (e, t, i) => t.has(e) || ne("Cannot " + i), z = (e, t, i) => (oe(e, t, "read from private field"), i ? i.call(e) : t.get(e)), P = (e, t, i) => t.has(e) ? ne("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Ce = (e, t, i) => (oe(e, t, "access private method"), i), D, le, O, U;
let p = class extends V {
  constructor() {
    super(), P(this, D), this._min = 0, this._max = 1 / 0, this._value = [], this._validationContext = new he(this), this.disabled = !1, this.readonly = !1, this.required = !1, P(this, O, (e) => e.stopPropagation()), P(this, U, (e) => e.stopPropagation()), this.consumeContext(ce, (e) => {
      this._label = e == null ? void 0 : e.getLabel();
    }), this.consumeContext(ve, (e) => {
      e instanceof ye && e.addValidationContext(this._validationContext);
    });
  }
  get value() {
    return this._value || [];
  }
  set value(e) {
    let t = [];
    switch (typeof e) {
      case "string":
        t.push({ key: e, value: e });
        break;
      case "object":
        Array.isArray(e) && (t = this.updateFromArray(e));
        break;
    }
    this._value = t, this.dispatchEvent(new _());
  }
  set config(e) {
    e && (this._min = Number(e.getValueByAlias("min")) || 0, this._max = Number(e.getValueByAlias("max")) || 1 / 0);
  }
  render() {
    return u`
          <umb-form-validation-message
            id="validation-message"
            @invalid=${z(this, U)}
            @valid=${z(this, O)}
          >
            <ak-input-dictionary
              id="input"
              max=${this._max}
              min=${this._min}
              .items=${this.value ?? []}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              @change=${Ce(this, D, le)}
              ${ue(this)}
            ></ak-input-dictionary>
          </umb-form-validation-message>
        `;
  }
  firstUpdated() {
    this._min && this._max && this._min > this._max && console.warn(
      `Property '${this._label}' (Dictionary) has been misconfigured, 'min' is greater than 'max'. Please correct your data type configuration.`,
      this
    );
  }
  updateFromArray(e) {
    const t = [];
    for (let i of e) {
      let a;
      switch (typeof i) {
        case "string":
          a = { key: i, value: i };
          break;
        case "object":
          i && "key" in i && typeof i.key == "string" && (a = { key: i.key, value: "" }, "value" in i && typeof i.value == "string" && i.value && (a.value = i.value));
          break;
      }
      a && t.push(a);
    }
    return t;
  }
};
D = /* @__PURE__ */ new WeakSet();
le = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this.value = t.items, this.dispatchEvent(new _());
};
O = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
v([
  $()
], p.prototype, "_label", 2);
v([
  $()
], p.prototype, "_min", 2);
v([
  $()
], p.prototype, "_max", 2);
v([
  S("#input", !0)
], p.prototype, "_inputElement", 2);
v([
  r({ type: Array })
], p.prototype, "value", 1);
v([
  r({ type: Boolean, reflect: !0 })
], p.prototype, "disabled", 2);
v([
  r({ type: Boolean, reflect: !0 })
], p.prototype, "readonly", 2);
v([
  r({ type: Boolean, reflect: !0 })
], p.prototype, "required", 2);
p = v([
  B("ak-property-editor-ui-dictionary")
], p);
const Se = p;
export {
  p as AkPropertyEditorUIDictionaryElement,
  Se as default
};
//# sourceMappingURL=client.js.map
