import { nothing as N, when as st, html as c, css as L, property as n, query as R, customElement as O, repeat as nt, state as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbValidationContext as ot, umbBindToValidation as lt } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as T } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as dt } from "@umbraco-cms/backoffice/property";
import { UmbDeleteEvent as pt, UmbInputEvent as ht, UmbChangeEvent as f } from "@umbraco-cms/backoffice/event";
import { UMB_SUBMITTABLE_WORKSPACE_CONTEXT as ut, UmbSubmittableWorkspaceContextBase as ct } from "@umbraco-cms/backoffice/workspace";
import { UmbSorterController as mt } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as z } from "@umbraco-cms/backoffice/external/uui";
import { umbConfirmModal as _t } from "@umbraco-cms/backoffice/modal";
var vt = Object.defineProperty, ft = Object.getOwnPropertyDescriptor, F = (t) => {
  throw TypeError(t);
}, P = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? ft(e, i) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (a = (r ? o(e, i, a) : o(a)) || a);
  return r && a && vt(e, i, a), a;
}, G = (t, e, i) => e.has(t) || F("Cannot " + i), W = (t, e, i) => (G(t, e, "read from private field"), i ? i.call(t) : e.get(t)), k = (t, e, i) => e.has(t) ? F("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), $ = (t, e, i) => (G(t, e, "access private method"), i), _, K, X, Y, H, x, A;
let v = class extends z(T, void 0) {
  constructor() {
    super(), k(this, _), this.disabled = !1, this.readonly = !1, k(this, x, (t) => t.stopPropagation()), k(this, A, (t) => t.stopPropagation()), this.getFormElement = () => {
    };
  }
  async focus() {
    var t;
    await this.updateComplete, (t = this._input) == null || t.focus();
  }
  render() {
    return c`
          ${this.disabled || this.readonly ? N : c`
            <uui-icon name="icon-navigation" class="handle"></uui-icon>`}

          <umb-form-validation-message id="validation-message" @invalid=${W(this, A)} @valid=${W(this, x)}>
            <uui-input
              id="input"
              label="Value"
              value=${this.value}
              @keydown=${$(this, _, Y)}
              @input=${$(this, _, X)}
              @change=${$(this, _, H)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              required=${this.required}
              required-message="Value is missing"></uui-input>
          </umb-form-validation-message>

          ${st(
      !this.readonly,
      () => c`
              <uui-button
                compact
                color="danger"
                label="${this.localize.term("general_remove")} ${this.value}"
                look="outline"
                ?disabled=${this.disabled}
                @click=${$(this, _, K)}>
                <uui-icon name="icon-trash"></uui-icon>
              </uui-button>
            `
    )}
        `;
  }
};
_ = /* @__PURE__ */ new WeakSet();
K = async function() {
  await _t(this, {
    headline: `Delete ${this.value || "item"}`,
    content: "Are you sure you want to delete this item?",
    color: "danger",
    confirmLabel: "Delete"
  }), this.dispatchEvent(new pt());
};
X = function(t) {
  t.stopPropagation();
  const e = t.currentTarget;
  this.value = e.value, this.dispatchEvent(new ht());
};
Y = function(t) {
  t.stopPropagation();
  const e = t.currentTarget;
  t.key === "Enter" && e.value && this.dispatchEvent(new CustomEvent("enter"));
};
H = function(t) {
  t.stopPropagation();
  const e = t.currentTarget;
  this.value = e.value, this.dispatchEvent(new f());
};
x = /* @__PURE__ */ new WeakMap();
A = /* @__PURE__ */ new WeakMap();
v.styles = [
  L`
            :host {
                display: flex;
                align-items: center;
                margin-bottom: var(--uui-size-space-3);
                gap: var(--uui-size-space-3);
            }

            #validation-message {
                flex: 1;
            }

            #input {
                width: 100%;
            }

            .handle {
                cursor: move;
            }
        `
];
P([
  n({ type: Boolean, reflect: !0 })
], v.prototype, "disabled", 2);
P([
  n({ type: Boolean, reflect: !0 })
], v.prototype, "readonly", 2);
P([
  R("#input")
], v.prototype, "_input", 2);
v = P([
  O("ak-input-dictionary-item")
], v);
var yt = Object.defineProperty, gt = Object.getOwnPropertyDescriptor, J = (t) => {
  throw TypeError(t);
}, h = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? gt(e, i) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (a = (r ? o(e, i, a) : o(a)) || a);
  return r && a && yt(e, i, a), a;
}, S = (t, e, i) => e.has(t) || J("Cannot " + i), y = (t, e, i) => (S(t, e, "read from private field"), i ? i.call(t) : e.get(t)), w = (t, e, i) => e.has(t) ? J("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), q = (t, e, i, r) => (S(t, e, "write to private field"), e.set(t, i), i), m = (t, e, i) => (S(t, e, "access private method"), i), b, E, g, p, B, Q, Z, j, tt, et;
let l = class extends z(T, void 0) {
  constructor() {
    super(), w(this, p), this._items = [], w(this, b, !1), w(this, E, !1), w(this, g, new mt(this, {
      getUniqueOfElement: (t) => t.getAttribute("data-sort-entry-id"),
      getUniqueOfModel: (t) => t,
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
    q(this, b, t), t && y(this, g).disable();
  }
  get disabled() {
    return y(this, b);
  }
  set readonly(t) {
    q(this, E, t), t && y(this, g).disable();
  }
  get readonly() {
    return y(this, E);
  }
  get items() {
    return this._items;
  }
  set items(t) {
    this.value = (t == null ? void 0 : t.length) > 0 ? "some value" : "", this._items = t ?? [], y(this, g).setModel(this.items);
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
    return c`
          <div id="sorter-wrapper">
            ${m(this, p, tt).call(this)}
          </div>
          ${m(this, p, et).call(this)}
        `;
  }
};
b = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
g = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
B = async function() {
  this._items = [...this._items, ""], this.pristine = !1, this.dispatchEvent(new f()), await m(this, p, Z).call(this);
};
Q = function(t, e) {
  t.stopPropagation();
  const r = t.currentTarget.value;
  this._items = this._items.map((a, s) => s === e ? r : a), this.dispatchEvent(new f());
};
Z = async function() {
  var i;
  await this.updateComplete;
  const t = (i = this.shadowRoot) == null ? void 0 : i.querySelectorAll(
    "ak-input-dictionary-item"
  );
  await t[t.length - 1].focus();
};
j = function(t, e) {
  t.stopPropagation(), this._items = this._items.filter((i, r) => r !== e), this.pristine = !1, this.dispatchEvent(new f());
};
tt = function() {
  return c`
          ${nt(
    this._items,
    (t, e) => e,
    (t, e) => c`
              <ak-input-dictionary-item
                name="item-${e}"
                data-sort-entry-id=${t}
                required
                required-message="Item ${e + 1} is missing a value"
                value=${t}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                @enter=${m(this, p, B)}
                @delete=${(i) => m(this, p, j).call(this, i, e)}
                @input=${(i) => m(this, p, Q).call(this, i, e)}
              ></ak-input-dictionary-item>
            `
  )}
        `;
};
et = function() {
  return this.disabled || this.readonly ? N : c`
          <uui-button
            color="default"
            id="action"
            label="Add"
            look="placeholder"
            ?disabled=${this.disabled}
            @click=${m(this, p, B)}
          ></uui-button>
        `;
};
l.styles = [
  L`
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
h([
  C()
], l.prototype, "_items", 2);
h([
  n({ type: Number })
], l.prototype, "min", 2);
h([
  n({ type: String, attribute: "min-message" })
], l.prototype, "minMessage", 2);
h([
  n({ type: Number })
], l.prototype, "max", 2);
h([
  n({ type: String, attribute: "min-message" })
], l.prototype, "maxMessage", 2);
h([
  n({ type: Boolean, reflect: !0 })
], l.prototype, "disabled", 1);
h([
  n({ type: Boolean, reflect: !0 })
], l.prototype, "readonly", 1);
h([
  n({ type: Array })
], l.prototype, "items", 1);
l = h([
  O("ak-input-dictionary")
], l);
var $t = Object.defineProperty, wt = Object.getOwnPropertyDescriptor, it = (t) => {
  throw TypeError(t);
}, u = (t, e, i, r) => {
  for (var a = r > 1 ? void 0 : r ? wt(e, i) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (a = (r ? o(e, i, a) : o(a)) || a);
  return r && a && $t(e, i, a), a;
}, at = (t, e, i) => e.has(t) || it("Cannot " + i), V = (t, e, i) => (at(t, e, "read from private field"), i ? i.call(t) : e.get(t)), I = (t, e, i) => e.has(t) ? it("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), bt = (t, e, i) => (at(t, e, "access private method"), i), M, rt, U, D;
let d = class extends T {
  constructor() {
    super(), I(this, M), this._min = 0, this._max = 1 / 0, this._validationContext = new ot(this), this.disabled = !1, this.readonly = !1, this.required = !1, I(this, U, (t) => t.stopPropagation()), I(this, D, (t) => t.stopPropagation()), this.consumeContext(dt, (t) => {
      this._label = t == null ? void 0 : t.getLabel();
    }), this.consumeContext(ut, (t) => {
      t instanceof ct && t.addValidationContext(this._validationContext);
    });
  }
  set config(t) {
    t && (this._min = Number(t.getValueByAlias("min")) || 0, this._max = Number(t.getValueByAlias("max")) || 1 / 0);
  }
  render() {
    return c`
          <umb-form-validation-message
            id="validation-message"
            @invalid=${V(this, D)}
            @valid=${V(this, U)}
          >
            <ak-input-dictionary
              id="input"
              max=${this._max}
              min=${this._min}
              .items=${this.value ?? []}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              @change=${bt(this, M, rt)}
              ${lt(this)}
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
M = /* @__PURE__ */ new WeakSet();
rt = function(t) {
  t.stopPropagation();
  const e = t.currentTarget;
  this.value = e.items, this.dispatchEvent(new f());
};
U = /* @__PURE__ */ new WeakMap();
D = /* @__PURE__ */ new WeakMap();
u([
  C()
], d.prototype, "_label", 2);
u([
  C()
], d.prototype, "_min", 2);
u([
  C()
], d.prototype, "_max", 2);
u([
  R("#input", !0)
], d.prototype, "_inputElement", 2);
u([
  n({ type: Array })
], d.prototype, "value", 2);
u([
  n({ type: Boolean, reflect: !0 })
], d.prototype, "disabled", 2);
u([
  n({ type: Boolean, reflect: !0 })
], d.prototype, "readonly", 2);
u([
  n({ type: Boolean, reflect: !0 })
], d.prototype, "required", 2);
d = u([
  O("ak-property-editor-ui-dictionary")
], d);
const Dt = d;
export {
  d as AkPropertyEditorUIDictionaryElement,
  Dt as default
};
//# sourceMappingURL=client.js.map
