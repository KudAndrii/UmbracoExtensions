import { nothing as I, when as H, html as p, css as x, state as m, property as _, query as U, customElement as O, repeat as Q, queryAll as Z } from "@umbraco-cms/backoffice/external/lit";
import { UmbValidationContext as ee } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as D } from "@umbraco-cms/backoffice/lit-element";
import { UmbDeleteEvent as te, UmbInputEvent as V, UmbChangeEvent as y } from "@umbraco-cms/backoffice/event";
import { UMB_PROPERTY_CONTEXT as ie } from "@umbraco-cms/backoffice/property";
import { UMB_SUBMITTABLE_WORKSPACE_CONTEXT as ae, UmbSubmittableWorkspaceContextBase as se } from "@umbraco-cms/backoffice/workspace";
import { UUIFormControlMixin as B } from "@umbraco-cms/backoffice/external/uui";
import { UmbSorterController as ne } from "@umbraco-cms/backoffice/sorter";
import { umbConfirmModal as re } from "@umbraco-cms/backoffice/modal";
var oe = Object.defineProperty, le = Object.getOwnPropertyDescriptor, M = (e) => {
  throw TypeError(e);
}, f = (e, t, i, a) => {
  for (var s = a > 1 ? void 0 : a ? le(t, i) : t, l = e.length - 1, c; l >= 0; l--)
    (c = e[l]) && (s = (a ? c(t, i, s) : c(s)) || s);
  return a && s && oe(t, i, s), s;
}, S = (e, t, i) => t.has(e) || M("Cannot " + i), P = (e, t, i) => (S(e, t, "read from private field"), i ? i.call(e) : t.get(e)), b = (e, t, i) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), v = (e, t, i) => (S(e, t, "access private method"), i), u, T, q, K, w, W, N, $, E;
let h = class extends B(D, void 0) {
  constructor() {
    super(), b(this, u), this._value = { key: "", value: "" }, this.disabled = !1, this.readonly = !1, b(this, $, (e) => e.stopPropagation()), b(this, E, (e) => e.stopPropagation()), this.getFormElement = () => {
    };
  }
  get value() {
    return this._value;
  }
  set value(e) {
    this._value = e || { key: "", value: "" };
  }
  async focus() {
    var e;
    await this.updateComplete, (e = this._keyInput) == null || e.focus();
  }
  render() {
    return p`
          ${this.disabled || this.readonly ? I : p`
            <uui-icon name="icon-navigation" class="handle"></uui-icon>`}

          <umb-form-validation-message id="validation-message" @invalid=${P(this, E)} @valid=${P(this, $)}>
            <div class="kvp-holder">
              <uui-input
                id="input-key"
                label="Key"
                placeholder="Key"
                value=${this._value.key}
                @keydown=${v(this, u, w)}
                @input=${v(this, u, q)}
                @change=${v(this, u, W)}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                required
                required-message="Key is missing"
              ></uui-input>
              <uui-input
                id="input-value"
                label="Value"
                placeholder="Value"
                value=${this._value.value}
                @keydown=${v(this, u, w)}
                @input=${v(this, u, K)}
                @change=${v(this, u, N)}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
              ></uui-input>
            </div>
          </umb-form-validation-message>

          ${H(
      !this.readonly,
      () => p`
              <uui-button
                compact
                color="danger"
                label="${this.localize.term("general_remove")} ${this.value}"
                look="outline"
                ?disabled=${this.disabled}
                @click=${v(this, u, T)}>
                <uui-icon name="icon-trash"></uui-icon>
              </uui-button>
            `
    )}
        `;
  }
};
u = /* @__PURE__ */ new WeakSet();
T = async function() {
  await re(this, {
    headline: `Delete ${this._value.key || "item"}`,
    content: "Are you sure you want to delete this item?",
    color: "danger",
    confirmLabel: "Delete"
  }), this.dispatchEvent(new te());
};
q = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this._value = { ...this._value, key: t.value }, this.dispatchEvent(new V());
};
K = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this._value = { ...this._value, value: t.value }, this.dispatchEvent(new V());
};
w = function(e) {
  var t, i;
  e.stopPropagation(), e.key === "Enter" && (this._value.key ? this._value.value ? this.dispatchEvent(new CustomEvent("enter")) : (i = this._valueInput) == null || i.focus() : (t = this._keyInput) == null || t.focus());
};
W = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this._value = { ...this._value, key: t.value }, this.dispatchEvent(new y());
};
N = function(e) {
  e.stopPropagation();
  const t = e.currentTarget;
  this._value = { ...this._value, value: t.value }, this.dispatchEvent(new y());
};
$ = /* @__PURE__ */ new WeakMap();
E = /* @__PURE__ */ new WeakMap();
h.styles = [
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
f([
  m()
], h.prototype, "_value", 2);
f([
  _({ type: Boolean, reflect: !0 })
], h.prototype, "disabled", 2);
f([
  _({ type: Boolean, reflect: !0 })
], h.prototype, "readonly", 2);
f([
  _({ type: Object })
], h.prototype, "value", 1);
f([
  U("#input-key")
], h.prototype, "_keyInput", 2);
f([
  U("#input-value")
], h.prototype, "_valueInput", 2);
h = f([
  O("ak-input-dictionary-item")
], h);
var ue = Object.defineProperty, de = Object.getOwnPropertyDescriptor, z = (e) => {
  throw TypeError(e);
}, r = (e, t, i, a) => {
  for (var s = a > 1 ? void 0 : a ? de(t, i) : t, l = e.length - 1, c; l >= 0; l--)
    (c = e[l]) && (s = (a ? c(t, i, s) : c(s)) || s);
  return a && s && ue(t, i, s), s;
}, F = (e, t, i) => t.has(e) || z("Cannot " + i), k = (e, t, i) => (F(e, t, "read from private field"), i ? i.call(e) : t.get(e)), A = (e, t, i) => t.has(e) ? z("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), d = (e, t, i) => (F(e, t, "access private method"), i), g, o, C, L, R, G, J, X, Y, j;
let n = class extends B(D, void 0) {
  constructor() {
    super(), A(this, o), A(this, g, new ne(this, {
      getUniqueOfElement: (e) => e.getAttribute("data-sort-entry-id"),
      getUniqueOfModel: (e) => e.key,
      identifier: "AndrewK.SorterIdentifier.Dictionary",
      itemSelector: "ak-input-dictionary-item",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: e }) => {
        this._value = e, this.dispatchEvent(new y());
      }
    })), this._min = 0, this._max = 1 / 0, this._disabled = !1, this._readonly = !1, this._value = [], this._validationContext = new ee(this), this.mandatory = !1, this.getFormElement = () => {
    }, this.addValidator(
      "valueMissing",
      () => "Value is required",
      () => {
        var e;
        return !this.readonly && this.mandatory && !((e = this.value) != null && e.length);
      }
    ), this.addValidator(
      "badInput",
      () => "A key is missing",
      () => !this.readonly && !this.value.map((e) => e.key).every(Boolean)
    ), this.addValidator(
      "rangeUnderflow",
      () => `At least ${this._min} items are required`,
      () => !!this._min && this._value.length < this._min
    ), this.addValidator(
      "rangeOverflow",
      () => `Maximum ${this._max} items allowed`,
      () => !!this._max && this._value.length > this._max
    ), this.consumeContext(ie, (e) => {
      this._label = e == null ? void 0 : e.getLabel();
    }), this.consumeContext(ae, (e) => {
      e instanceof se && e.addValidationContext(this._validationContext);
    });
  }
  get value() {
    return this._value || [];
  }
  set value(e) {
    let t = [];
    switch (typeof e) {
      case "string":
        e && t.push({ key: e, value: e });
        break;
      case "object":
        Array.isArray(e) && (t = d(this, o, j).call(this, e));
        break;
    }
    JSON.stringify(this._value) !== JSON.stringify(t) && (this._value = t, this.dispatchEvent(new y())), k(this, g).setModel(this.value);
  }
  set disabled(e) {
    this._disabled = e, e && k(this, g).disable();
  }
  get disabled() {
    return this._disabled;
  }
  set readonly(e) {
    this._readonly = e, e && k(this, g).disable();
  }
  get readonly() {
    return this._readonly;
  }
  set config(e) {
    e && (this._min = Number(e.getValueByAlias("min")) || 0, this._max = Number(e.getValueByAlias("max")) || 1 / 0);
  }
  render() {
    return p`
          <umb-form-validation-message
            id="validation-message"
            @invalid=${(e) => e.stopPropagation()}
            @valid=${(e) => e.stopPropagation()}
          >
            <div id="sorter-wrapper">
              ${d(this, o, J).call(this)}
            </div>
            ${d(this, o, Y).call(this)}
            ${d(this, o, X).call(this)}
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
g = /* @__PURE__ */ new WeakMap();
o = /* @__PURE__ */ new WeakSet();
C = async function() {
  this._value = [...this._value, { key: "", value: "" }], this.pristine = !1, this.dispatchEvent(new y()), await d(this, o, G).call(this);
};
L = function(e, t) {
  e.stopPropagation();
  const a = e.currentTarget.value;
  this._value = this._value.map((s, l) => l === t ? a : s), this.pristine = !1, this.dispatchEvent(new y());
};
R = function(e, t) {
  e.stopPropagation(), this._value = this._value.filter((i, a) => a !== t), this.pristine = !1, this.dispatchEvent(new y());
};
G = async function() {
  var t;
  if (await this.updateComplete, !((t = this._items) != null && t.length))
    return;
  await this._items[this._items.length - 1].focus();
};
J = function() {
  return p`
          ${Q(
    this._value,
    (e, t) => t,
    (e, t) => p`
              <ak-input-dictionary-item
                name="item-${t}"
                data-sort-entry-id=${e.key}
                required
                required-message="Item ${t + 1} is missing a value"
                .value=${e}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                @enter=${d(this, o, C)}
                @delete=${(i) => d(this, o, R).call(this, i, t)}
                @input=${(i) => d(this, o, L).call(this, i, t)}
              ></ak-input-dictionary-item>
            `
  )}
        `;
};
X = function() {
  return this.disabled || this.readonly ? I : p`
          <uui-button
            color="default"
            id="action"
            label="Add"
            look="placeholder"
            ?disabled=${this.disabled}
            @click=${d(this, o, C)}
          ></uui-button>
        `;
};
Y = function() {
  const e = this._value.map((i) => i.key), t = new Set(e);
  return !e.length || e.length === t.size ? I : p`
          <uui-box class="info-block">
            <div slot="headline" class="info-block-headline">
              <uui-icon name="icon-info"></uui-icon>
              <p>Duplicated keys detected.</p>
            </div>
          </uui-box>
        `;
};
j = function(e) {
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
n.styles = [
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
r([
  m()
], n.prototype, "_label", 2);
r([
  m()
], n.prototype, "_min", 2);
r([
  m()
], n.prototype, "_max", 2);
r([
  m()
], n.prototype, "_disabled", 2);
r([
  m()
], n.prototype, "_readonly", 2);
r([
  m()
], n.prototype, "_value", 2);
r([
  _({ type: Boolean, reflect: !0 })
], n.prototype, "mandatory", 2);
r([
  _({ type: Array })
], n.prototype, "value", 1);
r([
  _({ type: Boolean, reflect: !0 })
], n.prototype, "disabled", 1);
r([
  _({ type: Boolean, reflect: !0 })
], n.prototype, "readonly", 1);
r([
  Z("ak-input-dictionary-item")
], n.prototype, "_items", 2);
n = r([
  O("ak-property-editor-ui-dictionary")
], n);
const be = n;
export {
  n as AkPropertyEditorUIDictionaryElement,
  be as default
};
//# sourceMappingURL=client.js.map
