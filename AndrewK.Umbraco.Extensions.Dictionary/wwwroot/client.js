import { nothing as L, when as lt, html as v, css as R, state as w, property as r, query as T, customElement as S, repeat as pt } from "@umbraco-cms/backoffice/external/lit";
import { UmbValidationContext as dt, umbBindToValidation as ht } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as B } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as ut } from "@umbraco-cms/backoffice/property";
import { UmbDeleteEvent as ct, UmbInputEvent as z, UmbChangeEvent as f } from "@umbraco-cms/backoffice/event";
import { UMB_SUBMITTABLE_WORKSPACE_CONTEXT as mt, UmbSubmittableWorkspaceContextBase as vt } from "@umbraco-cms/backoffice/workspace";
import { UmbSorterController as _t } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as F } from "@umbraco-cms/backoffice/external/uui";
import { umbConfirmModal as yt } from "@umbraco-cms/backoffice/modal";
var ft = Object.defineProperty, gt = Object.getOwnPropertyDescriptor, G = (t) => {
  throw TypeError(t);
}, g = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? gt(e, i) : e, n = t.length - 1, o; n >= 0; n--)
    (o = t[n]) && (a = (s ? o(e, i, a) : o(a)) || a);
  return s && a && ft(e, i, a), a;
}, X = (t, e, i) => e.has(t) || G("Cannot " + i), V = (t, e, i) => (X(t, e, "read from private field"), i ? i.call(t) : e.get(t)), P = (t, e, i) => e.has(t) ? G("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), _ = (t, e, i) => (X(t, e, "access private method"), i), d, Y, H, J, x, Q, Z, A, M;
let u = class extends F(B, void 0) {
  constructor() {
    super(), P(this, d), this._kvp = { key: "", value: "" }, this.disabled = !1, this.readonly = !1, P(this, A, (t) => t.stopPropagation()), P(this, M, (t) => t.stopPropagation()), this.getFormElement = () => {
    };
  }
  get kvp() {
    return this._kvp;
  }
  set kvp(t) {
    this._kvp = t ?? { key: "", value: "" };
  }
  async focus() {
    var t;
    await this.updateComplete, (t = this._keyInput) == null || t.focus();
  }
  render() {
    return v`
          ${this.disabled || this.readonly ? L : v`
            <uui-icon name="icon-navigation" class="handle"></uui-icon>`}

          <umb-form-validation-message id="validation-message" @invalid=${V(this, M)} @valid=${V(this, A)}>
            <div class="kvp-holder">
              <uui-input
                id="input-key"
                label="Key"
                value=${this._kvp.key}
                @keydown=${_(this, d, x)}
                @input=${_(this, d, H)}
                @change=${_(this, d, Q)}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                required=${this.required}
                required-message="Key is missing"
              ></uui-input>
              <uui-input
                id="input-value"
                label="Value"
                value=${this._kvp.value}
                @keydown=${_(this, d, x)}
                @input=${_(this, d, J)}
                @change=${_(this, d, Z)}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
              ></uui-input>
            </div>
          </umb-form-validation-message>

          ${lt(
      !this.readonly,
      () => v`
              <uui-button
                compact
                color="danger"
                label="${this.localize.term("general_remove")} ${this.value}"
                look="outline"
                ?disabled=${this.disabled}
                @click=${_(this, d, Y)}>
                <uui-icon name="icon-trash"></uui-icon>
              </uui-button>
            `
    )}
        `;
  }
};
d = /* @__PURE__ */ new WeakSet();
Y = async function() {
  await yt(this, {
    headline: `Delete ${this._kvp.value || "item"}`,
    content: "Are you sure you want to delete this item?",
    color: "danger",
    confirmLabel: "Delete"
  }), this.dispatchEvent(new ct());
};
H = function(t) {
  t.stopPropagation();
  const e = t.currentTarget;
  this._kvp = { ...this._kvp, key: e.value }, this.dispatchEvent(new z());
};
J = function(t) {
  t.stopPropagation();
  const e = t.currentTarget;
  this._kvp = { ...this._kvp, value: e.value }, this.dispatchEvent(new z());
};
x = function(t) {
  t.stopPropagation(), t.key === "Enter" && this._kvp.key && this.dispatchEvent(new CustomEvent("enter"));
};
Q = function(t) {
  t.stopPropagation();
  const e = t.currentTarget;
  this._kvp = { ...this._kvp, key: e.value }, this.dispatchEvent(new f());
};
Z = function(t) {
  t.stopPropagation();
  const e = t.currentTarget;
  this._kvp = { ...this._kvp, value: e.value }, this.dispatchEvent(new f());
};
A = /* @__PURE__ */ new WeakMap();
M = /* @__PURE__ */ new WeakMap();
u.styles = [
  R`
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
  w()
], u.prototype, "_kvp", 2);
g([
  r({ type: Boolean, reflect: !0 })
], u.prototype, "disabled", 2);
g([
  r({ type: Boolean, reflect: !0 })
], u.prototype, "readonly", 2);
g([
  r({ type: Object })
], u.prototype, "kvp", 1);
g([
  T("#input-key")
], u.prototype, "_keyInput", 2);
g([
  T("#input-value")
], u.prototype, "_valueInput", 2);
u = g([
  S("ak-input-dictionary-item")
], u);
var $t = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, j = (t) => {
  throw TypeError(t);
}, c = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? kt(e, i) : e, n = t.length - 1, o; n >= 0; n--)
    (o = t[n]) && (a = (s ? o(e, i, a) : o(a)) || a);
  return s && a && $t(e, i, a), a;
}, W = (t, e, i) => e.has(t) || j("Cannot " + i), $ = (t, e, i) => (W(t, e, "read from private field"), i ? i.call(t) : e.get(t)), b = (t, e, i) => e.has(t) ? j("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), K = (t, e, i, s) => (W(t, e, "write to private field"), e.set(t, i), i), y = (t, e, i) => (W(t, e, "access private method"), i), E, C, k, h, q, tt, et, it, at, st;
let l = class extends F(B, void 0) {
  constructor() {
    super(), b(this, h), this._items = [], b(this, E, !1), b(this, C, !1), b(this, k, new _t(this, {
      getUniqueOfElement: (t) => t.getAttribute("data-sort-entry-id"),
      getUniqueOfModel: (t) => t.key,
      identifier: "AndrewK.SorterIdentifier.Dictionary",
      itemSelector: "ak-input-dictionary-item",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: t }) => {
        const e = this._items;
        this._items = t, this.requestUpdate("_items", e), this.dispatchEvent(new f());
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
  set disabled(t) {
    K(this, E, t), t && $(this, k).disable();
  }
  get disabled() {
    return $(this, E);
  }
  set readonly(t) {
    K(this, C, t), t && $(this, k).disable();
  }
  get readonly() {
    return $(this, C);
  }
  get items() {
    return this._items;
  }
  set items(t) {
    this.value = (t == null ? void 0 : t.length) > 0 ? "some value" : "", this._items = t ?? [], $(this, k).setModel(this.items);
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
    return v`
          <div id="sorter-wrapper">
            ${y(this, h, at).call(this)}
          </div>
          ${y(this, h, st).call(this)}
        `;
  }
};
E = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
k = /* @__PURE__ */ new WeakMap();
h = /* @__PURE__ */ new WeakSet();
q = async function() {
  this._items = [...this._items, { key: "", value: "" }], this.pristine = !1, this.dispatchEvent(new f()), await y(this, h, et).call(this);
};
tt = function(t, e) {
  t.stopPropagation();
  const s = t.currentTarget.kvp;
  this._items = this._items.map((a, n) => n === e ? s : a), this.dispatchEvent(new f());
};
et = async function() {
  var i;
  await this.updateComplete;
  const t = (i = this.shadowRoot) == null ? void 0 : i.querySelectorAll(
    "ak-input-dictionary-item"
  );
  await t[t.length - 1].focus();
};
it = function(t, e) {
  t.stopPropagation(), this._items = this._items.filter((i, s) => s !== e), this.pristine = !1, this.dispatchEvent(new f());
};
at = function() {
  return v`
          ${pt(
    this._items,
    (t, e) => e,
    (t, e) => v`
              <ak-input-dictionary-item
                name="item-${e}"
                data-sort-entry-id=${t.key}
                required
                required-message="Item ${e + 1} is missing a value"
                .kvp=${t}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                @enter=${y(this, h, q)}
                @delete=${(i) => y(this, h, it).call(this, i, e)}
                @input=${(i) => y(this, h, tt).call(this, i, e)}
              ></ak-input-dictionary-item>
            `
  )}
        `;
};
st = function() {
  return this.disabled || this.readonly ? L : v`
          <uui-button
            color="default"
            id="action"
            label="Add"
            look="placeholder"
            ?disabled=${this.disabled}
            @click=${y(this, h, q)}
          ></uui-button>
        `;
};
l.styles = [
  R`
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
        `
];
c([
  w()
], l.prototype, "_items", 2);
c([
  r({ type: Number })
], l.prototype, "min", 2);
c([
  r({ type: String, attribute: "min-message" })
], l.prototype, "minMessage", 2);
c([
  r({ type: Number })
], l.prototype, "max", 2);
c([
  r({ type: String, attribute: "min-message" })
], l.prototype, "maxMessage", 2);
c([
  r({ type: Boolean, reflect: !0 })
], l.prototype, "disabled", 1);
c([
  r({ type: Boolean, reflect: !0 })
], l.prototype, "readonly", 1);
c([
  r({ type: Array })
], l.prototype, "items", 1);
l = c([
  S("ak-input-dictionary")
], l);
var wt = Object.defineProperty, bt = Object.getOwnPropertyDescriptor, rt = (t) => {
  throw TypeError(t);
}, m = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? bt(e, i) : e, n = t.length - 1, o; n >= 0; n--)
    (o = t[n]) && (a = (s ? o(e, i, a) : o(a)) || a);
  return s && a && wt(e, i, a), a;
}, nt = (t, e, i) => e.has(t) || rt("Cannot " + i), N = (t, e, i) => (nt(t, e, "read from private field"), i ? i.call(t) : e.get(t)), I = (t, e, i) => e.has(t) ? rt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Et = (t, e, i) => (nt(t, e, "access private method"), i), O, ot, U, D;
let p = class extends B {
  constructor() {
    super(), I(this, O), this._min = 0, this._max = 1 / 0, this._validationContext = new dt(this), this.disabled = !1, this.readonly = !1, this.required = !1, I(this, U, (t) => t.stopPropagation()), I(this, D, (t) => t.stopPropagation()), this.consumeContext(ut, (t) => {
      this._label = t == null ? void 0 : t.getLabel();
    }), this.consumeContext(mt, (t) => {
      t instanceof vt && t.addValidationContext(this._validationContext);
    });
  }
  set config(t) {
    t && (this._min = Number(t.getValueByAlias("min")) || 0, this._max = Number(t.getValueByAlias("max")) || 1 / 0);
  }
  render() {
    return v`
          <umb-form-validation-message
            id="validation-message"
            @invalid=${N(this, D)}
            @valid=${N(this, U)}
          >
            <ak-input-dictionary
              id="input"
              max=${this._max}
              min=${this._min}
              .items=${this.value ?? []}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              @change=${Et(this, O, ot)}
              ${ht(this)}
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
};
O = /* @__PURE__ */ new WeakSet();
ot = function(t) {
  t.stopPropagation();
  const e = t.currentTarget;
  this.value = e.items, this.dispatchEvent(new f());
};
U = /* @__PURE__ */ new WeakMap();
D = /* @__PURE__ */ new WeakMap();
m([
  w()
], p.prototype, "_label", 2);
m([
  w()
], p.prototype, "_min", 2);
m([
  w()
], p.prototype, "_max", 2);
m([
  T("#input", !0)
], p.prototype, "_inputElement", 2);
m([
  r({ type: Array })
], p.prototype, "value", 2);
m([
  r({ type: Boolean, reflect: !0 })
], p.prototype, "disabled", 2);
m([
  r({ type: Boolean, reflect: !0 })
], p.prototype, "readonly", 2);
m([
  r({ type: Boolean, reflect: !0 })
], p.prototype, "required", 2);
p = m([
  S("ak-property-editor-ui-dictionary")
], p);
const Tt = p;
export {
  p as AkPropertyEditorUIDictionaryElement,
  Tt as default
};
//# sourceMappingURL=client.js.map
