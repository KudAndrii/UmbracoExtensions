import { map as Ws, html as Ve, css as qs, state as xe, property as _e, query as Ys, customElement as Ks } from "@umbraco-cms/backoffice/external/lit";
import { UUIFormControlMixin as Xs } from "@umbraco-cms/backoffice/external/uui";
import { UmbLitElement as Zs } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as Gs } from "@umbraco-cms/backoffice/event";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wt = globalThis, $e = Wt.ShadowRoot && (Wt.ShadyCSS === void 0 || Wt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ae = Symbol(), Be = /* @__PURE__ */ new WeakMap();
let ps = class {
  constructor(e, s, o) {
    if (this._$cssResult$ = !0, o !== Ae) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = s;
  }
  get styleSheet() {
    let e = this.o;
    const s = this.t;
    if ($e && e === void 0) {
      const o = s !== void 0 && s.length === 1;
      o && (e = Be.get(s)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), o && Be.set(s, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Js = (t) => new ps(typeof t == "string" ? t : t + "", void 0, Ae), Q = (t, ...e) => {
  const s = t.length === 1 ? t[0] : e.reduce((o, l, i) => o + ((r) => {
    if (r._$cssResult$ === !0) return r.cssText;
    if (typeof r == "number") return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(l) + t[i + 1], t[0]);
  return new ps(s, t, Ae);
}, Qs = (t, e) => {
  if ($e) t.adoptedStyleSheets = e.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
  else for (const s of e) {
    const o = document.createElement("style"), l = Wt.litNonce;
    l !== void 0 && o.setAttribute("nonce", l), o.textContent = s.cssText, t.appendChild(o);
  }
}, Ie = $e ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let s = "";
  for (const o of e.cssRules) s += o.cssText;
  return Js(s);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: to, defineProperty: eo, getOwnPropertyDescriptor: so, getOwnPropertyNames: oo, getOwnPropertySymbols: lo, getPrototypeOf: io } = Object, Qt = globalThis, He = Qt.trustedTypes, ro = He ? He.emptyScript : "", no = Qt.reactiveElementPolyfillSupport, Rt = (t, e) => t, Kt = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? ro : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let s = t;
  switch (e) {
    case Boolean:
      s = t !== null;
      break;
    case Number:
      s = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        s = JSON.parse(t);
      } catch {
        s = null;
      }
  }
  return s;
} }, Ce = (t, e) => !to(t, e), Ne = { attribute: !0, type: String, converter: Kt, reflect: !1, useDefault: !1, hasChanged: Ce };
Symbol.metadata ??= Symbol("metadata"), Qt.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let wt = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, s = Ne) {
    if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(e, s), !s.noAccessor) {
      const o = Symbol(), l = this.getPropertyDescriptor(e, o, s);
      l !== void 0 && eo(this.prototype, e, l);
    }
  }
  static getPropertyDescriptor(e, s, o) {
    const { get: l, set: i } = so(this.prototype, e) ?? { get() {
      return this[s];
    }, set(r) {
      this[s] = r;
    } };
    return { get: l, set(r) {
      const n = l?.call(this);
      i?.call(this, r), this.requestUpdate(e, n, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ne;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Rt("elementProperties"))) return;
    const e = io(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Rt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Rt("properties"))) {
      const s = this.properties, o = [...oo(s), ...lo(s)];
      for (const l of o) this.createProperty(l, s[l]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const s = litPropertyMetadata.get(e);
      if (s !== void 0) for (const [o, l] of s) this.elementProperties.set(o, l);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [s, o] of this.elementProperties) {
      const l = this._$Eu(s, o);
      l !== void 0 && this._$Eh.set(l, s);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const s = [];
    if (Array.isArray(e)) {
      const o = new Set(e.flat(1 / 0).reverse());
      for (const l of o) s.unshift(Ie(l));
    } else e !== void 0 && s.push(Ie(e));
    return s;
  }
  static _$Eu(e, s) {
    const o = s.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
  }
  addController(e) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
  }
  removeController(e) {
    this._$EO?.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), s = this.constructor.elementProperties;
    for (const o of s.keys()) this.hasOwnProperty(o) && (e.set(o, this[o]), delete this[o]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Qs(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((e) => e.hostDisconnected?.());
  }
  attributeChangedCallback(e, s, o) {
    this._$AK(e, o);
  }
  _$ET(e, s) {
    const o = this.constructor.elementProperties.get(e), l = this.constructor._$Eu(e, o);
    if (l !== void 0 && o.reflect === !0) {
      const i = (o.converter?.toAttribute !== void 0 ? o.converter : Kt).toAttribute(s, o.type);
      this._$Em = e, i == null ? this.removeAttribute(l) : this.setAttribute(l, i), this._$Em = null;
    }
  }
  _$AK(e, s) {
    const o = this.constructor, l = o._$Eh.get(e);
    if (l !== void 0 && this._$Em !== l) {
      const i = o.getPropertyOptions(l), r = typeof i.converter == "function" ? { fromAttribute: i.converter } : i.converter?.fromAttribute !== void 0 ? i.converter : Kt;
      this._$Em = l;
      const n = r.fromAttribute(s, i.type);
      this[l] = n ?? this._$Ej?.get(l) ?? n, this._$Em = null;
    }
  }
  requestUpdate(e, s, o) {
    if (e !== void 0) {
      const l = this.constructor, i = this[e];
      if (o ??= l.getPropertyOptions(e), !((o.hasChanged ?? Ce)(i, s) || o.useDefault && o.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(l._$Eu(e, o)))) return;
      this.C(e, s, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, s, { useDefault: o, reflect: l, wrapped: i }, r) {
    o && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, r ?? s ?? this[e]), i !== !0 || r !== void 0) || (this._$AL.has(e) || (this.hasUpdated || o || (s = void 0), this._$AL.set(e, s)), l === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (s) {
      Promise.reject(s);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [l, i] of this._$Ep) this[l] = i;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, i] of o) {
        const { wrapped: r } = i, n = this[l];
        r !== !0 || this._$AL.has(l) || n === void 0 || this.C(l, void 0, i, n);
      }
    }
    let e = !1;
    const s = this._$AL;
    try {
      e = this.shouldUpdate(s), e ? (this.willUpdate(s), this._$EO?.forEach((o) => o.hostUpdate?.()), this.update(s)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(s);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach((s) => s.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq &&= this._$Eq.forEach((s) => this._$ET(s, this[s])), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
wt.elementStyles = [], wt.shadowRootOptions = { mode: "open" }, wt[Rt("elementProperties")] = /* @__PURE__ */ new Map(), wt[Rt("finalized")] = /* @__PURE__ */ new Map(), no?.({ ReactiveElement: wt }), (Qt.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Se = globalThis, Xt = Se.trustedTypes, Fe = Xt ? Xt.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, fs = "$lit$", lt = `lit$${Math.random().toFixed(9).slice(2)}$`, ms = "?" + lt, ao = `<${ms}>`, mt = document, Mt = () => mt.createComment(""), Vt = (t) => t === null || typeof t != "object" && typeof t != "function", Ee = Array.isArray, co = (t) => Ee(t) || typeof t?.[Symbol.iterator] == "function", ne = `[ 	
\f\r]`, Ot = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ue = /-->/g, je = />/g, ut = RegExp(`>|${ne}(?:([^\\s"'>=/]+)(${ne}*=${ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), We = /'/g, qe = /"/g, gs = /^(?:script|style|textarea|title)$/i, ho = (t) => (e, ...s) => ({ _$litType$: t, strings: e, values: s }), O = ho(1), it = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), Ye = /* @__PURE__ */ new WeakMap(), ft = mt.createTreeWalker(mt, 129);
function vs(t, e) {
  if (!Ee(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Fe !== void 0 ? Fe.createHTML(e) : e;
}
const uo = (t, e) => {
  const s = t.length - 1, o = [];
  let l, i = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", r = Ot;
  for (let n = 0; n < s; n++) {
    const a = t[n];
    let c, h, d = -1, m = 0;
    for (; m < a.length && (r.lastIndex = m, h = r.exec(a), h !== null); ) m = r.lastIndex, r === Ot ? h[1] === "!--" ? r = Ue : h[1] !== void 0 ? r = je : h[2] !== void 0 ? (gs.test(h[2]) && (l = RegExp("</" + h[2], "g")), r = ut) : h[3] !== void 0 && (r = ut) : r === ut ? h[0] === ">" ? (r = l ?? Ot, d = -1) : h[1] === void 0 ? d = -2 : (d = r.lastIndex - h[2].length, c = h[1], r = h[3] === void 0 ? ut : h[3] === '"' ? qe : We) : r === qe || r === We ? r = ut : r === Ue || r === je ? r = Ot : (r = ut, l = void 0);
    const p = r === ut && t[n + 1].startsWith("/>") ? " " : "";
    i += r === Ot ? a + ao : d >= 0 ? (o.push(c), a.slice(0, d) + fs + a.slice(d) + lt + p) : a + lt + (d === -2 ? n : p);
  }
  return [vs(t, i + (t[s] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), o];
};
class Bt {
  constructor({ strings: e, _$litType$: s }, o) {
    let l;
    this.parts = [];
    let i = 0, r = 0;
    const n = e.length - 1, a = this.parts, [c, h] = uo(e, s);
    if (this.el = Bt.createElement(c, o), ft.currentNode = this.el.content, s === 2 || s === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (l = ft.nextNode()) !== null && a.length < n; ) {
      if (l.nodeType === 1) {
        if (l.hasAttributes()) for (const d of l.getAttributeNames()) if (d.endsWith(fs)) {
          const m = h[r++], p = l.getAttribute(d).split(lt), g = /([.?@])?(.*)/.exec(m);
          a.push({ type: 1, index: i, name: g[2], strings: p, ctor: g[1] === "." ? fo : g[1] === "?" ? mo : g[1] === "@" ? go : te }), l.removeAttribute(d);
        } else d.startsWith(lt) && (a.push({ type: 6, index: i }), l.removeAttribute(d));
        if (gs.test(l.tagName)) {
          const d = l.textContent.split(lt), m = d.length - 1;
          if (m > 0) {
            l.textContent = Xt ? Xt.emptyScript : "";
            for (let p = 0; p < m; p++) l.append(d[p], Mt()), ft.nextNode(), a.push({ type: 2, index: ++i });
            l.append(d[m], Mt());
          }
        }
      } else if (l.nodeType === 8) if (l.data === ms) a.push({ type: 2, index: i });
      else {
        let d = -1;
        for (; (d = l.data.indexOf(lt, d + 1)) !== -1; ) a.push({ type: 7, index: i }), d += lt.length - 1;
      }
      i++;
    }
  }
  static createElement(e, s) {
    const o = mt.createElement("template");
    return o.innerHTML = e, o;
  }
}
function $t(t, e, s = t, o) {
  if (e === it) return e;
  let l = o !== void 0 ? s._$Co?.[o] : s._$Cl;
  const i = Vt(e) ? void 0 : e._$litDirective$;
  return l?.constructor !== i && (l?._$AO?.(!1), i === void 0 ? l = void 0 : (l = new i(t), l._$AT(t, s, o)), o !== void 0 ? (s._$Co ??= [])[o] = l : s._$Cl = l), l !== void 0 && (e = $t(t, l._$AS(t, e.values), l, o)), e;
}
class po {
  constructor(e, s) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = s;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: s }, parts: o } = this._$AD, l = (e?.creationScope ?? mt).importNode(s, !0);
    ft.currentNode = l;
    let i = ft.nextNode(), r = 0, n = 0, a = o[0];
    for (; a !== void 0; ) {
      if (r === a.index) {
        let c;
        a.type === 2 ? c = new Ht(i, i.nextSibling, this, e) : a.type === 1 ? c = new a.ctor(i, a.name, a.strings, this, e) : a.type === 6 && (c = new vo(i, this, e)), this._$AV.push(c), a = o[++n];
      }
      r !== a?.index && (i = ft.nextNode(), r++);
    }
    return ft.currentNode = mt, l;
  }
  p(e) {
    let s = 0;
    for (const o of this._$AV) o !== void 0 && (o.strings !== void 0 ? (o._$AI(e, o, s), s += o.strings.length - 2) : o._$AI(e[s])), s++;
  }
}
class Ht {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, s, o, l) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = s, this._$AM = o, this.options = l, this._$Cv = l?.isConnected ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const s = this._$AM;
    return s !== void 0 && e?.nodeType === 11 && (e = s.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, s = this) {
    e = $t(this, e, s), Vt(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== it && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : co(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && Vt(this._$AH) ? this._$AA.nextSibling.data = e : this.T(mt.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: s, _$litType$: o } = e, l = typeof o == "number" ? this._$AC(e) : (o.el === void 0 && (o.el = Bt.createElement(vs(o.h, o.h[0]), this.options)), o);
    if (this._$AH?._$AD === l) this._$AH.p(s);
    else {
      const i = new po(l, this), r = i.u(this.options);
      i.p(s), this.T(r), this._$AH = i;
    }
  }
  _$AC(e) {
    let s = Ye.get(e.strings);
    return s === void 0 && Ye.set(e.strings, s = new Bt(e)), s;
  }
  k(e) {
    Ee(this._$AH) || (this._$AH = [], this._$AR());
    const s = this._$AH;
    let o, l = 0;
    for (const i of e) l === s.length ? s.push(o = new Ht(this.O(Mt()), this.O(Mt()), this, this.options)) : o = s[l], o._$AI(i), l++;
    l < s.length && (this._$AR(o && o._$AB.nextSibling, l), s.length = l);
  }
  _$AR(e = this._$AA.nextSibling, s) {
    for (this._$AP?.(!1, !0, s); e !== this._$AB; ) {
      const o = e.nextSibling;
      e.remove(), e = o;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}
class te {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, s, o, l, i) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = s, this._$AM = l, this.options = i, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = C;
  }
  _$AI(e, s = this, o, l) {
    const i = this.strings;
    let r = !1;
    if (i === void 0) e = $t(this, e, s, 0), r = !Vt(e) || e !== this._$AH && e !== it, r && (this._$AH = e);
    else {
      const n = e;
      let a, c;
      for (e = i[0], a = 0; a < i.length - 1; a++) c = $t(this, n[o + a], s, a), c === it && (c = this._$AH[a]), r ||= !Vt(c) || c !== this._$AH[a], c === C ? e = C : e !== C && (e += (c ?? "") + i[a + 1]), this._$AH[a] = c;
    }
    r && !l && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class fo extends te {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class mo extends te {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class go extends te {
  constructor(e, s, o, l, i) {
    super(e, s, o, l, i), this.type = 5;
  }
  _$AI(e, s = this) {
    if ((e = $t(this, e, s, 0) ?? C) === it) return;
    const o = this._$AH, l = e === C && o !== C || e.capture !== o.capture || e.once !== o.once || e.passive !== o.passive, i = e !== C && (o === C || l);
    l && this.element.removeEventListener(this.name, this, o), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class vo {
  constructor(e, s, o) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    $t(this, e);
  }
}
const bo = Se.litHtmlPolyfillSupport;
bo?.(Bt, Ht), (Se.litHtmlVersions ??= []).push("3.3.1");
const yo = (t, e, s) => {
  const o = s?.renderBefore ?? e;
  let l = o._$litPart$;
  if (l === void 0) {
    const i = s?.renderBefore ?? null;
    o._$litPart$ = l = new Ht(e.insertBefore(Mt(), i), i, void 0, s ?? {});
  }
  return l._$AI(t), l;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ke = globalThis;
let Dt = class extends wt {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const s = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = yo(s, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return it;
  }
};
Dt._$litElement$ = !0, Dt.finalized = !0, ke.litElementHydrateSupport?.({ LitElement: Dt });
const wo = ke.litElementPolyfillSupport;
wo?.({ LitElement: Dt });
(ke.litElementVersions ??= []).push("4.2.1");
const xo = Q`
  :root,
  :host,
  .sl-theme-light {
    color-scheme: light;

    --sl-color-gray-50: hsl(0 0% 97.5%);
    --sl-color-gray-100: hsl(240 4.8% 95.9%);
    --sl-color-gray-200: hsl(240 5.9% 90%);
    --sl-color-gray-300: hsl(240 4.9% 83.9%);
    --sl-color-gray-400: hsl(240 5% 64.9%);
    --sl-color-gray-500: hsl(240 3.8% 46.1%);
    --sl-color-gray-600: hsl(240 5.2% 33.9%);
    --sl-color-gray-700: hsl(240 5.3% 26.1%);
    --sl-color-gray-800: hsl(240 3.7% 15.9%);
    --sl-color-gray-900: hsl(240 5.9% 10%);
    --sl-color-gray-950: hsl(240 7.3% 8%);

    --sl-color-red-50: hsl(0 85.7% 97.3%);
    --sl-color-red-100: hsl(0 93.3% 94.1%);
    --sl-color-red-200: hsl(0 96.3% 89.4%);
    --sl-color-red-300: hsl(0 93.5% 81.8%);
    --sl-color-red-400: hsl(0 90.6% 70.8%);
    --sl-color-red-500: hsl(0 84.2% 60.2%);
    --sl-color-red-600: hsl(0 72.2% 50.6%);
    --sl-color-red-700: hsl(0 73.7% 41.8%);
    --sl-color-red-800: hsl(0 70% 35.3%);
    --sl-color-red-900: hsl(0 62.8% 30.6%);
    --sl-color-red-950: hsl(0 60% 19.6%);

    --sl-color-orange-50: hsl(33.3 100% 96.5%);
    --sl-color-orange-100: hsl(34.3 100% 91.8%);
    --sl-color-orange-200: hsl(32.1 97.7% 83.1%);
    --sl-color-orange-300: hsl(30.7 97.2% 72.4%);
    --sl-color-orange-400: hsl(27 96% 61%);
    --sl-color-orange-500: hsl(24.6 95% 53.1%);
    --sl-color-orange-600: hsl(20.5 90.2% 48.2%);
    --sl-color-orange-700: hsl(17.5 88.3% 40.4%);
    --sl-color-orange-800: hsl(15 79.1% 33.7%);
    --sl-color-orange-900: hsl(15.3 74.6% 27.8%);
    --sl-color-orange-950: hsl(15.2 69.1% 19%);

    --sl-color-amber-50: hsl(48 100% 96.1%);
    --sl-color-amber-100: hsl(48 96.5% 88.8%);
    --sl-color-amber-200: hsl(48 96.6% 76.7%);
    --sl-color-amber-300: hsl(45.9 96.7% 64.5%);
    --sl-color-amber-400: hsl(43.3 96.4% 56.3%);
    --sl-color-amber-500: hsl(37.7 92.1% 50.2%);
    --sl-color-amber-600: hsl(32.1 94.6% 43.7%);
    --sl-color-amber-700: hsl(26 90.5% 37.1%);
    --sl-color-amber-800: hsl(22.7 82.5% 31.4%);
    --sl-color-amber-900: hsl(21.7 77.8% 26.5%);
    --sl-color-amber-950: hsl(22.9 74.1% 16.7%);

    --sl-color-yellow-50: hsl(54.5 91.7% 95.3%);
    --sl-color-yellow-100: hsl(54.9 96.7% 88%);
    --sl-color-yellow-200: hsl(52.8 98.3% 76.9%);
    --sl-color-yellow-300: hsl(50.4 97.8% 63.5%);
    --sl-color-yellow-400: hsl(47.9 95.8% 53.1%);
    --sl-color-yellow-500: hsl(45.4 93.4% 47.5%);
    --sl-color-yellow-600: hsl(40.6 96.1% 40.4%);
    --sl-color-yellow-700: hsl(35.5 91.7% 32.9%);
    --sl-color-yellow-800: hsl(31.8 81% 28.8%);
    --sl-color-yellow-900: hsl(28.4 72.5% 25.7%);
    --sl-color-yellow-950: hsl(33.1 69% 13.9%);

    --sl-color-lime-50: hsl(78.3 92% 95.1%);
    --sl-color-lime-100: hsl(79.6 89.1% 89.2%);
    --sl-color-lime-200: hsl(80.9 88.5% 79.6%);
    --sl-color-lime-300: hsl(82 84.5% 67.1%);
    --sl-color-lime-400: hsl(82.7 78% 55.5%);
    --sl-color-lime-500: hsl(83.7 80.5% 44.3%);
    --sl-color-lime-600: hsl(84.8 85.2% 34.5%);
    --sl-color-lime-700: hsl(85.9 78.4% 27.3%);
    --sl-color-lime-800: hsl(86.3 69% 22.7%);
    --sl-color-lime-900: hsl(87.6 61.2% 20.2%);
    --sl-color-lime-950: hsl(86.5 60.6% 13.9%);

    --sl-color-green-50: hsl(138.5 76.5% 96.7%);
    --sl-color-green-100: hsl(140.6 84.2% 92.5%);
    --sl-color-green-200: hsl(141 78.9% 85.1%);
    --sl-color-green-300: hsl(141.7 76.6% 73.1%);
    --sl-color-green-400: hsl(141.9 69.2% 58%);
    --sl-color-green-500: hsl(142.1 70.6% 45.3%);
    --sl-color-green-600: hsl(142.1 76.2% 36.3%);
    --sl-color-green-700: hsl(142.4 71.8% 29.2%);
    --sl-color-green-800: hsl(142.8 64.2% 24.1%);
    --sl-color-green-900: hsl(143.8 61.2% 20.2%);
    --sl-color-green-950: hsl(144.3 60.7% 12%);

    --sl-color-emerald-50: hsl(151.8 81% 95.9%);
    --sl-color-emerald-100: hsl(149.3 80.4% 90%);
    --sl-color-emerald-200: hsl(152.4 76% 80.4%);
    --sl-color-emerald-300: hsl(156.2 71.6% 66.9%);
    --sl-color-emerald-400: hsl(158.1 64.4% 51.6%);
    --sl-color-emerald-500: hsl(160.1 84.1% 39.4%);
    --sl-color-emerald-600: hsl(161.4 93.5% 30.4%);
    --sl-color-emerald-700: hsl(162.9 93.5% 24.3%);
    --sl-color-emerald-800: hsl(163.1 88.1% 19.8%);
    --sl-color-emerald-900: hsl(164.2 85.7% 16.5%);
    --sl-color-emerald-950: hsl(164.3 87.5% 9.4%);

    --sl-color-teal-50: hsl(166.2 76.5% 96.7%);
    --sl-color-teal-100: hsl(167.2 85.5% 89.2%);
    --sl-color-teal-200: hsl(168.4 83.8% 78.2%);
    --sl-color-teal-300: hsl(170.6 76.9% 64.3%);
    --sl-color-teal-400: hsl(172.5 66% 50.4%);
    --sl-color-teal-500: hsl(173.4 80.4% 40%);
    --sl-color-teal-600: hsl(174.7 83.9% 31.6%);
    --sl-color-teal-700: hsl(175.3 77.4% 26.1%);
    --sl-color-teal-800: hsl(176.1 69.4% 21.8%);
    --sl-color-teal-900: hsl(175.9 60.8% 19%);
    --sl-color-teal-950: hsl(176.5 58.6% 11.4%);

    --sl-color-cyan-50: hsl(183.2 100% 96.3%);
    --sl-color-cyan-100: hsl(185.1 95.9% 90.4%);
    --sl-color-cyan-200: hsl(186.2 93.5% 81.8%);
    --sl-color-cyan-300: hsl(187 92.4% 69%);
    --sl-color-cyan-400: hsl(187.9 85.7% 53.3%);
    --sl-color-cyan-500: hsl(188.7 94.5% 42.7%);
    --sl-color-cyan-600: hsl(191.6 91.4% 36.5%);
    --sl-color-cyan-700: hsl(192.9 82.3% 31%);
    --sl-color-cyan-800: hsl(194.4 69.6% 27.1%);
    --sl-color-cyan-900: hsl(196.4 63.6% 23.7%);
    --sl-color-cyan-950: hsl(196.8 61% 16.1%);

    --sl-color-sky-50: hsl(204 100% 97.1%);
    --sl-color-sky-100: hsl(204 93.8% 93.7%);
    --sl-color-sky-200: hsl(200.6 94.4% 86.1%);
    --sl-color-sky-300: hsl(199.4 95.5% 73.9%);
    --sl-color-sky-400: hsl(198.4 93.2% 59.6%);
    --sl-color-sky-500: hsl(198.6 88.7% 48.4%);
    --sl-color-sky-600: hsl(200.4 98% 39.4%);
    --sl-color-sky-700: hsl(201.3 96.3% 32.2%);
    --sl-color-sky-800: hsl(201 90% 27.5%);
    --sl-color-sky-900: hsl(202 80.3% 23.9%);
    --sl-color-sky-950: hsl(202.3 73.8% 16.5%);

    --sl-color-blue-50: hsl(213.8 100% 96.9%);
    --sl-color-blue-100: hsl(214.3 94.6% 92.7%);
    --sl-color-blue-200: hsl(213.3 96.9% 87.3%);
    --sl-color-blue-300: hsl(211.7 96.4% 78.4%);
    --sl-color-blue-400: hsl(213.1 93.9% 67.8%);
    --sl-color-blue-500: hsl(217.2 91.2% 59.8%);
    --sl-color-blue-600: hsl(221.2 83.2% 53.3%);
    --sl-color-blue-700: hsl(224.3 76.3% 48%);
    --sl-color-blue-800: hsl(225.9 70.7% 40.2%);
    --sl-color-blue-900: hsl(224.4 64.3% 32.9%);
    --sl-color-blue-950: hsl(226.2 55.3% 18.4%);

    --sl-color-indigo-50: hsl(225.9 100% 96.7%);
    --sl-color-indigo-100: hsl(226.5 100% 93.9%);
    --sl-color-indigo-200: hsl(228 96.5% 88.8%);
    --sl-color-indigo-300: hsl(229.7 93.5% 81.8%);
    --sl-color-indigo-400: hsl(234.5 89.5% 73.9%);
    --sl-color-indigo-500: hsl(238.7 83.5% 66.7%);
    --sl-color-indigo-600: hsl(243.4 75.4% 58.6%);
    --sl-color-indigo-700: hsl(244.5 57.9% 50.6%);
    --sl-color-indigo-800: hsl(243.7 54.5% 41.4%);
    --sl-color-indigo-900: hsl(242.2 47.4% 34.3%);
    --sl-color-indigo-950: hsl(243.5 43.6% 22.9%);

    --sl-color-violet-50: hsl(250 100% 97.6%);
    --sl-color-violet-100: hsl(251.4 91.3% 95.5%);
    --sl-color-violet-200: hsl(250.5 95.2% 91.8%);
    --sl-color-violet-300: hsl(252.5 94.7% 85.1%);
    --sl-color-violet-400: hsl(255.1 91.7% 76.3%);
    --sl-color-violet-500: hsl(258.3 89.5% 66.3%);
    --sl-color-violet-600: hsl(262.1 83.3% 57.8%);
    --sl-color-violet-700: hsl(263.4 70% 50.4%);
    --sl-color-violet-800: hsl(263.4 69.3% 42.2%);
    --sl-color-violet-900: hsl(263.5 67.4% 34.9%);
    --sl-color-violet-950: hsl(265.1 61.5% 21.4%);

    --sl-color-purple-50: hsl(270 100% 98%);
    --sl-color-purple-100: hsl(268.7 100% 95.5%);
    --sl-color-purple-200: hsl(268.6 100% 91.8%);
    --sl-color-purple-300: hsl(269.2 97.4% 85.1%);
    --sl-color-purple-400: hsl(270 95.2% 75.3%);
    --sl-color-purple-500: hsl(270.7 91% 65.1%);
    --sl-color-purple-600: hsl(271.5 81.3% 55.9%);
    --sl-color-purple-700: hsl(272.1 71.7% 47.1%);
    --sl-color-purple-800: hsl(272.9 67.2% 39.4%);
    --sl-color-purple-900: hsl(273.6 65.6% 32%);
    --sl-color-purple-950: hsl(276 59.5% 16.5%);

    --sl-color-fuchsia-50: hsl(289.1 100% 97.8%);
    --sl-color-fuchsia-100: hsl(287 100% 95.5%);
    --sl-color-fuchsia-200: hsl(288.3 95.8% 90.6%);
    --sl-color-fuchsia-300: hsl(291.1 93.1% 82.9%);
    --sl-color-fuchsia-400: hsl(292 91.4% 72.5%);
    --sl-color-fuchsia-500: hsl(292.2 84.1% 60.6%);
    --sl-color-fuchsia-600: hsl(293.4 69.5% 48.8%);
    --sl-color-fuchsia-700: hsl(294.7 72.4% 39.8%);
    --sl-color-fuchsia-800: hsl(295.4 70.2% 32.9%);
    --sl-color-fuchsia-900: hsl(296.7 63.6% 28%);
    --sl-color-fuchsia-950: hsl(297.1 56.8% 14.5%);

    --sl-color-pink-50: hsl(327.3 73.3% 97.1%);
    --sl-color-pink-100: hsl(325.7 77.8% 94.7%);
    --sl-color-pink-200: hsl(325.9 84.6% 89.8%);
    --sl-color-pink-300: hsl(327.4 87.1% 81.8%);
    --sl-color-pink-400: hsl(328.6 85.5% 70.2%);
    --sl-color-pink-500: hsl(330.4 81.2% 60.4%);
    --sl-color-pink-600: hsl(333.3 71.4% 50.6%);
    --sl-color-pink-700: hsl(335.1 77.6% 42%);
    --sl-color-pink-800: hsl(335.8 74.4% 35.3%);
    --sl-color-pink-900: hsl(335.9 69% 30.4%);
    --sl-color-pink-950: hsl(336.2 65.4% 15.9%);

    --sl-color-rose-50: hsl(355.7 100% 97.3%);
    --sl-color-rose-100: hsl(355.6 100% 94.7%);
    --sl-color-rose-200: hsl(352.7 96.1% 90%);
    --sl-color-rose-300: hsl(352.6 95.7% 81.8%);
    --sl-color-rose-400: hsl(351.3 94.5% 71.4%);
    --sl-color-rose-500: hsl(349.7 89.2% 60.2%);
    --sl-color-rose-600: hsl(346.8 77.2% 49.8%);
    --sl-color-rose-700: hsl(345.3 82.7% 40.8%);
    --sl-color-rose-800: hsl(343.4 79.7% 34.7%);
    --sl-color-rose-900: hsl(341.5 75.5% 30.4%);
    --sl-color-rose-950: hsl(341.3 70.1% 17.1%);

    --sl-color-primary-50: var(--sl-color-sky-50);
    --sl-color-primary-100: var(--sl-color-sky-100);
    --sl-color-primary-200: var(--sl-color-sky-200);
    --sl-color-primary-300: var(--sl-color-sky-300);
    --sl-color-primary-400: var(--sl-color-sky-400);
    --sl-color-primary-500: var(--sl-color-sky-500);
    --sl-color-primary-600: var(--sl-color-sky-600);
    --sl-color-primary-700: var(--sl-color-sky-700);
    --sl-color-primary-800: var(--sl-color-sky-800);
    --sl-color-primary-900: var(--sl-color-sky-900);
    --sl-color-primary-950: var(--sl-color-sky-950);

    --sl-color-success-50: var(--sl-color-green-50);
    --sl-color-success-100: var(--sl-color-green-100);
    --sl-color-success-200: var(--sl-color-green-200);
    --sl-color-success-300: var(--sl-color-green-300);
    --sl-color-success-400: var(--sl-color-green-400);
    --sl-color-success-500: var(--sl-color-green-500);
    --sl-color-success-600: var(--sl-color-green-600);
    --sl-color-success-700: var(--sl-color-green-700);
    --sl-color-success-800: var(--sl-color-green-800);
    --sl-color-success-900: var(--sl-color-green-900);
    --sl-color-success-950: var(--sl-color-green-950);

    --sl-color-warning-50: var(--sl-color-amber-50);
    --sl-color-warning-100: var(--sl-color-amber-100);
    --sl-color-warning-200: var(--sl-color-amber-200);
    --sl-color-warning-300: var(--sl-color-amber-300);
    --sl-color-warning-400: var(--sl-color-amber-400);
    --sl-color-warning-500: var(--sl-color-amber-500);
    --sl-color-warning-600: var(--sl-color-amber-600);
    --sl-color-warning-700: var(--sl-color-amber-700);
    --sl-color-warning-800: var(--sl-color-amber-800);
    --sl-color-warning-900: var(--sl-color-amber-900);
    --sl-color-warning-950: var(--sl-color-amber-950);

    --sl-color-danger-50: var(--sl-color-red-50);
    --sl-color-danger-100: var(--sl-color-red-100);
    --sl-color-danger-200: var(--sl-color-red-200);
    --sl-color-danger-300: var(--sl-color-red-300);
    --sl-color-danger-400: var(--sl-color-red-400);
    --sl-color-danger-500: var(--sl-color-red-500);
    --sl-color-danger-600: var(--sl-color-red-600);
    --sl-color-danger-700: var(--sl-color-red-700);
    --sl-color-danger-800: var(--sl-color-red-800);
    --sl-color-danger-900: var(--sl-color-red-900);
    --sl-color-danger-950: var(--sl-color-red-950);

    --sl-color-neutral-50: var(--sl-color-gray-50);
    --sl-color-neutral-100: var(--sl-color-gray-100);
    --sl-color-neutral-200: var(--sl-color-gray-200);
    --sl-color-neutral-300: var(--sl-color-gray-300);
    --sl-color-neutral-400: var(--sl-color-gray-400);
    --sl-color-neutral-500: var(--sl-color-gray-500);
    --sl-color-neutral-600: var(--sl-color-gray-600);
    --sl-color-neutral-700: var(--sl-color-gray-700);
    --sl-color-neutral-800: var(--sl-color-gray-800);
    --sl-color-neutral-900: var(--sl-color-gray-900);
    --sl-color-neutral-950: var(--sl-color-gray-950);

    --sl-color-neutral-0: hsl(0, 0%, 100%);
    --sl-color-neutral-1000: hsl(0, 0%, 0%);

    --sl-border-radius-small: 0.1875rem;
    --sl-border-radius-medium: 0.25rem;
    --sl-border-radius-large: 0.5rem;
    --sl-border-radius-x-large: 1rem;

    --sl-border-radius-circle: 50%;
    --sl-border-radius-pill: 9999px;

    --sl-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);
    --sl-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);
    --sl-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);
    --sl-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);
    --sl-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);

    --sl-spacing-3x-small: 0.125rem;
    --sl-spacing-2x-small: 0.25rem;
    --sl-spacing-x-small: 0.5rem;
    --sl-spacing-small: 0.75rem;
    --sl-spacing-medium: 1rem;
    --sl-spacing-large: 1.25rem;
    --sl-spacing-x-large: 1.75rem;
    --sl-spacing-2x-large: 2.25rem;
    --sl-spacing-3x-large: 3rem;
    --sl-spacing-4x-large: 4.5rem;

    --sl-transition-x-slow: 1000ms;
    --sl-transition-slow: 500ms;
    --sl-transition-medium: 250ms;
    --sl-transition-fast: 150ms;
    --sl-transition-x-fast: 50ms;

    --sl-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo,
      monospace;
    --sl-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    --sl-font-serif: Georgia, "Times New Roman", serif;

    --sl-font-size-2x-small: 0.625rem;
    --sl-font-size-x-small: 0.75rem;
    --sl-font-size-small: 0.875rem;
    --sl-font-size-medium: 1rem;
    --sl-font-size-large: 1.25rem;
    --sl-font-size-x-large: 1.5rem;
    --sl-font-size-2x-large: 2.25rem;
    --sl-font-size-3x-large: 3rem;
    --sl-font-size-4x-large: 4.5rem;

    --sl-font-weight-light: 300;
    --sl-font-weight-normal: 400;
    --sl-font-weight-semibold: 500;
    --sl-font-weight-bold: 700;

    --sl-letter-spacing-denser: -0.03em;
    --sl-letter-spacing-dense: -0.015em;
    --sl-letter-spacing-normal: normal;
    --sl-letter-spacing-loose: 0.075em;
    --sl-letter-spacing-looser: 0.15em;

    --sl-line-height-denser: 1;
    --sl-line-height-dense: 1.4;
    --sl-line-height-normal: 1.8;
    --sl-line-height-loose: 2.2;
    --sl-line-height-looser: 2.6;

    --sl-focus-ring-color: var(--sl-color-primary-600);
    --sl-focus-ring-style: solid;
    --sl-focus-ring-width: 3px;
    --sl-focus-ring: var(--sl-focus-ring-style) var(--sl-focus-ring-width)
      var(--sl-focus-ring-color);
    --sl-focus-ring-offset: 1px;

    --sl-button-font-size-small: var(--sl-font-size-x-small);
    --sl-button-font-size-medium: var(--sl-font-size-small);
    --sl-button-font-size-large: var(--sl-font-size-medium);

    --sl-input-height-small: 1.875rem;
    --sl-input-height-medium: 2.5rem;
    --sl-input-height-large: 3.125rem;

    --sl-input-background-color: var(--sl-color-neutral-0);
    --sl-input-background-color-hover: var(--sl-input-background-color);
    --sl-input-background-color-focus: var(--sl-input-background-color);
    --sl-input-background-color-disabled: var(--sl-color-neutral-100);
    --sl-input-border-color: var(--sl-color-neutral-300);
    --sl-input-border-color-hover: var(--sl-color-neutral-400);
    --sl-input-border-color-focus: var(--sl-color-primary-500);
    --sl-input-border-color-disabled: var(--sl-color-neutral-300);
    --sl-input-border-width: 1px;
    --sl-input-required-content: "*";
    --sl-input-required-content-offset: -2px;
    --sl-input-required-content-color: var(--sl-input-label-color);

    --sl-input-border-radius-small: var(--sl-border-radius-medium);
    --sl-input-border-radius-medium: var(--sl-border-radius-medium);
    --sl-input-border-radius-large: var(--sl-border-radius-medium);

    --sl-input-font-family: var(--sl-font-sans);
    --sl-input-font-weight: var(--sl-font-weight-normal);
    --sl-input-font-size-small: var(--sl-font-size-small);
    --sl-input-font-size-medium: var(--sl-font-size-medium);
    --sl-input-font-size-large: var(--sl-font-size-large);
    --sl-input-letter-spacing: var(--sl-letter-spacing-normal);

    --sl-input-color: var(--sl-color-neutral-700);
    --sl-input-color-hover: var(--sl-color-neutral-700);
    --sl-input-color-focus: var(--sl-color-neutral-700);
    --sl-input-color-disabled: var(--sl-color-neutral-900);
    --sl-input-icon-color: var(--sl-color-neutral-500);
    --sl-input-icon-color-hover: var(--sl-color-neutral-600);
    --sl-input-icon-color-focus: var(--sl-color-neutral-600);
    --sl-input-placeholder-color: var(--sl-color-neutral-500);
    --sl-input-placeholder-color-disabled: var(--sl-color-neutral-600);
    --sl-input-spacing-small: var(--sl-spacing-small);
    --sl-input-spacing-medium: var(--sl-spacing-medium);
    --sl-input-spacing-large: var(--sl-spacing-large);

    --sl-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);
    --sl-input-focus-ring-offset: 0;

    --sl-input-filled-background-color: var(--sl-color-neutral-100);
    --sl-input-filled-background-color-hover: var(--sl-color-neutral-100);
    --sl-input-filled-background-color-focus: var(--sl-color-neutral-100);
    --sl-input-filled-background-color-disabled: var(--sl-color-neutral-100);
    --sl-input-filled-color: var(--sl-color-neutral-800);
    --sl-input-filled-color-hover: var(--sl-color-neutral-800);
    --sl-input-filled-color-focus: var(--sl-color-neutral-700);
    --sl-input-filled-color-disabled: var(--sl-color-neutral-800);

    --sl-input-label-font-size-small: var(--sl-font-size-small);
    --sl-input-label-font-size-medium: var(--sl-font-size-medium);
    --sl-input-label-font-size-large: var(--sl-font-size-large);
    --sl-input-label-color: inherit;

    --sl-input-help-text-font-size-small: var(--sl-font-size-x-small);
    --sl-input-help-text-font-size-medium: var(--sl-font-size-small);
    --sl-input-help-text-font-size-large: var(--sl-font-size-medium);
    --sl-input-help-text-color: var(--sl-color-neutral-500);

    --sl-toggle-size-small: 0.875rem;
    --sl-toggle-size-medium: 1.125rem;
    --sl-toggle-size-large: 1.375rem;

    --sl-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

    --sl-panel-background-color: var(--sl-color-neutral-0);
    --sl-panel-border-color: var(--sl-color-neutral-200);
    --sl-panel-border-width: 1px;

    --sl-tooltip-border-radius: var(--sl-border-radius-medium);
    --sl-tooltip-background-color: var(--sl-color-neutral-800);
    --sl-tooltip-color: var(--sl-color-neutral-0);
    --sl-tooltip-font-family: var(--sl-font-sans);
    --sl-tooltip-font-weight: var(--sl-font-weight-normal);
    --sl-tooltip-font-size: var(--sl-font-size-small);
    --sl-tooltip-line-height: var(--sl-line-height-dense);
    --sl-tooltip-padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-small);
    --sl-tooltip-arrow-size: 6px;

    --sl-z-index-drawer: 700;
    --sl-z-index-dialog: 800;
    --sl-z-index-dropdown: 900;
    --sl-z-index-toast: 950;
    --sl-z-index-tooltip: 1000;
  }

  @supports (scrollbar-gutter: stable) {
    .sl-scroll-lock {
      scrollbar-gutter: var(--sl-scroll-lock-gutter) !important;
    }

    .sl-scroll-lock body {
      overflow: hidden !important;
    }
  }

  @supports not (scrollbar-gutter: stable) {
    .sl-scroll-lock body {
      padding-right: var(--sl-scroll-lock-size) !important;
      overflow: hidden !important;
    }
  }

  .sl-toast-stack {
    position: fixed;
    top: 0;
    inset-inline-end: 0;
    z-index: var(--sl-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .sl-toast-stack sl-alert {
    margin: var(--sl-spacing-medium);
  }

  .sl-toast-stack sl-alert::part(base) {
    box-shadow: var(--sl-shadow-large);
  }
`;
var _o = Q`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`, $o = Q`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`, pe = "";
function Ke(t) {
  pe = t;
}
function Ao(t = "") {
  if (!pe) {
    const e = [...document.getElementsByTagName("script")], s = e.find((o) => o.hasAttribute("data-shoelace"));
    if (s)
      Ke(s.getAttribute("data-shoelace"));
    else {
      const o = e.find((i) => /shoelace(\.min)?\.js($|\?)/.test(i.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));
      let l = "";
      o && (l = o.getAttribute("src")), Ke(l.split("/").slice(0, -1).join("/"));
    }
  }
  return pe.replace(/\/$/, "") + (t ? `/${t.replace(/^\//, "")}` : "");
}
var Co = {
  name: "default",
  resolver: (t) => Ao(`assets/icons/${t}.svg`)
}, So = Co, Xe = {
  caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
  check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
  "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
  "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
  eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
  "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
  indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
  "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
  "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
  radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
  "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
  "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
  "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
}, Eo = {
  name: "system",
  resolver: (t) => t in Xe ? `data:image/svg+xml,${encodeURIComponent(Xe[t])}` : ""
}, ko = Eo, Oo = [So, ko], fe = [];
function zo(t) {
  fe.push(t);
}
function Po(t) {
  fe = fe.filter((e) => e !== t);
}
function Ze(t) {
  return Oo.find((e) => e.name === t);
}
var Lo = Q`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`, bs = Object.defineProperty, To = Object.defineProperties, Ro = Object.getOwnPropertyDescriptor, Do = Object.getOwnPropertyDescriptors, Ge = Object.getOwnPropertySymbols, Mo = Object.prototype.hasOwnProperty, Vo = Object.prototype.propertyIsEnumerable, ys = (t) => {
  throw TypeError(t);
}, Je = (t, e, s) => e in t ? bs(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, bt = (t, e) => {
  for (var s in e || (e = {}))
    Mo.call(e, s) && Je(t, s, e[s]);
  if (Ge)
    for (var s of Ge(e))
      Vo.call(e, s) && Je(t, s, e[s]);
  return t;
}, ee = (t, e) => To(t, Do(e)), u = (t, e, s, o) => {
  for (var l = o > 1 ? void 0 : o ? Ro(e, s) : e, i = t.length - 1, r; i >= 0; i--)
    (r = t[i]) && (l = (o ? r(e, s, l) : r(l)) || l);
  return o && l && bs(e, s, l), l;
}, ws = (t, e, s) => e.has(t) || ys("Cannot " + s), Bo = (t, e, s) => (ws(t, e, "read from private field"), e.get(t)), Io = (t, e, s) => e.has(t) ? ys("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), Ho = (t, e, s, o) => (ws(t, e, "write to private field"), e.set(t, s), s);
function ct(t, e) {
  const s = bt({
    waitUntilFirstUpdate: !1
  }, e);
  return (o, l) => {
    const { update: i } = o, r = Array.isArray(t) ? t : [t];
    o.update = function(n) {
      r.forEach((a) => {
        const c = a;
        if (n.has(c)) {
          const h = n.get(c), d = this[c];
          h !== d && (!s.waitUntilFirstUpdate || this.hasUpdated) && this[l](h, d);
        }
      }), i.call(this, n);
    };
  };
}
var Ct = Q`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const No = { attribute: !0, type: String, converter: Kt, reflect: !1, hasChanged: Ce }, Fo = (t = No, e, s) => {
  const { kind: o, metadata: l } = s;
  let i = globalThis.litPropertyMetadata.get(l);
  if (i === void 0 && globalThis.litPropertyMetadata.set(l, i = /* @__PURE__ */ new Map()), o === "setter" && ((t = Object.create(t)).wrapped = !0), i.set(s.name, t), o === "accessor") {
    const { name: r } = s;
    return { set(n) {
      const a = e.get.call(this);
      e.set.call(this, n), this.requestUpdate(r, a, t);
    }, init(n) {
      return n !== void 0 && this.C(r, void 0, t, n), n;
    } };
  }
  if (o === "setter") {
    const { name: r } = s;
    return function(n) {
      const a = this[r];
      e.call(this, n), this.requestUpdate(r, a, t);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function f(t) {
  return (e, s) => typeof s == "object" ? Fo(t, e, s) : ((o, l, i) => {
    const r = l.hasOwnProperty(i);
    return l.constructor.createProperty(i, o), r ? Object.getOwnPropertyDescriptor(l, i) : void 0;
  })(t, e, s);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function N(t) {
  return f({ ...t, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Uo = (t, e, s) => (s.configurable = !0, s.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(t, e, s), s);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function tt(t, e) {
  return (s, o, l) => {
    const i = (r) => r.renderRoot?.querySelector(t) ?? null;
    return Uo(s, o, { get() {
      return i(this);
    } });
  };
}
var qt, K = class extends Dt {
  constructor() {
    super(), Io(this, qt, !1), this.initialReflectedProperties = /* @__PURE__ */ new Map(), Object.entries(this.constructor.dependencies).forEach(([t, e]) => {
      this.constructor.define(t, e);
    });
  }
  emit(t, e) {
    const s = new CustomEvent(t, bt({
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      detail: {}
    }, e));
    return this.dispatchEvent(s), s;
  }
  /* eslint-enable */
  static define(t, e = this, s = {}) {
    const o = customElements.get(t);
    if (!o) {
      try {
        customElements.define(t, e, s);
      } catch {
        customElements.define(t, class extends e {
        }, s);
      }
      return;
    }
    let l = " (unknown version)", i = l;
    "version" in e && e.version && (l = " v" + e.version), "version" in o && o.version && (i = " v" + o.version), !(l && i && l === i) && console.warn(
      `Attempted to register <${t}>${l}, but <${t}>${i} has already been registered.`
    );
  }
  attributeChangedCallback(t, e, s) {
    Bo(this, qt) || (this.constructor.elementProperties.forEach(
      (o, l) => {
        o.reflect && this[l] != null && this.initialReflectedProperties.set(l, this[l]);
      }
    ), Ho(this, qt, !0)), super.attributeChangedCallback(t, e, s);
  }
  willUpdate(t) {
    super.willUpdate(t), this.initialReflectedProperties.forEach((e, s) => {
      t.has(s) && this[s] == null && (this[s] = e);
    });
  }
};
qt = /* @__PURE__ */ new WeakMap();
K.version = "2.20.1";
K.dependencies = {};
u([
  f()
], K.prototype, "dir", 2);
u([
  f()
], K.prototype, "lang", 2);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const jo = (t, e) => t?._$litType$ !== void 0;
var zt = Symbol(), Ft = Symbol(), ae, ce = /* @__PURE__ */ new Map(), F = class extends K {
  constructor() {
    super(...arguments), this.initialRender = !1, this.svg = null, this.label = "", this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(t, e) {
    var s;
    let o;
    if (e?.spriteSheet)
      return this.svg = O`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`, this.svg;
    try {
      if (o = await fetch(t, { mode: "cors" }), !o.ok) return o.status === 410 ? zt : Ft;
    } catch {
      return Ft;
    }
    try {
      const l = document.createElement("div");
      l.innerHTML = await o.text();
      const i = l.firstElementChild;
      if (((s = i?.tagName) == null ? void 0 : s.toLowerCase()) !== "svg") return zt;
      ae || (ae = new DOMParser());
      const n = ae.parseFromString(i.outerHTML, "text/html").body.querySelector("svg");
      return n ? (n.part.add("svg"), document.adoptNode(n)) : zt;
    } catch {
      return zt;
    }
  }
  connectedCallback() {
    super.connectedCallback(), zo(this);
  }
  firstUpdated() {
    this.initialRender = !0, this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), Po(this);
  }
  getIconSource() {
    const t = Ze(this.library);
    return this.name && t ? {
      url: t.resolver(this.name),
      fromLibrary: !0
    } : {
      url: this.src,
      fromLibrary: !1
    };
  }
  handleLabelChange() {
    typeof this.label == "string" && this.label.length > 0 ? (this.setAttribute("role", "img"), this.setAttribute("aria-label", this.label), this.removeAttribute("aria-hidden")) : (this.removeAttribute("role"), this.removeAttribute("aria-label"), this.setAttribute("aria-hidden", "true"));
  }
  async setIcon() {
    var t;
    const { url: e, fromLibrary: s } = this.getIconSource(), o = s ? Ze(this.library) : void 0;
    if (!e) {
      this.svg = null;
      return;
    }
    let l = ce.get(e);
    if (l || (l = this.resolveIcon(e, o), ce.set(e, l)), !this.initialRender)
      return;
    const i = await l;
    if (i === Ft && ce.delete(e), e === this.getIconSource().url) {
      if (jo(i)) {
        if (this.svg = i, o) {
          await this.updateComplete;
          const r = this.shadowRoot.querySelector("[part='svg']");
          typeof o.mutator == "function" && r && o.mutator(r);
        }
        return;
      }
      switch (i) {
        case Ft:
        case zt:
          this.svg = null, this.emit("sl-error");
          break;
        default:
          this.svg = i.cloneNode(!0), (t = o?.mutator) == null || t.call(o, this.svg), this.emit("sl-load");
      }
    }
  }
  render() {
    return this.svg;
  }
};
F.styles = [Ct, Lo];
u([
  N()
], F.prototype, "svg", 2);
u([
  f({ reflect: !0 })
], F.prototype, "name", 2);
u([
  f()
], F.prototype, "src", 2);
u([
  f()
], F.prototype, "label", 2);
u([
  f({ reflect: !0 })
], F.prototype, "library", 2);
u([
  ct("label")
], F.prototype, "handleLabelChange", 1);
u([
  ct(["name", "src", "library"])
], F.prototype, "setIcon", 1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xs = { ATTRIBUTE: 1, CHILD: 2 }, _s = (t) => (...e) => ({ _$litDirective$: t, values: e });
let $s = class {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, s, o) {
    this._$Ct = e, this._$AM = s, this._$Ci = o;
  }
  _$AS(e, s) {
    return this.update(e, s);
  }
  update(e, s) {
    return this.render(...s);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gt = _s(class extends $s {
  constructor(t) {
    if (super(t), t.type !== xs.ATTRIBUTE || t.name !== "class" || t.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return " " + Object.keys(t).filter((e) => t[e]).join(" ") + " ";
  }
  update(t, [e]) {
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), t.strings !== void 0 && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter((o) => o !== "")));
      for (const o in e) e[o] && !this.nt?.has(o) && this.st.add(o);
      return this.render(e);
    }
    const s = t.element.classList;
    for (const o of this.st) o in e || (s.remove(o), this.st.delete(o));
    for (const o in e) {
      const l = !!e[o];
      l === this.st.has(o) || this.nt?.has(o) || (l ? (s.add(o), this.st.add(o)) : (s.remove(o), this.st.delete(o)));
    }
    return it;
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const As = Symbol.for(""), Wo = (t) => {
  if (t?.r === As) return t?._$litStatic$;
}, Qe = (t, ...e) => ({ _$litStatic$: e.reduce((s, o, l) => s + ((i) => {
  if (i._$litStatic$ !== void 0) return i._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(o) + t[l + 1], t[0]), r: As }), ts = /* @__PURE__ */ new Map(), qo = (t) => (e, ...s) => {
  const o = s.length;
  let l, i;
  const r = [], n = [];
  let a, c = 0, h = !1;
  for (; c < o; ) {
    for (a = e[c]; c < o && (i = s[c], (l = Wo(i)) !== void 0); ) a += l + e[++c], h = !0;
    c !== o && n.push(i), r.push(a), c++;
  }
  if (c === o && r.push(e[o]), h) {
    const d = r.join("$$lit$$");
    (e = ts.get(d)) === void 0 && (r.raw = r, ts.set(d, e = r)), s = n;
  }
  return t(e, ...s);
}, Yo = qo(O);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = (t) => t ?? C;
var L = class extends K {
  constructor() {
    super(...arguments), this.hasFocus = !1, this.label = "", this.disabled = !1;
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleClick(t) {
    this.disabled && (t.preventDefault(), t.stopPropagation());
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(t) {
    this.button.focus(t);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const t = !!this.href, e = t ? Qe`a` : Qe`button`;
    return Yo`
      <${e}
        part="base"
        class=${gt({
      "icon-button": !0,
      "icon-button--disabled": !t && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${W(t ? void 0 : this.disabled)}
        type=${W(t ? void 0 : "button")}
        href=${W(t ? this.href : void 0)}
        target=${W(t ? this.target : void 0)}
        download=${W(t ? this.download : void 0)}
        rel=${W(t && this.target ? "noreferrer noopener" : void 0)}
        role=${W(t ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${W(this.name)}
          library=${W(this.library)}
          src=${W(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `;
  }
};
L.styles = [Ct, $o];
L.dependencies = { "sl-icon": F };
u([
  tt(".icon-button")
], L.prototype, "button", 2);
u([
  N()
], L.prototype, "hasFocus", 2);
u([
  f()
], L.prototype, "name", 2);
u([
  f()
], L.prototype, "library", 2);
u([
  f()
], L.prototype, "src", 2);
u([
  f()
], L.prototype, "href", 2);
u([
  f()
], L.prototype, "target", 2);
u([
  f()
], L.prototype, "download", 2);
u([
  f()
], L.prototype, "label", 2);
u([
  f({ type: Boolean, reflect: !0 })
], L.prototype, "disabled", 2);
const me = /* @__PURE__ */ new Set(), xt = /* @__PURE__ */ new Map();
let pt, Oe = "ltr", ze = "en";
const Cs = typeof MutationObserver < "u" && typeof document < "u" && typeof document.documentElement < "u";
if (Cs) {
  const t = new MutationObserver(Es);
  Oe = document.documentElement.dir || "ltr", ze = document.documentElement.lang || navigator.language, t.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["dir", "lang"]
  });
}
function Ss(...t) {
  t.map((e) => {
    const s = e.$code.toLowerCase();
    xt.has(s) ? xt.set(s, Object.assign(Object.assign({}, xt.get(s)), e)) : xt.set(s, e), pt || (pt = e);
  }), Es();
}
function Es() {
  Cs && (Oe = document.documentElement.dir || "ltr", ze = document.documentElement.lang || navigator.language), [...me.keys()].map((t) => {
    typeof t.requestUpdate == "function" && t.requestUpdate();
  });
}
let Ko = class {
  constructor(e) {
    this.host = e, this.host.addController(this);
  }
  hostConnected() {
    me.add(this.host);
  }
  hostDisconnected() {
    me.delete(this.host);
  }
  dir() {
    return `${this.host.dir || Oe}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || ze}`.toLowerCase();
  }
  getTranslationData(e) {
    var s, o;
    const l = new Intl.Locale(e.replace(/_/g, "-")), i = l?.language.toLowerCase(), r = (o = (s = l?.region) === null || s === void 0 ? void 0 : s.toLowerCase()) !== null && o !== void 0 ? o : "", n = xt.get(`${i}-${r}`), a = xt.get(i);
    return { locale: l, language: i, region: r, primary: n, secondary: a };
  }
  exists(e, s) {
    var o;
    const { primary: l, secondary: i } = this.getTranslationData((o = s.lang) !== null && o !== void 0 ? o : this.lang());
    return s = Object.assign({ includeFallback: !1 }, s), !!(l && l[e] || i && i[e] || s.includeFallback && pt && pt[e]);
  }
  term(e, ...s) {
    const { primary: o, secondary: l } = this.getTranslationData(this.lang());
    let i;
    if (o && o[e])
      i = o[e];
    else if (l && l[e])
      i = l[e];
    else if (pt && pt[e])
      i = pt[e];
    else
      return console.error(`No translation found for: ${String(e)}`), String(e);
    return typeof i == "function" ? i(...s) : i;
  }
  date(e, s) {
    return e = new Date(e), new Intl.DateTimeFormat(this.lang(), s).format(e);
  }
  number(e, s) {
    return e = Number(e), isNaN(e) ? "" : new Intl.NumberFormat(this.lang(), s).format(e);
  }
  relativeTime(e, s, o) {
    return new Intl.RelativeTimeFormat(this.lang(), o).format(e, s);
  }
};
var ks = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  error: "Error",
  goToSlide: (t, e) => `Go to slide ${t} of ${e}`,
  hidePassword: "Hide password",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (t) => t === 0 ? "No options selected" : t === 1 ? "1 option selected" : `${t} options selected`,
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (t) => `Slide ${t}`,
  toggleColorFormat: "Toggle color format"
};
Ss(ks);
var Xo = ks, se = class extends Ko {
};
Ss(Xo);
var yt = class extends K {
  constructor() {
    super(...arguments), this.localize = new se(this), this.variant = "neutral", this.size = "medium", this.pill = !1, this.removable = !1;
  }
  handleRemoveClick() {
    this.emit("sl-remove");
  }
  render() {
    return O`
      <span
        part="base"
        class=${gt({
      tag: !0,
      // Types
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      // Sizes
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      // Modifiers
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? O`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </span>
    `;
  }
};
yt.styles = [Ct, _o];
yt.dependencies = { "sl-icon-button": L };
u([
  f({ reflect: !0 })
], yt.prototype, "variant", 2);
u([
  f({ reflect: !0 })
], yt.prototype, "size", 2);
u([
  f({ type: Boolean, reflect: !0 })
], yt.prototype, "pill", 2);
u([
  f({ type: Boolean })
], yt.prototype, "removable", 2);
var Zo = Q`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;
function Go(t, e) {
  return {
    top: Math.round(t.getBoundingClientRect().top - e.getBoundingClientRect().top),
    left: Math.round(t.getBoundingClientRect().left - e.getBoundingClientRect().left)
  };
}
function Jo(t, e, s = "vertical", o = "smooth") {
  const l = Go(t, e), i = l.top + e.scrollTop, r = l.left + e.scrollLeft, n = e.scrollLeft, a = e.scrollLeft + e.offsetWidth, c = e.scrollTop, h = e.scrollTop + e.offsetHeight;
  (s === "horizontal" || s === "both") && (r < n ? e.scrollTo({ left: r, behavior: o }) : r + t.clientWidth > a && e.scrollTo({ left: r - e.offsetWidth + t.clientWidth, behavior: o })), (s === "vertical" || s === "both") && (i < c ? e.scrollTo({ top: i, behavior: o }) : i + t.clientHeight > h && e.scrollTo({ top: i - e.offsetHeight + t.clientHeight, behavior: o }));
}
var Qo = Q`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`, tl = Q`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;
const rt = Math.min, z = Math.max, Zt = Math.round, Ut = Math.floor, q = (t) => ({
  x: t,
  y: t
}), el = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, sl = {
  start: "end",
  end: "start"
};
function ge(t, e, s) {
  return z(t, rt(e, s));
}
function St(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function nt(t) {
  return t.split("-")[0];
}
function Et(t) {
  return t.split("-")[1];
}
function Os(t) {
  return t === "x" ? "y" : "x";
}
function Pe(t) {
  return t === "y" ? "height" : "width";
}
const ol = /* @__PURE__ */ new Set(["top", "bottom"]);
function J(t) {
  return ol.has(nt(t)) ? "y" : "x";
}
function Le(t) {
  return Os(J(t));
}
function ll(t, e, s) {
  s === void 0 && (s = !1);
  const o = Et(t), l = Le(t), i = Pe(l);
  let r = l === "x" ? o === (s ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (r = Gt(r)), [r, Gt(r)];
}
function il(t) {
  const e = Gt(t);
  return [ve(t), e, ve(e)];
}
function ve(t) {
  return t.replace(/start|end/g, (e) => sl[e]);
}
const es = ["left", "right"], ss = ["right", "left"], rl = ["top", "bottom"], nl = ["bottom", "top"];
function al(t, e, s) {
  switch (t) {
    case "top":
    case "bottom":
      return s ? e ? ss : es : e ? es : ss;
    case "left":
    case "right":
      return e ? rl : nl;
    default:
      return [];
  }
}
function cl(t, e, s, o) {
  const l = Et(t);
  let i = al(nt(t), s === "start", o);
  return l && (i = i.map((r) => r + "-" + l), e && (i = i.concat(i.map(ve)))), i;
}
function Gt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => el[e]);
}
function hl(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function zs(t) {
  return typeof t != "number" ? hl(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Jt(t) {
  const {
    x: e,
    y: s,
    width: o,
    height: l
  } = t;
  return {
    width: o,
    height: l,
    top: s,
    left: e,
    right: e + o,
    bottom: s + l,
    x: e,
    y: s
  };
}
function os(t, e, s) {
  let {
    reference: o,
    floating: l
  } = t;
  const i = J(e), r = Le(e), n = Pe(r), a = nt(e), c = i === "y", h = o.x + o.width / 2 - l.width / 2, d = o.y + o.height / 2 - l.height / 2, m = o[n] / 2 - l[n] / 2;
  let p;
  switch (a) {
    case "top":
      p = {
        x: h,
        y: o.y - l.height
      };
      break;
    case "bottom":
      p = {
        x: h,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: o.x - l.width,
        y: d
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
      };
  }
  switch (Et(e)) {
    case "start":
      p[r] -= m * (s && c ? -1 : 1);
      break;
    case "end":
      p[r] += m * (s && c ? -1 : 1);
      break;
  }
  return p;
}
const dl = async (t, e, s) => {
  const {
    placement: o = "bottom",
    strategy: l = "absolute",
    middleware: i = [],
    platform: r
  } = s, n = i.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let c = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: l
  }), {
    x: h,
    y: d
  } = os(c, o, a), m = o, p = {}, g = 0;
  for (let v = 0; v < n.length; v++) {
    const {
      name: w,
      fn: b
    } = n[v], {
      x,
      y: _,
      data: S,
      reset: A
    } = await b({
      x: h,
      y: d,
      initialPlacement: o,
      placement: m,
      strategy: l,
      middlewareData: p,
      rects: c,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    h = x ?? h, d = _ ?? d, p = {
      ...p,
      [w]: {
        ...p[w],
        ...S
      }
    }, A && g <= 50 && (g++, typeof A == "object" && (A.placement && (m = A.placement), A.rects && (c = A.rects === !0 ? await r.getElementRects({
      reference: t,
      floating: e,
      strategy: l
    }) : A.rects), {
      x: h,
      y: d
    } = os(c, m, a)), v = -1);
  }
  return {
    x: h,
    y: d,
    placement: m,
    strategy: l,
    middlewareData: p
  };
};
async function Te(t, e) {
  var s;
  e === void 0 && (e = {});
  const {
    x: o,
    y: l,
    platform: i,
    rects: r,
    elements: n,
    strategy: a
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: p = 0
  } = St(e, t), g = zs(p), w = n[m ? d === "floating" ? "reference" : "floating" : d], b = Jt(await i.getClippingRect({
    element: (s = await (i.isElement == null ? void 0 : i.isElement(w))) == null || s ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(n.floating)),
    boundary: c,
    rootBoundary: h,
    strategy: a
  })), x = d === "floating" ? {
    x: o,
    y: l,
    width: r.floating.width,
    height: r.floating.height
  } : r.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(n.floating)), S = await (i.isElement == null ? void 0 : i.isElement(_)) ? await (i.getScale == null ? void 0 : i.getScale(_)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, A = Jt(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: n,
    rect: x,
    offsetParent: _,
    strategy: a
  }) : x);
  return {
    top: (b.top - A.top + g.top) / S.y,
    bottom: (A.bottom - b.bottom + g.bottom) / S.y,
    left: (b.left - A.left + g.left) / S.x,
    right: (A.right - b.right + g.right) / S.x
  };
}
const ul = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: s,
      y: o,
      placement: l,
      rects: i,
      platform: r,
      elements: n,
      middlewareData: a
    } = e, {
      element: c,
      padding: h = 0
    } = St(t, e) || {};
    if (c == null)
      return {};
    const d = zs(h), m = {
      x: s,
      y: o
    }, p = Le(l), g = Pe(p), v = await r.getDimensions(c), w = p === "y", b = w ? "top" : "left", x = w ? "bottom" : "right", _ = w ? "clientHeight" : "clientWidth", S = i.reference[g] + i.reference[p] - m[p] - i.floating[g], A = m[p] - i.reference[p], D = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let E = D ? D[_] : 0;
    (!E || !await (r.isElement == null ? void 0 : r.isElement(D))) && (E = n.floating[_] || i.floating[g]);
    const Z = S / 2 - A / 2, U = E / 2 - v[g] / 2 - 1, T = rt(d[b], U), et = rt(d[x], U), j = T, st = E - v[g] - et, k = E / 2 - v[g] / 2 + Z, dt = ge(j, k, st), G = !a.arrow && Et(l) != null && k !== dt && i.reference[g] / 2 - (k < j ? T : et) - v[g] / 2 < 0, M = G ? k < j ? k - j : k - st : 0;
    return {
      [p]: m[p] + M,
      data: {
        [p]: dt,
        centerOffset: k - dt - M,
        ...G && {
          alignmentOffset: M
        }
      },
      reset: G
    };
  }
}), pl = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var s, o;
      const {
        placement: l,
        middlewareData: i,
        rects: r,
        initialPlacement: n,
        platform: a,
        elements: c
      } = e, {
        mainAxis: h = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: v = !0,
        ...w
      } = St(t, e);
      if ((s = i.arrow) != null && s.alignmentOffset)
        return {};
      const b = nt(l), x = J(n), _ = nt(n) === n, S = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), A = m || (_ || !v ? [Gt(n)] : il(n)), D = g !== "none";
      !m && D && A.push(...cl(n, v, g, S));
      const E = [n, ...A], Z = await Te(e, w), U = [];
      let T = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (h && U.push(Z[b]), d) {
        const k = ll(l, r, S);
        U.push(Z[k[0]], Z[k[1]]);
      }
      if (T = [...T, {
        placement: l,
        overflows: U
      }], !U.every((k) => k <= 0)) {
        var et, j;
        const k = (((et = i.flip) == null ? void 0 : et.index) || 0) + 1, dt = E[k];
        if (dt && (!(d === "alignment" ? x !== J(dt) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        T.every((V) => V.overflows[0] > 0 && J(V.placement) === x)))
          return {
            data: {
              index: k,
              overflows: T
            },
            reset: {
              placement: dt
            }
          };
        let G = (j = T.filter((M) => M.overflows[0] <= 0).sort((M, V) => M.overflows[1] - V.overflows[1])[0]) == null ? void 0 : j.placement;
        if (!G)
          switch (p) {
            case "bestFit": {
              var st;
              const M = (st = T.filter((V) => {
                if (D) {
                  const ot = J(V.placement);
                  return ot === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ot === "y";
                }
                return !0;
              }).map((V) => [V.placement, V.overflows.filter((ot) => ot > 0).reduce((ot, js) => ot + js, 0)]).sort((V, ot) => V[1] - ot[1])[0]) == null ? void 0 : st[0];
              M && (G = M);
              break;
            }
            case "initialPlacement":
              G = n;
              break;
          }
        if (l !== G)
          return {
            reset: {
              placement: G
            }
          };
      }
      return {};
    }
  };
}, fl = /* @__PURE__ */ new Set(["left", "top"]);
async function ml(t, e) {
  const {
    placement: s,
    platform: o,
    elements: l
  } = t, i = await (o.isRTL == null ? void 0 : o.isRTL(l.floating)), r = nt(s), n = Et(s), a = J(s) === "y", c = fl.has(r) ? -1 : 1, h = i && a ? -1 : 1, d = St(e, t);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: g
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return n && typeof g == "number" && (p = n === "end" ? g * -1 : g), a ? {
    x: p * h,
    y: m * c
  } : {
    x: m * c,
    y: p * h
  };
}
const gl = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var s, o;
      const {
        x: l,
        y: i,
        placement: r,
        middlewareData: n
      } = e, a = await ml(e, t);
      return r === ((s = n.offset) == null ? void 0 : s.placement) && (o = n.arrow) != null && o.alignmentOffset ? {} : {
        x: l + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: r
        }
      };
    }
  };
}, vl = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: s,
        y: o,
        placement: l
      } = e, {
        mainAxis: i = !0,
        crossAxis: r = !1,
        limiter: n = {
          fn: (w) => {
            let {
              x: b,
              y: x
            } = w;
            return {
              x: b,
              y: x
            };
          }
        },
        ...a
      } = St(t, e), c = {
        x: s,
        y: o
      }, h = await Te(e, a), d = J(nt(l)), m = Os(d);
      let p = c[m], g = c[d];
      if (i) {
        const w = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", x = p + h[w], _ = p - h[b];
        p = ge(x, p, _);
      }
      if (r) {
        const w = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", x = g + h[w], _ = g - h[b];
        g = ge(x, g, _);
      }
      const v = n.fn({
        ...e,
        [m]: p,
        [d]: g
      });
      return {
        ...v,
        data: {
          x: v.x - s,
          y: v.y - o,
          enabled: {
            [m]: i,
            [d]: r
          }
        }
      };
    }
  };
}, bl = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var s, o;
      const {
        placement: l,
        rects: i,
        platform: r,
        elements: n
      } = e, {
        apply: a = () => {
        },
        ...c
      } = St(t, e), h = await Te(e, c), d = nt(l), m = Et(l), p = J(l) === "y", {
        width: g,
        height: v
      } = i.floating;
      let w, b;
      d === "top" || d === "bottom" ? (w = d, b = m === (await (r.isRTL == null ? void 0 : r.isRTL(n.floating)) ? "start" : "end") ? "left" : "right") : (b = d, w = m === "end" ? "top" : "bottom");
      const x = v - h.top - h.bottom, _ = g - h.left - h.right, S = rt(v - h[w], x), A = rt(g - h[b], _), D = !e.middlewareData.shift;
      let E = S, Z = A;
      if ((s = e.middlewareData.shift) != null && s.enabled.x && (Z = _), (o = e.middlewareData.shift) != null && o.enabled.y && (E = x), D && !m) {
        const T = z(h.left, 0), et = z(h.right, 0), j = z(h.top, 0), st = z(h.bottom, 0);
        p ? Z = g - 2 * (T !== 0 || et !== 0 ? T + et : z(h.left, h.right)) : E = v - 2 * (j !== 0 || st !== 0 ? j + st : z(h.top, h.bottom));
      }
      await a({
        ...e,
        availableWidth: Z,
        availableHeight: E
      });
      const U = await r.getDimensions(n.floating);
      return g !== U.width || v !== U.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function oe() {
  return typeof window < "u";
}
function kt(t) {
  return Ps(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function P(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function X(t) {
  var e;
  return (e = (Ps(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ps(t) {
  return oe() ? t instanceof Node || t instanceof P(t).Node : !1;
}
function B(t) {
  return oe() ? t instanceof Element || t instanceof P(t).Element : !1;
}
function Y(t) {
  return oe() ? t instanceof HTMLElement || t instanceof P(t).HTMLElement : !1;
}
function ls(t) {
  return !oe() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof P(t).ShadowRoot;
}
const yl = /* @__PURE__ */ new Set(["inline", "contents"]);
function Nt(t) {
  const {
    overflow: e,
    overflowX: s,
    overflowY: o,
    display: l
  } = I(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + o + s) && !yl.has(l);
}
const wl = /* @__PURE__ */ new Set(["table", "td", "th"]);
function xl(t) {
  return wl.has(kt(t));
}
const _l = [":popover-open", ":modal"];
function le(t) {
  return _l.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const $l = ["transform", "translate", "scale", "rotate", "perspective"], Al = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Cl = ["paint", "layout", "strict", "content"];
function ie(t) {
  const e = Re(), s = B(t) ? I(t) : t;
  return $l.some((o) => s[o] ? s[o] !== "none" : !1) || (s.containerType ? s.containerType !== "normal" : !1) || !e && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !e && (s.filter ? s.filter !== "none" : !1) || Al.some((o) => (s.willChange || "").includes(o)) || Cl.some((o) => (s.contain || "").includes(o));
}
function Sl(t) {
  let e = at(t);
  for (; Y(e) && !At(e); ) {
    if (ie(e))
      return e;
    if (le(e))
      return null;
    e = at(e);
  }
  return null;
}
function Re() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const El = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function At(t) {
  return El.has(kt(t));
}
function I(t) {
  return P(t).getComputedStyle(t);
}
function re(t) {
  return B(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function at(t) {
  if (kt(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    ls(t) && t.host || // Fallback.
    X(t)
  );
  return ls(e) ? e.host : e;
}
function Ls(t) {
  const e = at(t);
  return At(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Y(e) && Nt(e) ? e : Ls(e);
}
function It(t, e, s) {
  var o;
  e === void 0 && (e = []), s === void 0 && (s = !0);
  const l = Ls(t), i = l === ((o = t.ownerDocument) == null ? void 0 : o.body), r = P(l);
  if (i) {
    const n = be(r);
    return e.concat(r, r.visualViewport || [], Nt(l) ? l : [], n && s ? It(n) : []);
  }
  return e.concat(l, It(l, [], s));
}
function be(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Ts(t) {
  const e = I(t);
  let s = parseFloat(e.width) || 0, o = parseFloat(e.height) || 0;
  const l = Y(t), i = l ? t.offsetWidth : s, r = l ? t.offsetHeight : o, n = Zt(s) !== i || Zt(o) !== r;
  return n && (s = i, o = r), {
    width: s,
    height: o,
    $: n
  };
}
function De(t) {
  return B(t) ? t : t.contextElement;
}
function _t(t) {
  const e = De(t);
  if (!Y(e))
    return q(1);
  const s = e.getBoundingClientRect(), {
    width: o,
    height: l,
    $: i
  } = Ts(e);
  let r = (i ? Zt(s.width) : s.width) / o, n = (i ? Zt(s.height) : s.height) / l;
  return (!r || !Number.isFinite(r)) && (r = 1), (!n || !Number.isFinite(n)) && (n = 1), {
    x: r,
    y: n
  };
}
const kl = /* @__PURE__ */ q(0);
function Rs(t) {
  const e = P(t);
  return !Re() || !e.visualViewport ? kl : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Ol(t, e, s) {
  return e === void 0 && (e = !1), !s || e && s !== P(t) ? !1 : e;
}
function vt(t, e, s, o) {
  e === void 0 && (e = !1), s === void 0 && (s = !1);
  const l = t.getBoundingClientRect(), i = De(t);
  let r = q(1);
  e && (o ? B(o) && (r = _t(o)) : r = _t(t));
  const n = Ol(i, s, o) ? Rs(i) : q(0);
  let a = (l.left + n.x) / r.x, c = (l.top + n.y) / r.y, h = l.width / r.x, d = l.height / r.y;
  if (i) {
    const m = P(i), p = o && B(o) ? P(o) : o;
    let g = m, v = be(g);
    for (; v && o && p !== g; ) {
      const w = _t(v), b = v.getBoundingClientRect(), x = I(v), _ = b.left + (v.clientLeft + parseFloat(x.paddingLeft)) * w.x, S = b.top + (v.clientTop + parseFloat(x.paddingTop)) * w.y;
      a *= w.x, c *= w.y, h *= w.x, d *= w.y, a += _, c += S, g = P(v), v = be(g);
    }
  }
  return Jt({
    width: h,
    height: d,
    x: a,
    y: c
  });
}
function Me(t, e) {
  const s = re(t).scrollLeft;
  return e ? e.left + s : vt(X(t)).left + s;
}
function Ds(t, e, s) {
  s === void 0 && (s = !1);
  const o = t.getBoundingClientRect(), l = o.left + e.scrollLeft - (s ? 0 : (
    // RTL <body> scrollbar.
    Me(t, o)
  )), i = o.top + e.scrollTop;
  return {
    x: l,
    y: i
  };
}
function zl(t) {
  let {
    elements: e,
    rect: s,
    offsetParent: o,
    strategy: l
  } = t;
  const i = l === "fixed", r = X(o), n = e ? le(e.floating) : !1;
  if (o === r || n && i)
    return s;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = q(1);
  const h = q(0), d = Y(o);
  if ((d || !d && !i) && ((kt(o) !== "body" || Nt(r)) && (a = re(o)), Y(o))) {
    const p = vt(o);
    c = _t(o), h.x = p.x + o.clientLeft, h.y = p.y + o.clientTop;
  }
  const m = r && !d && !i ? Ds(r, a, !0) : q(0);
  return {
    width: s.width * c.x,
    height: s.height * c.y,
    x: s.x * c.x - a.scrollLeft * c.x + h.x + m.x,
    y: s.y * c.y - a.scrollTop * c.y + h.y + m.y
  };
}
function Pl(t) {
  return Array.from(t.getClientRects());
}
function Ll(t) {
  const e = X(t), s = re(t), o = t.ownerDocument.body, l = z(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), i = z(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -s.scrollLeft + Me(t);
  const n = -s.scrollTop;
  return I(o).direction === "rtl" && (r += z(e.clientWidth, o.clientWidth) - l), {
    width: l,
    height: i,
    x: r,
    y: n
  };
}
function Tl(t, e) {
  const s = P(t), o = X(t), l = s.visualViewport;
  let i = o.clientWidth, r = o.clientHeight, n = 0, a = 0;
  if (l) {
    i = l.width, r = l.height;
    const c = Re();
    (!c || c && e === "fixed") && (n = l.offsetLeft, a = l.offsetTop);
  }
  return {
    width: i,
    height: r,
    x: n,
    y: a
  };
}
const Rl = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Dl(t, e) {
  const s = vt(t, !0, e === "fixed"), o = s.top + t.clientTop, l = s.left + t.clientLeft, i = Y(t) ? _t(t) : q(1), r = t.clientWidth * i.x, n = t.clientHeight * i.y, a = l * i.x, c = o * i.y;
  return {
    width: r,
    height: n,
    x: a,
    y: c
  };
}
function is(t, e, s) {
  let o;
  if (e === "viewport")
    o = Tl(t, s);
  else if (e === "document")
    o = Ll(X(t));
  else if (B(e))
    o = Dl(e, s);
  else {
    const l = Rs(t);
    o = {
      x: e.x - l.x,
      y: e.y - l.y,
      width: e.width,
      height: e.height
    };
  }
  return Jt(o);
}
function Ms(t, e) {
  const s = at(t);
  return s === e || !B(s) || At(s) ? !1 : I(s).position === "fixed" || Ms(s, e);
}
function Ml(t, e) {
  const s = e.get(t);
  if (s)
    return s;
  let o = It(t, [], !1).filter((n) => B(n) && kt(n) !== "body"), l = null;
  const i = I(t).position === "fixed";
  let r = i ? at(t) : t;
  for (; B(r) && !At(r); ) {
    const n = I(r), a = ie(r);
    !a && n.position === "fixed" && (l = null), (i ? !a && !l : !a && n.position === "static" && !!l && Rl.has(l.position) || Nt(r) && !a && Ms(t, r)) ? o = o.filter((h) => h !== r) : l = n, r = at(r);
  }
  return e.set(t, o), o;
}
function Vl(t) {
  let {
    element: e,
    boundary: s,
    rootBoundary: o,
    strategy: l
  } = t;
  const r = [...s === "clippingAncestors" ? le(e) ? [] : Ml(e, this._c) : [].concat(s), o], n = r[0], a = r.reduce((c, h) => {
    const d = is(e, h, l);
    return c.top = z(d.top, c.top), c.right = rt(d.right, c.right), c.bottom = rt(d.bottom, c.bottom), c.left = z(d.left, c.left), c;
  }, is(e, n, l));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Bl(t) {
  const {
    width: e,
    height: s
  } = Ts(t);
  return {
    width: e,
    height: s
  };
}
function Il(t, e, s) {
  const o = Y(e), l = X(e), i = s === "fixed", r = vt(t, !0, i, e);
  let n = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = q(0);
  function c() {
    a.x = Me(l);
  }
  if (o || !o && !i)
    if ((kt(e) !== "body" || Nt(l)) && (n = re(e)), o) {
      const p = vt(e, !0, i, e);
      a.x = p.x + e.clientLeft, a.y = p.y + e.clientTop;
    } else l && c();
  i && !o && l && c();
  const h = l && !o && !i ? Ds(l, n) : q(0), d = r.left + n.scrollLeft - a.x - h.x, m = r.top + n.scrollTop - a.y - h.y;
  return {
    x: d,
    y: m,
    width: r.width,
    height: r.height
  };
}
function he(t) {
  return I(t).position === "static";
}
function rs(t, e) {
  if (!Y(t) || I(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let s = t.offsetParent;
  return X(t) === s && (s = s.ownerDocument.body), s;
}
function Vs(t, e) {
  const s = P(t);
  if (le(t))
    return s;
  if (!Y(t)) {
    let l = at(t);
    for (; l && !At(l); ) {
      if (B(l) && !he(l))
        return l;
      l = at(l);
    }
    return s;
  }
  let o = rs(t, e);
  for (; o && xl(o) && he(o); )
    o = rs(o, e);
  return o && At(o) && he(o) && !ie(o) ? s : o || Sl(t) || s;
}
const Hl = async function(t) {
  const e = this.getOffsetParent || Vs, s = this.getDimensions, o = await s(t.floating);
  return {
    reference: Il(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Nl(t) {
  return I(t).direction === "rtl";
}
const Yt = {
  convertOffsetParentRelativeRectToViewportRelativeRect: zl,
  getDocumentElement: X,
  getClippingRect: Vl,
  getOffsetParent: Vs,
  getElementRects: Hl,
  getClientRects: Pl,
  getDimensions: Bl,
  getScale: _t,
  isElement: B,
  isRTL: Nl
};
function Bs(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Fl(t, e) {
  let s = null, o;
  const l = X(t);
  function i() {
    var n;
    clearTimeout(o), (n = s) == null || n.disconnect(), s = null;
  }
  function r(n, a) {
    n === void 0 && (n = !1), a === void 0 && (a = 1), i();
    const c = t.getBoundingClientRect(), {
      left: h,
      top: d,
      width: m,
      height: p
    } = c;
    if (n || e(), !m || !p)
      return;
    const g = Ut(d), v = Ut(l.clientWidth - (h + m)), w = Ut(l.clientHeight - (d + p)), b = Ut(h), _ = {
      rootMargin: -g + "px " + -v + "px " + -w + "px " + -b + "px",
      threshold: z(0, rt(1, a)) || 1
    };
    let S = !0;
    function A(D) {
      const E = D[0].intersectionRatio;
      if (E !== a) {
        if (!S)
          return r();
        E ? r(!1, E) : o = setTimeout(() => {
          r(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !Bs(c, t.getBoundingClientRect()) && r(), S = !1;
    }
    try {
      s = new IntersectionObserver(A, {
        ..._,
        // Handle <iframe>s
        root: l.ownerDocument
      });
    } catch {
      s = new IntersectionObserver(A, _);
    }
    s.observe(t);
  }
  return r(!0), i;
}
function Ul(t, e, s, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: l = !0,
    ancestorResize: i = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: n = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, c = De(t), h = l || i ? [...c ? It(c) : [], ...It(e)] : [];
  h.forEach((b) => {
    l && b.addEventListener("scroll", s, {
      passive: !0
    }), i && b.addEventListener("resize", s);
  });
  const d = c && n ? Fl(c, s) : null;
  let m = -1, p = null;
  r && (p = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === c && p && (p.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var _;
      (_ = p) == null || _.observe(e);
    })), s();
  }), c && !a && p.observe(c), p.observe(e));
  let g, v = a ? vt(t) : null;
  a && w();
  function w() {
    const b = vt(t);
    v && !Bs(v, b) && s(), v = b, g = requestAnimationFrame(w);
  }
  return s(), () => {
    var b;
    h.forEach((x) => {
      l && x.removeEventListener("scroll", s), i && x.removeEventListener("resize", s);
    }), d?.(), (b = p) == null || b.disconnect(), p = null, a && cancelAnimationFrame(g);
  };
}
const jl = gl, Wl = vl, ql = pl, ns = bl, Yl = ul, Kl = (t, e, s) => {
  const o = /* @__PURE__ */ new Map(), l = {
    platform: Yt,
    ...s
  }, i = {
    ...l.platform,
    _c: o
  };
  return dl(t, e, {
    ...l,
    platform: i
  });
};
function Xl(t) {
  return Zl(t);
}
function de(t) {
  return t.assignedSlot ? t.assignedSlot : t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode;
}
function Zl(t) {
  for (let e = t; e; e = de(e)) if (e instanceof Element && getComputedStyle(e).display === "none") return null;
  for (let e = de(t); e; e = de(e)) {
    if (!(e instanceof Element)) continue;
    const s = getComputedStyle(e);
    if (s.display !== "contents" && (s.position !== "static" || ie(s) || e.tagName === "BODY"))
      return e;
  }
  return null;
}
function Gl(t) {
  return t !== null && typeof t == "object" && "getBoundingClientRect" in t && ("contextElement" in t ? t.contextElement instanceof Element : !0);
}
var $ = class extends K {
  constructor() {
    super(...arguments), this.localize = new se(this), this.active = !1, this.placement = "top", this.strategy = "absolute", this.distance = 0, this.skidding = 0, this.arrow = !1, this.arrowPlacement = "anchor", this.arrowPadding = 10, this.flip = !1, this.flipFallbackPlacements = "", this.flipFallbackStrategy = "best-fit", this.flipPadding = 0, this.shift = !1, this.shiftPadding = 0, this.autoSizePadding = 0, this.hoverBridge = !1, this.updateHoverBridge = () => {
      if (this.hoverBridge && this.anchorEl) {
        const t = this.anchorEl.getBoundingClientRect(), e = this.popup.getBoundingClientRect(), s = this.placement.includes("top") || this.placement.includes("bottom");
        let o = 0, l = 0, i = 0, r = 0, n = 0, a = 0, c = 0, h = 0;
        s ? t.top < e.top ? (o = t.left, l = t.bottom, i = t.right, r = t.bottom, n = e.left, a = e.top, c = e.right, h = e.top) : (o = e.left, l = e.bottom, i = e.right, r = e.bottom, n = t.left, a = t.top, c = t.right, h = t.top) : t.left < e.left ? (o = t.right, l = t.top, i = e.left, r = e.top, n = t.right, a = t.bottom, c = e.left, h = e.bottom) : (o = e.right, l = e.top, i = t.left, r = t.top, n = e.right, a = e.bottom, c = t.left, h = t.bottom), this.style.setProperty("--hover-bridge-top-left-x", `${o}px`), this.style.setProperty("--hover-bridge-top-left-y", `${l}px`), this.style.setProperty("--hover-bridge-top-right-x", `${i}px`), this.style.setProperty("--hover-bridge-top-right-y", `${r}px`), this.style.setProperty("--hover-bridge-bottom-left-x", `${n}px`), this.style.setProperty("--hover-bridge-bottom-left-y", `${a}px`), this.style.setProperty("--hover-bridge-bottom-right-x", `${c}px`), this.style.setProperty("--hover-bridge-bottom-right-y", `${h}px`);
      }
    };
  }
  async connectedCallback() {
    super.connectedCallback(), await this.updateComplete, this.start();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.stop();
  }
  async updated(t) {
    super.updated(t), t.has("active") && (this.active ? this.start() : this.stop()), t.has("anchor") && this.handleAnchorChange(), this.active && (await this.updateComplete, this.reposition());
  }
  async handleAnchorChange() {
    if (await this.stop(), this.anchor && typeof this.anchor == "string") {
      const t = this.getRootNode();
      this.anchorEl = t.getElementById(this.anchor);
    } else this.anchor instanceof Element || Gl(this.anchor) ? this.anchorEl = this.anchor : this.anchorEl = this.querySelector('[slot="anchor"]');
    this.anchorEl instanceof HTMLSlotElement && (this.anchorEl = this.anchorEl.assignedElements({ flatten: !0 })[0]), this.anchorEl && this.active && this.start();
  }
  start() {
    !this.anchorEl || !this.active || (this.cleanup = Ul(this.anchorEl, this.popup, () => {
      this.reposition();
    }));
  }
  async stop() {
    return new Promise((t) => {
      this.cleanup ? (this.cleanup(), this.cleanup = void 0, this.removeAttribute("data-current-placement"), this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height"), requestAnimationFrame(() => t())) : t();
    });
  }
  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    if (!this.active || !this.anchorEl)
      return;
    const t = [
      // The offset middleware goes first
      jl({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    this.sync ? t.push(
      ns({
        apply: ({ rects: s }) => {
          const o = this.sync === "width" || this.sync === "both", l = this.sync === "height" || this.sync === "both";
          this.popup.style.width = o ? `${s.reference.width}px` : "", this.popup.style.height = l ? `${s.reference.height}px` : "";
        }
      })
    ) : (this.popup.style.width = "", this.popup.style.height = ""), this.flip && t.push(
      ql({
        boundary: this.flipBoundary,
        // @ts-expect-error - We're converting a string attribute to an array here
        fallbackPlacements: this.flipFallbackPlacements,
        fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
        padding: this.flipPadding
      })
    ), this.shift && t.push(
      Wl({
        boundary: this.shiftBoundary,
        padding: this.shiftPadding
      })
    ), this.autoSize ? t.push(
      ns({
        boundary: this.autoSizeBoundary,
        padding: this.autoSizePadding,
        apply: ({ availableWidth: s, availableHeight: o }) => {
          this.autoSize === "vertical" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-height", `${o}px`) : this.style.removeProperty("--auto-size-available-height"), this.autoSize === "horizontal" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-width", `${s}px`) : this.style.removeProperty("--auto-size-available-width");
        }
      })
    ) : (this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height")), this.arrow && t.push(
      Yl({
        element: this.arrowEl,
        padding: this.arrowPadding
      })
    );
    const e = this.strategy === "absolute" ? (s) => Yt.getOffsetParent(s, Xl) : Yt.getOffsetParent;
    Kl(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware: t,
      strategy: this.strategy,
      platform: ee(bt({}, Yt), {
        getOffsetParent: e
      })
    }).then(({ x: s, y: o, middlewareData: l, placement: i }) => {
      const r = this.localize.dir() === "rtl", n = { top: "bottom", right: "left", bottom: "top", left: "right" }[i.split("-")[0]];
      if (this.setAttribute("data-current-placement", i), Object.assign(this.popup.style, {
        left: `${s}px`,
        top: `${o}px`
      }), this.arrow) {
        const a = l.arrow.x, c = l.arrow.y;
        let h = "", d = "", m = "", p = "";
        if (this.arrowPlacement === "start") {
          const g = typeof a == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          h = typeof c == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "", d = r ? g : "", p = r ? "" : g;
        } else if (this.arrowPlacement === "end") {
          const g = typeof a == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          d = r ? "" : g, p = r ? g : "", m = typeof c == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else this.arrowPlacement === "center" ? (p = typeof a == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "", h = typeof c == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "") : (p = typeof a == "number" ? `${a}px` : "", h = typeof c == "number" ? `${c}px` : "");
        Object.assign(this.arrowEl.style, {
          top: h,
          right: d,
          bottom: m,
          left: p,
          [n]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    }), requestAnimationFrame(() => this.updateHoverBridge()), this.emit("sl-reposition");
  }
  render() {
    return O`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${gt({
      "popup-hover-bridge": !0,
      "popup-hover-bridge--visible": this.hoverBridge && this.active
    })}
      ></span>

      <div
        part="popup"
        class=${gt({
      popup: !0,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? O`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
$.styles = [Ct, tl];
u([
  tt(".popup")
], $.prototype, "popup", 2);
u([
  tt(".popup__arrow")
], $.prototype, "arrowEl", 2);
u([
  f()
], $.prototype, "anchor", 2);
u([
  f({ type: Boolean, reflect: !0 })
], $.prototype, "active", 2);
u([
  f({ reflect: !0 })
], $.prototype, "placement", 2);
u([
  f({ reflect: !0 })
], $.prototype, "strategy", 2);
u([
  f({ type: Number })
], $.prototype, "distance", 2);
u([
  f({ type: Number })
], $.prototype, "skidding", 2);
u([
  f({ type: Boolean })
], $.prototype, "arrow", 2);
u([
  f({ attribute: "arrow-placement" })
], $.prototype, "arrowPlacement", 2);
u([
  f({ attribute: "arrow-padding", type: Number })
], $.prototype, "arrowPadding", 2);
u([
  f({ type: Boolean })
], $.prototype, "flip", 2);
u([
  f({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (t) => t.split(" ").map((e) => e.trim()).filter((e) => e !== ""),
      toAttribute: (t) => t.join(" ")
    }
  })
], $.prototype, "flipFallbackPlacements", 2);
u([
  f({ attribute: "flip-fallback-strategy" })
], $.prototype, "flipFallbackStrategy", 2);
u([
  f({ type: Object })
], $.prototype, "flipBoundary", 2);
u([
  f({ attribute: "flip-padding", type: Number })
], $.prototype, "flipPadding", 2);
u([
  f({ type: Boolean })
], $.prototype, "shift", 2);
u([
  f({ type: Object })
], $.prototype, "shiftBoundary", 2);
u([
  f({ attribute: "shift-padding", type: Number })
], $.prototype, "shiftPadding", 2);
u([
  f({ attribute: "auto-size" })
], $.prototype, "autoSize", 2);
u([
  f()
], $.prototype, "sync", 2);
u([
  f({ type: Object })
], $.prototype, "autoSizeBoundary", 2);
u([
  f({ attribute: "auto-size-padding", type: Number })
], $.prototype, "autoSizePadding", 2);
u([
  f({ attribute: "hover-bridge", type: Boolean })
], $.prototype, "hoverBridge", 2);
var Pt = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), ue = /* @__PURE__ */ new WeakSet(), jt = /* @__PURE__ */ new WeakMap(), Jl = class {
  constructor(t, e) {
    this.handleFormData = (s) => {
      const o = this.options.disabled(this.host), l = this.options.name(this.host), i = this.options.value(this.host), r = this.host.tagName.toLowerCase() === "sl-button";
      this.host.isConnected && !o && !r && typeof l == "string" && l.length > 0 && typeof i < "u" && (Array.isArray(i) ? i.forEach((n) => {
        s.formData.append(l, n.toString());
      }) : s.formData.append(l, i.toString()));
    }, this.handleFormSubmit = (s) => {
      var o;
      const l = this.options.disabled(this.host), i = this.options.reportValidity;
      this.form && !this.form.noValidate && ((o = Pt.get(this.form)) == null || o.forEach((r) => {
        this.setUserInteracted(r, !0);
      })), this.form && !this.form.noValidate && !l && !i(this.host) && (s.preventDefault(), s.stopImmediatePropagation());
    }, this.handleFormReset = () => {
      this.options.setValue(this.host, this.options.defaultValue(this.host)), this.setUserInteracted(this.host, !1), jt.set(this.host, []);
    }, this.handleInteraction = (s) => {
      const o = jt.get(this.host);
      o.includes(s.type) || o.push(s.type), o.length === this.options.assumeInteractionOn.length && this.setUserInteracted(this.host, !0);
    }, this.checkFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const s = this.form.querySelectorAll("*");
        for (const o of s)
          if (typeof o.checkValidity == "function" && !o.checkValidity())
            return !1;
      }
      return !0;
    }, this.reportFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const s = this.form.querySelectorAll("*");
        for (const o of s)
          if (typeof o.reportValidity == "function" && !o.reportValidity())
            return !1;
      }
      return !0;
    }, (this.host = t).addController(this), this.options = bt({
      form: (s) => {
        const o = s.form;
        if (o) {
          const i = s.getRootNode().querySelector(`#${o}`);
          if (i)
            return i;
        }
        return s.closest("form");
      },
      name: (s) => s.name,
      value: (s) => s.value,
      defaultValue: (s) => s.defaultValue,
      disabled: (s) => {
        var o;
        return (o = s.disabled) != null ? o : !1;
      },
      reportValidity: (s) => typeof s.reportValidity == "function" ? s.reportValidity() : !0,
      checkValidity: (s) => typeof s.checkValidity == "function" ? s.checkValidity() : !0,
      setValue: (s, o) => s.value = o,
      assumeInteractionOn: ["sl-input"]
    }, e);
  }
  hostConnected() {
    const t = this.options.form(this.host);
    t && this.attachForm(t), jt.set(this.host, []), this.options.assumeInteractionOn.forEach((e) => {
      this.host.addEventListener(e, this.handleInteraction);
    });
  }
  hostDisconnected() {
    this.detachForm(), jt.delete(this.host), this.options.assumeInteractionOn.forEach((t) => {
      this.host.removeEventListener(t, this.handleInteraction);
    });
  }
  hostUpdated() {
    const t = this.options.form(this.host);
    t || this.detachForm(), t && this.form !== t && (this.detachForm(), this.attachForm(t)), this.host.hasUpdated && this.setValidity(this.host.validity.valid);
  }
  attachForm(t) {
    t ? (this.form = t, Pt.has(this.form) ? Pt.get(this.form).add(this.host) : Pt.set(this.form, /* @__PURE__ */ new Set([this.host])), this.form.addEventListener("formdata", this.handleFormData), this.form.addEventListener("submit", this.handleFormSubmit), this.form.addEventListener("reset", this.handleFormReset), Lt.has(this.form) || (Lt.set(this.form, this.form.reportValidity), this.form.reportValidity = () => this.reportFormValidity()), Tt.has(this.form) || (Tt.set(this.form, this.form.checkValidity), this.form.checkValidity = () => this.checkFormValidity())) : this.form = void 0;
  }
  detachForm() {
    if (!this.form) return;
    const t = Pt.get(this.form);
    t && (t.delete(this.host), t.size <= 0 && (this.form.removeEventListener("formdata", this.handleFormData), this.form.removeEventListener("submit", this.handleFormSubmit), this.form.removeEventListener("reset", this.handleFormReset), Lt.has(this.form) && (this.form.reportValidity = Lt.get(this.form), Lt.delete(this.form)), Tt.has(this.form) && (this.form.checkValidity = Tt.get(this.form), Tt.delete(this.form)), this.form = void 0));
  }
  setUserInteracted(t, e) {
    e ? ue.add(t) : ue.delete(t), t.requestUpdate();
  }
  doAction(t, e) {
    if (this.form) {
      const s = document.createElement("button");
      s.type = t, s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.clipPath = "inset(50%)", s.style.overflow = "hidden", s.style.whiteSpace = "nowrap", e && (s.name = e.name, s.value = e.value, ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((o) => {
        e.hasAttribute(o) && s.setAttribute(o, e.getAttribute(o));
      })), this.form.append(s), s.click(), s.remove();
    }
  }
  /** Returns the associated `<form>` element, if one exists. */
  getForm() {
    var t;
    return (t = this.form) != null ? t : null;
  }
  /** Resets the form, restoring all the control to their default value */
  reset(t) {
    this.doAction("reset", t);
  }
  /** Submits the form, triggering validation and form data injection. */
  submit(t) {
    this.doAction("submit", t);
  }
  /**
   * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
   * the host element immediately, i.e. before Lit updates the component in the next update.
   */
  setValidity(t) {
    const e = this.host, s = !!ue.has(e), o = !!e.required;
    e.toggleAttribute("data-required", o), e.toggleAttribute("data-optional", !o), e.toggleAttribute("data-invalid", !t), e.toggleAttribute("data-valid", t), e.toggleAttribute("data-user-invalid", !t && s), e.toggleAttribute("data-user-valid", t && s);
  }
  /**
   * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
   * that affects constraint validation changes so the component receives the correct validity states.
   */
  updateValidity() {
    const t = this.host;
    this.setValidity(t.validity.valid);
  }
  /**
   * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
   * If the `sl-invalid` event will be cancelled then the original `invalid`
   * event (which may have been passed as argument) will also be cancelled.
   * If no original `invalid` event has been passed then the `sl-invalid`
   * event will be cancelled before being dispatched.
   */
  emitInvalidEvent(t) {
    const e = new CustomEvent("sl-invalid", {
      bubbles: !1,
      composed: !1,
      cancelable: !0,
      detail: {}
    });
    t || e.preventDefault(), this.host.dispatchEvent(e) || t?.preventDefault();
  }
}, Is = Object.freeze({
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valid: !0,
  valueMissing: !1
});
Object.freeze(ee(bt({}, Is), {
  valid: !1,
  valueMissing: !0
}));
Object.freeze(ee(bt({}, Is), {
  valid: !1,
  customError: !0
}));
var Hs = /* @__PURE__ */ new Map(), Ql = /* @__PURE__ */ new WeakMap();
function ti(t) {
  return t ?? { keyframes: [], options: { duration: 0 } };
}
function as(t, e) {
  return e.toLowerCase() === "rtl" ? {
    keyframes: t.rtlKeyframes || t.keyframes,
    options: t.options
  } : t;
}
function Ns(t, e) {
  Hs.set(t, ti(e));
}
function cs(t, e, s) {
  const o = Ql.get(t);
  if (o?.[e])
    return as(o[e], s.dir);
  const l = Hs.get(e);
  return l ? as(l, s.dir) : {
    keyframes: [],
    options: { duration: 0 }
  };
}
function hs(t, e) {
  return new Promise((s) => {
    function o(l) {
      l.target === t && (t.removeEventListener(e, o), s());
    }
    t.addEventListener(e, o);
  });
}
function ds(t, e, s) {
  return new Promise((o) => {
    if (s?.duration === 1 / 0)
      throw new Error("Promise-based animations must be finite.");
    const l = t.animate(e, ee(bt({}, s), {
      duration: ei() ? 0 : s.duration
    }));
    l.addEventListener("cancel", o, { once: !0 }), l.addEventListener("finish", o, { once: !0 });
  });
}
function ei() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function us(t) {
  return Promise.all(
    t.getAnimations().map((e) => new Promise((s) => {
      e.cancel(), requestAnimationFrame(s);
    }))
  );
}
var si = class {
  constructor(t, ...e) {
    this.slotNames = [], this.handleSlotChange = (s) => {
      const o = s.target;
      (this.slotNames.includes("[default]") && !o.name || o.name && this.slotNames.includes(o.name)) && this.host.requestUpdate();
    }, (this.host = t).addController(this), this.slotNames = e;
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((t) => {
      if (t.nodeType === t.TEXT_NODE && t.textContent.trim() !== "")
        return !0;
      if (t.nodeType === t.ELEMENT_NODE) {
        const e = t;
        if (e.tagName.toLowerCase() === "sl-visually-hidden")
          return !1;
        if (!e.hasAttribute("slot"))
          return !0;
      }
      return !1;
    });
  }
  hasNamedSlot(t) {
    return this.host.querySelector(`:scope > [slot="${t}"]`) !== null;
  }
  test(t) {
    return t === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(t);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ye extends $s {
  constructor(e) {
    if (super(e), this.it = C, e.type !== xs.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === C || e == null) return this._t = void 0, this.it = e;
    if (e === it) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.it) return this._t;
    this.it = e;
    const s = [e];
    return s.raw = s, this._t = { _$litType$: this.constructor.resultType, strings: s, values: [] };
  }
}
ye.directiveName = "unsafeHTML", ye.resultType = 1;
const oi = _s(ye);
var y = class extends K {
  constructor() {
    super(...arguments), this.formControlController = new Jl(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    }), this.hasSlotController = new si(this, "help-text", "label"), this.localize = new se(this), this.typeToSelectString = "", this.hasFocus = !1, this.displayLabel = "", this.selectedOptions = [], this.valueHasChanged = !1, this.name = "", this._value = "", this.defaultValue = "", this.size = "medium", this.placeholder = "", this.multiple = !1, this.maxOptionsVisible = 3, this.disabled = !1, this.clearable = !1, this.open = !1, this.hoist = !1, this.filled = !1, this.pill = !1, this.label = "", this.placement = "bottom", this.helpText = "", this.form = "", this.required = !1, this.getTag = (t) => O`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${(e) => this.handleTagRemove(e, t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `, this.handleDocumentFocusIn = (t) => {
      const e = t.composedPath();
      this && !e.includes(this) && this.hide();
    }, this.handleDocumentKeyDown = (t) => {
      const e = t.target, s = e.closest(".select__clear") !== null, o = e.closest("sl-icon-button") !== null;
      if (!(s || o)) {
        if (t.key === "Escape" && this.open && !this.closeWatcher && (t.preventDefault(), t.stopPropagation(), this.hide(), this.displayInput.focus({ preventScroll: !0 })), t.key === "Enter" || t.key === " " && this.typeToSelectString === "") {
          if (t.preventDefault(), t.stopImmediatePropagation(), !this.open) {
            this.show();
            return;
          }
          this.currentOption && !this.currentOption.disabled && (this.valueHasChanged = !0, this.multiple ? this.toggleOptionSelection(this.currentOption) : this.setSelectedOptions(this.currentOption), this.updateComplete.then(() => {
            this.emit("sl-input"), this.emit("sl-change");
          }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
          return;
        }
        if (["ArrowUp", "ArrowDown", "Home", "End"].includes(t.key)) {
          const l = this.getAllOptions(), i = l.indexOf(this.currentOption);
          let r = Math.max(0, i);
          if (t.preventDefault(), !this.open && (this.show(), this.currentOption))
            return;
          t.key === "ArrowDown" ? (r = i + 1, r > l.length - 1 && (r = 0)) : t.key === "ArrowUp" ? (r = i - 1, r < 0 && (r = l.length - 1)) : t.key === "Home" ? r = 0 : t.key === "End" && (r = l.length - 1), this.setCurrentOption(l[r]);
        }
        if (t.key && t.key.length === 1 || t.key === "Backspace") {
          const l = this.getAllOptions();
          if (t.metaKey || t.ctrlKey || t.altKey)
            return;
          if (!this.open) {
            if (t.key === "Backspace")
              return;
            this.show();
          }
          t.stopPropagation(), t.preventDefault(), clearTimeout(this.typeToSelectTimeout), this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3), t.key === "Backspace" ? this.typeToSelectString = this.typeToSelectString.slice(0, -1) : this.typeToSelectString += t.key.toLowerCase();
          for (const i of l)
            if (i.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)) {
              this.setCurrentOption(i);
              break;
            }
        }
      }
    }, this.handleDocumentMouseDown = (t) => {
      const e = t.composedPath();
      this && !e.includes(this) && this.hide();
    };
  }
  get value() {
    return this._value;
  }
  set value(t) {
    this.multiple ? t = Array.isArray(t) ? t : t.split(" ") : t = Array.isArray(t) ? t.join(" ") : t, this._value !== t && (this.valueHasChanged = !0, this._value = t);
  }
  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback(), setTimeout(() => {
      this.handleDefaultSlotChange();
    }), this.open = !1;
  }
  addOpenListeners() {
    var t;
    document.addEventListener("focusin", this.handleDocumentFocusIn), document.addEventListener("keydown", this.handleDocumentKeyDown), document.addEventListener("mousedown", this.handleDocumentMouseDown), this.getRootNode() !== document && this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn), "CloseWatcher" in window && ((t = this.closeWatcher) == null || t.destroy(), this.closeWatcher = new CloseWatcher(), this.closeWatcher.onclose = () => {
      this.open && (this.hide(), this.displayInput.focus({ preventScroll: !0 }));
    });
  }
  removeOpenListeners() {
    var t;
    document.removeEventListener("focusin", this.handleDocumentFocusIn), document.removeEventListener("keydown", this.handleDocumentKeyDown), document.removeEventListener("mousedown", this.handleDocumentMouseDown), this.getRootNode() !== document && this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn), (t = this.closeWatcher) == null || t.destroy();
  }
  handleFocus() {
    this.hasFocus = !0, this.displayInput.setSelectionRange(0, 0), this.emit("sl-focus");
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleLabelClick() {
    this.displayInput.focus();
  }
  handleComboboxMouseDown(t) {
    const s = t.composedPath().some((o) => o instanceof Element && o.tagName.toLowerCase() === "sl-icon-button");
    this.disabled || s || (t.preventDefault(), this.displayInput.focus({ preventScroll: !0 }), this.open = !this.open);
  }
  handleComboboxKeyDown(t) {
    t.key !== "Tab" && (t.stopPropagation(), this.handleDocumentKeyDown(t));
  }
  handleClearClick(t) {
    t.stopPropagation(), this.valueHasChanged = !0, this.value !== "" && (this.setSelectedOptions([]), this.displayInput.focus({ preventScroll: !0 }), this.updateComplete.then(() => {
      this.emit("sl-clear"), this.emit("sl-input"), this.emit("sl-change");
    }));
  }
  handleClearMouseDown(t) {
    t.stopPropagation(), t.preventDefault();
  }
  handleOptionClick(t) {
    const s = t.target.closest("sl-option"), o = this.value;
    s && !s.disabled && (this.valueHasChanged = !0, this.multiple ? this.toggleOptionSelection(s) : this.setSelectedOptions(s), this.updateComplete.then(() => this.displayInput.focus({ preventScroll: !0 })), this.value !== o && this.updateComplete.then(() => {
      this.emit("sl-input"), this.emit("sl-change");
    }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
  }
  /* @internal - used by options to update labels */
  handleDefaultSlotChange() {
    customElements.get("sl-option") || customElements.whenDefined("sl-option").then(() => this.handleDefaultSlotChange());
    const t = this.getAllOptions(), e = this.valueHasChanged ? this.value : this.defaultValue, s = Array.isArray(e) ? e : [e], o = [];
    t.forEach((l) => o.push(l.value)), this.setSelectedOptions(t.filter((l) => s.includes(l.value)));
  }
  handleTagRemove(t, e) {
    t.stopPropagation(), this.valueHasChanged = !0, this.disabled || (this.toggleOptionSelection(e, !1), this.updateComplete.then(() => {
      this.emit("sl-input"), this.emit("sl-change");
    }));
  }
  // Gets an array of all <sl-option> elements
  getAllOptions() {
    return [...this.querySelectorAll("sl-option")];
  }
  // Gets the first <sl-option> element
  getFirstOption() {
    return this.querySelector("sl-option");
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(t) {
    this.getAllOptions().forEach((s) => {
      s.current = !1, s.tabIndex = -1;
    }), t && (this.currentOption = t, t.current = !0, t.tabIndex = 0, t.focus());
  }
  // Sets the selected option(s)
  setSelectedOptions(t) {
    const e = this.getAllOptions(), s = Array.isArray(t) ? t : [t];
    e.forEach((o) => o.selected = !1), s.length && s.forEach((o) => o.selected = !0), this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(t, e) {
    e === !0 || e === !1 ? t.selected = e : t.selected = !t.selected, this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    var t, e, s;
    const o = this.getAllOptions();
    this.selectedOptions = o.filter((i) => i.selected);
    const l = this.valueHasChanged;
    if (this.multiple)
      this.value = this.selectedOptions.map((i) => i.value), this.placeholder && this.value.length === 0 ? this.displayLabel = "" : this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
    else {
      const i = this.selectedOptions[0];
      this.value = (t = i?.value) != null ? t : "", this.displayLabel = (s = (e = i?.getTextLabel) == null ? void 0 : e.call(i)) != null ? s : "";
    }
    this.valueHasChanged = l, this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((t, e) => {
      if (e < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const s = this.getTag(t, e);
        return O`<div @sl-remove=${(o) => this.handleTagRemove(o, t)}>
          ${typeof s == "string" ? oi(s) : s}
        </div>`;
      } else if (e === this.maxOptionsVisible)
        return O`<sl-tag size=${this.size}>+${this.selectedOptions.length - e}</sl-tag>`;
      return O``;
    });
  }
  handleInvalid(t) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(t);
  }
  handleDisabledChange() {
    this.disabled && (this.open = !1, this.handleOpenChange());
  }
  attributeChangedCallback(t, e, s) {
    if (super.attributeChangedCallback(t, e, s), t === "value") {
      const o = this.valueHasChanged;
      this.value = this.defaultValue, this.valueHasChanged = o;
    }
  }
  handleValueChange() {
    if (!this.valueHasChanged) {
      const s = this.valueHasChanged;
      this.value = this.defaultValue, this.valueHasChanged = s;
    }
    const t = this.getAllOptions(), e = Array.isArray(this.value) ? this.value : [this.value];
    this.setSelectedOptions(t.filter((s) => e.includes(s.value)));
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption()), this.emit("sl-show"), this.addOpenListeners(), await us(this), this.listbox.hidden = !1, this.popup.active = !0, requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      const { keyframes: t, options: e } = cs(this, "select.show", { dir: this.localize.dir() });
      await ds(this.popup.popup, t, e), this.currentOption && Jo(this.currentOption, this.listbox, "vertical", "auto"), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), await us(this);
      const { keyframes: t, options: e } = cs(this, "select.hide", { dir: this.localize.dir() });
      await ds(this.popup.popup, t, e), this.listbox.hidden = !0, this.popup.active = !1, this.emit("sl-after-hide");
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !0, hs(this, "sl-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !1, hs(this, "sl-after-hide");
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(t) {
    this.valueInput.setCustomValidity(t), this.formControlController.updateValidity();
  }
  /** Sets focus on the control. */
  focus(t) {
    this.displayInput.focus(t);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  render() {
    const t = this.hasSlotController.test("label"), e = this.hasSlotController.test("help-text"), s = this.label ? !0 : !!t, o = this.helpText ? !0 : !!e, l = this.clearable && !this.disabled && this.value.length > 0, i = this.placeholder && this.value && this.value.length <= 0;
    return O`
      <div
        part="form-control"
        class=${gt({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": s,
      "form-control--has-help-text": o
    })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${gt({
      select: !0,
      "select--standard": !0,
      "select--filled": this.filled,
      "select--pill": this.pill,
      "select--open": this.open,
      "select--disabled": this.disabled,
      "select--multiple": this.multiple,
      "select--focused": this.hasFocus,
      "select--placeholder-visible": i,
      "select--top": this.placement === "top",
      "select--bottom": this.placement === "bottom",
      "select--small": this.size === "small",
      "select--medium": this.size === "medium",
      "select--large": this.size === "large"
    })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple ? O`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${l ? O`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  ` : ""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
y.styles = [Ct, Qo, Zo];
y.dependencies = {
  "sl-icon": F,
  "sl-popup": $,
  "sl-tag": yt
};
u([
  tt(".select")
], y.prototype, "popup", 2);
u([
  tt(".select__combobox")
], y.prototype, "combobox", 2);
u([
  tt(".select__display-input")
], y.prototype, "displayInput", 2);
u([
  tt(".select__value-input")
], y.prototype, "valueInput", 2);
u([
  tt(".select__listbox")
], y.prototype, "listbox", 2);
u([
  N()
], y.prototype, "hasFocus", 2);
u([
  N()
], y.prototype, "displayLabel", 2);
u([
  N()
], y.prototype, "currentOption", 2);
u([
  N()
], y.prototype, "selectedOptions", 2);
u([
  N()
], y.prototype, "valueHasChanged", 2);
u([
  f()
], y.prototype, "name", 2);
u([
  N()
], y.prototype, "value", 1);
u([
  f({ attribute: "value" })
], y.prototype, "defaultValue", 2);
u([
  f({ reflect: !0 })
], y.prototype, "size", 2);
u([
  f()
], y.prototype, "placeholder", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "multiple", 2);
u([
  f({ attribute: "max-options-visible", type: Number })
], y.prototype, "maxOptionsVisible", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "disabled", 2);
u([
  f({ type: Boolean })
], y.prototype, "clearable", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "open", 2);
u([
  f({ type: Boolean })
], y.prototype, "hoist", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "filled", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "pill", 2);
u([
  f()
], y.prototype, "label", 2);
u([
  f({ reflect: !0 })
], y.prototype, "placement", 2);
u([
  f({ attribute: "help-text" })
], y.prototype, "helpText", 2);
u([
  f({ reflect: !0 })
], y.prototype, "form", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "required", 2);
u([
  f()
], y.prototype, "getTag", 2);
u([
  ct("disabled", { waitUntilFirstUpdate: !0 })
], y.prototype, "handleDisabledChange", 1);
u([
  ct(["defaultValue", "value"], { waitUntilFirstUpdate: !0 })
], y.prototype, "handleValueChange", 1);
u([
  ct("open", { waitUntilFirstUpdate: !0 })
], y.prototype, "handleOpenChange", 1);
Ns("select.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
Ns("select.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});
y.define("sl-select");
var li = Q`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`, R = class extends K {
  constructor() {
    super(...arguments), this.localize = new se(this), this.isInitialized = !1, this.current = !1, this.selected = !1, this.hasHover = !1, this.value = "", this.disabled = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "option"), this.setAttribute("aria-selected", "false");
  }
  handleDefaultSlotChange() {
    this.isInitialized ? customElements.whenDefined("sl-select").then(() => {
      const t = this.closest("sl-select");
      t && t.handleDefaultSlotChange();
    }) : this.isInitialized = !0;
  }
  handleMouseEnter() {
    this.hasHover = !0;
  }
  handleMouseLeave() {
    this.hasHover = !1;
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleValueChange() {
    typeof this.value != "string" && (this.value = String(this.value)), this.value.includes(" ") && (console.error("Option values cannot include a space. All spaces have been replaced with underscores.", this), this.value = this.value.replace(/ /g, "_"));
  }
  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    const t = this.childNodes;
    let e = "";
    return [...t].forEach((s) => {
      s.nodeType === Node.ELEMENT_NODE && (s.hasAttribute("slot") || (e += s.textContent)), s.nodeType === Node.TEXT_NODE && (e += s.textContent);
    }), e.trim();
  }
  render() {
    return O`
      <div
        part="base"
        class=${gt({
      option: !0,
      "option--current": this.current,
      "option--disabled": this.disabled,
      "option--selected": this.selected,
      "option--hover": this.hasHover
    })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
  }
};
R.styles = [Ct, li];
R.dependencies = { "sl-icon": F };
u([
  tt(".option__label")
], R.prototype, "defaultSlot", 2);
u([
  N()
], R.prototype, "current", 2);
u([
  N()
], R.prototype, "selected", 2);
u([
  N()
], R.prototype, "hasHover", 2);
u([
  f({ reflect: !0 })
], R.prototype, "value", 2);
u([
  f({ type: Boolean, reflect: !0 })
], R.prototype, "disabled", 2);
u([
  ct("disabled")
], R.prototype, "handleDisabledChange", 1);
u([
  ct("selected")
], R.prototype, "handleSelectedChange", 1);
u([
  ct("value")
], R.prototype, "handleValueChange", 1);
R.define("sl-option");
var ii = Object.defineProperty, ri = Object.getOwnPropertyDescriptor, Fs = (t) => {
  throw TypeError(t);
}, ht = (t, e, s, o) => {
  for (var l = o > 1 ? void 0 : o ? ri(e, s) : e, i = t.length - 1, r; i >= 0; i--)
    (r = t[i]) && (l = (o ? r(e, s, l) : r(l)) || l);
  return o && l && ii(e, s, l), l;
}, ni = (t, e, s) => e.has(t) || Fs("Cannot " + s), ai = (t, e, s) => e.has(t) ? Fs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), ci = (t, e, s) => (ni(t, e, "access private method"), s), we, Us;
let H = class extends Xs(Zs, void 0) {
  constructor() {
    super(), ai(this, we), this._multiple = !1, this._options = [], this._value = void 0, this.readonly = !1, this.mandatory = !1, this.getFormElement = () => this._input, this.addValidator(
      "valueMissing",
      () => "Value is required",
      () => !this.readonly && this.mandatory && !this.value?.length
    );
  }
  set value(t) {
    if (JSON.stringify(this._value) !== JSON.stringify(t)) {
      if (Array.isArray(t))
        this._value = t.filter((e) => !!e && typeof e == "string");
      else if (t && typeof t == "string")
        this._value = [t];
      else
        return;
      this.dispatchEvent(new Gs());
    }
  }
  get value() {
    return this._value || [];
  }
  set config(t) {
    if (!t) return;
    this._multiple = !!t.getValueByAlias("multiple");
    const e = t.getValueByAlias("items"), s = t.getValueByAlias("default");
    this._multiple ? this._defaultValues = s?.split(",").map((o) => o.trim()).filter(Boolean) : s && (this._defaultValues = [s]), Array.isArray(e) && e.length > 0 && (this._options = e.filter((o) => !!o?.key).map((o) => ({
      name: this.localize.string(o.value) || o.key,
      value: o.key,
      alias: this.toSlSelectAlias(o.key),
      selected: !!this._value?.includes(o.key)
    })), this._value?.forEach((o) => {
      this._options.find((l) => l.value === o) || this._options.push({
        name: `${o} (${this.localize.term("validation_legacyOption")})`,
        value: o,
        alias: this.toSlSelectAlias(o),
        selected: !0,
        invalid: !0
      });
    }));
  }
  render() {
    return Ve`
          <sl-select
            value="${this.value.join(" ")}"
            @sl-change=${ci(this, we, Us)}
            placeholder="${this._multiple ? "Select multiple" : "Select one"}"
            size="small"
            clearable
            ?disabled=${this.readonly}
            ?multiple=${this._multiple}
          >
            ${Ws(
      this._options,
      (t) => Ve`
                <sl-option value="${t.alias}" ?disabled="${t.invalid}">${t.name}</sl-option>
              `
    )}
            <span slot="help-text" class="error">
              ${this._legacyOptionMessage}
            </span>
          </sl-select>
        `;
  }
  firstUpdated() {
    this._defaultValues?.length && !this._value && (this.value = this._defaultValues);
  }
  get _legacyOptionMessage() {
    return !!this._value?.some((e) => {
      const s = this._options.find((o) => o.value === e);
      return s ? s.invalid : !1;
    }) ? this.localize.term("validation_legacyOptionDescription") : "";
  }
  /**
   * <sl-select> doesn't allow spaces for values, so need to format it
   * @param value - available option value
   * @return string where all the whitespaces replaced with underscores
   */
  toSlSelectAlias(t) {
    return t.trim().replace(/\s+/g, "_");
  }
};
we = /* @__PURE__ */ new WeakSet();
Us = function(t) {
  const e = Array.isArray(t?.target?.value) ? t.target.value : [t.target.value];
  this.value = this._options.filter((s) => e.includes(s.alias)).map((s) => s.value);
};
H.styles = [
  xo,
  qs`
            .error {
                color: var(--uui-color-danger);
                font-size: var(--uui-font-size-small);
            }
        `
];
ht([
  xe()
], H.prototype, "_multiple", 2);
ht([
  xe()
], H.prototype, "_options", 2);
ht([
  xe()
], H.prototype, "_value", 2);
ht([
  _e({ type: Array })
], H.prototype, "value", 1);
ht([
  _e({ type: Boolean, reflect: !0 })
], H.prototype, "readonly", 2);
ht([
  _e({ type: Boolean, reflect: !0 })
], H.prototype, "mandatory", 2);
ht([
  Ys("sl-select")
], H.prototype, "_input", 2);
H = ht([
  Ks("ak-property-editor-ui-dropdown")
], H);
const yi = H;
export {
  H as AkPropertyEditorUIDropdownElement,
  yi as default
};
