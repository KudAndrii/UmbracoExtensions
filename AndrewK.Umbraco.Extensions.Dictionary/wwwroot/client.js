import { LitElement as v, html as m, customElement as d } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as f } from "@umbraco-cms/backoffice/element-api";
import { UMB_NOTIFICATION_CONTEXT as y } from "@umbraco-cms/backoffice/notification";
var C = Object.getOwnPropertyDescriptor, h = (t) => {
  throw TypeError(t);
}, k = (t, e, r, n) => {
  for (var a = n > 1 ? void 0 : n ? C(e, r) : e, o = t.length - 1, p; o >= 0; o--)
    (p = t[o]) && (a = p(a) || a);
  return a;
}, u = (t, e, r) => e.has(t) || h("Cannot " + r), l = (t, e, r) => (u(t, e, "read from private field"), r ? r.call(t) : e.get(t)), c = (t, e, r) => e.has(t) ? h("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), x = (t, e, r, n) => (u(t, e, "write to private field"), e.set(t, r), r), i, s;
let _ = class extends f(v) {
  constructor() {
    super(), c(this, i), c(this, s, () => {
      var t;
      (t = l(this, i)) == null || t.peek("positive", {
        data: { message: "#h5yr" }
      });
    }), this.consumeContext(y, (t) => {
      x(this, i, t);
    });
  }
  render() {
    return m`
            <uui-box headline="Welcome">
                <p>A TypeScript Lit Dashboard</p>
                <uui-button
                    look="primary"
                    label="Click me"
                    @click=${l(this, s)}
                ></uui-button>
            </uui-box>
        `;
  }
};
i = /* @__PURE__ */ new WeakMap();
s = /* @__PURE__ */ new WeakMap();
_ = k([
  d("my-typescript-element")
], _);
export {
  _ as default
};
//# sourceMappingURL=client.js.map
