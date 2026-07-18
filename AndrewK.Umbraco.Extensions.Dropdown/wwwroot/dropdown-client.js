import { css as e, customElement as t, html as n, map as r, property as i, query as a, state as o } from "@umbraco-cms/backoffice/external/lit";
import { UmbFormControlMixin as s } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as c } from "@umbraco-cms/backoffice/lit-element";
import { UmbChangeEvent as l } from "@umbraco-cms/backoffice/event";
import { UMB_DOCUMENT_WORKSPACE_CONTEXT as u } from "@umbraco-cms/backoffice/document";
//#region ../../node_modules/@lit/reactive-element/css-tag.js
var d = globalThis, f = d.ShadowRoot && (d.ShadyCSS === void 0 || d.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, p = Symbol(), m = /* @__PURE__ */ new WeakMap(), h = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== p) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (f && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = m.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && m.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, g = (e) => new h(typeof e == "string" ? e : e + "", void 0, p), _ = (e, ...t) => new h(e.length === 1 ? e[0] : t.reduce(((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1]), e[0]), e, p), v = (e, t) => {
	if (f) e.adoptedStyleSheets = t.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
	else for (let n of t) {
		let t = document.createElement("style"), r = d.litNonce;
		r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
	}
}, y = f ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return g(t);
})(e) : e, { is: ee, defineProperty: te, getOwnPropertyDescriptor: ne, getOwnPropertyNames: b, getOwnPropertySymbols: x, getPrototypeOf: S } = Object, re = globalThis, ie = re.trustedTypes, ae = ie ? ie.emptyScript : "", oe = re.reactiveElementPolyfillSupport, C = (e, t) => e, se = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ae : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, ce = (e, t) => !ee(e, t), le = {
	attribute: !0,
	type: String,
	converter: se,
	reflect: !1,
	useDefault: !1,
	hasChanged: ce
};
Symbol.metadata ??= Symbol("metadata"), re.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var ue = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = le) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && te(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = ne(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? le;
	}
	static _$Ei() {
		if (this.hasOwnProperty(C("elementProperties"))) return;
		let e = S(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(C("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(C("properties"))) {
			let e = this.properties, t = [...b(e), ...x(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(Infinity).reverse());
			for (let e of n) t.unshift(y(e));
		} else e !== void 0 && t.push(y(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise(((e) => this.enableUpdating = e)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((e) => e(this)));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return v(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((e) => e.hostConnected?.()));
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach(((e) => e.hostDisconnected?.()));
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? se : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? se : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n) {
		if (e !== void 0) {
			let r = this.constructor, i = this[e];
			if (n ??= r.getPropertyOptions(e), !((n.hasChanged ?? ce)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(r._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach(((e) => e.hostUpdate?.())), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach(((e) => e.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
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
		this._$Eq &&= this._$Eq.forEach(((e) => this._$ET(e, this[e]))), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
ue.elementStyles = [], ue.shadowRootOptions = { mode: "open" }, ue[C("elementProperties")] = /* @__PURE__ */ new Map(), ue[C("finalized")] = /* @__PURE__ */ new Map(), oe?.({ ReactiveElement: ue }), (re.reactiveElementVersions ??= []).push("2.1.1");
//#endregion
//#region ../../node_modules/lit-html/lit-html.js
var de = globalThis, fe = de.trustedTypes, pe = fe ? fe.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, me = "$lit$", w = `lit$${Math.random().toFixed(9).slice(2)}$`, he = "?" + w, ge = `<${he}>`, _e = document, ve = () => _e.createComment(""), ye = (e) => e === null || typeof e != "object" && typeof e != "function", be = Array.isArray, xe = (e) => be(e) || typeof e?.[Symbol.iterator] == "function", Se = "[ 	\n\f\r]", Ce = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, we = /-->/g, Te = />/g, Ee = RegExp(`>|${Se}(?:([^\\s"'>=/]+)(${Se}*=${Se}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), De = /'/g, Oe = /"/g, ke = /^(?:script|style|textarea|title)$/i, T = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), E = Symbol.for("lit-noChange"), D = Symbol.for("lit-nothing"), Ae = /* @__PURE__ */ new WeakMap(), je = _e.createTreeWalker(_e, 129);
function Me(e, t) {
	if (!be(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return pe === void 0 ? t : pe.createHTML(t);
}
var Ne = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = Ce;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === Ce ? c[1] === "!--" ? o = we : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = Ee) : (ke.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = Ee) : o = Te : o === Ee ? c[0] === ">" ? (o = i ?? Ce, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? Ee : c[3] === "\"" ? Oe : De) : o === Oe || o === De ? o = Ee : o === we || o === Te ? o = Ce : (o = Ee, i = void 0);
		let d = o === Ee && e[t + 1].startsWith("/>") ? " " : "";
		a += o === Ce ? n + ge : l >= 0 ? (r.push(s), n.slice(0, l) + me + n.slice(l) + w + d) : n + w + (l === -2 ? t : d);
	}
	return [Me(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, Pe = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Ne(t, n);
		if (this.el = e.createElement(l, r), je.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = je.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(me)) {
					let t = u[o++], n = i.getAttribute(e).split(w), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? ze : r[1] === "?" ? Be : r[1] === "@" ? Ve : Re
					}), i.removeAttribute(e);
				} else e.startsWith(w) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (ke.test(i.tagName)) {
					let e = i.textContent.split(w), t = e.length - 1;
					if (t > 0) {
						i.textContent = fe ? fe.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], ve()), je.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], ve());
					}
				}
			} else if (i.nodeType === 8) if (i.data === he) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(w, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += w.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = _e.createElement("template");
		return n.innerHTML = e, n;
	}
};
function Fe(e, t, n = e, r) {
	if (t === E) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = ye(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = Fe(e, i._$AS(e, t.values), i, r)), t;
}
var Ie = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? _e).importNode(t, !0);
		je.currentNode = r;
		let i = je.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new Le(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new He(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = je.nextNode(), a++);
		}
		return je.currentNode = _e, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, Le = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = D, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = Fe(this, e, t), ye(e) ? e === D || e == null || e === "" ? (this._$AH !== D && this._$AR(), this._$AH = D) : e !== this._$AH && e !== E && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? xe(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== D && ye(this._$AH) ? this._$AA.nextSibling.data = e : this.T(_e.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Pe.createElement(Me(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Ie(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Ae.get(e.strings);
		return t === void 0 && Ae.set(e.strings, t = new Pe(e)), t;
	}
	k(t) {
		be(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(ve()), this.O(ve()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = e.nextSibling;
			e.remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, Re = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = D, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = D;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = Fe(this, e, t, 0), a = !ye(e) || e !== this._$AH && e !== E, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = Fe(this, r[n + o], t, o), s === E && (s = this._$AH[o]), a ||= !ye(s) || s !== this._$AH[o], s === D ? e = D : e !== D && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === D ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, ze = class extends Re {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === D ? void 0 : e;
	}
}, Be = class extends Re {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== D);
	}
}, Ve = class extends Re {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = Fe(this, e, t, 0) ?? D) === E) return;
		let n = this._$AH, r = e === D && n !== D || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== D && (n === D || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, He = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		Fe(this, e);
	}
}, Ue = {
	M: me,
	P: w,
	A: he,
	C: 1,
	L: Ne,
	R: Ie,
	D: xe,
	V: Fe,
	I: Le,
	H: Re,
	N: Be,
	U: Ve,
	B: ze,
	F: He
}, We = de.litHtmlPolyfillSupport;
We?.(Pe, Le), (de.litHtmlVersions ??= []).push("3.3.1");
var Ge = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new Le(t.insertBefore(ve(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Ke = globalThis, qe = class extends ue {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Ge(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return E;
	}
};
qe._$litElement$ = !0, qe.finalized = !0, Ke.litElementHydrateSupport?.({ LitElement: qe });
var Je = Ke.litElementPolyfillSupport;
Je?.({ LitElement: qe }), (Ke.litElementVersions ??= []).push("4.2.1");
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/themes/light.styles.js
var Ye = _`
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
`, Xe = _`
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
`, Ze = _`
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
`, Qe = "";
function $e(e) {
	Qe = e;
}
function et(e = "") {
	if (!Qe) {
		let e = [...document.getElementsByTagName("script")], t = e.find((e) => e.hasAttribute("data-shoelace"));
		if (t) $e(t.getAttribute("data-shoelace"));
		else {
			let t = e.find((e) => /shoelace(\.min)?\.js($|\?)/.test(e.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)), n = "";
			t && (n = t.getAttribute("src")), $e(n.split("/").slice(0, -1).join("/"));
		}
	}
	return Qe.replace(/\/$/, "") + (e ? `/${e.replace(/^\//, "")}` : "");
}
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js
var tt = {
	name: "default",
	resolver: (e) => et(`assets/icons/${e}.svg`)
}, nt = {
	caret: "\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <polyline points=\"6 9 12 15 18 9\"></polyline>\n    </svg>\n  ",
	check: "\n    <svg part=\"checked-icon\" class=\"checkbox__icon\" viewBox=\"0 0 16 16\">\n      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\">\n        <g stroke=\"currentColor\">\n          <g transform=\"translate(3.428571, 3.428571)\">\n            <path d=\"M0,5.71428571 L3.42857143,9.14285714\"></path>\n            <path d=\"M9.14285714,0 L3.42857143,9.14285714\"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ",
	"chevron-down": "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-down\" viewBox=\"0 0 16 16\">\n      <path fill-rule=\"evenodd\" d=\"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z\"/>\n    </svg>\n  ",
	"chevron-left": "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-left\" viewBox=\"0 0 16 16\">\n      <path fill-rule=\"evenodd\" d=\"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z\"/>\n    </svg>\n  ",
	"chevron-right": "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-chevron-right\" viewBox=\"0 0 16 16\">\n      <path fill-rule=\"evenodd\" d=\"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z\"/>\n    </svg>\n  ",
	copy: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-copy\" viewBox=\"0 0 16 16\">\n      <path fill-rule=\"evenodd\" d=\"M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z\"/>\n    </svg>\n  ",
	eye: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-eye\" viewBox=\"0 0 16 16\">\n      <path d=\"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z\"/>\n      <path d=\"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z\"/>\n    </svg>\n  ",
	"eye-slash": "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-eye-slash\" viewBox=\"0 0 16 16\">\n      <path d=\"M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z\"/>\n      <path d=\"M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z\"/>\n      <path d=\"M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z\"/>\n    </svg>\n  ",
	eyedropper: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-eyedropper\" viewBox=\"0 0 16 16\">\n      <path d=\"M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z\"></path>\n    </svg>\n  ",
	"grip-vertical": "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-grip-vertical\" viewBox=\"0 0 16 16\">\n      <path d=\"M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z\"></path>\n    </svg>\n  ",
	indeterminate: "\n    <svg part=\"indeterminate-icon\" class=\"checkbox__icon\" viewBox=\"0 0 16 16\">\n      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\">\n        <g stroke=\"currentColor\" stroke-width=\"2\">\n          <g transform=\"translate(2.285714, 6.857143)\">\n            <path d=\"M10.2857143,1.14285714 L1.14285714,1.14285714\"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ",
	"person-fill": "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-person-fill\" viewBox=\"0 0 16 16\">\n      <path d=\"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/>\n    </svg>\n  ",
	"play-fill": "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-play-fill\" viewBox=\"0 0 16 16\">\n      <path d=\"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z\"></path>\n    </svg>\n  ",
	"pause-fill": "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pause-fill\" viewBox=\"0 0 16 16\">\n      <path d=\"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z\"></path>\n    </svg>\n  ",
	radio: "\n    <svg part=\"checked-icon\" class=\"radio__icon\" viewBox=\"0 0 16 16\">\n      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g fill=\"currentColor\">\n          <circle cx=\"8\" cy=\"8\" r=\"3.42857143\"></circle>\n        </g>\n      </g>\n    </svg>\n  ",
	"star-fill": "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-star-fill\" viewBox=\"0 0 16 16\">\n      <path d=\"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z\"/>\n    </svg>\n  ",
	"x-lg": "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x-lg\" viewBox=\"0 0 16 16\">\n      <path d=\"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z\"/>\n    </svg>\n  ",
	"x-circle-fill": "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x-circle-fill\" viewBox=\"0 0 16 16\">\n      <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z\"></path>\n    </svg>\n  "
}, rt = [tt, {
	name: "system",
	resolver: (e) => e in nt ? `data:image/svg+xml,${encodeURIComponent(nt[e])}` : ""
}], it = [];
function at(e) {
	it.push(e);
}
function ot(e) {
	it = it.filter((t) => t !== e);
}
function st(e) {
	return rt.find((t) => t.name === e);
}
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js
var ct = _`
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
`, lt = Object.defineProperty, ut = Object.defineProperties, dt = Object.getOwnPropertyDescriptor, ft = Object.getOwnPropertyDescriptors, pt = Object.getOwnPropertySymbols, mt = Object.prototype.hasOwnProperty, ht = Object.prototype.propertyIsEnumerable, gt = (e) => {
	throw TypeError(e);
}, _t = (e, t, n) => t in e ? lt(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, vt = (e, t) => {
	for (var n in t ||= {}) mt.call(t, n) && _t(e, n, t[n]);
	if (pt) for (var n of pt(t)) ht.call(t, n) && _t(e, n, t[n]);
	return e;
}, yt = (e, t) => ut(e, ft(t)), O = (e, t, n, r) => {
	for (var i = r > 1 ? void 0 : r ? dt(t, n) : t, a = e.length - 1, o; a >= 0; a--) (o = e[a]) && (i = (r ? o(t, n, i) : o(i)) || i);
	return r && i && lt(t, n, i), i;
}, bt = (e, t, n) => t.has(e) || gt("Cannot " + n), xt = (e, t, n) => (bt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), St = (e, t, n) => t.has(e) ? gt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ct = (e, t, n, r) => (bt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js
function k(e, t) {
	let n = vt({ waitUntilFirstUpdate: !1 }, t);
	return (t, r) => {
		let { update: i } = t, a = Array.isArray(e) ? e : [e];
		t.update = function(e) {
			a.forEach((t) => {
				let i = t;
				if (e.has(i)) {
					let t = e.get(i), a = this[i];
					t !== a && (!n.waitUntilFirstUpdate || this.hasUpdated) && this[r](t, a);
				}
			}), i.call(this, e);
		};
	};
}
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
var wt = _`
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
`, Tt = {
	attribute: !0,
	type: String,
	converter: se,
	reflect: !1,
	hasChanged: ce
}, Et = (e = Tt, t, n) => {
	let { kind: r, metadata: i } = n, a = globalThis.litPropertyMetadata.get(i);
	if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((e = Object.create(e)).wrapped = !0), a.set(n.name, e), r === "accessor") {
		let { name: r } = n;
		return {
			set(n) {
				let i = t.get.call(this);
				t.set.call(this, n), this.requestUpdate(r, i, e);
			},
			init(t) {
				return t !== void 0 && this.C(r, void 0, e, t), t;
			}
		};
	}
	if (r === "setter") {
		let { name: r } = n;
		return function(n) {
			let i = this[r];
			t.call(this, n), this.requestUpdate(r, i, e);
		};
	}
	throw Error("Unsupported decorator location: " + r);
};
function A(e) {
	return (t, n) => typeof n == "object" ? Et(e, t, n) : ((e, t, n) => {
		let r = t.hasOwnProperty(n);
		return t.constructor.createProperty(n, e), r ? Object.getOwnPropertyDescriptor(t, n) : void 0;
	})(e, t, n);
}
//#endregion
//#region ../../node_modules/@lit/reactive-element/decorators/state.js
function j(e) {
	return A({
		...e,
		state: !0,
		attribute: !1
	});
}
//#endregion
//#region ../../node_modules/@lit/reactive-element/decorators/base.js
var Dt = (e, t, n) => (n.configurable = !0, n.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, n), n);
//#endregion
//#region ../../node_modules/@lit/reactive-element/decorators/query.js
function M(e, t) {
	return (n, r, i) => {
		let a = (t) => t.renderRoot?.querySelector(e) ?? null;
		if (t) {
			let { get: e, set: t } = typeof r == "object" ? n : i ?? (() => {
				let e = Symbol();
				return {
					get() {
						return this[e];
					},
					set(t) {
						this[e] = t;
					}
				};
			})();
			return Dt(n, r, { get() {
				let n = e.call(this);
				return n === void 0 && (n = a(this), (n !== null || this.hasUpdated) && t.call(this, n)), n;
			} });
		}
		return Dt(n, r, { get() {
			return a(this);
		} });
	};
}
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4TUIT776.js
var Ot, N = class extends qe {
	constructor() {
		super(), St(this, Ot, !1), this.initialReflectedProperties = /* @__PURE__ */ new Map(), Object.entries(this.constructor.dependencies).forEach(([e, t]) => {
			this.constructor.define(e, t);
		});
	}
	emit(e, t) {
		let n = new CustomEvent(e, vt({
			bubbles: !0,
			cancelable: !1,
			composed: !0,
			detail: {}
		}, t));
		return this.dispatchEvent(n), n;
	}
	static define(e, t = this, n = {}) {
		let r = customElements.get(e);
		if (!r) {
			try {
				customElements.define(e, t, n);
			} catch {
				customElements.define(e, class extends t {}, n);
			}
			return;
		}
		let i = " (unknown version)", a = i;
		"version" in t && t.version && (i = " v" + t.version), "version" in r && r.version && (a = " v" + r.version), !(i && a && i === a) && console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`);
	}
	attributeChangedCallback(e, t, n) {
		xt(this, Ot) || (this.constructor.elementProperties.forEach((e, t) => {
			e.reflect && this[t] != null && this.initialReflectedProperties.set(t, this[t]);
		}), Ct(this, Ot, !0)), super.attributeChangedCallback(e, t, n);
	}
	willUpdate(e) {
		super.willUpdate(e), this.initialReflectedProperties.forEach((t, n) => {
			e.has(n) && this[n] == null && (this[n] = t);
		});
	}
};
Ot = /* @__PURE__ */ new WeakMap(), N.version = "2.20.1", N.dependencies = {}, O([A()], N.prototype, "dir", 2), O([A()], N.prototype, "lang", 2);
//#endregion
//#region ../../node_modules/lit-html/directive-helpers.js
var { I: kt } = Ue, At = (e, t) => t === void 0 ? e?._$litType$ !== void 0 : e?._$litType$ === t, jt = Symbol(), Mt = Symbol(), Nt, Pt = /* @__PURE__ */ new Map(), P = class extends N {
	constructor() {
		super(...arguments), this.initialRender = !1, this.svg = null, this.label = "", this.library = "default";
	}
	async resolveIcon(e, t) {
		let n;
		if (t?.spriteSheet) return this.svg = T`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`, this.svg;
		try {
			if (n = await fetch(e, { mode: "cors" }), !n.ok) return n.status === 410 ? jt : Mt;
		} catch {
			return Mt;
		}
		try {
			let e = document.createElement("div");
			e.innerHTML = await n.text();
			let t = e.firstElementChild;
			if ((t?.tagName)?.toLowerCase() !== "svg") return jt;
			Nt ||= new DOMParser();
			let r = Nt.parseFromString(t.outerHTML, "text/html").body.querySelector("svg");
			return r ? (r.part.add("svg"), document.adoptNode(r)) : jt;
		} catch {
			return jt;
		}
	}
	connectedCallback() {
		super.connectedCallback(), at(this);
	}
	firstUpdated() {
		this.initialRender = !0, this.setIcon();
	}
	disconnectedCallback() {
		super.disconnectedCallback(), ot(this);
	}
	getIconSource() {
		let e = st(this.library);
		return this.name && e ? {
			url: e.resolver(this.name),
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
		var e;
		let { url: t, fromLibrary: n } = this.getIconSource(), r = n ? st(this.library) : void 0;
		if (!t) {
			this.svg = null;
			return;
		}
		let i = Pt.get(t);
		if (i || (i = this.resolveIcon(t, r), Pt.set(t, i)), !this.initialRender) return;
		let a = await i;
		if (a === Mt && Pt.delete(t), t === this.getIconSource().url) {
			if (At(a)) {
				if (this.svg = a, r) {
					await this.updateComplete;
					let e = this.shadowRoot.querySelector("[part='svg']");
					typeof r.mutator == "function" && e && r.mutator(e);
				}
				return;
			}
			switch (a) {
				case Mt:
				case jt:
					this.svg = null, this.emit("sl-error");
					break;
				default: this.svg = a.cloneNode(!0), (e = r?.mutator) == null || e.call(r, this.svg), this.emit("sl-load");
			}
		}
	}
	render() {
		return this.svg;
	}
};
P.styles = [wt, ct], O([j()], P.prototype, "svg", 2), O([A({ reflect: !0 })], P.prototype, "name", 2), O([A()], P.prototype, "src", 2), O([A()], P.prototype, "label", 2), O([A({ reflect: !0 })], P.prototype, "library", 2), O([k("label")], P.prototype, "handleLabelChange", 1), O([k([
	"name",
	"src",
	"library"
])], P.prototype, "setIcon", 1);
//#endregion
//#region ../../node_modules/lit-html/directive.js
var Ft = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, It = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), Lt = class {
	constructor(e) {}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AT(e, t, n) {
		this._$Ct = e, this._$AM = t, this._$Ci = n;
	}
	_$AS(e, t) {
		return this.update(e, t);
	}
	update(e, t) {
		return this.render(...t);
	}
}, F = It(class extends Lt {
	constructor(e) {
		if (super(e), e.type !== Ft.ATTRIBUTE || e.name !== "class" || e.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
	}
	render(e) {
		return " " + Object.keys(e).filter(((t) => e[t])).join(" ") + " ";
	}
	update(e, [t]) {
		if (this.st === void 0) {
			this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter(((e) => e !== ""))));
			for (let e in t) t[e] && !this.nt?.has(e) && this.st.add(e);
			return this.render(t);
		}
		let n = e.element.classList;
		for (let e of this.st) e in t || (n.remove(e), this.st.delete(e));
		for (let e in t) {
			let r = !!t[e];
			r === this.st.has(e) || this.nt?.has(e) || (r ? (n.add(e), this.st.add(e)) : (n.remove(e), this.st.delete(e)));
		}
		return E;
	}
}), Rt = Symbol.for(""), zt = (e) => {
	if (e?.r === Rt) return e?._$litStatic$;
}, Bt = (e, ...t) => ({
	_$litStatic$: t.reduce(((t, n, r) => t + ((e) => {
		if (e._$litStatic$ !== void 0) return e._$litStatic$;
		throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`);
	})(n) + e[r + 1]), e[0]),
	r: Rt
}), Vt = /* @__PURE__ */ new Map(), Ht = ((e) => (t, ...n) => {
	let r = n.length, i, a, o = [], s = [], c, l = 0, u = !1;
	for (; l < r;) {
		for (c = t[l]; l < r && (a = n[l], i = zt(a)) !== void 0;) c += i + t[++l], u = !0;
		l !== r && s.push(a), o.push(c), l++;
	}
	if (l === r && o.push(t[r]), u) {
		let e = o.join("$$lit$$");
		(t = Vt.get(e)) === void 0 && (o.raw = o, Vt.set(e, t = o)), n = s;
	}
	return e(t, ...n);
})(T), I = (e) => e ?? D, L = class extends N {
	constructor() {
		super(...arguments), this.hasFocus = !1, this.label = "", this.disabled = !1;
	}
	handleBlur() {
		this.hasFocus = !1, this.emit("sl-blur");
	}
	handleFocus() {
		this.hasFocus = !0, this.emit("sl-focus");
	}
	handleClick(e) {
		this.disabled && (e.preventDefault(), e.stopPropagation());
	}
	click() {
		this.button.click();
	}
	focus(e) {
		this.button.focus(e);
	}
	blur() {
		this.button.blur();
	}
	render() {
		let e = !!this.href, t = e ? Bt`a` : Bt`button`;
		return Ht`
      <${t}
        part="base"
        class=${F({
			"icon-button": !0,
			"icon-button--disabled": !e && this.disabled,
			"icon-button--focused": this.hasFocus
		})}
        ?disabled=${I(e ? void 0 : this.disabled)}
        type=${I(e ? void 0 : "button")}
        href=${I(e ? this.href : void 0)}
        target=${I(e ? this.target : void 0)}
        download=${I(e ? this.download : void 0)}
        rel=${I(e && this.target ? "noreferrer noopener" : void 0)}
        role=${I(e ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${I(this.name)}
          library=${I(this.library)}
          src=${I(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `;
	}
};
L.styles = [wt, Ze], L.dependencies = { "sl-icon": P }, O([M(".icon-button")], L.prototype, "button", 2), O([j()], L.prototype, "hasFocus", 2), O([A()], L.prototype, "name", 2), O([A()], L.prototype, "library", 2), O([A()], L.prototype, "src", 2), O([A()], L.prototype, "href", 2), O([A()], L.prototype, "target", 2), O([A()], L.prototype, "download", 2), O([A()], L.prototype, "label", 2), O([A({
	type: Boolean,
	reflect: !0
})], L.prototype, "disabled", 2);
//#endregion
//#region ../../node_modules/@shoelace-style/localize/dist/index.js
var Ut = /* @__PURE__ */ new Set(), Wt = /* @__PURE__ */ new Map(), Gt, Kt = "ltr", qt = "en", Jt = typeof MutationObserver < "u" && typeof document < "u" && document.documentElement !== void 0;
if (Jt) {
	let e = new MutationObserver(Xt);
	Kt = document.documentElement.dir || "ltr", qt = document.documentElement.lang || navigator.language, e.observe(document.documentElement, {
		attributes: !0,
		attributeFilter: ["dir", "lang"]
	});
}
function Yt(...e) {
	e.map((e) => {
		let t = e.$code.toLowerCase();
		Wt.has(t) ? Wt.set(t, Object.assign(Object.assign({}, Wt.get(t)), e)) : Wt.set(t, e), Gt ||= e;
	}), Xt();
}
function Xt() {
	Jt && (Kt = document.documentElement.dir || "ltr", qt = document.documentElement.lang || navigator.language), [...Ut.keys()].map((e) => {
		typeof e.requestUpdate == "function" && e.requestUpdate();
	});
}
var Zt = class {
	constructor(e) {
		this.host = e, this.host.addController(this);
	}
	hostConnected() {
		Ut.add(this.host);
	}
	hostDisconnected() {
		Ut.delete(this.host);
	}
	dir() {
		return `${this.host.dir || Kt}`.toLowerCase();
	}
	lang() {
		return `${this.host.lang || qt}`.toLowerCase();
	}
	getTranslationData(e) {
		let t = new Intl.Locale(e.replace(/_/g, "-")), n = t?.language.toLowerCase(), r = (t?.region)?.toLowerCase() ?? "";
		return {
			locale: t,
			language: n,
			region: r,
			primary: Wt.get(`${n}-${r}`),
			secondary: Wt.get(n)
		};
	}
	exists(e, t) {
		let { primary: n, secondary: r } = this.getTranslationData(t.lang ?? this.lang());
		return t = Object.assign({ includeFallback: !1 }, t), !!(n && n[e] || r && r[e] || t.includeFallback && Gt && Gt[e]);
	}
	term(e, ...t) {
		let { primary: n, secondary: r } = this.getTranslationData(this.lang()), i;
		if (n && n[e]) i = n[e];
		else if (r && r[e]) i = r[e];
		else if (Gt && Gt[e]) i = Gt[e];
		else return console.error(`No translation found for: ${String(e)}`), String(e);
		return typeof i == "function" ? i(...t) : i;
	}
	date(e, t) {
		return e = new Date(e), new Intl.DateTimeFormat(this.lang(), t).format(e);
	}
	number(e, t) {
		return e = Number(e), isNaN(e) ? "" : new Intl.NumberFormat(this.lang(), t).format(e);
	}
	relativeTime(e, t, n) {
		return new Intl.RelativeTimeFormat(this.lang(), n).format(e, t);
	}
}, Qt = {
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
	goToSlide: (e, t) => `Go to slide ${e} of ${t}`,
	hidePassword: "Hide password",
	loading: "Loading",
	nextSlide: "Next slide",
	numOptionsSelected: (e) => e === 0 ? "No options selected" : e === 1 ? "1 option selected" : `${e} options selected`,
	previousSlide: "Previous slide",
	progress: "Progress",
	remove: "Remove",
	resize: "Resize",
	scrollToEnd: "Scroll to end",
	scrollToStart: "Scroll to start",
	selectAColorFromTheScreen: "Select a color from the screen",
	showPassword: "Show password",
	slideNum: (e) => `Slide ${e}`,
	toggleColorFormat: "Toggle color format"
};
Yt(Qt);
var $t = Qt, en = class extends Zt {};
Yt($t);
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6R4LM7O6.js
var tn = class extends N {
	constructor() {
		super(...arguments), this.localize = new en(this), this.variant = "neutral", this.size = "medium", this.pill = !1, this.removable = !1;
	}
	handleRemoveClick() {
		this.emit("sl-remove");
	}
	render() {
		return T`
      <span
        part="base"
        class=${F({
			tag: !0,
			"tag--primary": this.variant === "primary",
			"tag--success": this.variant === "success",
			"tag--neutral": this.variant === "neutral",
			"tag--warning": this.variant === "warning",
			"tag--danger": this.variant === "danger",
			"tag--text": this.variant === "text",
			"tag--small": this.size === "small",
			"tag--medium": this.size === "medium",
			"tag--large": this.size === "large",
			"tag--pill": this.pill,
			"tag--removable": this.removable
		})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? T`
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
tn.styles = [wt, Xe], tn.dependencies = { "sl-icon-button": L }, O([A({ reflect: !0 })], tn.prototype, "variant", 2), O([A({ reflect: !0 })], tn.prototype, "size", 2), O([A({
	type: Boolean,
	reflect: !0
})], tn.prototype, "pill", 2), O([A({ type: Boolean })], tn.prototype, "removable", 2);
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XNOUITPX.js
var nn = _`
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
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RWUUFNUL.js
function rn(e, t) {
	return {
		top: Math.round(e.getBoundingClientRect().top - t.getBoundingClientRect().top),
		left: Math.round(e.getBoundingClientRect().left - t.getBoundingClientRect().left)
	};
}
function an(e, t, n = "vertical", r = "smooth") {
	let i = rn(e, t), a = i.top + t.scrollTop, o = i.left + t.scrollLeft, s = t.scrollLeft, c = t.scrollLeft + t.offsetWidth, l = t.scrollTop, u = t.scrollTop + t.offsetHeight;
	(n === "horizontal" || n === "both") && (o < s ? t.scrollTo({
		left: o,
		behavior: r
	}) : o + e.clientWidth > c && t.scrollTo({
		left: o - t.offsetWidth + e.clientWidth,
		behavior: r
	})), (n === "vertical" || n === "both") && (a < l ? t.scrollTo({
		top: a,
		behavior: r
	}) : a + e.clientHeight > u && t.scrollTo({
		top: a - t.offsetHeight + e.clientHeight,
		behavior: r
	}));
}
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SI4ACBFK.js
var on = _`
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
`, sn = _`
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
`, R = Math.min, z = Math.max, cn = Math.round, ln = Math.floor, B = (e) => ({
	x: e,
	y: e
}), un = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, dn = {
	start: "end",
	end: "start"
};
function fn(e, t, n) {
	return z(e, R(t, n));
}
function pn(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function V(e) {
	return e.split("-")[0];
}
function mn(e) {
	return e.split("-")[1];
}
function hn(e) {
	return e === "x" ? "y" : "x";
}
function gn(e) {
	return e === "y" ? "height" : "width";
}
var _n = /*#__PURE__*/ new Set(["top", "bottom"]);
function H(e) {
	return _n.has(V(e)) ? "y" : "x";
}
function vn(e) {
	return hn(H(e));
}
function yn(e, t, n) {
	n === void 0 && (n = !1);
	let r = mn(e), i = vn(e), a = gn(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = On(o)), [o, On(o)];
}
function bn(e) {
	let t = On(e);
	return [
		xn(e),
		t,
		xn(t)
	];
}
function xn(e) {
	return e.replace(/start|end/g, (e) => dn[e]);
}
var Sn = ["left", "right"], Cn = ["right", "left"], wn = ["top", "bottom"], Tn = ["bottom", "top"];
function En(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? Cn : Sn : t ? Sn : Cn;
		case "left":
		case "right": return t ? wn : Tn;
		default: return [];
	}
}
function Dn(e, t, n, r) {
	let i = mn(e), a = En(V(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(xn)))), a;
}
function On(e) {
	return e.replace(/left|right|bottom|top/g, (e) => un[e]);
}
function kn(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function An(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : kn(e);
}
function jn(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region ../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function Mn(e, t, n) {
	let { reference: r, floating: i } = e, a = H(t), o = vn(t), s = gn(o), c = V(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (mn(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
var Nn = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = a.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Mn(l, r, c), f = r, p = {}, m = 0;
	for (let n = 0; n < s.length; n++) {
		let { name: a, fn: h } = s[n], { x: g, y: _, data: v, reset: y } = await h({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: p,
			rects: l,
			platform: o,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = g ?? u, d = _ ?? d, p = {
			...p,
			[a]: {
				...p[a],
				...v
			}
		}, y && m <= 50 && (m++, typeof y == "object" && (y.placement && (f = y.placement), y.rects && (l = y.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : y.rects), {x: u, y: d} = Mn(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: p
	};
};
async function Pn(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = pn(t, e), p = An(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = jn(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = jn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var Fn = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = pn(e, t) || {};
		if (l == null) return {};
		let d = An(u), f = {
			x: n,
			y: r
		}, p = vn(i), m = gn(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", ee = a.reference[m] + a.reference[p] - f[p] - a.floating[m], te = f[p] - a.reference[p], ne = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), b = ne ? ne[y] : 0;
		(!b || !await (o.isElement == null ? void 0 : o.isElement(ne))) && (b = s.floating[y] || a.floating[m]);
		let x = ee / 2 - te / 2, S = b / 2 - h[m] / 2 - 1, re = R(d[_], S), ie = R(d[v], S), ae = re, oe = b - h[m] - ie, C = b / 2 - h[m] / 2 + x, se = fn(ae, C, oe), ce = !c.arrow && mn(i) != null && C !== se && a.reference[m] / 2 - (C < ae ? re : ie) - h[m] / 2 < 0, le = ce ? C < ae ? C - ae : C - oe : 0;
		return {
			[p]: f[p] + le,
			data: {
				[p]: se,
				centerOffset: C - se - le,
				...ce && { alignmentOffset: le }
			},
			reset: ce
		};
	}
}), In = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = pn(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = V(r), _ = H(o), v = V(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), ee = d || (v || !m ? [On(o)] : bn(o)), te = p !== "none";
			!d && te && ee.push(...Dn(o, m, p, y));
			let ne = [o, ...ee], b = await Pn(t, h), x = [], S = i.flip?.overflows || [];
			if (l && x.push(b[g]), u) {
				let e = yn(r, a, y);
				x.push(b[e[0]], b[e[1]]);
			}
			if (S = [...S, {
				placement: r,
				overflows: x
			}], !x.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = ne[e];
				if (t && (!(u === "alignment" && _ !== H(t)) || S.every((e) => H(e.placement) !== _ || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: S
					},
					reset: { placement: t }
				};
				let n = S.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = S.filter((e) => {
							if (te) {
								let t = H(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
}, Ln = /*#__PURE__*/ new Set(["left", "top"]);
async function Rn(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = V(n), s = mn(n), c = H(n) === "y", l = Ln.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = pn(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var zn = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Rn(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, Bn = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i } = t, { mainAxis: a = !0, crossAxis: o = !1, limiter: s = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...c } = pn(e, t), l = {
				x: n,
				y: r
			}, u = await Pn(t, c), d = H(V(i)), f = hn(d), p = l[f], m = l[d];
			if (a) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = p + u[e], r = p - u[t];
				p = fn(n, p, r);
			}
			if (o) {
				let e = d === "y" ? "top" : "left", t = d === "y" ? "bottom" : "right", n = m + u[e], r = m - u[t];
				m = fn(n, m, r);
			}
			let h = s.fn({
				...t,
				[f]: p,
				[d]: m
			});
			return {
				...h,
				data: {
					x: h.x - n,
					y: h.y - r,
					enabled: {
						[f]: a,
						[d]: o
					}
				}
			};
		}
	};
}, Vn = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = pn(e, t), u = await Pn(t, l), d = V(i), f = mn(i), p = H(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, ee = R(h - u[g], v), te = R(m - u[_], y), ne = !t.middlewareData.shift, b = ee, x = te;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (x = y), (r = t.middlewareData.shift) != null && r.enabled.y && (b = v), ne && !f) {
				let e = z(u.left, 0), t = z(u.right, 0), n = z(u.top, 0), r = z(u.bottom, 0);
				p ? x = m - 2 * (e !== 0 || t !== 0 ? e + t : z(u.left, u.right)) : b = h - 2 * (n !== 0 || r !== 0 ? n + r : z(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: x,
				availableHeight: b
			});
			let S = await o.getDimensions(s.floating);
			return m !== S.width || h !== S.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region ../../node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Hn() {
	return typeof window < "u";
}
function Un(e) {
	return Wn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function U(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function W(e) {
	return ((Wn(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Wn(e) {
	return Hn() ? e instanceof Node || e instanceof U(e).Node : !1;
}
function G(e) {
	return Hn() ? e instanceof Element || e instanceof U(e).Element : !1;
}
function K(e) {
	return Hn() ? e instanceof HTMLElement || e instanceof U(e).HTMLElement : !1;
}
function Gn(e) {
	return !Hn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof U(e).ShadowRoot;
}
var Kn = /*#__PURE__*/ new Set(["inline", "contents"]);
function qn(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = q(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Kn.has(i);
}
var Jn = /*#__PURE__*/ new Set([
	"table",
	"td",
	"th"
]);
function Yn(e) {
	return Jn.has(Un(e));
}
var Xn = [":popover-open", ":modal"];
function Zn(e) {
	return Xn.some((t) => {
		try {
			return e.matches(t);
		} catch {
			return !1;
		}
	});
}
var Qn = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], $n = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], er = [
	"paint",
	"layout",
	"strict",
	"content"
];
function tr(e) {
	let t = rr(), n = G(e) ? q(e) : e;
	return Qn.some((e) => n[e] ? n[e] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || $n.some((e) => (n.willChange || "").includes(e)) || er.some((e) => (n.contain || "").includes(e));
}
function nr(e) {
	let t = J(e);
	for (; K(t) && !ar(t);) {
		if (tr(t)) return t;
		if (Zn(t)) return null;
		t = J(t);
	}
	return null;
}
function rr() {
	return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
var ir = /*#__PURE__*/ new Set([
	"html",
	"body",
	"#document"
]);
function ar(e) {
	return ir.has(Un(e));
}
function q(e) {
	return U(e).getComputedStyle(e);
}
function or(e) {
	return G(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function J(e) {
	if (Un(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Gn(e) && e.host || W(e);
	return Gn(t) ? t.host : t;
}
function sr(e) {
	let t = J(e);
	return ar(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : K(t) && qn(t) ? t : sr(t);
}
function cr(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = sr(e), i = r === e.ownerDocument?.body, a = U(r);
	if (i) {
		let e = lr(a);
		return t.concat(a, a.visualViewport || [], qn(r) ? r : [], e && n ? cr(e) : []);
	}
	return t.concat(r, cr(r, [], n));
}
function lr(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region ../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function ur(e) {
	let t = q(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = K(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = cn(n) !== a || cn(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function dr(e) {
	return G(e) ? e : e.contextElement;
}
function fr(e) {
	let t = dr(e);
	if (!K(t)) return B(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = ur(t), o = (a ? cn(n.width) : n.width) / r, s = (a ? cn(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var pr = /*#__PURE__*/ B(0);
function mr(e) {
	let t = U(e);
	return !rr() || !t.visualViewport ? pr : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function hr(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== U(e) ? !1 : t;
}
function gr(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = dr(e), o = B(1);
	t && (r ? G(r) && (o = fr(r)) : o = fr(e));
	let s = hr(a, n, r) ? mr(a) : B(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = U(a), t = r && G(r) ? U(r) : r, n = e, i = lr(n);
		for (; i && r && t !== n;) {
			let e = fr(i), t = i.getBoundingClientRect(), r = q(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = U(i), i = lr(n);
		}
	}
	return jn({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function _r(e, t) {
	let n = or(e).scrollLeft;
	return t ? t.left + n : gr(W(e)).left + n;
}
function vr(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - _r(e, n),
		y: n.top + t.scrollTop
	};
}
function yr(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = W(r), s = t ? Zn(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = B(1), u = B(0), d = K(r);
	if ((d || !d && !a) && ((Un(r) !== "body" || qn(o)) && (c = or(r)), K(r))) {
		let e = gr(r);
		l = fr(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? vr(o, c) : B(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function br(e) {
	return Array.from(e.getClientRects());
}
function xr(e) {
	let t = W(e), n = or(e), r = e.ownerDocument.body, i = z(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = z(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + _r(e), s = -n.scrollTop;
	return q(r).direction === "rtl" && (o += z(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var Sr = 25;
function Cr(e, t) {
	let n = U(e), r = W(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = rr();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = _r(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= Sr && (a -= o);
	} else l <= Sr && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
var wr = /*#__PURE__*/ new Set(["absolute", "fixed"]);
function Tr(e, t) {
	let n = gr(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = K(e) ? fr(e) : B(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Er(e, t, n) {
	let r;
	if (t === "viewport") r = Cr(e, n);
	else if (t === "document") r = xr(W(e));
	else if (G(t)) r = Tr(t, n);
	else {
		let n = mr(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return jn(r);
}
function Dr(e, t) {
	let n = J(e);
	return n === t || !G(n) || ar(n) ? !1 : q(n).position === "fixed" || Dr(n, t);
}
function Or(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = cr(e, [], !1).filter((e) => G(e) && Un(e) !== "body"), i = null, a = q(e).position === "fixed", o = a ? J(e) : e;
	for (; G(o) && !ar(o);) {
		let t = q(o), n = tr(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && wr.has(i.position) || qn(o) && !n && Dr(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = J(o);
	}
	return t.set(e, r), r;
}
function kr(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Zn(t) ? [] : Or(t, this._c) : [].concat(n), r], o = a[0], s = a.reduce((e, n) => {
		let r = Er(t, n, i);
		return e.top = z(r.top, e.top), e.right = R(r.right, e.right), e.bottom = R(r.bottom, e.bottom), e.left = z(r.left, e.left), e;
	}, Er(t, o, i));
	return {
		width: s.right - s.left,
		height: s.bottom - s.top,
		x: s.left,
		y: s.top
	};
}
function Ar(e) {
	let { width: t, height: n } = ur(e);
	return {
		width: t,
		height: n
	};
}
function jr(e, t, n) {
	let r = K(t), i = W(t), a = n === "fixed", o = gr(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = B(0);
	function l() {
		c.x = _r(i);
	}
	if (r || !r && !a) if ((Un(t) !== "body" || qn(i)) && (s = or(t)), r) {
		let e = gr(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? vr(i, s) : B(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Mr(e) {
	return q(e).position === "static";
}
function Nr(e, t) {
	if (!K(e) || q(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return W(e) === n && (n = n.ownerDocument.body), n;
}
function Pr(e, t) {
	let n = U(e);
	if (Zn(e)) return n;
	if (!K(e)) {
		let t = J(e);
		for (; t && !ar(t);) {
			if (G(t) && !Mr(t)) return t;
			t = J(t);
		}
		return n;
	}
	let r = Nr(e, t);
	for (; r && Yn(r) && Mr(r);) r = Nr(r, t);
	return r && ar(r) && Mr(r) && !tr(r) ? n : r || nr(e) || n;
}
var Fr = async function(e) {
	let t = this.getOffsetParent || Pr, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: jr(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Ir(e) {
	return q(e).direction === "rtl";
}
var Lr = {
	convertOffsetParentRelativeRectToViewportRelativeRect: yr,
	getDocumentElement: W,
	getClippingRect: kr,
	getOffsetParent: Pr,
	getElementRects: Fr,
	getClientRects: br,
	getDimensions: Ar,
	getScale: fr,
	isElement: G,
	isRTL: Ir
};
function Rr(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function zr(e, t) {
	let n = null, r, i = W(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = ln(d), h = ln(i.clientWidth - (u + f)), g = ln(i.clientHeight - (d + p)), _ = ln(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: z(0, R(1, c)) || 1
		}, y = !0;
		function ee(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Rr(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(ee, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(ee, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function Br(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = dr(e), u = i || a ? [...l ? cr(l) : [], ...cr(t)] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? zr(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), p.observe(t));
	let m, h = c ? gr(e) : null;
	c && g();
	function g() {
		let t = gr(e);
		h && !Rr(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Vr = zn, Hr = Bn, Ur = In, Wr = Vn, Gr = Fn, Kr = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Lr,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Nn(e, t, {
		...i,
		platform: a
	});
};
//#endregion
//#region ../../node_modules/composed-offset-position/dist/composed-offset-position.browser.min.mjs
function qr(e) {
	return Yr(e);
}
function Jr(e) {
	return e.assignedSlot ? e.assignedSlot : e.parentNode instanceof ShadowRoot ? e.parentNode.host : e.parentNode;
}
function Yr(e) {
	for (let t = e; t; t = Jr(t)) if (t instanceof Element && getComputedStyle(t).display === "none") return null;
	for (let t = Jr(e); t; t = Jr(t)) {
		if (!(t instanceof Element)) continue;
		let e = getComputedStyle(t);
		if (e.display !== "contents" && (e.position !== "static" || tr(e) || t.tagName === "BODY")) return t;
	}
	return null;
}
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5JY5FUCG.js
function Xr(e) {
	return typeof e == "object" && !!e && "getBoundingClientRect" in e && ("contextElement" in e ? e.contextElement instanceof Element : !0);
}
var Y = class extends N {
	constructor() {
		super(...arguments), this.localize = new en(this), this.active = !1, this.placement = "top", this.strategy = "absolute", this.distance = 0, this.skidding = 0, this.arrow = !1, this.arrowPlacement = "anchor", this.arrowPadding = 10, this.flip = !1, this.flipFallbackPlacements = "", this.flipFallbackStrategy = "best-fit", this.flipPadding = 0, this.shift = !1, this.shiftPadding = 0, this.autoSizePadding = 0, this.hoverBridge = !1, this.updateHoverBridge = () => {
			if (this.hoverBridge && this.anchorEl) {
				let e = this.anchorEl.getBoundingClientRect(), t = this.popup.getBoundingClientRect(), n = this.placement.includes("top") || this.placement.includes("bottom"), r = 0, i = 0, a = 0, o = 0, s = 0, c = 0, l = 0, u = 0;
				n ? e.top < t.top ? (r = e.left, i = e.bottom, a = e.right, o = e.bottom, s = t.left, c = t.top, l = t.right, u = t.top) : (r = t.left, i = t.bottom, a = t.right, o = t.bottom, s = e.left, c = e.top, l = e.right, u = e.top) : e.left < t.left ? (r = e.right, i = e.top, a = t.left, o = t.top, s = e.right, c = e.bottom, l = t.left, u = t.bottom) : (r = t.right, i = t.top, a = e.left, o = e.top, s = t.right, c = t.bottom, l = e.left, u = e.bottom), this.style.setProperty("--hover-bridge-top-left-x", `${r}px`), this.style.setProperty("--hover-bridge-top-left-y", `${i}px`), this.style.setProperty("--hover-bridge-top-right-x", `${a}px`), this.style.setProperty("--hover-bridge-top-right-y", `${o}px`), this.style.setProperty("--hover-bridge-bottom-left-x", `${s}px`), this.style.setProperty("--hover-bridge-bottom-left-y", `${c}px`), this.style.setProperty("--hover-bridge-bottom-right-x", `${l}px`), this.style.setProperty("--hover-bridge-bottom-right-y", `${u}px`);
			}
		};
	}
	async connectedCallback() {
		super.connectedCallback(), await this.updateComplete, this.start();
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this.stop();
	}
	async updated(e) {
		super.updated(e), e.has("active") && (this.active ? this.start() : this.stop()), e.has("anchor") && this.handleAnchorChange(), this.active && (await this.updateComplete, this.reposition());
	}
	async handleAnchorChange() {
		if (await this.stop(), this.anchor && typeof this.anchor == "string") {
			let e = this.getRootNode();
			this.anchorEl = e.getElementById(this.anchor);
		} else this.anchor instanceof Element || Xr(this.anchor) ? this.anchorEl = this.anchor : this.anchorEl = this.querySelector("[slot=\"anchor\"]");
		this.anchorEl instanceof HTMLSlotElement && (this.anchorEl = this.anchorEl.assignedElements({ flatten: !0 })[0]), this.anchorEl && this.active && this.start();
	}
	start() {
		!this.anchorEl || !this.active || (this.cleanup = Br(this.anchorEl, this.popup, () => {
			this.reposition();
		}));
	}
	async stop() {
		return new Promise((e) => {
			this.cleanup ? (this.cleanup(), this.cleanup = void 0, this.removeAttribute("data-current-placement"), this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height"), requestAnimationFrame(() => e())) : e();
		});
	}
	reposition() {
		if (!this.active || !this.anchorEl) return;
		let e = [Vr({
			mainAxis: this.distance,
			crossAxis: this.skidding
		})];
		this.sync ? e.push(Wr({ apply: ({ rects: e }) => {
			let t = this.sync === "width" || this.sync === "both", n = this.sync === "height" || this.sync === "both";
			this.popup.style.width = t ? `${e.reference.width}px` : "", this.popup.style.height = n ? `${e.reference.height}px` : "";
		} })) : (this.popup.style.width = "", this.popup.style.height = ""), this.flip && e.push(Ur({
			boundary: this.flipBoundary,
			fallbackPlacements: this.flipFallbackPlacements,
			fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
			padding: this.flipPadding
		})), this.shift && e.push(Hr({
			boundary: this.shiftBoundary,
			padding: this.shiftPadding
		})), this.autoSize ? e.push(Wr({
			boundary: this.autoSizeBoundary,
			padding: this.autoSizePadding,
			apply: ({ availableWidth: e, availableHeight: t }) => {
				this.autoSize === "vertical" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-height", `${t}px`) : this.style.removeProperty("--auto-size-available-height"), this.autoSize === "horizontal" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-width", `${e}px`) : this.style.removeProperty("--auto-size-available-width");
			}
		})) : (this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height")), this.arrow && e.push(Gr({
			element: this.arrowEl,
			padding: this.arrowPadding
		}));
		let t = this.strategy === "absolute" ? (e) => Lr.getOffsetParent(e, qr) : Lr.getOffsetParent;
		Kr(this.anchorEl, this.popup, {
			placement: this.placement,
			middleware: e,
			strategy: this.strategy,
			platform: yt(vt({}, Lr), { getOffsetParent: t })
		}).then(({ x: e, y: t, middlewareData: n, placement: r }) => {
			let i = this.localize.dir() === "rtl", a = {
				top: "bottom",
				right: "left",
				bottom: "top",
				left: "right"
			}[r.split("-")[0]];
			if (this.setAttribute("data-current-placement", r), Object.assign(this.popup.style, {
				left: `${e}px`,
				top: `${t}px`
			}), this.arrow) {
				let e = n.arrow.x, t = n.arrow.y, r = "", o = "", s = "", c = "";
				if (this.arrowPlacement === "start") {
					let n = typeof e == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
					r = typeof t == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "", o = i ? n : "", c = i ? "" : n;
				} else if (this.arrowPlacement === "end") {
					let n = typeof e == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
					o = i ? "" : n, c = i ? n : "", s = typeof t == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
				} else this.arrowPlacement === "center" ? (c = typeof e == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "", r = typeof t == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "") : (c = typeof e == "number" ? `${e}px` : "", r = typeof t == "number" ? `${t}px` : "");
				Object.assign(this.arrowEl.style, {
					top: r,
					right: o,
					bottom: s,
					left: c,
					[a]: "calc(var(--arrow-size-diagonal) * -1)"
				});
			}
		}), requestAnimationFrame(() => this.updateHoverBridge()), this.emit("sl-reposition");
	}
	render() {
		return T`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${F({
			"popup-hover-bridge": !0,
			"popup-hover-bridge--visible": this.hoverBridge && this.active
		})}
      ></span>

      <div
        part="popup"
        class=${F({
			popup: !0,
			"popup--active": this.active,
			"popup--fixed": this.strategy === "fixed",
			"popup--has-arrow": this.arrow
		})}
      >
        <slot></slot>
        ${this.arrow ? T`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
	}
};
Y.styles = [wt, sn], O([M(".popup")], Y.prototype, "popup", 2), O([M(".popup__arrow")], Y.prototype, "arrowEl", 2), O([A()], Y.prototype, "anchor", 2), O([A({
	type: Boolean,
	reflect: !0
})], Y.prototype, "active", 2), O([A({ reflect: !0 })], Y.prototype, "placement", 2), O([A({ reflect: !0 })], Y.prototype, "strategy", 2), O([A({ type: Number })], Y.prototype, "distance", 2), O([A({ type: Number })], Y.prototype, "skidding", 2), O([A({ type: Boolean })], Y.prototype, "arrow", 2), O([A({ attribute: "arrow-placement" })], Y.prototype, "arrowPlacement", 2), O([A({
	attribute: "arrow-padding",
	type: Number
})], Y.prototype, "arrowPadding", 2), O([A({ type: Boolean })], Y.prototype, "flip", 2), O([A({
	attribute: "flip-fallback-placements",
	converter: {
		fromAttribute: (e) => e.split(" ").map((e) => e.trim()).filter((e) => e !== ""),
		toAttribute: (e) => e.join(" ")
	}
})], Y.prototype, "flipFallbackPlacements", 2), O([A({ attribute: "flip-fallback-strategy" })], Y.prototype, "flipFallbackStrategy", 2), O([A({ type: Object })], Y.prototype, "flipBoundary", 2), O([A({
	attribute: "flip-padding",
	type: Number
})], Y.prototype, "flipPadding", 2), O([A({ type: Boolean })], Y.prototype, "shift", 2), O([A({ type: Object })], Y.prototype, "shiftBoundary", 2), O([A({
	attribute: "shift-padding",
	type: Number
})], Y.prototype, "shiftPadding", 2), O([A({ attribute: "auto-size" })], Y.prototype, "autoSize", 2), O([A()], Y.prototype, "sync", 2), O([A({ type: Object })], Y.prototype, "autoSizeBoundary", 2), O([A({
	attribute: "auto-size-padding",
	type: Number
})], Y.prototype, "autoSizePadding", 2), O([A({
	attribute: "hover-bridge",
	type: Boolean
})], Y.prototype, "hoverBridge", 2);
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3RPBFEDE.js
var Zr = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakSet(), ti = /* @__PURE__ */ new WeakMap(), ni = class {
	constructor(e, t) {
		this.handleFormData = (e) => {
			let t = this.options.disabled(this.host), n = this.options.name(this.host), r = this.options.value(this.host), i = this.host.tagName.toLowerCase() === "sl-button";
			this.host.isConnected && !t && !i && typeof n == "string" && n.length > 0 && r !== void 0 && (Array.isArray(r) ? r.forEach((t) => {
				e.formData.append(n, t.toString());
			}) : e.formData.append(n, r.toString()));
		}, this.handleFormSubmit = (e) => {
			var t;
			let n = this.options.disabled(this.host), r = this.options.reportValidity;
			this.form && !this.form.noValidate && ((t = Zr.get(this.form)) == null || t.forEach((e) => {
				this.setUserInteracted(e, !0);
			})), this.form && !this.form.noValidate && !n && !r(this.host) && (e.preventDefault(), e.stopImmediatePropagation());
		}, this.handleFormReset = () => {
			this.options.setValue(this.host, this.options.defaultValue(this.host)), this.setUserInteracted(this.host, !1), ti.set(this.host, []);
		}, this.handleInteraction = (e) => {
			let t = ti.get(this.host);
			t.includes(e.type) || t.push(e.type), t.length === this.options.assumeInteractionOn.length && this.setUserInteracted(this.host, !0);
		}, this.checkFormValidity = () => {
			if (this.form && !this.form.noValidate) {
				let e = this.form.querySelectorAll("*");
				for (let t of e) if (typeof t.checkValidity == "function" && !t.checkValidity()) return !1;
			}
			return !0;
		}, this.reportFormValidity = () => {
			if (this.form && !this.form.noValidate) {
				let e = this.form.querySelectorAll("*");
				for (let t of e) if (typeof t.reportValidity == "function" && !t.reportValidity()) return !1;
			}
			return !0;
		}, (this.host = e).addController(this), this.options = vt({
			form: (e) => {
				let t = e.form;
				if (t) {
					let n = e.getRootNode().querySelector(`#${t}`);
					if (n) return n;
				}
				return e.closest("form");
			},
			name: (e) => e.name,
			value: (e) => e.value,
			defaultValue: (e) => e.defaultValue,
			disabled: (e) => e.disabled ?? !1,
			reportValidity: (e) => typeof e.reportValidity != "function" || e.reportValidity(),
			checkValidity: (e) => typeof e.checkValidity != "function" || e.checkValidity(),
			setValue: (e, t) => e.value = t,
			assumeInteractionOn: ["sl-input"]
		}, t);
	}
	hostConnected() {
		let e = this.options.form(this.host);
		e && this.attachForm(e), ti.set(this.host, []), this.options.assumeInteractionOn.forEach((e) => {
			this.host.addEventListener(e, this.handleInteraction);
		});
	}
	hostDisconnected() {
		this.detachForm(), ti.delete(this.host), this.options.assumeInteractionOn.forEach((e) => {
			this.host.removeEventListener(e, this.handleInteraction);
		});
	}
	hostUpdated() {
		let e = this.options.form(this.host);
		e || this.detachForm(), e && this.form !== e && (this.detachForm(), this.attachForm(e)), this.host.hasUpdated && this.setValidity(this.host.validity.valid);
	}
	attachForm(e) {
		e ? (this.form = e, Zr.has(this.form) ? Zr.get(this.form).add(this.host) : Zr.set(this.form, /* @__PURE__ */ new Set([this.host])), this.form.addEventListener("formdata", this.handleFormData), this.form.addEventListener("submit", this.handleFormSubmit), this.form.addEventListener("reset", this.handleFormReset), Qr.has(this.form) || (Qr.set(this.form, this.form.reportValidity), this.form.reportValidity = () => this.reportFormValidity()), $r.has(this.form) || ($r.set(this.form, this.form.checkValidity), this.form.checkValidity = () => this.checkFormValidity())) : this.form = void 0;
	}
	detachForm() {
		if (!this.form) return;
		let e = Zr.get(this.form);
		e && (e.delete(this.host), e.size <= 0 && (this.form.removeEventListener("formdata", this.handleFormData), this.form.removeEventListener("submit", this.handleFormSubmit), this.form.removeEventListener("reset", this.handleFormReset), Qr.has(this.form) && (this.form.reportValidity = Qr.get(this.form), Qr.delete(this.form)), $r.has(this.form) && (this.form.checkValidity = $r.get(this.form), $r.delete(this.form)), this.form = void 0));
	}
	setUserInteracted(e, t) {
		t ? ei.add(e) : ei.delete(e), e.requestUpdate();
	}
	doAction(e, t) {
		if (this.form) {
			let n = document.createElement("button");
			n.type = e, n.style.position = "absolute", n.style.width = "0", n.style.height = "0", n.style.clipPath = "inset(50%)", n.style.overflow = "hidden", n.style.whiteSpace = "nowrap", t && (n.name = t.name, n.value = t.value, [
				"formaction",
				"formenctype",
				"formmethod",
				"formnovalidate",
				"formtarget"
			].forEach((e) => {
				t.hasAttribute(e) && n.setAttribute(e, t.getAttribute(e));
			})), this.form.append(n), n.click(), n.remove();
		}
	}
	getForm() {
		return this.form ?? null;
	}
	reset(e) {
		this.doAction("reset", e);
	}
	submit(e) {
		this.doAction("submit", e);
	}
	setValidity(e) {
		let t = this.host, n = !!ei.has(t), r = !!t.required;
		t.toggleAttribute("data-required", r), t.toggleAttribute("data-optional", !r), t.toggleAttribute("data-invalid", !e), t.toggleAttribute("data-valid", e), t.toggleAttribute("data-user-invalid", !e && n), t.toggleAttribute("data-user-valid", e && n);
	}
	updateValidity() {
		let e = this.host;
		this.setValidity(e.validity.valid);
	}
	emitInvalidEvent(e) {
		let t = new CustomEvent("sl-invalid", {
			bubbles: !1,
			composed: !1,
			cancelable: !0,
			detail: {}
		});
		e || t.preventDefault(), this.host.dispatchEvent(t) || e?.preventDefault();
	}
}, ri = Object.freeze({
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
Object.freeze(yt(vt({}, ri), {
	valid: !1,
	valueMissing: !0
})), Object.freeze(yt(vt({}, ri), {
	valid: !1,
	customError: !0
}));
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K7JGTRV7.js
var ii = /* @__PURE__ */ new Map(), ai = /* @__PURE__ */ new WeakMap();
function oi(e) {
	return e ?? {
		keyframes: [],
		options: { duration: 0 }
	};
}
function si(e, t) {
	return t.toLowerCase() === "rtl" ? {
		keyframes: e.rtlKeyframes || e.keyframes,
		options: e.options
	} : e;
}
function ci(e, t) {
	ii.set(e, oi(t));
}
function li(e, t, n) {
	let r = ai.get(e);
	if (r?.[t]) return si(r[t], n.dir);
	let i = ii.get(t);
	return i ? si(i, n.dir) : {
		keyframes: [],
		options: { duration: 0 }
	};
}
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js
function ui(e, t) {
	return new Promise((n) => {
		function r(i) {
			i.target === e && (e.removeEventListener(t, r), n());
		}
		e.addEventListener(t, r);
	});
}
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AJ3ENQ5C.js
function di(e, t, n) {
	return new Promise((r) => {
		if (n?.duration === Infinity) throw Error("Promise-based animations must be finite.");
		let i = e.animate(t, yt(vt({}, n), { duration: fi() ? 0 : n.duration }));
		i.addEventListener("cancel", r, { once: !0 }), i.addEventListener("finish", r, { once: !0 });
	});
}
function fi() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function pi(e) {
	return Promise.all(e.getAnimations().map((e) => new Promise((t) => {
		e.cancel(), requestAnimationFrame(t);
	})));
}
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js
var mi = class {
	constructor(e, ...t) {
		this.slotNames = [], this.handleSlotChange = (e) => {
			let t = e.target;
			(this.slotNames.includes("[default]") && !t.name || t.name && this.slotNames.includes(t.name)) && this.host.requestUpdate();
		}, (this.host = e).addController(this), this.slotNames = t;
	}
	hasDefaultSlot() {
		return [...this.host.childNodes].some((e) => {
			if (e.nodeType === e.TEXT_NODE && e.textContent.trim() !== "") return !0;
			if (e.nodeType === e.ELEMENT_NODE) {
				let t = e;
				if (t.tagName.toLowerCase() === "sl-visually-hidden") return !1;
				if (!t.hasAttribute("slot")) return !0;
			}
			return !1;
		});
	}
	hasNamedSlot(e) {
		return this.host.querySelector(`:scope > [slot="${e}"]`) !== null;
	}
	test(e) {
		return e === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(e);
	}
	hostConnected() {
		this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
	}
	hostDisconnected() {
		this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
	}
}, hi = class extends Lt {
	constructor(e) {
		if (super(e), this.it = D, e.type !== Ft.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
	}
	render(e) {
		if (e === D || e == null) return this._t = void 0, this.it = e;
		if (e === E) return e;
		if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
		if (e === this.it) return this._t;
		this.it = e;
		let t = [e];
		return t.raw = t, this._t = {
			_$litType$: this.constructor.resultType,
			strings: t,
			values: []
		};
	}
};
hi.directiveName = "unsafeHTML", hi.resultType = 1;
var gi = It(hi), X = class extends N {
	constructor() {
		super(...arguments), this.formControlController = new ni(this, { assumeInteractionOn: ["sl-blur", "sl-input"] }), this.hasSlotController = new mi(this, "help-text", "label"), this.localize = new en(this), this.typeToSelectString = "", this.hasFocus = !1, this.displayLabel = "", this.selectedOptions = [], this.valueHasChanged = !1, this.name = "", this._value = "", this.defaultValue = "", this.size = "medium", this.placeholder = "", this.multiple = !1, this.maxOptionsVisible = 3, this.disabled = !1, this.clearable = !1, this.open = !1, this.hoist = !1, this.filled = !1, this.pill = !1, this.label = "", this.placement = "bottom", this.helpText = "", this.form = "", this.required = !1, this.getTag = (e) => T`
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
        @sl-remove=${(t) => this.handleTagRemove(t, e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `, this.handleDocumentFocusIn = (e) => {
			let t = e.composedPath();
			this && !t.includes(this) && this.hide();
		}, this.handleDocumentKeyDown = (e) => {
			let t = e.target, n = t.closest(".select__clear") !== null, r = t.closest("sl-icon-button") !== null;
			if (!(n || r)) {
				if (e.key === "Escape" && this.open && !this.closeWatcher && (e.preventDefault(), e.stopPropagation(), this.hide(), this.displayInput.focus({ preventScroll: !0 })), e.key === "Enter" || e.key === " " && this.typeToSelectString === "") {
					if (e.preventDefault(), e.stopImmediatePropagation(), !this.open) {
						this.show();
						return;
					}
					this.currentOption && !this.currentOption.disabled && (this.valueHasChanged = !0, this.multiple ? this.toggleOptionSelection(this.currentOption) : this.setSelectedOptions(this.currentOption), this.updateComplete.then(() => {
						this.emit("sl-input"), this.emit("sl-change");
					}), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
					return;
				}
				if ([
					"ArrowUp",
					"ArrowDown",
					"Home",
					"End"
				].includes(e.key)) {
					let t = this.getAllOptions(), n = t.indexOf(this.currentOption), r = Math.max(0, n);
					if (e.preventDefault(), !this.open && (this.show(), this.currentOption)) return;
					e.key === "ArrowDown" ? (r = n + 1, r > t.length - 1 && (r = 0)) : e.key === "ArrowUp" ? (r = n - 1, r < 0 && (r = t.length - 1)) : e.key === "Home" ? r = 0 : e.key === "End" && (r = t.length - 1), this.setCurrentOption(t[r]);
				}
				if (e.key && e.key.length === 1 || e.key === "Backspace") {
					let t = this.getAllOptions();
					if (e.metaKey || e.ctrlKey || e.altKey) return;
					if (!this.open) {
						if (e.key === "Backspace") return;
						this.show();
					}
					e.stopPropagation(), e.preventDefault(), clearTimeout(this.typeToSelectTimeout), this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3), e.key === "Backspace" ? this.typeToSelectString = this.typeToSelectString.slice(0, -1) : this.typeToSelectString += e.key.toLowerCase();
					for (let e of t) if (e.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)) {
						this.setCurrentOption(e);
						break;
					}
				}
			}
		}, this.handleDocumentMouseDown = (e) => {
			let t = e.composedPath();
			this && !t.includes(this) && this.hide();
		};
	}
	get value() {
		return this._value;
	}
	set value(e) {
		e = this.multiple ? Array.isArray(e) ? e : e.split(" ") : Array.isArray(e) ? e.join(" ") : e, this._value !== e && (this.valueHasChanged = !0, this._value = e);
	}
	get validity() {
		return this.valueInput.validity;
	}
	get validationMessage() {
		return this.valueInput.validationMessage;
	}
	connectedCallback() {
		super.connectedCallback(), setTimeout(() => {
			this.handleDefaultSlotChange();
		}), this.open = !1;
	}
	addOpenListeners() {
		var e;
		document.addEventListener("focusin", this.handleDocumentFocusIn), document.addEventListener("keydown", this.handleDocumentKeyDown), document.addEventListener("mousedown", this.handleDocumentMouseDown), this.getRootNode() !== document && this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn), "CloseWatcher" in window && ((e = this.closeWatcher) == null || e.destroy(), this.closeWatcher = new CloseWatcher(), this.closeWatcher.onclose = () => {
			this.open && (this.hide(), this.displayInput.focus({ preventScroll: !0 }));
		});
	}
	removeOpenListeners() {
		var e;
		document.removeEventListener("focusin", this.handleDocumentFocusIn), document.removeEventListener("keydown", this.handleDocumentKeyDown), document.removeEventListener("mousedown", this.handleDocumentMouseDown), this.getRootNode() !== document && this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn), (e = this.closeWatcher) == null || e.destroy();
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
	handleComboboxMouseDown(e) {
		let t = e.composedPath().some((e) => e instanceof Element && e.tagName.toLowerCase() === "sl-icon-button");
		this.disabled || t || (e.preventDefault(), this.displayInput.focus({ preventScroll: !0 }), this.open = !this.open);
	}
	handleComboboxKeyDown(e) {
		e.key !== "Tab" && (e.stopPropagation(), this.handleDocumentKeyDown(e));
	}
	handleClearClick(e) {
		e.stopPropagation(), this.valueHasChanged = !0, this.value !== "" && (this.setSelectedOptions([]), this.displayInput.focus({ preventScroll: !0 }), this.updateComplete.then(() => {
			this.emit("sl-clear"), this.emit("sl-input"), this.emit("sl-change");
		}));
	}
	handleClearMouseDown(e) {
		e.stopPropagation(), e.preventDefault();
	}
	handleOptionClick(e) {
		let t = e.target.closest("sl-option"), n = this.value;
		t && !t.disabled && (this.valueHasChanged = !0, this.multiple ? this.toggleOptionSelection(t) : this.setSelectedOptions(t), this.updateComplete.then(() => this.displayInput.focus({ preventScroll: !0 })), this.value !== n && this.updateComplete.then(() => {
			this.emit("sl-input"), this.emit("sl-change");
		}), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
	}
	handleDefaultSlotChange() {
		customElements.get("sl-option") || customElements.whenDefined("sl-option").then(() => this.handleDefaultSlotChange());
		let e = this.getAllOptions(), t = this.valueHasChanged ? this.value : this.defaultValue, n = Array.isArray(t) ? t : [t], r = [];
		e.forEach((e) => r.push(e.value)), this.setSelectedOptions(e.filter((e) => n.includes(e.value)));
	}
	handleTagRemove(e, t) {
		e.stopPropagation(), this.valueHasChanged = !0, this.disabled || (this.toggleOptionSelection(t, !1), this.updateComplete.then(() => {
			this.emit("sl-input"), this.emit("sl-change");
		}));
	}
	getAllOptions() {
		return [...this.querySelectorAll("sl-option")];
	}
	getFirstOption() {
		return this.querySelector("sl-option");
	}
	setCurrentOption(e) {
		this.getAllOptions().forEach((e) => {
			e.current = !1, e.tabIndex = -1;
		}), e && (this.currentOption = e, e.current = !0, e.tabIndex = 0, e.focus());
	}
	setSelectedOptions(e) {
		let t = this.getAllOptions(), n = Array.isArray(e) ? e : [e];
		t.forEach((e) => e.selected = !1), n.length && n.forEach((e) => e.selected = !0), this.selectionChanged();
	}
	toggleOptionSelection(e, t) {
		t === !0 || t === !1 ? e.selected = t : e.selected = !e.selected, this.selectionChanged();
	}
	selectionChanged() {
		let e = this.getAllOptions();
		this.selectedOptions = e.filter((e) => e.selected);
		let t = this.valueHasChanged;
		if (this.multiple) this.value = this.selectedOptions.map((e) => e.value), this.placeholder && this.value.length === 0 ? this.displayLabel = "" : this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
		else {
			let e = this.selectedOptions[0];
			this.value = e?.value ?? "", this.displayLabel = (e?.getTextLabel)?.call(e) ?? "";
		}
		this.valueHasChanged = t, this.updateComplete.then(() => {
			this.formControlController.updateValidity();
		});
	}
	get tags() {
		return this.selectedOptions.map((e, t) => {
			if (t < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
				let n = this.getTag(e, t);
				return T`<div @sl-remove=${(t) => this.handleTagRemove(t, e)}>
          ${typeof n == "string" ? gi(n) : n}
        </div>`;
			} else if (t === this.maxOptionsVisible) return T`<sl-tag size=${this.size}>+${this.selectedOptions.length - t}</sl-tag>`;
			return T``;
		});
	}
	handleInvalid(e) {
		this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
	}
	handleDisabledChange() {
		this.disabled && (this.open = !1, this.handleOpenChange());
	}
	attributeChangedCallback(e, t, n) {
		if (super.attributeChangedCallback(e, t, n), e === "value") {
			let e = this.valueHasChanged;
			this.value = this.defaultValue, this.valueHasChanged = e;
		}
	}
	handleValueChange() {
		if (!this.valueHasChanged) {
			let e = this.valueHasChanged;
			this.value = this.defaultValue, this.valueHasChanged = e;
		}
		let e = this.getAllOptions(), t = Array.isArray(this.value) ? this.value : [this.value];
		this.setSelectedOptions(e.filter((e) => t.includes(e.value)));
	}
	async handleOpenChange() {
		if (this.open && !this.disabled) {
			this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption()), this.emit("sl-show"), this.addOpenListeners(), await pi(this), this.listbox.hidden = !1, this.popup.active = !0, requestAnimationFrame(() => {
				this.setCurrentOption(this.currentOption);
			});
			let { keyframes: e, options: t } = li(this, "select.show", { dir: this.localize.dir() });
			await di(this.popup.popup, e, t), this.currentOption && an(this.currentOption, this.listbox, "vertical", "auto"), this.emit("sl-after-show");
		} else {
			this.emit("sl-hide"), this.removeOpenListeners(), await pi(this);
			let { keyframes: e, options: t } = li(this, "select.hide", { dir: this.localize.dir() });
			await di(this.popup.popup, e, t), this.listbox.hidden = !0, this.popup.active = !1, this.emit("sl-after-hide");
		}
	}
	async show() {
		if (this.open || this.disabled) {
			this.open = !1;
			return;
		}
		return this.open = !0, ui(this, "sl-after-show");
	}
	async hide() {
		if (!this.open || this.disabled) {
			this.open = !1;
			return;
		}
		return this.open = !1, ui(this, "sl-after-hide");
	}
	checkValidity() {
		return this.valueInput.checkValidity();
	}
	getForm() {
		return this.formControlController.getForm();
	}
	reportValidity() {
		return this.valueInput.reportValidity();
	}
	setCustomValidity(e) {
		this.valueInput.setCustomValidity(e), this.formControlController.updateValidity();
	}
	focus(e) {
		this.displayInput.focus(e);
	}
	blur() {
		this.displayInput.blur();
	}
	render() {
		let e = this.hasSlotController.test("label"), t = this.hasSlotController.test("help-text"), n = this.label ? !0 : !!e, r = this.helpText ? !0 : !!t, i = this.clearable && !this.disabled && this.value.length > 0, a = this.placeholder && this.value && this.value.length <= 0;
		return T`
      <div
        part="form-control"
        class=${F({
			"form-control": !0,
			"form-control--small": this.size === "small",
			"form-control--medium": this.size === "medium",
			"form-control--large": this.size === "large",
			"form-control--has-label": n,
			"form-control--has-help-text": r
		})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${n ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${F({
			select: !0,
			"select--standard": !0,
			"select--filled": this.filled,
			"select--pill": this.pill,
			"select--open": this.open,
			"select--disabled": this.disabled,
			"select--multiple": this.multiple,
			"select--focused": this.hasFocus,
			"select--placeholder-visible": a,
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

              ${this.multiple ? T`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

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

              ${i ? T`
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
          aria-hidden=${r ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
	}
};
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TP2GB2HO.js
X.styles = [
	wt,
	on,
	nn
], X.dependencies = {
	"sl-icon": P,
	"sl-popup": Y,
	"sl-tag": tn
}, O([M(".select")], X.prototype, "popup", 2), O([M(".select__combobox")], X.prototype, "combobox", 2), O([M(".select__display-input")], X.prototype, "displayInput", 2), O([M(".select__value-input")], X.prototype, "valueInput", 2), O([M(".select__listbox")], X.prototype, "listbox", 2), O([j()], X.prototype, "hasFocus", 2), O([j()], X.prototype, "displayLabel", 2), O([j()], X.prototype, "currentOption", 2), O([j()], X.prototype, "selectedOptions", 2), O([j()], X.prototype, "valueHasChanged", 2), O([A()], X.prototype, "name", 2), O([j()], X.prototype, "value", 1), O([A({ attribute: "value" })], X.prototype, "defaultValue", 2), O([A({ reflect: !0 })], X.prototype, "size", 2), O([A()], X.prototype, "placeholder", 2), O([A({
	type: Boolean,
	reflect: !0
})], X.prototype, "multiple", 2), O([A({
	attribute: "max-options-visible",
	type: Number
})], X.prototype, "maxOptionsVisible", 2), O([A({
	type: Boolean,
	reflect: !0
})], X.prototype, "disabled", 2), O([A({ type: Boolean })], X.prototype, "clearable", 2), O([A({
	type: Boolean,
	reflect: !0
})], X.prototype, "open", 2), O([A({ type: Boolean })], X.prototype, "hoist", 2), O([A({
	type: Boolean,
	reflect: !0
})], X.prototype, "filled", 2), O([A({
	type: Boolean,
	reflect: !0
})], X.prototype, "pill", 2), O([A()], X.prototype, "label", 2), O([A({ reflect: !0 })], X.prototype, "placement", 2), O([A({ attribute: "help-text" })], X.prototype, "helpText", 2), O([A({ reflect: !0 })], X.prototype, "form", 2), O([A({
	type: Boolean,
	reflect: !0
})], X.prototype, "required", 2), O([A()], X.prototype, "getTag", 2), O([k("disabled", { waitUntilFirstUpdate: !0 })], X.prototype, "handleDisabledChange", 1), O([k(["defaultValue", "value"], { waitUntilFirstUpdate: !0 })], X.prototype, "handleValueChange", 1), O([k("open", { waitUntilFirstUpdate: !0 })], X.prototype, "handleOpenChange", 1), ci("select.show", {
	keyframes: [{
		opacity: 0,
		scale: .9
	}, {
		opacity: 1,
		scale: 1
	}],
	options: {
		duration: 100,
		easing: "ease"
	}
}), ci("select.hide", {
	keyframes: [{
		opacity: 1,
		scale: 1
	}, {
		opacity: 0,
		scale: .9
	}],
	options: {
		duration: 100,
		easing: "ease"
	}
}), X.define("sl-select");
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FXXKMG2P.js
var _i = _`
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
`, Z = class extends N {
	constructor() {
		super(...arguments), this.localize = new en(this), this.isInitialized = !1, this.current = !1, this.selected = !1, this.hasHover = !1, this.value = "", this.disabled = !1;
	}
	connectedCallback() {
		super.connectedCallback(), this.setAttribute("role", "option"), this.setAttribute("aria-selected", "false");
	}
	handleDefaultSlotChange() {
		this.isInitialized ? customElements.whenDefined("sl-select").then(() => {
			let e = this.closest("sl-select");
			e && e.handleDefaultSlotChange();
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
	getTextLabel() {
		let e = this.childNodes, t = "";
		return [...e].forEach((e) => {
			e.nodeType === Node.ELEMENT_NODE && (e.hasAttribute("slot") || (t += e.textContent)), e.nodeType === Node.TEXT_NODE && (t += e.textContent);
		}), t.trim();
	}
	render() {
		return T`
      <div
        part="base"
        class=${F({
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
//#endregion
//#region ../../node_modules/@shoelace-style/shoelace/dist/chunks/chunk.JXOKFADN.js
Z.styles = [wt, _i], Z.dependencies = { "sl-icon": P }, O([M(".option__label")], Z.prototype, "defaultSlot", 2), O([j()], Z.prototype, "current", 2), O([j()], Z.prototype, "selected", 2), O([j()], Z.prototype, "hasHover", 2), O([A({ reflect: !0 })], Z.prototype, "value", 2), O([A({
	type: Boolean,
	reflect: !0
})], Z.prototype, "disabled", 2), O([k("disabled")], Z.prototype, "handleDisabledChange", 1), O([k("selected")], Z.prototype, "handleSelectedChange", 1), O([k("value")], Z.prototype, "handleValueChange", 1), Z.define("sl-option");
//#endregion
//#region \0@oxc-project+runtime@0.139.0/helpers/esm/decorate.js
function Q(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
//#endregion
//#region src/property-editor-ui-dropdown.ts
var $ = class extends s(c) {
	constructor(...e) {
		super(...e), this._defaultApplied = !1, this._multiple = !1, this._options = [], this._value = void 0, this.readonly = !1, this.mandatory = !1, this.getFormElement = () => this._input;
	}
	set value(e) {
		let t;
		if (Array.isArray(e)) t = e.filter((e) => !!e && typeof e == "string");
		else if (e && typeof e == "string") t = [e];
		else return;
		this._value = t;
		try {
			JSON.stringify(e) !== JSON.stringify(t) && (this.pristine = !1, this.updateComplete.then(() => {
				this.dispatchEvent(new l());
			}));
		} catch (e) {
			console.error("Failed to compare items: ", e);
		}
	}
	get value() {
		return this._value ?? [];
	}
	set config(e) {
		if (!e) return;
		this._multiple = !!e.getValueByAlias("multiple");
		let t = e.getValueByAlias("items"), n = e.getValueByAlias("default");
		this._multiple ? this._defaultValues = n?.split(",").map((e) => e.trim()).filter(Boolean) : n && (this._defaultValues = [n]), Array.isArray(t) && t.length > 0 && (this._options = t.filter((e) => !!e?.key).map((e) => ({
			name: this.localize.string(e.value) || e.key,
			value: e.key,
			alias: this.toSlSelectAlias(e.key),
			selected: !!this._value?.includes(e.key)
		})), this._value?.forEach((e) => {
			this._options.find((t) => t.value === e) || this._options.push({
				name: `${e} (${this.localize.term("validation_legacyOption")})`,
				value: e,
				alias: this.toSlSelectAlias(e),
				selected: !0,
				invalid: !0
			});
		}));
	}
	#e(e) {
		let t = Array.isArray(e?.target?.value) ? e.target.value : [e.target.value];
		this.value = this._options.filter((e) => t.includes(e.alias)).map((e) => e.value), this.dispatchEvent(new l());
	}
	render() {
		return n`
      <sl-select
        value=${this.value.join(" ")}
        @sl-change=${this.#e}
        placeholder=${this._multiple ? "Select multiple" : "Select one"}
        size="small"
        clearable
        ?disabled=${this.readonly}
        ?multiple=${this._multiple}
      >
        ${r(this._options, (e) => n`
            <sl-option value=${e.alias} ?disabled=${e.invalid}>${e.name}</sl-option>
          `)}
        <span slot="help-text" class="error">${this._legacyOptionMessage}</span>
      </sl-select>
    `;
	}
	firstUpdated() {
		this.consumeContext(u, (e) => {
			e && this.observe(e.isNew, (e) => {
				e && !this._defaultApplied && this._defaultValues?.length && !this._value && (this.value = this._defaultValues, this._defaultApplied = !0, this.dispatchEvent(new l()));
			});
		});
	}
	get _legacyOptionMessage() {
		return this._value?.some((e) => {
			let t = this._options.find((t) => t.value === e);
			return t ? t.invalid : !1;
		}) ? this.localize.term("validation_legacyOptionDescription") : "";
	}
	toSlSelectAlias(e) {
		return e.trim().replace(/\s+/g, "_");
	}
	static {
		this.styles = [Ye, e`
      .error {
        color: var(--uui-color-danger);
        font-size: var(--uui-font-size-small);
      }
    `];
	}
};
Q([o()], $.prototype, "_multiple", void 0), Q([o()], $.prototype, "_options", void 0), Q([o()], $.prototype, "_value", void 0), Q([i({ type: Array })], $.prototype, "value", null), Q([i({
	type: Boolean,
	reflect: !0
})], $.prototype, "readonly", void 0), Q([i({
	type: Boolean,
	reflect: !0
})], $.prototype, "mandatory", void 0), Q([a("sl-select")], $.prototype, "_input", void 0), $ = Q([t("ak-property-editor-ui-dropdown")], $);
var vi = $;
//#endregion
export { $ as AkPropertyEditorUIDropdown, vi as default };
