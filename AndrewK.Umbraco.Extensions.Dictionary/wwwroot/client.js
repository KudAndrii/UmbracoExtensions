import { nothing as T, when as pt, html as u, css as L, state as b, property as n, query as S, customElement as B, repeat as dt } from "@umbraco-cms/backoffice/external/lit";
import { UmbValidationContext as ht, umbBindToValidation as ut } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as W } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as ct } from "@umbraco-cms/backoffice/property";
import { UmbDeleteEvent as mt, UmbInputEvent as R, UmbChangeEvent as f } from "@umbraco-cms/backoffice/event";
import { UMB_SUBMITTABLE_WORKSPACE_CONTEXT as vt, UmbSubmittableWorkspaceContextBase as _t } from "@umbraco-cms/backoffice/workspace";
import { UmbSorterController as yt } from "@umbraco-cms/backoffice/sorter";
import { UUIFormControlMixin as F } from "@umbraco-cms/backoffice/external/uui";
import { umbConfirmModal as ft } from "@umbraco-cms/backoffice/modal";
var gt = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, G = (t) => {
  throw TypeError(t);
}, g = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? kt(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (a = (s ? o(e, i, a) : o(a)) || a);
  return s && a && gt(e, i, a), a;
}, X = (t, e, i) => e.has(t) || G("Cannot " + i), K = (t, e, i) => (X(t, e, "read from private field"), i ? i.call(t) : e.get(t)), P = (t, e, i) => e.has(t) ? G("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), y = (t, e, i) => (X(t, e, "access private method"), i), h, Y, H, J, x, Q, Z, A, M;
let c = class extends F(W, void 0) {
  constructor() {
    super(), P(this, h), this._kvp = { key: "", value: "" }, this.disabled = !1, this.readonly = !1, P(this, A, (t) => t.stopPropagation()), P(this, M, (t) => t.stopPropagation()), this.getFormElement = () => {
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
    return u`
          ${this.disabled || this.readonly ? T : u`
            <uui-icon name="icon-navigation" class="handle"></uui-icon>`}

          <umb-form-validation-message id="validation-message" @invalid=${K(this, M)} @valid=${K(this, A)}>
            <div class="kvp-holder">
              <uui-input
                id="input-key"
                label="Key"
                value=${this._kvp.key}
                @keydown=${y(this, h, x)}
                @input=${y(this, h, H)}
                @change=${y(this, h, Q)}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                required=${this.required}
                required-message="Key is missing"
              ></uui-input>
              <uui-input
                id="input-value"
                label="Value"
                value=${this._kvp.value}
                @keydown=${y(this, h, x)}
                @input=${y(this, h, J)}
                @change=${y(this, h, Z)}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
              ></uui-input>
            </div>
          </umb-form-validation-message>

          ${pt(
      !this.readonly,
      () => u`
              <uui-button
                compact
                color="danger"
                label="${this.localize.term("general_remove")} ${this.value}"
                look="outline"
                ?disabled=${this.disabled}
                @click=${y(this, h, Y)}>
                <uui-icon name="icon-trash"></uui-icon>
              </uui-button>
            `
    )}
        `;
  }
};
h = /* @__PURE__ */ new WeakSet();
Y = async function() {
  await ft(this, {
    headline: `Delete ${this._kvp.value || "item"}`,
    content: "Are you sure you want to delete this item?",
    color: "danger",
    confirmLabel: "Delete"
  }), this.dispatchEvent(new mt());
};
H = function(t) {
  t.stopPropagation();
  const e = t.currentTarget;
  this._kvp = { ...this._kvp, key: e.value }, this.dispatchEvent(new R());
};
J = function(t) {
  t.stopPropagation();
  const e = t.currentTarget;
  this._kvp = { ...this._kvp, value: e.value }, this.dispatchEvent(new R());
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
c.styles = [
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
  b()
], c.prototype, "_kvp", 2);
g([
  n({ type: Boolean, reflect: !0 })
], c.prototype, "disabled", 2);
g([
  n({ type: Boolean, reflect: !0 })
], c.prototype, "readonly", 2);
g([
  n({ type: Object })
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
var $t = Object.defineProperty, bt = Object.getOwnPropertyDescriptor, j = (t) => {
  throw TypeError(t);
}, m = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? bt(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (a = (s ? o(e, i, a) : o(a)) || a);
  return s && a && $t(e, i, a), a;
}, q = (t, e, i) => e.has(t) || j("Cannot " + i), k = (t, e, i) => (q(t, e, "read from private field"), i ? i.call(t) : e.get(t)), w = (t, e, i) => e.has(t) ? j("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), N = (t, e, i, s) => (q(t, e, "write to private field"), e.set(t, i), i), _ = (t, e, i) => (q(t, e, "access private method"), i), E, C, $, d, V, tt, et, it, at, st, nt;
let l = class extends F(W, void 0) {
  constructor() {
    super(), w(this, d), this._items = [], w(this, E, !1), w(this, C, !1), w(this, $, new yt(this, {
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
    N(this, E, t), t && k(this, $).disable();
  }
  get disabled() {
    return k(this, E);
  }
  set readonly(t) {
    N(this, C, t), t && k(this, $).disable();
  }
  get readonly() {
    return k(this, C);
  }
  get items() {
    return this._items;
  }
  set items(t) {
    this.value = (t == null ? void 0 : t.length) > 0 ? "some value" : "", this._items = t ?? [], k(this, $).setModel(this.items);
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
            ${_(this, d, at).call(this)}
          </div>
          ${_(this, d, nt).call(this)}
          ${_(this, d, st).call(this)}
        `;
  }
};
E = /* @__PURE__ */ new WeakMap();
C = /* @__PURE__ */ new WeakMap();
$ = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
V = async function() {
  this._items = [...this._items, { key: "", value: "" }], this.pristine = !1, this.dispatchEvent(new f()), await _(this, d, et).call(this);
};
tt = function(t, e) {
  t.stopPropagation();
  const s = t.currentTarget.kvp;
  this._items = this._items.map((a, r) => r === e ? s : a), this.dispatchEvent(new f());
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
  return u`
          ${dt(
    this._items,
    (t, e) => e,
    (t, e) => u`
              <ak-input-dictionary-item
                name="item-${e}"
                data-sort-entry-id=${t.key}
                required
                required-message="Item ${e + 1} is missing a value"
                .kvp=${t}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                @enter=${_(this, d, V)}
                @delete=${(i) => _(this, d, it).call(this, i, e)}
                @input=${(i) => _(this, d, tt).call(this, i, e)}
              ></ak-input-dictionary-item>
            `
  )}
        `;
};
st = function() {
  return this.disabled || this.readonly ? T : u`
          <uui-button
            color="default"
            id="action"
            label="Add"
            look="placeholder"
            ?disabled=${this.disabled}
            @click=${_(this, d, V)}
          ></uui-button>
        `;
};
nt = function() {
  return this.items.length === new Set(this.items.map((t) => t.key)).size ? T : u`
          <uui-box class="info-block">
            <div slot="headline" class="info-block-headline">
              <uui-icon name="icon-info"></uui-icon>
              <p>Duplicated keys detected.</p>
            </div>
          </uui-box>
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
  b()
], l.prototype, "_items", 2);
m([
  n({ type: Number })
], l.prototype, "min", 2);
m([
  n({ type: String, attribute: "min-message" })
], l.prototype, "minMessage", 2);
m([
  n({ type: Number })
], l.prototype, "max", 2);
m([
  n({ type: String, attribute: "min-message" })
], l.prototype, "maxMessage", 2);
m([
  n({ type: Boolean, reflect: !0 })
], l.prototype, "disabled", 1);
m([
  n({ type: Boolean, reflect: !0 })
], l.prototype, "readonly", 1);
m([
  n({ type: Array })
], l.prototype, "items", 1);
l = m([
  B("ak-input-dictionary")
], l);
var wt = Object.defineProperty, Et = Object.getOwnPropertyDescriptor, rt = (t) => {
  throw TypeError(t);
}, v = (t, e, i, s) => {
  for (var a = s > 1 ? void 0 : s ? Et(e, i) : e, r = t.length - 1, o; r >= 0; r--)
    (o = t[r]) && (a = (s ? o(e, i, a) : o(a)) || a);
  return s && a && wt(e, i, a), a;
}, ot = (t, e, i) => e.has(t) || rt("Cannot " + i), z = (t, e, i) => (ot(t, e, "read from private field"), i ? i.call(t) : e.get(t)), I = (t, e, i) => e.has(t) ? rt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i), Ct = (t, e, i) => (ot(t, e, "access private method"), i), D, lt, O, U;
let p = class extends W {
  constructor() {
    super(), I(this, D), this._min = 0, this._max = 1 / 0, this._validationContext = new ht(this), this.disabled = !1, this.readonly = !1, this.required = !1, I(this, O, (t) => t.stopPropagation()), I(this, U, (t) => t.stopPropagation()), this.consumeContext(ct, (t) => {
      this._label = t == null ? void 0 : t.getLabel();
    }), this.consumeContext(vt, (t) => {
      t instanceof _t && t.addValidationContext(this._validationContext);
    });
  }
  set config(t) {
    t && (this._min = Number(t.getValueByAlias("min")) || 0, this._max = Number(t.getValueByAlias("max")) || 1 / 0);
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
              @change=${Ct(this, D, lt)}
              ${ut(this)}
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
D = /* @__PURE__ */ new WeakSet();
lt = function(t) {
  t.stopPropagation();
  const e = t.currentTarget;
  this.value = e.items, this.dispatchEvent(new f());
};
O = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
v([
  b()
], p.prototype, "_label", 2);
v([
  b()
], p.prototype, "_min", 2);
v([
  b()
], p.prototype, "_max", 2);
v([
  S("#input", !0)
], p.prototype, "_inputElement", 2);
v([
  n({ type: Array })
], p.prototype, "value", 2);
v([
  n({ type: Boolean, reflect: !0 })
], p.prototype, "disabled", 2);
v([
  n({ type: Boolean, reflect: !0 })
], p.prototype, "readonly", 2);
v([
  n({ type: Boolean, reflect: !0 })
], p.prototype, "required", 2);
p = v([
  B("ak-property-editor-ui-dictionary")
], p);
const St = p;
export {
  p as AkPropertyEditorUIDictionaryElement,
  St as default
};
//# sourceMappingURL=client.js.map
