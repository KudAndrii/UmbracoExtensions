import { nothing as $, when as ee, html as c, css as x, property as o, query as T, customElement as M, repeat as te, state as C } from "@umbraco-cms/backoffice/external/lit";
import { UmbFormControlMixin as W, umbBindToValidation as ie } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as S } from "@umbraco-cms/backoffice/lit-element";
import { UMB_PROPERTY_CONTEXT as ae } from "@umbraco-cms/backoffice/property";
import { UmbDeleteEvent as se, UmbInputEvent as re, UmbChangeEvent as f } from "@umbraco-cms/backoffice/event";
import { UmbSorterController as ne } from "@umbraco-cms/backoffice/sorter";
import { umbConfirmModal as oe } from "@umbraco-cms/backoffice/modal";
import { UUIFormControlMixin as le } from "@umbraco-cms/backoffice/external/uui";
var ue = Object.defineProperty, de = Object.getOwnPropertyDescriptor, N = (e) => {
  throw TypeError(e);
}, k = (e, t, i, a) => {
  for (var s = a > 1 ? void 0 : a ? de(t, i) : t, r = e.length - 1, l; r >= 0; r--)
    (l = e[r]) && (s = (a ? l(t, i, s) : l(s)) || s);
  return a && s && ue(t, i, s), s;
}, he = (e, t, i) => t.has(e) || N("Cannot " + i), pe = (e, t, i) => t.has(e) ? N("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), u = (e, t, i) => (he(e, t, "access private method"), i), n, F, P, A, D, U, z, K;
let v = class extends le(
  S,
  void 0
) {
  constructor() {
    super(...arguments), pe(this, n), this.disabled = !1, this.readonly = !1;
  }
  async focus() {
    await this.updateComplete, this._keyInput?.focus();
  }
  getFormElement() {
  }
  render() {
    return c`
      ${this.disabled || this.readonly ? $ : c`
            <uui-icon name="icon-grip" class="handle"></uui-icon>
          `}

      <umb-form-validation-message id="validation-message" @invalid=${u(this, n, K)} @valid=${u(this, n, z)}>
        <div class="kvp-holder">
          <uui-input
            id="input-key"
            label="Key"
            placeholder="Key"
            value=${this.value?.key ?? ""}
            @keydown=${u(this, n, P)}
            @input=${(e) => u(this, n, A).call(this, e, "key")}
            @change=${(e) => u(this, n, D).call(this, e, "key")}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            required
            required-message="Key is missing"
          ></uui-input>
          <uui-input
            id="input-value"
            label="Value"
            placeholder="Value"
            value=${this.value?.value ?? ""}
            @keydown=${u(this, n, P)}
            @input=${(e) => u(this, n, A).call(this, e, "value")}
            @change=${(e) => u(this, n, D).call(this, e, "value")}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
          ></uui-input>
        </div>
      </umb-form-validation-message>

      ${ee(
      !this.readonly,
      () => c`
          <uui-button
            compact
            label="${this.localize.term("general_remove")} ${this.value}"
            look="outline"
            ?disabled=${this.disabled}
            @click=${u(this, n, F)}
          >
            <uui-icon name="icon-trash"></uui-icon>
          </uui-button>
        `
    )}
    `;
  }
};
n = /* @__PURE__ */ new WeakSet();
F = async function() {
  await oe(this, {
    headline: `Delete ${this.value?.key || "item"}`,
    content: "Are you sure you want to delete this item?",
    color: "danger",
    confirmLabel: "Delete"
  }), this.dispatchEvent(new se());
};
P = function(e) {
  e.stopPropagation(), e.key === "Enter" && (this.value?.key ? this.value.value ? this.dispatchEvent(new CustomEvent("enter")) : this._valueInput?.focus() : this._keyInput?.focus());
};
A = function(e, t) {
  u(this, n, U).call(this, e, t), this.dispatchEvent(new re());
};
D = function(e, t) {
  u(this, n, U).call(this, e, t), this.dispatchEvent(new f());
};
U = function(e, t) {
  e.stopPropagation();
  const i = e.currentTarget;
  debugger;
  const a = this.value ?? { key: "", value: "" };
  this.value = {
    ...a,
    [t]: i.value
  };
};
z = function(e) {
  e.stopPropagation();
};
K = function(e) {
  e.stopPropagation();
};
v.styles = [
  x`
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
        cursor: grab;
      }

      .handle:active {
        cursor: grabbing;
      }
    `,
  x`
      .kvp-holder {
        display: inline-flex;
        justify-content: space-between;
        gap: 5px;
        width: 100%;

        & > * {
          flex: 1;
        }
      }
    `
];
k([
  o({ type: Boolean, reflect: !0 })
], v.prototype, "disabled", 2);
k([
  o({ type: Boolean, reflect: !0 })
], v.prototype, "readonly", 2);
k([
  T("#input-key")
], v.prototype, "_keyInput", 2);
k([
  T("#input-value")
], v.prototype, "_valueInput", 2);
v = k([
  M("ak-input-dictionary-item")
], v);
var ce = Object.defineProperty, me = Object.getOwnPropertyDescriptor, R = (e) => {
  throw TypeError(e);
}, y = (e, t, i, a) => {
  for (var s = a > 1 ? void 0 : a ? me(t, i) : t, r = e.length - 1, l; r >= 0; r--)
    (l = e[r]) && (s = (a ? l(t, i, s) : l(s)) || s);
  return a && s && ce(t, i, s), s;
}, q = (e, t, i) => t.has(e) || R("Cannot " + i), g = (e, t, i) => (q(e, t, "read from private field"), i ? i.call(e) : t.get(e)), w = (e, t, i) => t.has(e) ? R("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), V = (e, t, i, a) => (q(e, t, "write to private field"), t.set(e, i), i), p = (e, t, i) => (q(e, t, "access private method"), i), b, I, E, d, B, L, J, G, X, Y, j, H;
let h = class extends W(
  S,
  void 0
) {
  constructor() {
    super(), w(this, d), w(this, b, new ne(this, {
      getUniqueOfElement: (e) => e.getAttribute("data-sort-entry-id"),
      getUniqueOfModel: (e) => e.key,
      identifier: "AndrewK.SorterIdentifier.Dictionary",
      itemSelector: "ak-input-dictionary-item",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: e }) => {
        const t = this._items;
        this._items = e, this.requestUpdate("_items", t), this.dispatchEvent(new f());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", w(this, I, !1), w(this, E, !1), this._items = [], this.addValidator(
      "badInput",
      () => "A key is missing",
      () => !this.readonly && !!this._items?.length && !this._items.map((e) => e.key).every(Boolean)
    ), this.addValidator(
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
    V(this, I, e), e && g(this, b).disable();
  }
  get disabled() {
    return g(this, I);
  }
  set readonly(e) {
    V(this, E, e), e && g(this, b).disable();
  }
  get readonly() {
    return g(this, E);
  }
  get items() {
    return this._items;
  }
  set items(e) {
    let t = [];
    switch (typeof e) {
      case "string":
        e && t.push({ key: e, value: e });
        break;
      case "object":
        Array.isArray(e) && (t = p(this, d, X).call(this, e));
        break;
    }
    this.value = t?.length > 0 ? "some value" : "", this._items = t, g(this, b).setModel(this.items);
    try {
      JSON.stringify(e) !== JSON.stringify(t) && (this.pristine = !1, this.updateComplete.then(() => {
        this.dispatchEvent(new f());
      }));
    } catch (i) {
      console.error("Failed to compare items: ", i);
    }
  }
  getFormElement() {
  }
  render() {
    return c`
      <div id="sorter-wrapper">${p(this, d, Y).call(this)}</div>
      ${p(this, d, H).call(this)} ${p(this, d, j).call(this)}
    `;
  }
};
b = /* @__PURE__ */ new WeakMap();
I = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
d = /* @__PURE__ */ new WeakSet();
B = async function() {
  this._items = [...this._items, { key: "", value: "" }], this.pristine = !1, this.dispatchEvent(new f()), await p(this, d, J).call(this);
};
L = function(e, t) {
  e.stopPropagation();
  const a = e.currentTarget.value;
  this._items = this._items.map((s, r) => r === t ? a : s), this.dispatchEvent(new f());
};
J = async function() {
  await this.updateComplete;
  const e = this.shadowRoot?.querySelectorAll("ak-input-dictionary-item");
  await e[e.length - 1].focus();
};
G = function(e, t) {
  e.stopPropagation(), this._items = this._items.filter((i, a) => a !== t), this.pristine = !1, this.dispatchEvent(new f());
};
X = function(e) {
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
};
Y = function() {
  return c`
      ${te(
    this._items,
    (e, t) => t,
    (e, t) => c`
          <ak-input-dictionary-item
            name="item-${t}"
            data-sort-entry-id=${e.key}
            required
            required-message="Item ${t + 1} is missing a value"
            .value=${e}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            @enter=${p(this, d, B)}
            @delete=${(i) => p(this, d, G).call(this, i, t)}
            @input=${(i) => p(this, d, L).call(this, i, t)}
          ></ak-input-dictionary-item>
        `
  )}
    `;
};
j = function() {
  return this.disabled || this.readonly ? $ : this.max === 1 && this._items.length > 0 ? $ : c`
      <uui-button
        color="default"
        id="action"
        label="Add"
        look="placeholder"
        ?disabled=${this.disabled}
        @click=${p(this, d, B)}
      ></uui-button>
    `;
};
H = function() {
  if (!this._items?.length)
    return $;
  const e = this._items.map((i) => i.key), t = new Set(e);
  return !e.length || e.length === t.size ? $ : c`
      <uui-box class="info-block">
        <div slot="headline" class="info-block-headline">
          <uui-icon name="icon-info"></uui-icon>
          <p>Duplicated keys detected.</p>
        </div>
      </uui-box>
    `;
};
h.styles = [
  x`
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
        inset: 0px;
        border-radius: var(--uui-border-radius);
        border: 1px dashed var(--uui-color-divider-emphasis);
      }
    `,
  x`
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
y([
  o({ type: Number })
], h.prototype, "min", 2);
y([
  o({ type: String, attribute: "min-message" })
], h.prototype, "minMessage", 2);
y([
  o({ type: Number })
], h.prototype, "max", 2);
y([
  o({ type: String, attribute: "min-message" })
], h.prototype, "maxMessage", 2);
y([
  o({ type: Boolean, reflect: !0 })
], h.prototype, "disabled", 1);
y([
  o({ type: Boolean, reflect: !0 })
], h.prototype, "readonly", 1);
y([
  C()
], h.prototype, "_items", 2);
y([
  o({ type: Array })
], h.prototype, "items", 1);
h = y([
  M("ak-input-dictionary")
], h);
var ye = Object.defineProperty, fe = Object.getOwnPropertyDescriptor, Q = (e) => {
  throw TypeError(e);
}, _ = (e, t, i, a) => {
  for (var s = a > 1 ? void 0 : a ? fe(t, i) : t, r = e.length - 1, l; r >= 0; r--)
    (l = e[r]) && (s = (a ? l(t, i, s) : l(s)) || s);
  return a && s && ye(t, i, s), s;
}, ve = (e, t, i) => t.has(e) || Q("Cannot " + i), _e = (e, t, i) => t.has(e) ? Q("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ge = (e, t, i) => (ve(e, t, "access private method"), i), O, Z;
let m = class extends W(S) {
  constructor() {
    super(), _e(this, O), this.disabled = !1, this.readonly = !1, this.required = !1, this._min = 0, this._max = 1 / 0, this.consumeContext(ae, (e) => {
      this._label = e?.getLabel();
    });
  }
  set config(e) {
    e && (this._min = Number(e.getValueByAlias("min")) || 0, this._max = Number(e.getValueByAlias("max")) || 1 / 0);
  }
  firstUpdated() {
    this._min && this._max && this._min > this._max && console.warn(
      `Property '${this._label}' (Dictionary) has been misconfigured, 'min' is greater than 'max'. Please correct your data type configuration.`,
      this
    ), this.addFormControlElement(this.shadowRoot.querySelector("ak-input-dictionary"));
  }
  render() {
    return c`
      <ak-input-dictionary
        max=${this._max}
        min=${this._min}
        .items=${this.value ?? []}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        ?required=${this.required}
        @change=${ge(this, O, Z)}
        ${ie(this)}
      ></ak-input-dictionary>
    `;
  }
};
O = /* @__PURE__ */ new WeakSet();
Z = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this.value = t.items, this.dispatchEvent(new f());
};
_([
  o({ type: Boolean, reflect: !0 })
], m.prototype, "disabled", 2);
_([
  o({ type: Boolean, reflect: !0 })
], m.prototype, "readonly", 2);
_([
  o({ type: Boolean, reflect: !0 })
], m.prototype, "required", 2);
_([
  C()
], m.prototype, "_label", 2);
_([
  C()
], m.prototype, "_min", 2);
_([
  C()
], m.prototype, "_max", 2);
m = _([
  M("ak-property-editor-ui-dictionary")
], m);
const Pe = m;
export {
  m as AkPropertyEditorUIDictionary,
  Pe as default
};
