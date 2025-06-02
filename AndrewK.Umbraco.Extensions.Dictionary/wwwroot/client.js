var xt = (i) => {
  throw TypeError(i);
};
var Ct = (i, o, t) => o.has(i) || xt("Cannot " + t);
var e = (i, o, t) => (Ct(i, o, "read from private field"), t ? t.call(i) : o.get(i)), f = (i, o, t) => o.has(i) ? xt("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(i) : o.set(i, t), h = (i, o, t, r) => (Ct(i, o, "write to private field"), r ? r.call(i, t) : o.set(i, t), t), u = (i, o, t) => (Ct(i, o, "access private method"), t);
import { nothing as kt, when as me, html as K, css as Ft, property as A, query as Xt, customElement as Dt, repeat as fe, state as It } from "@umbraco-cms/backoffice/external/lit";
import { UmbFormControlMixin as pe, UmbValidationContext as ge, umbBindToValidation as ve } from "@umbraco-cms/backoffice/validation";
import { UmbLitElement as Pt } from "@umbraco-cms/backoffice/lit-element";
import { UmbPropertyValueChangeEvent as Ee } from "@umbraco-cms/backoffice/property-editor";
import { UMB_PROPERTY_CONTEXT as we } from "@umbraco-cms/backoffice/property";
import { UMB_SUBMITTABLE_WORKSPACE_CONTEXT as ye, UmbSubmittableWorkspaceContextBase as Se } from "@umbraco-cms/backoffice/workspace";
import { UmbDeleteEvent as Ie, UmbInputEvent as be, UmbChangeEvent as gt } from "@umbraco-cms/backoffice/event";
import { isWithinRect as Lt } from "@umbraco-cms/backoffice/utils";
import { UmbControllerBase as Ce } from "@umbraco-cms/backoffice/class-api";
import { umbConfirmModal as Ae } from "@umbraco-cms/backoffice/modal";
import { UUIFormControlMixin as Me } from "@umbraco-cms/backoffice/external/uui";
const vt = 50, Bt = 16;
function qe(i, o) {
  if (!i || !i.getBoundingClientRect) return null;
  let t = i;
  for (; t; ) {
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      const r = getComputedStyle(t);
      if (t.clientHeight < t.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll") || t.clientWidth < t.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll"))
        return !t.getBoundingClientRect || t === document.body ? null : t;
    }
    if (t.parentNode === document)
      return null;
    t.parentNode instanceof ShadowRoot ? t = t.parentNode.host : t = t.parentNode;
  }
  return null;
}
function Re(i, o) {
  const t = o.split(",");
  t.push('[draggable="false"]'), t.forEach(function(r) {
    i.querySelectorAll(r.trim()).forEach(De);
  });
}
function $e(i, o) {
  const t = o.split(",");
  t.push('[draggable="false"]'), t.forEach(function(r) {
    i.querySelectorAll(r.trim()).forEach(Pe);
  });
}
function De(i) {
  console.log("prevent on", i), i.draggable = !1;
}
function Pe(i) {
  i.draggable = !1;
}
var H, W, a, N, m, w, G, z, x, I, v, D, d, Vt, it, qt, rt, tt, Rt, Yt, _t, Ht, $t, nt, st, ot, L, at, B, wt, Nt, pt, ut, zt, et, k, C, lt, Kt;
const s = class s extends Ce {
  constructor(t, r) {
    super(t);
    f(this, d);
    f(this, H);
    f(this, W);
    f(this, a);
    f(this, N);
    f(this, m);
    f(this, w);
    f(this, G);
    f(this, z);
    f(this, x);
    f(this, I);
    f(this, v);
    f(this, D);
    f(this, it);
    f(this, rt);
    f(this, nt);
    f(this, st);
    f(this, ot);
    f(this, L);
    f(this, at);
    f(this, B);
    f(this, pt);
    f(this, k);
    f(this, C);
    f(this, lt);
    h(this, W, !1), h(this, m, []), h(this, x, !0), h(this, I, 0), h(this, v, 0), h(this, D, Array()), h(this, it, () => {
      if (e(this, W) === !1) return;
      const n = (e(this, a).containerSelector ? e(this, H).shadowRoot.querySelector(e(this, a).containerSelector) : e(this, H)) ?? e(this, H);
      h(this, w, n), h(this, G, e(this, w) === e(this, H));
      const l = e(this, G) ? e(this, w).shadowRoot ?? e(this, w) : e(this, w);
      l.addEventListener("dragover", e(this, rt)), e(this, N).disconnect(), l.querySelectorAll(e(this, a).itemSelector).forEach((c) => {
        c.matches && c.matches(e(this, a).itemSelector) && this.setupItem(c);
      }), e(this, N).observe(l, {
        childList: !0,
        subtree: !1
      });
    }), h(this, rt, (n) => {
      const l = s.dropSorter;
      if (!(!l || l.identifier !== this.identifier))
        if (l === this) {
          n.preventDefault(), n.dataTransfer && (n.dataTransfer.dropEffect = "move"), u(this, d, Nt).call(this, n), n.stopPropagation();
          return;
        } else {
          if (this.updateAllowIndication(s.activeItem) === !1)
            return;
          s.dropSorter = this, n.stopPropagation();
        }
    }), h(this, nt, (n) => {
      const l = n.target, c = n.composedPath();
      if (e(this, a).ignorerSelector) {
        if (l.matches(e(this, a).ignorerSelector))
          return;
        const E = c.indexOf(l), g = E !== -1 ? c.slice(0, E) : void 0;
        if (g && g.some(
          (M) => {
            var Y;
            return (Y = M.matches) == null ? void 0 : Y.call(M, '[draggable="false"],' + e(this, a).ignorerSelector);
          }
        ))
          return;
      }
      if (n.target && n.button === 0) {
        const E = u(this, d, Yt).call(this, n.target);
        if (!E) return;
        const g = u(this, d, tt).call(this, E);
        if (!g) return;
        g.addEventListener("mouseup", e(this, st)), g.draggable = !0;
      }
    }), h(this, st, (n) => {
      const l = n.target;
      l && (l.removeEventListener("mouseup", e(this, st)), l.draggable = !1);
    }), h(this, ot, (n) => {
      var c;
      const l = n.target.closest(e(this, a).itemSelector);
      if (l) {
        if (s.activeElement && s.activeElement !== l && (console.error("drag start ws cancelled due to another drag was still active"), e(this, L).call(this)), n.stopPropagation(), n.dataTransfer) {
          const E = s.activeDragElement ?? l, g = E.getBoundingClientRect();
          n.dataTransfer.setDragImage(E, n.clientX - g.x, n.clientY - g.y), n.dataTransfer.dropEffect = "move", n.dataTransfer.effectAllowed = "all";
        }
        if (e(this, z) || h(this, z, qe(e(this, w))), u(this, d, $t).call(this, l), console.warn("after setCurrentElement: ", s.activeItem), (c = s.activeDragElement) == null || c.addEventListener("dragend", e(this, L)), window.addEventListener("mouseup", e(this, B)), window.addEventListener("mouseout", e(this, B)), window.addEventListener("mouseleave", e(this, B)), window.addEventListener("mousemove", e(this, at)), s.activeItem = this.getItemOfElement(s.activeElement), s.originalSorter = this, s.originalIndex = e(this, m).indexOf(s.activeItem), !s.activeItem) {
          console.error("Could not find item related to this element.", s.activeElement);
          return;
        }
        return s.activeIndex = s.originalIndex, s.activeDragElement.style.transform = "translateZ(0)", e(this, a).dataTransferResolver && e(this, a).dataTransferResolver(n.dataTransfer, s.activeItem), e(this, a).onStart && e(this, a).onStart({
          item: s.activeItem,
          element: s.activeElement
        }), s.activeSorter = this, s.dropSorter = this, s.rqaId = requestAnimationFrame(() => {
          s.rqaId = void 0, s.activeDragElement && (s.activeDragElement.style.transform = "");
        }), !0;
      }
    }), h(this, L, (n) => {
      s.originalSorter && (n == null ? void 0 : n.dataTransfer) != null && n.dataTransfer.dropEffect === "none" && s.originalSorter.moveItemInModel(
        s.originalIndex ?? 0,
        s.activeSorter
      ), u(this, d, wt).call(this);
    }), h(this, at, (n) => {
      n.buttons === 0 && u(this, d, wt).call(this);
    }), h(this, B, (n) => {
      u(this, d, wt).call(this);
    }), h(this, pt, () => {
      if (s.rqaId = void 0, !s.activeElement || !s.activeItem)
        return;
      if (s.dropSorter !== this)
        throw new Error("Drop sorter is not this sorter");
      const n = s.activeElement.getBoundingClientRect();
      if (Lt(e(this, I), e(this, v), n))
        return;
      const c = e(this, G) ? e(this, w).shadowRoot ?? e(this, w) : e(this, w), E = Array.from(c.querySelectorAll(e(this, a).itemSelector)), g = e(this, w).getBoundingClientRect(), R = [];
      let M = !1;
      for (const b of E) {
        const y = b.getBoundingClientRect();
        if (e(this, v) >= y.top && e(this, v) <= y.bottom) {
          const $ = u(this, d, tt).call(this, b);
          if ($) {
            const J = $.getBoundingClientRect();
            b !== s.activeElement ? R.push({ el: b, dragRect: J }) : M = !0;
          }
        }
      }
      let Y = 1 / 0, T, p, S = !1;
      R.forEach((b) => {
        const y = b.dragRect.left + b.dragRect.width * 0.5, $ = Math.abs(e(this, I) - y);
        $ < Y && (T = b.el, p = b.dragRect, Y = $, S = e(this, I) > y);
      });
      let q = e(this, m).indexOf(s.activeItem);
      if (q === -1 && (q = null), T) {
        if (T === s.activeElement)
          return;
        const b = this.getItemOfElement(T);
        if (!b)
          throw new Error("Could not find model of found element");
        let y = e(this, m).indexOf(b);
        if (y === -1 && (y = null), q !== null && y !== null) {
          const U = Math.max(p.width - n.width, 0);
          q < y && p.left + U < e(this, I) ? S = !0 : q > y && p.right - U > e(this, I) && (S = !1);
        }
        const $ = e(this, a).resolvePlacement ? e(this, a).resolvePlacement({
          containerElement: e(this, w),
          containerRect: g,
          item: s.activeItem,
          itemIndex: q,
          element: s.activeElement,
          elementRect: n,
          relatedElement: T,
          relatedModel: b,
          relatedRect: p,
          relatedIndex: y,
          placeholderIsInThisRow: M,
          horizontalPlaceAfter: S,
          pointerX: e(this, I),
          pointerY: e(this, v)
        }) : !0;
        if ($ === null)
          return;
        let J = !0;
        if (typeof $ == "object")
          J = $.verticalDirection ?? !1, S = $.placeAfter;
        else if (J = $ ?? !1, J === !0 && (S = e(this, v) > p.top + p.height * 0.5, q !== null && y !== null)) {
          const U = Math.max(p.height - n.height, 0);
          q < y && e(this, v) > p.top + U ? S = !0 : q > y && e(this, v) < p.bottom - U && (S = !1);
        }
        if (J === !0) {
          let U;
          if (S === !1) {
            let dt = p.left;
            R.map((Q) => {
              Q.dragRect.left < dt && (dt = Q.dragRect.left, U = Q.el);
            });
          } else {
            let dt = p.right;
            R.map((Q) => {
              Q.dragRect.right > dt && (dt = Q.dragRect.right, U = Q.el);
            });
          }
          U && (T = U);
        }
        const Ut = E.indexOf(T), ue = S ? Ut + 1 : Ut;
        u(this, d, et).call(this, ue);
        return;
      }
      if (this.updateAllowIndication(s.activeItem) !== !1) {
        if (e(this, m).length === 0)
          u(this, d, et).call(this, 0);
        else if (e(this, v) < g.top)
          u(this, d, et).call(this, 0);
        else if (e(this, v) > g.bottom)
          u(this, d, et).call(this, -1);
        else if (e(this, m).length > 1 && q !== null) {
          const y = e(this, v) > n.bottom === !1 ? u(this, d, ut).call(this, 0, q) : u(this, d, ut).call(this, q, e(this, m).length);
          y && u(this, d, et).call(this, y);
        }
      }
    }), h(this, k, null), h(this, C, document.scrollingElement || document.documentElement), this.autoScrollX = 0, this.autoScrollY = 0, h(this, lt, () => {
      e(this, C).scrollLeft += this.autoScrollX * Bt, e(this, C).scrollTop += this.autoScrollY * Bt, h(this, k, requestAnimationFrame(e(this, lt)));
    }), h(this, H, t), r.identifier ?? (r.identifier = Symbol()), r.ignorerSelector ?? (r.ignorerSelector = "a,img,iframe,input,textarea,select,option"), !r.placeholderClass && !r.placeholderAttr && (r.placeholderAttr = "drag-placeholder"), h(this, a, r), t.addUmbController(this), h(this, N, new MutationObserver((n) => {
      n.forEach((l) => {
        l.addedNodes.forEach((c) => {
          c.matches && c.matches(e(this, a).itemSelector) && this.setupItem(c);
        }), l.removedNodes.forEach((c) => {
          c.matches && c.matches(e(this, a).itemSelector) && this.destroyItem(c);
        });
      });
    }));
  }
  get identifier() {
    return e(this, a).identifier;
  }
  set identifier(t) {
    e(this, a).identifier = t;
  }
  /**
   * Enables the sorter, this will allow sorting to happen.
   * @returns {*}  {void}
   * @memberof UmbSorterController
   */
  enable() {
    e(this, x) || (h(this, x, !0), e(this, W) && e(this, it).call(this));
  }
  /**
   * Disables the sorter, this will prevent any sorting to happen.
   * @returns {*}  {void}
   * @memberof UmbSorterController
   */
  disable() {
    e(this, x) && (h(this, x, !1), e(this, W) && u(this, d, qt).call(this));
  }
  setModel(t) {
    console.warn("setModel: ", t), h(this, m, t ?? []);
  }
  /**
   * Returns the model of the sorter.
   * @returns {Array<T>}
   * @memberof UmbSorterController
   */
  getModel() {
    return e(this, m);
  }
  hasItem(t) {
    return e(this, m).find((r) => e(this, a).getUniqueOfModel(r) === t) !== void 0;
  }
  getItem(t) {
    return e(this, m).find((r) => e(this, a).getUniqueOfModel(r) === t);
  }
  hostConnected() {
    h(this, W, !0), e(this, x) && requestAnimationFrame(e(this, it));
  }
  hostDisconnected() {
    h(this, W, !1), e(this, x) && u(this, d, qt).call(this);
  }
  setupItem(t) {
    if (e(this, a).ignorerSelector && Re(t, e(this, a).ignorerSelector), !e(this, a).disabledItemSelector || !t.matches(e(this, a).disabledItemSelector)) {
      const r = u(this, d, tt).call(this, t);
      u(this, d, Rt).call(this, t).addEventListener("mousedown", e(this, nt)), r.draggable = !1, r.addEventListener("dragstart", e(this, ot)), r.addEventListener("dragend", e(this, L));
    }
    if (console.warn("from setupItem: ", s.activeItem), s.activeItem && u(this, d, Vt).call(this)) {
      const r = e(this, a).getUniqueOfElement(t), n = e(this, a).getUniqueOfModel(s.activeItem);
      r === n && r !== void 0 && s.activeElement !== t && u(this, d, $t).call(this, t);
    }
    e(this, D).push(t), h(this, D, Array.from(new Set(e(this, D))));
  }
  destroyItem(t) {
    e(this, a).ignorerSelector && $e(t, e(this, a).ignorerSelector);
    const r = u(this, d, tt).call(this, t);
    r.removeEventListener("dragstart", e(this, ot)), r.removeEventListener("dragend", e(this, L)), u(this, d, Rt).call(this, t).removeEventListener("mousedown", e(this, nt)), r.draggable = !1, h(this, D, e(this, D).filter((l) => l !== t));
  }
  /** Management methods: */
  getItemOfElement(t) {
    if (!t)
      throw new Error("Element was not defined");
    const r = e(this, a).getUniqueOfElement(t);
    if (r === void 0) {
      console.error("Could not find unique of element", t);
      return;
    }
    console.warn("from getItemOfElement, this.#model: ", e(this, m));
    const n = e(this, m).find((l) => r === e(this, a).getUniqueOfModel(l));
    return console.warn("from getItemOfElement, result: ", n), n;
  }
  getElementOfItem(t) {
    const r = e(this, a).getUniqueOfModel(t);
    if (r === void 0) {
      console.error("Sorter could not find unique of item", t);
      return;
    }
    return e(this, D).find((n) => r === e(this, a).getUniqueOfElement(n));
  }
  async removeItem(t) {
    var r, n;
    if (!t)
      return !1;
    if (e(this, a).performItemRemove)
      return await e(this, a).performItemRemove({ item: t }) ?? !1;
    {
      const l = e(this, m).indexOf(t);
      if (l !== -1) {
        const c = [...e(this, m)];
        return c.splice(l, 1), h(this, m, c), (n = (r = e(this, a)).onChange) == null || n.call(r, { model: c, item: t }), !0;
      }
    }
    return !1;
  }
  hasOtherItemsThan(t) {
    return e(this, m).filter((r) => r !== t).length > 0;
  }
  async moveItemInModel(t, r) {
    var E, g, R, M, Y, T;
    if (!s.activeItem)
      return console.error("There is no active item to move"), !1;
    const n = e(this, a).getUniqueOfModel(s.activeItem);
    if (!n)
      return console.error("Failed to retrieve active item unique"), !1;
    const l = r.getItem(n);
    if (!l)
      return console.error("Could not find item of model to move", n, e(this, m)), !1;
    if (this.notifyRequestDrop({ item: l }) === !1)
      return !1;
    const c = r === this;
    if (!c) {
      if (await r.removeItem(l) !== !0)
        return console.error("Sync could not remove item when moving to a new container"), !1;
      if (e(this, a).performItemInsert) {
        if (await e(this, a).performItemInsert({ item: l, newIndex: t }) === !1)
          return console.error("Sync could not insert after a move a new container"), !1;
      } else {
        const p = [...e(this, m)];
        p.splice(t, 0, l), h(this, m, p), (g = (E = e(this, a)).onContainerChange) == null || g.call(E, {
          model: p,
          item: l,
          from: r
        }), (M = (R = e(this, a)).onChange) == null || M.call(R, { model: p, item: l }), s.activeSorter = this, s.dropSorter = this, s.activeIndex = t;
      }
      return !0;
    }
    if (c) {
      const p = e(this, m).indexOf(l);
      if (p === -1)
        return console.error("Could not find item in model when performing internal move", this.getHostElement(), e(this, m)), !1;
      if (e(this, a).performItemMove) {
        if (await e(this, a).performItemMove({ item: l, newIndex: t, oldIndex: p }) === !1)
          return !1;
      } else {
        const S = [...e(this, m)];
        S.splice(p, 1), p <= t && t--, S.splice(t, 0, l), h(this, m, S), (T = (Y = e(this, a)).onChange) == null || T.call(Y, { model: S, item: l });
      }
      s.activeIndex = t;
    }
    return !0;
  }
  updateAllowIndication(t) {
    return s.lastIndicationSorter && s.lastIndicationSorter !== this && s.lastIndicationSorter.notifyAllowed(), s.lastIndicationSorter = this, this.notifyRequestDrop({ item: t }) === !0 ? (this.notifyAllowed(), !0) : (this.notifyDisallowed(), !1);
  }
  removeAllowIndication() {
    s.lastIndicationSorter && s.lastIndicationSorter.notifyAllowed(), s.lastIndicationSorter = void 0;
  }
  handleAutoScroll(t, r) {
    let n = null;
    e(this, z) ? (h(this, C, e(this, z)), n = e(this, C).getBoundingClientRect()) : (h(this, C, document.scrollingElement || document.documentElement), n = {
      top: 0,
      left: 0,
      bottom: window.innerHeight,
      right: window.innerWidth,
      height: window.innerHeight,
      width: window.innerWidth
    });
    const l = e(this, C).scrollWidth, c = e(this, C).scrollHeight, E = n.width < l, g = n.height < c, R = e(this, C).scrollLeft, M = e(this, C).scrollTop;
    cancelAnimationFrame(e(this, k)), (E || g) && (this.autoScrollX = Math.abs(n.right - t) <= vt && R + n.width < l ? 1 : Math.abs(n.left - t) <= vt && R ? -1 : 0, this.autoScrollY = Math.abs(n.bottom - r) <= vt && M + n.height < c ? 1 : Math.abs(n.top - r) <= vt && M ? -1 : 0, h(this, k, requestAnimationFrame(e(this, lt))));
  }
  notifyDisallowed() {
    e(this, a).onDisallowed && e(this, a).onDisallowed({
      item: s.activeItem,
      element: s.activeElement
    });
  }
  notifyAllowed() {
    e(this, a).onAllowed && e(this, a).onAllowed({
      item: s.activeItem,
      element: s.activeElement
    });
  }
  notifyRequestDrop(t) {
    return e(this, a).onRequestMove ? e(this, a).onRequestMove(t) || !1 : !0;
  }
  destroy() {
    super.destroy(), s.activeElement && e(this, L).call(this), s.lastIndicationSorter = void 0, e(this, N).disconnect(), h(this, z, null);
  }
};
H = new WeakMap(), W = new WeakMap(), a = new WeakMap(), N = new WeakMap(), m = new WeakMap(), w = new WeakMap(), G = new WeakMap(), z = new WeakMap(), x = new WeakMap(), I = new WeakMap(), v = new WeakMap(), D = new WeakMap(), d = new WeakSet(), Vt = function() {
  var t;
  return ((t = s.activeSorter) == null ? void 0 : t.identifier) === this.identifier;
}, it = new WeakMap(), qt = function() {
  e(this, N).disconnect(), e(this, w) && ((e(this, G) ? e(this, w).shadowRoot ?? e(this, w) : e(this, w)).removeEventListener("dragover", e(this, rt)), h(this, w, void 0)), e(this, D).forEach((t) => this.destroyItem(t));
}, rt = new WeakMap(), tt = function(t) {
  return e(this, a).draggableSelector ? (t.shadowRoot ?? t).querySelector(e(this, a).draggableSelector) ?? t : t;
}, Rt = function(t) {
  return e(this, a).handleSelector ? (t.shadowRoot ?? t).querySelector(e(this, a).handleSelector) ?? t : t;
}, Yt = function(t) {
  var l, c;
  let r = t, n = null;
  for (; !n; )
    if (n = r.closest(e(this, a).itemSelector), !n) {
      const E = r.getRootNode().host, g = r === E ? (c = (l = r.parentElement) == null ? void 0 : l.getRootNode()) == null ? void 0 : c.host : E;
      if (g)
        r = g;
      else
        return null;
    }
  return n;
}, _t = function() {
  var t, r;
  e(this, a).placeholderClass && ((t = s.activeElement) == null || t.classList.add(e(this, a).placeholderClass)), e(this, a).placeholderAttr && ((r = s.activeElement) == null || r.setAttribute(e(this, a).placeholderAttr, ""));
}, Ht = function() {
  var t, r;
  e(this, a).placeholderClass && ((t = s.activeElement) == null || t.classList.remove(e(this, a).placeholderClass)), e(this, a).placeholderAttr && ((r = s.activeElement) == null || r.removeAttribute(e(this, a).placeholderAttr));
}, $t = function(t) {
  if (console.warn("from #setCurrentElement 1, element: ", t), s.activeElement = t, console.warn("from #setCurrentElement 2, element: ", s.activeElement), s.activeDragElement = u(this, d, tt).call(this, t), !s.activeDragElement)
    throw new Error(
      'Could not find drag element, query was made with the `draggableSelector` of "' + e(this, a).draggableSelector + '"'
    );
  u(this, d, _t).call(this);
}, nt = new WeakMap(), st = new WeakMap(), ot = new WeakMap(), L = new WeakMap(), at = new WeakMap(), B = new WeakMap(), wt = function() {
  if (!s.activeElement || !s.activeItem)
    return;
  const t = s.activeElement;
  s.activeDragElement && (s.activeDragElement.style.transform = "", s.activeDragElement.draggable = !1, s.activeDragElement.removeEventListener("dragend", e(this, L))), window.removeEventListener("mouseup", e(this, B)), window.removeEventListener("mouseout", e(this, B)), window.removeEventListener("mouseleave", e(this, B)), window.removeEventListener("mousemove", e(this, at)), u(this, d, Ht).call(this), u(this, d, Kt).call(this), this.removeAllowIndication(), e(this, a).onEnd && e(this, a).onEnd({
    item: s.activeItem,
    element: t
  }), s.rqaId && (cancelAnimationFrame(s.rqaId), s.rqaId = void 0), console.warn("from #handleMoveEnd, UmbSorterController.activeItem: ", s.activeItem), s.activeItem = void 0, s.activeElement = void 0, s.activeDragElement = void 0, s.activeSorter = void 0, s.dropSorter = void 0, s.originalIndex = void 0, s.originalSorter = void 0, h(this, I, 0), h(this, v, 0);
}, Nt = function(t) {
  if (!s.activeElement)
    return;
  const r = t.touches ? t.touches[0].clientX : t.clientX, n = t.touches ? t.touches[0].clientY : t.clientY;
  if (r !== 0 && n !== 0) {
    if (e(this, I) === r && e(this, v) === n)
      return;
    h(this, I, r), h(this, v, n), this.handleAutoScroll(e(this, I), e(this, v));
    const l = s.activeDragElement.getBoundingClientRect();
    Lt(e(this, I), e(this, v), l) || s.rqaId === void 0 && (s.rqaId = requestAnimationFrame(e(this, pt)));
  }
}, pt = new WeakMap(), ut = function(t, r) {
  if (t === r)
    return t;
  const n = t + Math.round((r - t) * 0.5);
  if (n === t || n === r)
    return r;
  const l = u(this, d, zt).call(this, n);
  if (l === null)
    throw new Error("Could not determine if below target");
  return l ? u(this, d, ut).call(this, n, r) : u(this, d, ut).call(this, t, n);
}, zt = function(t) {
  if (t > 0 && t < e(this, m).length) {
    const r = this.getElementOfItem(e(this, m)[t]);
    if (r)
      return e(this, v) > (r == null ? void 0 : r.getBoundingClientRect().bottom);
  }
  return null;
}, et = async function(t) {
  if (!s.activeElement || !s.activeSorter)
    return;
  const r = s.dropSorter;
  if (!r)
    throw new Error("Could not find requestingSorter");
  if (r !== this)
    throw new Error("Requesting sorter is not this sorter");
  r === s.activeSorter && s.activeIndex === t || await r.moveItemInModel(t, s.activeSorter);
}, k = new WeakMap(), C = new WeakMap(), lt = new WeakMap(), Kt = function() {
  cancelAnimationFrame(e(this, k)), h(this, k, null);
};
let Mt = s;
var Oe = Object.defineProperty, Te = Object.getOwnPropertyDescriptor, Qt = (i) => {
  throw TypeError(i);
}, bt = (i, o, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Te(o, t) : o, l = i.length - 1, c; l >= 0; l--)
    (c = i[l]) && (n = (r ? c(o, t, n) : c(n)) || n);
  return r && n && Oe(o, t, n), n;
}, Ue = (i, o, t) => o.has(i) || Qt("Cannot " + t), xe = (i, o, t) => o.has(i) ? Qt("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(i) : o.set(i, t), j = (i, o, t) => (Ue(i, o, "access private method"), t), _, Gt, Zt, Jt, jt, te, ee;
let ht = class extends Me(Pt, "") {
  constructor() {
    super(...arguments), xe(this, _), this.disabled = !1, this.readonly = !1;
  }
  async focus() {
    var i;
    await this.updateComplete, (i = this._input) == null || i.focus();
  }
  getFormElement() {
  }
  render() {
    return K`
			${this.disabled || this.readonly ? kt : K`<uui-icon name="icon-navigation" class="handle"></uui-icon>`}

			<umb-form-validation-message id="validation-message" @invalid=${j(this, _, ee)} @valid=${j(this, _, te)}>
				<uui-input
					id="input"
					label="Value"
					value=${this.value}
					@keydown=${j(this, _, Jt)}
					@input=${j(this, _, Zt)}
					@change=${j(this, _, jt)}
					?disabled=${this.disabled}
					?readonly=${this.readonly}
					required=${this.required}
					required-message="Value is missing"></uui-input>
			</umb-form-validation-message>

			${me(
      !this.readonly,
      () => K`
					<uui-button
						compact
						color="danger"
						label="${this.localize.term("general_remove")} ${this.value}"
						look="outline"
						?disabled=${this.disabled}
						@click=${j(this, _, Gt)}>
						<uui-icon name="icon-trash"></uui-icon>
					</uui-button>
				`
    )}
		`;
  }
};
_ = /* @__PURE__ */ new WeakSet();
Gt = async function() {
  await Ae(this, {
    headline: `Delete ${this.value || "item"}`,
    content: "Are you sure you want to delete this item?",
    color: "danger",
    confirmLabel: "Delete"
  }), this.dispatchEvent(new Ie());
};
Zt = function(i) {
  i.stopPropagation();
  const o = i.currentTarget;
  this.value = o.value, this.dispatchEvent(new be());
};
Jt = function(i) {
  i.stopPropagation();
  const o = i.currentTarget;
  i.key === "Enter" && o.value && this.dispatchEvent(new CustomEvent("enter"));
};
jt = function(i) {
  i.stopPropagation();
  const o = i.currentTarget;
  this.value = o.value, this.dispatchEvent(new gt());
};
te = function(i) {
  i.stopPropagation();
};
ee = function(i) {
  i.stopPropagation();
};
ht.styles = [
  Ft`
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
bt([
  A({ type: Boolean, reflect: !0 })
], ht.prototype, "disabled", 2);
bt([
  A({ type: Boolean, reflect: !0 })
], ht.prototype, "readonly", 2);
bt([
  Xt("#input")
], ht.prototype, "_input", 2);
ht = bt([
  Dt("ak-input-dictionary-item")
], ht);
var Le = Object.defineProperty, Be = Object.getOwnPropertyDescriptor, ie = (i) => {
  throw TypeError(i);
}, X = (i, o, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Be(o, t) : o, l = i.length - 1, c; l >= 0; l--)
    (c = i[l]) && (n = (r ? c(o, t, n) : c(n)) || n);
  return r && n && Le(o, t, n), n;
}, Ot = (i, o, t) => o.has(i) || ie("Cannot " + t), ct = (i, o, t) => (Ot(i, o, "read from private field"), t ? t.call(i) : o.get(i)), Et = (i, o, t) => o.has(i) ? ie("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(i) : o.set(i, t), Wt = (i, o, t, r) => (Ot(i, o, "write to private field"), o.set(i, t), t), Z = (i, o, t) => (Ot(i, o, "access private method"), t), mt, yt, St, F, Tt, re, ne, se, oe, ae;
let P = class extends pe(
  Pt,
  void 0
) {
  constructor() {
    super(), Et(this, F), Et(this, mt, new Mt(this, {
      getUniqueOfElement: (i) => (console.warn("getUniqueOfElement | element.getAttribute('data-sort-entry-id'): ", i.getAttribute("data-sort-entry-id")), i.getAttribute("data-sort-entry-id")),
      getUniqueOfModel: (i) => (console.warn("getUniqueOfModel | modelEntry: ", i), i),
      identifier: "QQUmb.SorterIdentifier.MultipleTextString",
      itemSelector: "ak-input-dictionary-item",
      containerSelector: "#sorter-wrapper",
      onChange: ({ model: i }) => {
        const o = this._items;
        this._items = i, this.requestUpdate("_items", o), this.dispatchEvent(new gt());
      }
    })), this.minMessage = "This field need more items", this.maxMessage = "This field exceeds the allowed amount of items", Et(this, yt, !1), Et(this, St, !1), this._items = [], this.addValidator(
      "rangeUnderflow",
      () => this.minMessage,
      () => !!this.min && this._items.length < this.min
    ), this.addValidator(
      "rangeOverflow",
      () => this.maxMessage,
      () => !!this.max && this._items.length > this.max
    );
  }
  set disabled(i) {
    Wt(this, yt, i), i && ct(this, mt).disable();
  }
  get disabled() {
    return ct(this, yt);
  }
  set readonly(i) {
    Wt(this, St, i), i && ct(this, mt).disable();
  }
  get readonly() {
    return ct(this, St);
  }
  get items() {
    return this._items;
  }
  set items(i) {
    this.value = (i == null ? void 0 : i.length) > 0 ? "some value" : "", this._items = i ?? [], console.warn("items on element: ", this._items), ct(this, mt).setModel(this.items);
  }
  getFormElement() {
  }
  render() {
    return K`
			<div id="sorter-wrapper">
				${Z(this, F, oe).call(this)}
			</div>
			${Z(this, F, ae).call(this)}
		`;
  }
};
mt = /* @__PURE__ */ new WeakMap();
yt = /* @__PURE__ */ new WeakMap();
St = /* @__PURE__ */ new WeakMap();
F = /* @__PURE__ */ new WeakSet();
Tt = async function() {
  this._items = [...this._items, ""], this.pristine = !1, this.dispatchEvent(new gt()), await Z(this, F, ne).call(this);
};
re = function(i, o) {
  i.stopPropagation();
  const r = i.currentTarget.value;
  this._items = this._items.map((n, l) => l === o ? r : n), this.dispatchEvent(new gt());
};
ne = async function() {
  var t;
  await this.updateComplete;
  const i = (t = this.shadowRoot) == null ? void 0 : t.querySelectorAll(
    "ak-input-dictionary-item"
  );
  await i[i.length - 1].focus();
};
se = function(i, o) {
  i.stopPropagation(), this._items = this._items.filter((t, r) => r !== o), this.pristine = !1, this.dispatchEvent(new gt());
};
oe = function() {
  return K`
			${fe(
    this._items,
    (i, o) => o,
    (i, o) => K`
					<ak-input-dictionary-item
						name="item-${o}"
						data-sort-entry-id=${i}
						required
						required-message="Item ${o + 1} is missing a value"
						value=${i}
						?disabled=${this.disabled}
						?readonly=${this.readonly}
						@enter=${Z(this, F, Tt)}
						@delete=${(t) => Z(this, F, se).call(this, t, o)}
						@input=${(t) => Z(this, F, re).call(this, t, o)}
					></ak-input-dictionary-item>
				`
  )}
		`;
};
ae = function() {
  return this.disabled || this.readonly ? kt : K`
			<uui-button
				color="default"
				id="action"
				label="Add"
				look="placeholder"
				?disabled=${this.disabled}
				@click=${Z(this, F, Tt)}
			></uui-button>
		`;
};
P.styles = [
  Ft`
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
		`
];
X([
  A({ type: Number })
], P.prototype, "min", 2);
X([
  A({ type: String, attribute: "min-message" })
], P.prototype, "minMessage", 2);
X([
  A({ type: Number })
], P.prototype, "max", 2);
X([
  A({ type: String, attribute: "min-message" })
], P.prototype, "maxMessage", 2);
X([
  A({ type: Boolean, reflect: !0 })
], P.prototype, "disabled", 1);
X([
  A({ type: Boolean, reflect: !0 })
], P.prototype, "readonly", 1);
X([
  It()
], P.prototype, "_items", 2);
X([
  A({ type: Array })
], P.prototype, "items", 1);
P = X([
  Dt("ak-input-dictionary")
], P);
var We = Object.defineProperty, ke = Object.getOwnPropertyDescriptor, le = (i) => {
  throw TypeError(i);
}, V = (i, o, t, r) => {
  for (var n = r > 1 ? void 0 : r ? ke(o, t) : o, l = i.length - 1, c; l >= 0; l--)
    (c = i[l]) && (n = (r ? c(o, t, n) : c(n)) || n);
  return r && n && We(o, t, n), n;
}, Fe = (i, o, t) => o.has(i) || le("Cannot " + t), Xe = (i, o, t) => o.has(i) ? le("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(i) : o.set(i, t), At = (i, o, t) => (Fe(i, o, "access private method"), t), ft, he, de, ce;
let O = class extends Pt {
  constructor() {
    super(), Xe(this, ft), this.disabled = !1, this.readonly = !1, this.required = !1, this._min = 0, this._max = 1 / 0, this._validationContext = new ge(this), this.consumeContext(we, (i) => {
      this._label = i == null ? void 0 : i.getLabel();
    }), this.consumeContext(ye, (i) => {
      i instanceof Se && i.addValidationContext(this._validationContext);
    });
  }
  set config(i) {
    i && (this._min = Number(i.getValueByAlias("min")) || 0, this._max = Number(i.getValueByAlias("max")) || 1 / 0);
  }
  firstUpdated() {
    this._min && this._max && this._min > this._max && console.warn(
      `Property '${this._label}' (Multiple Text String) has been misconfigured, 'min' is greater than 'max'. Please correct your data type configuration.`,
      this
    );
  }
  render() {
    return K`
			<umb-form-validation-message id="validation-message" @invalid=${At(this, ft, ce)} @valid=${At(this, ft, de)}>
				<ak-input-dictionary
					id="input"
					max=${this._max}
					min=${this._min}
					.items=${this.value ?? []}
					?disabled=${this.disabled}
					?readonly=${this.readonly}
					?required=${this.required}
					@change=${At(this, ft, he)}
					${ve(this)}>
				</ak-input-dictionary>
			</umb-form-validation-message>
		`;
  }
};
ft = /* @__PURE__ */ new WeakSet();
he = function(i) {
  i.stopPropagation();
  const o = i.currentTarget;
  this.value = o.items, this.dispatchEvent(new Ee());
};
de = function(i) {
  i.stopPropagation();
};
ce = function(i) {
  i.stopPropagation();
};
V([
  A({ type: Array })
], O.prototype, "value", 2);
V([
  A({ type: Boolean, reflect: !0 })
], O.prototype, "disabled", 2);
V([
  A({ type: Boolean, reflect: !0 })
], O.prototype, "readonly", 2);
V([
  A({ type: Boolean, reflect: !0 })
], O.prototype, "required", 2);
V([
  It()
], O.prototype, "_label", 2);
V([
  It()
], O.prototype, "_min", 2);
V([
  It()
], O.prototype, "_max", 2);
V([
  Xt("#input", !0)
], O.prototype, "_inputElement", 2);
O = V([
  Dt("ak-property-editor-ui-dictionary")
], O);
const ti = O;
export {
  O as UmbPropertyEditorUIMultipleTextStringElement,
  ti as default
};
//# sourceMappingURL=client.js.map
