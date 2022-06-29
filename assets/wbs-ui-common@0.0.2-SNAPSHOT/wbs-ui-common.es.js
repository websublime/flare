/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$8 = (n2) => (e2) => typeof e2 == "function" ? ((n3, e3) => (window.customElements.define(n3, e3), e3))(n2, e2) : ((n3, e3) => {
  const { kind: t2, elements: i2 } = e3;
  return { kind: t2, elements: i2, finisher(e4) {
    window.customElements.define(n3, e4);
  } };
})(n2, e2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$7 = (i2, e2) => e2.kind === "method" && e2.descriptor && !("value" in e2.descriptor) ? { ...e2, finisher(n2) {
  n2.createProperty(e2.key, i2);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
  typeof e2.initializer == "function" && (this[e2.key] = e2.initializer.call(this));
}, finisher(n2) {
  n2.createProperty(e2.key, i2);
} };
function e$b(e2) {
  return (n2, t2) => t2 !== void 0 ? ((i2, e3, n3) => {
    e3.constructor.createProperty(n3, i2);
  })(e2, n2, t2) : i$7(e2, n2);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function t$4(t2) {
  return e$b({ ...t2, state: true });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$8 = ({ finisher: e2, descriptor: t2 }) => (o2, n2) => {
  var r2;
  if (n2 === void 0) {
    const n3 = (r2 = o2.originalKey) !== null && r2 !== void 0 ? r2 : o2.key, i2 = t2 != null ? { kind: "method", placement: "prototype", key: n3, descriptor: t2(o2.key) } : { ...o2, key: n3 };
    return e2 != null && (i2.finisher = function(t3) {
      e2(t3, n3);
    }), i2;
  }
  {
    const r3 = o2.constructor;
    t2 !== void 0 && Object.defineProperty(o2, n2, t2(n2)), e2 == null || e2(r3, n2);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$a(e2) {
  return o$8({ finisher: (r2, t2) => {
    Object.assign(r2.prototype[t2], e2);
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function i$6(i2, n2) {
  return o$8({ descriptor: (o2) => {
    const t2 = { get() {
      var o3, n3;
      return (n3 = (o3 = this.renderRoot) === null || o3 === void 0 ? void 0 : o3.querySelector(i2)) !== null && n3 !== void 0 ? n3 : null;
    }, enumerable: true, configurable: true };
    if (n2) {
      const n3 = typeof o2 == "symbol" ? Symbol() : "__" + o2;
      t2.get = function() {
        var o3, t3;
        return this[n3] === void 0 && (this[n3] = (t3 = (o3 = this.renderRoot) === null || o3 === void 0 ? void 0 : o3.querySelector(i2)) !== null && t3 !== void 0 ? t3 : null), this[n3];
      };
    }
    return t2;
  } });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$9(e2) {
  return o$8({ descriptor: (r2) => ({ get() {
    var r3, o2;
    return (o2 = (r3 = this.renderRoot) === null || r3 === void 0 ? void 0 : r3.querySelectorAll(e2)) !== null && o2 !== void 0 ? o2 : [];
  }, enumerable: true, configurable: true }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e$8(e2) {
  return o$8({ descriptor: (r2) => ({ async get() {
    var r3;
    return await this.updateComplete, (r3 = this.renderRoot) === null || r3 === void 0 ? void 0 : r3.querySelector(e2);
  }, enumerable: true, configurable: true }) });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n$7;
const e$7 = ((n$7 = window.HTMLSlotElement) === null || n$7 === void 0 ? void 0 : n$7.prototype.assignedElements) != null ? (o2, n2) => o2.assignedElements(n2) : (o2, n2) => o2.assignedNodes(n2).filter((o3) => o3.nodeType === Node.ELEMENT_NODE);
function l$6(n2) {
  const { slot: l2, selector: t2 } = n2 != null ? n2 : {};
  return o$8({ descriptor: (o2) => ({ get() {
    var o3;
    const r2 = "slot" + (l2 ? `[name=${l2}]` : ":not([name])"), i2 = (o3 = this.renderRoot) === null || o3 === void 0 ? void 0 : o3.querySelector(r2), s2 = i2 != null ? e$7(i2, n2) : [];
    return t2 ? s2.filter((o4) => o4.matches(t2)) : s2;
  }, enumerable: true, configurable: true }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function o$7(o2, n2, r2) {
  let l2, s2 = o2;
  return typeof o2 == "object" ? (s2 = o2.slot, l2 = o2) : l2 = { flatten: n2 }, r2 ? l$6({ slot: s2, flatten: n2, selector: r2 }) : o$8({ descriptor: (e2) => ({ get() {
    var e3, t2;
    const o3 = "slot" + (s2 ? `[name=${s2}]` : ":not([name])"), n3 = (e3 = this.renderRoot) === null || e3 === void 0 ? void 0 : e3.querySelector(o3);
    return (t2 = n3 == null ? void 0 : n3.assignedNodes(l2)) !== null && t2 !== void 0 ? t2 : [];
  }, enumerable: true, configurable: true }) });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$3;
const i$5 = globalThis.trustedTypes, s$5 = i$5 ? i$5.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, e$6 = `lit$${(Math.random() + "").slice(9)}$`, o$6 = "?" + e$6, n$6 = `<${o$6}>`, l$5 = document, h$4 = (t2 = "") => l$5.createComment(t2), r$3 = (t2) => t2 === null || typeof t2 != "object" && typeof t2 != "function", d$1 = Array.isArray, u$2 = (t2) => {
  var i2;
  return d$1(t2) || typeof ((i2 = t2) === null || i2 === void 0 ? void 0 : i2[Symbol.iterator]) == "function";
}, c$3 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, a$2 = />/g, f$1 = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g, _ = /'/g, m$1 = /"/g, g = /^(?:script|style|textarea|title)$/i, p = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), $ = p(1), y = p(2), b = Symbol.for("lit-noChange"), w = Symbol.for("lit-nothing"), T = /* @__PURE__ */ new WeakMap(), x = (t2, i2, s2) => {
  var e2, o2;
  const n2 = (e2 = s2 == null ? void 0 : s2.renderBefore) !== null && e2 !== void 0 ? e2 : i2;
  let l2 = n2._$litPart$;
  if (l2 === void 0) {
    const t3 = (o2 = s2 == null ? void 0 : s2.renderBefore) !== null && o2 !== void 0 ? o2 : null;
    n2._$litPart$ = l2 = new N(i2.insertBefore(h$4(), t3), t3, void 0, s2 != null ? s2 : {});
  }
  return l2._$AI(t2), l2;
}, A = l$5.createTreeWalker(l$5, 129, null, false), C = (t2, i2) => {
  const o2 = t2.length - 1, l2 = [];
  let h2, r2 = i2 === 2 ? "<svg>" : "", d2 = c$3;
  for (let i3 = 0; i3 < o2; i3++) {
    const s2 = t2[i3];
    let o3, u3, p2 = -1, $2 = 0;
    for (; $2 < s2.length && (d2.lastIndex = $2, u3 = d2.exec(s2), u3 !== null); )
      $2 = d2.lastIndex, d2 === c$3 ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a$2 : u3[2] !== void 0 ? (g.test(u3[2]) && (h2 = RegExp("</" + u3[2], "g")), d2 = f$1) : u3[3] !== void 0 && (d2 = f$1) : d2 === f$1 ? u3[0] === ">" ? (d2 = h2 != null ? h2 : c$3, p2 = -1) : u3[1] === void 0 ? p2 = -2 : (p2 = d2.lastIndex - u3[2].length, o3 = u3[1], d2 = u3[3] === void 0 ? f$1 : u3[3] === '"' ? m$1 : _) : d2 === m$1 || d2 === _ ? d2 = f$1 : d2 === v || d2 === a$2 ? d2 = c$3 : (d2 = f$1, h2 = void 0);
    const y2 = d2 === f$1 && t2[i3 + 1].startsWith("/>") ? " " : "";
    r2 += d2 === c$3 ? s2 + n$6 : p2 >= 0 ? (l2.push(o3), s2.slice(0, p2) + "$lit$" + s2.slice(p2) + e$6 + y2) : s2 + e$6 + (p2 === -2 ? (l2.push(void 0), i3) : y2);
  }
  const u2 = r2 + (t2[o2] || "<?>") + (i2 === 2 ? "</svg>" : "");
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [s$5 !== void 0 ? s$5.createHTML(u2) : u2, l2];
};
class E {
  constructor({ strings: t2, _$litType$: s2 }, n2) {
    let l2;
    this.parts = [];
    let r2 = 0, d2 = 0;
    const u2 = t2.length - 1, c2 = this.parts, [v2, a2] = C(t2, s2);
    if (this.el = E.createElement(v2, n2), A.currentNode = this.el.content, s2 === 2) {
      const t3 = this.el.content, i2 = t3.firstChild;
      i2.remove(), t3.append(...i2.childNodes);
    }
    for (; (l2 = A.nextNode()) !== null && c2.length < u2; ) {
      if (l2.nodeType === 1) {
        if (l2.hasAttributes()) {
          const t3 = [];
          for (const i2 of l2.getAttributeNames())
            if (i2.endsWith("$lit$") || i2.startsWith(e$6)) {
              const s3 = a2[d2++];
              if (t3.push(i2), s3 !== void 0) {
                const t4 = l2.getAttribute(s3.toLowerCase() + "$lit$").split(e$6), i3 = /([.?@])?(.*)/.exec(s3);
                c2.push({ type: 1, index: r2, name: i3[2], strings: t4, ctor: i3[1] === "." ? M : i3[1] === "?" ? H : i3[1] === "@" ? I : S$1 });
              } else
                c2.push({ type: 6, index: r2 });
            }
          for (const i2 of t3)
            l2.removeAttribute(i2);
        }
        if (g.test(l2.tagName)) {
          const t3 = l2.textContent.split(e$6), s3 = t3.length - 1;
          if (s3 > 0) {
            l2.textContent = i$5 ? i$5.emptyScript : "";
            for (let i2 = 0; i2 < s3; i2++)
              l2.append(t3[i2], h$4()), A.nextNode(), c2.push({ type: 2, index: ++r2 });
            l2.append(t3[s3], h$4());
          }
        }
      } else if (l2.nodeType === 8)
        if (l2.data === o$6)
          c2.push({ type: 2, index: r2 });
        else {
          let t3 = -1;
          for (; (t3 = l2.data.indexOf(e$6, t3 + 1)) !== -1; )
            c2.push({ type: 7, index: r2 }), t3 += e$6.length - 1;
        }
      r2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = l$5.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function P(t2, i2, s2 = t2, e2) {
  var o2, n2, l2, h2;
  if (i2 === b)
    return i2;
  let d2 = e2 !== void 0 ? (o2 = s2._$Cl) === null || o2 === void 0 ? void 0 : o2[e2] : s2._$Cu;
  const u2 = r$3(i2) ? void 0 : i2._$litDirective$;
  return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n2 = d2 == null ? void 0 : d2._$AO) === null || n2 === void 0 || n2.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t2), d2._$AT(t2, s2, e2)), e2 !== void 0 ? ((l2 = (h2 = s2)._$Cl) !== null && l2 !== void 0 ? l2 : h2._$Cl = [])[e2] = d2 : s2._$Cu = d2), d2 !== void 0 && (i2 = P(t2, d2._$AS(t2, i2.values), d2, e2)), i2;
}
class V {
  constructor(t2, i2) {
    this.v = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t2) {
    var i2;
    const { el: { content: s2 }, parts: e2 } = this._$AD, o2 = ((i2 = t2 == null ? void 0 : t2.creationScope) !== null && i2 !== void 0 ? i2 : l$5).importNode(s2, true);
    A.currentNode = o2;
    let n2 = A.nextNode(), h2 = 0, r2 = 0, d2 = e2[0];
    for (; d2 !== void 0; ) {
      if (h2 === d2.index) {
        let i3;
        d2.type === 2 ? i3 = new N(n2, n2.nextSibling, this, t2) : d2.type === 1 ? i3 = new d2.ctor(n2, d2.name, d2.strings, this, t2) : d2.type === 6 && (i3 = new L(n2, this, t2)), this.v.push(i3), d2 = e2[++r2];
      }
      h2 !== (d2 == null ? void 0 : d2.index) && (n2 = A.nextNode(), h2++);
    }
    return o2;
  }
  m(t2) {
    let i2 = 0;
    for (const s2 of this.v)
      s2 !== void 0 && (s2.strings !== void 0 ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class N {
  constructor(t2, i2, s2, e2) {
    var o2;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cg = (o2 = e2 == null ? void 0 : e2.isConnected) === null || o2 === void 0 || o2;
  }
  get _$AU() {
    var t2, i2;
    return (i2 = (t2 = this._$AM) === null || t2 === void 0 ? void 0 : t2._$AU) !== null && i2 !== void 0 ? i2 : this._$Cg;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return i2 !== void 0 && t2.nodeType === 11 && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = P(this, t2, i2), r$3(t2) ? t2 === w || t2 == null || t2 === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : t2 !== this._$AH && t2 !== b && this.$(t2) : t2._$litType$ !== void 0 ? this.T(t2) : t2.nodeType !== void 0 ? this.k(t2) : u$2(t2) ? this.S(t2) : this.$(t2);
  }
  M(t2, i2 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t2, i2);
  }
  k(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.M(t2));
  }
  $(t2) {
    this._$AH !== w && r$3(this._$AH) ? this._$AA.nextSibling.data = t2 : this.k(l$5.createTextNode(t2)), this._$AH = t2;
  }
  T(t2) {
    var i2;
    const { values: s2, _$litType$: e2 } = t2, o2 = typeof e2 == "number" ? this._$AC(t2) : (e2.el === void 0 && (e2.el = E.createElement(e2.h, this.options)), e2);
    if (((i2 = this._$AH) === null || i2 === void 0 ? void 0 : i2._$AD) === o2)
      this._$AH.m(s2);
    else {
      const t3 = new V(o2, this), i3 = t3.p(this.options);
      t3.m(s2), this.k(i3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = T.get(t2.strings);
    return i2 === void 0 && T.set(t2.strings, i2 = new E(t2)), i2;
  }
  S(t2) {
    d$1(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const o2 of t2)
      e2 === i2.length ? i2.push(s2 = new N(this.M(h$4()), this.M(h$4()), this, this.options)) : s2 = i2[e2], s2._$AI(o2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var s2;
    for ((s2 = this._$AP) === null || s2 === void 0 || s2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var i2;
    this._$AM === void 0 && (this._$Cg = t2, (i2 = this._$AP) === null || i2 === void 0 || i2.call(this, t2));
  }
}
class S$1 {
  constructor(t2, i2, s2, e2, o2) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = o2, s2.length > 2 || s2[0] !== "" || s2[1] !== "" ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = w;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const o2 = this.strings;
    let n2 = false;
    if (o2 === void 0)
      t2 = P(this, t2, i2, 0), n2 = !r$3(t2) || t2 !== this._$AH && t2 !== b, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++)
        h2 = P(this, e3[s2 + l2], i2, l2), h2 === b && (h2 = this._$AH[l2]), n2 || (n2 = !r$3(h2) || h2 !== this._$AH[l2]), h2 === w ? t2 = w : t2 !== w && (t2 += (h2 != null ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.C(t2);
  }
  C(t2) {
    t2 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
}
class M extends S$1 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  C(t2) {
    this.element[this.name] = t2 === w ? void 0 : t2;
  }
}
const k = i$5 ? i$5.emptyScript : "";
class H extends S$1 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  C(t2) {
    t2 && t2 !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
  }
}
class I extends S$1 {
  constructor(t2, i2, s2, e2, o2) {
    super(t2, i2, s2, e2, o2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    var s2;
    if ((t2 = (s2 = P(this, t2, i2, 0)) !== null && s2 !== void 0 ? s2 : w) === b)
      return;
    const e2 = this._$AH, o2 = t2 === w && e2 !== w || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== w && (e2 === w || o2);
    o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i2, s2;
    typeof this._$AH == "function" ? this._$AH.call((s2 = (i2 = this.options) === null || i2 === void 0 ? void 0 : i2.host) !== null && s2 !== void 0 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class L {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    P(this, t2);
  }
}
const R = { L: "$lit$", P: e$6, V: o$6, I: 1, N: C, R: V, j: u$2, D: P, H: N, F: S$1, O: H, W: I, B: M, Z: L }, z = window.litHtmlPolyfillSupport;
z == null || z(E, N), ((t$3 = globalThis.litHtmlVersions) !== null && t$3 !== void 0 ? t$3 : globalThis.litHtmlVersions = []).push("2.2.6");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const l$4 = (l2) => l2 != null ? l2 : w;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, e$5 = (t2) => (...e2) => ({ _$litDirective$: t2, values: e2 });
class i$4 {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i2) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i2;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { H: i$3 } = R, t$1 = (o2) => o2 === null || typeof o2 != "object" && typeof o2 != "function", r$2 = (o2) => o2.strings === void 0, e$4 = () => document.createComment(""), u$1 = (o2, t2, n2) => {
  var v2;
  const l2 = o2._$AA.parentNode, d2 = t2 === void 0 ? o2._$AB : t2._$AA;
  if (n2 === void 0) {
    const t3 = l2.insertBefore(e$4(), d2), v3 = l2.insertBefore(e$4(), d2);
    n2 = new i$3(t3, v3, o2, o2.options);
  } else {
    const i2 = n2._$AB.nextSibling, t3 = n2._$AM, r2 = t3 !== o2;
    if (r2) {
      let i3;
      (v2 = n2._$AQ) === null || v2 === void 0 || v2.call(n2, o2), n2._$AM = o2, n2._$AP !== void 0 && (i3 = o2._$AU) !== t3._$AU && n2._$AP(i3);
    }
    if (i2 !== d2 || r2) {
      let o3 = n2._$AA;
      for (; o3 !== i2; ) {
        const i3 = o3.nextSibling;
        l2.insertBefore(o3, d2), o3 = i3;
      }
    }
  }
  return n2;
}, c$2 = (o2, i2, t2 = o2) => (o2._$AI(i2, t2), o2), f = {}, s$4 = (o2, i2 = f) => o2._$AH = i2, a$1 = (o2) => o2._$AH, m = (o2) => {
  var i2;
  (i2 = o2._$AP) === null || i2 === void 0 || i2.call(o2, false, true);
  let t2 = o2._$AA;
  const n2 = o2._$AB.nextSibling;
  for (; t2 !== n2; ) {
    const o3 = t2.nextSibling;
    t2.remove(), t2 = o3;
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u = (e2, s2, t2) => {
  const r2 = /* @__PURE__ */ new Map();
  for (let l2 = s2; l2 <= t2; l2++)
    r2.set(e2[l2], l2);
  return r2;
}, c$1 = e$5(class extends i$4 {
  constructor(e2) {
    if (super(e2), e2.type !== t$2.CHILD)
      throw Error("repeat() can only be used in text expressions");
  }
  dt(e2, s2, t2) {
    let r2;
    t2 === void 0 ? t2 = s2 : s2 !== void 0 && (r2 = s2);
    const l2 = [], o2 = [];
    let i2 = 0;
    for (const s3 of e2)
      l2[i2] = r2 ? r2(s3, i2) : i2, o2[i2] = t2(s3, i2), i2++;
    return { values: o2, keys: l2 };
  }
  render(e2, s2, t2) {
    return this.dt(e2, s2, t2).values;
  }
  update(s2, [t2, r2, c2]) {
    var d2;
    const a2 = a$1(s2), { values: p2, keys: v2 } = this.dt(t2, r2, c2);
    if (!Array.isArray(a2))
      return this.ut = v2, p2;
    const h2 = (d2 = this.ut) !== null && d2 !== void 0 ? d2 : this.ut = [], m$12 = [];
    let y2, x2, j = 0, k2 = a2.length - 1, w2 = 0, A2 = p2.length - 1;
    for (; j <= k2 && w2 <= A2; )
      if (a2[j] === null)
        j++;
      else if (a2[k2] === null)
        k2--;
      else if (h2[j] === v2[w2])
        m$12[w2] = c$2(a2[j], p2[w2]), j++, w2++;
      else if (h2[k2] === v2[A2])
        m$12[A2] = c$2(a2[k2], p2[A2]), k2--, A2--;
      else if (h2[j] === v2[A2])
        m$12[A2] = c$2(a2[j], p2[A2]), u$1(s2, m$12[A2 + 1], a2[j]), j++, A2--;
      else if (h2[k2] === v2[w2])
        m$12[w2] = c$2(a2[k2], p2[w2]), u$1(s2, a2[j], a2[k2]), k2--, w2++;
      else if (y2 === void 0 && (y2 = u(v2, w2, A2), x2 = u(h2, j, k2)), y2.has(h2[j]))
        if (y2.has(h2[k2])) {
          const e2 = x2.get(v2[w2]), t3 = e2 !== void 0 ? a2[e2] : null;
          if (t3 === null) {
            const e3 = u$1(s2, a2[j]);
            c$2(e3, p2[w2]), m$12[w2] = e3;
          } else
            m$12[w2] = c$2(t3, p2[w2]), u$1(s2, a2[j], t3), a2[e2] = null;
          w2++;
        } else
          m(a2[k2]), k2--;
      else
        m(a2[j]), j++;
    for (; w2 <= A2; ) {
      const e2 = u$1(s2, m$12[A2 + 1]);
      c$2(e2, p2[w2]), m$12[w2++] = e2;
    }
    for (; j <= k2; ) {
      const e2 = a2[j++];
      e2 !== null && m(e2);
    }
    return this.ut = v2, s$4(s2, m$12), b;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$5 = e$5(class extends i$4 {
  constructor(t2) {
    var i2;
    if (super(t2), t2.type !== t$2.ATTRIBUTE || t2.name !== "class" || ((i2 = t2.strings) === null || i2 === void 0 ? void 0 : i2.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return " " + Object.keys(t2).filter((i2) => t2[i2]).join(" ") + " ";
  }
  update(i2, [s2]) {
    var r2, o2;
    if (this.et === void 0) {
      this.et = /* @__PURE__ */ new Set(), i2.strings !== void 0 && (this.st = new Set(i2.strings.join(" ").split(/\s/).filter((t2) => t2 !== "")));
      for (const t2 in s2)
        s2[t2] && !((r2 = this.st) === null || r2 === void 0 ? void 0 : r2.has(t2)) && this.et.add(t2);
      return this.render(s2);
    }
    const e2 = i2.element.classList;
    this.et.forEach((t2) => {
      t2 in s2 || (e2.remove(t2), this.et.delete(t2));
    });
    for (const t2 in s2) {
      const i3 = !!s2[t2];
      i3 === this.et.has(t2) || ((o2 = this.st) === null || o2 === void 0 ? void 0 : o2.has(t2)) || (i3 ? (e2.add(t2), this.et.add(t2)) : (e2.remove(t2), this.et.delete(t2)));
    }
    return b;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$2 = e$5(class extends i$4 {
  constructor(t2) {
    var e2;
    if (super(t2), t2.type !== t$2.ATTRIBUTE || t2.name !== "style" || ((e2 = t2.strings) === null || e2 === void 0 ? void 0 : e2.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return Object.keys(t2).reduce((e2, r2) => {
      const s2 = t2[r2];
      return s2 == null ? e2 : e2 + `${r2 = r2.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s2};`;
    }, "");
  }
  update(e2, [r2]) {
    const { style: s2 } = e2.element;
    if (this.ct === void 0) {
      this.ct = /* @__PURE__ */ new Set();
      for (const t2 in r2)
        this.ct.add(t2);
      return this.render(r2);
    }
    this.ct.forEach((t2) => {
      r2[t2] == null && (this.ct.delete(t2), t2.includes("-") ? s2.removeProperty(t2) : s2[t2] = "");
    });
    for (const t2 in r2) {
      const e3 = r2[t2];
      e3 != null && (this.ct.add(t2), t2.includes("-") ? s2.setProperty(t2, e3) : s2[t2] = e3);
    }
    return b;
  }
});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$3 = (i2, t2) => {
  var s2, o2;
  const n2 = i2._$AN;
  if (n2 === void 0)
    return false;
  for (const i3 of n2)
    (o2 = (s2 = i3)._$AO) === null || o2 === void 0 || o2.call(s2, t2, false), e$3(i3, t2);
  return true;
}, o$4 = (i2) => {
  let t2, s2;
  do {
    if ((t2 = i2._$AM) === void 0)
      break;
    s2 = t2._$AN, s2.delete(i2), i2 = t2;
  } while ((s2 == null ? void 0 : s2.size) === 0);
}, n$5 = (i2) => {
  for (let t2; t2 = i2._$AM; i2 = t2) {
    let s2 = t2._$AN;
    if (s2 === void 0)
      t2._$AN = s2 = /* @__PURE__ */ new Set();
    else if (s2.has(i2))
      break;
    s2.add(i2), l$3(t2);
  }
};
function r$1(i2) {
  this._$AN !== void 0 ? (o$4(this), this._$AM = i2, n$5(this)) : this._$AM = i2;
}
function h$3(i2, t2 = false, s2 = 0) {
  const n2 = this._$AH, r2 = this._$AN;
  if (r2 !== void 0 && r2.size !== 0)
    if (t2)
      if (Array.isArray(n2))
        for (let i3 = s2; i3 < n2.length; i3++)
          e$3(n2[i3], false), o$4(n2[i3]);
      else
        n2 != null && (e$3(n2, false), o$4(n2));
    else
      e$3(this, i2);
}
const l$3 = (i2) => {
  var t2, e2, o2, n2;
  i2.type == t$2.CHILD && ((t2 = (o2 = i2)._$AP) !== null && t2 !== void 0 || (o2._$AP = h$3), (e2 = (n2 = i2)._$AQ) !== null && e2 !== void 0 || (n2._$AQ = r$1));
};
class d extends i$4 {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i2, t2, s2) {
    super._$AT(i2, t2, s2), n$5(this), this.isConnected = i2._$AU;
  }
  _$AO(i2, t2 = true) {
    var s2, n2;
    i2 !== this.isConnected && (this.isConnected = i2, i2 ? (s2 = this.reconnected) === null || s2 === void 0 || s2.call(this) : (n2 = this.disconnected) === null || n2 === void 0 || n2.call(this)), t2 && (e$3(this, i2), o$4(this));
  }
  setValue(t2) {
    if (r$2(this._$Ct))
      this._$Ct._$AI(t2, this);
    else {
      const i2 = [...this._$Ct._$AH];
      i2[this._$Ci] = t2, this._$Ct._$AI(i2, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s$3 {
  constructor(t2) {
    this.U = t2;
  }
  disconnect() {
    this.U = void 0;
  }
  reconnect(t2) {
    this.U = t2;
  }
  deref() {
    return this.U;
  }
}
class i$1 {
  constructor() {
    this.Y = void 0, this.q = void 0;
  }
  get() {
    return this.Y;
  }
  pause() {
    var t2;
    (t2 = this.Y) !== null && t2 !== void 0 || (this.Y = new Promise((t3) => this.q = t3));
  }
  resume() {
    var t2;
    (t2 = this.q) === null || t2 === void 0 || t2.call(this), this.Y = this.q = void 0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$4 = (t2) => !t$1(t2) && typeof t2.then == "function";
class h$2 extends d {
  constructor() {
    super(...arguments), this._$Cwt = 1073741823, this._$Cyt = [], this._$CG = new s$3(this), this._$CK = new i$1();
  }
  render(...s2) {
    var i2;
    return (i2 = s2.find((t2) => !n$4(t2))) !== null && i2 !== void 0 ? i2 : b;
  }
  update(s2, i2) {
    const r2 = this._$Cyt;
    let e2 = r2.length;
    this._$Cyt = i2;
    const o2 = this._$CG, h2 = this._$CK;
    this.isConnected || this.disconnected();
    for (let t2 = 0; t2 < i2.length && !(t2 > this._$Cwt); t2++) {
      const s3 = i2[t2];
      if (!n$4(s3))
        return this._$Cwt = t2, s3;
      t2 < e2 && s3 === r2[t2] || (this._$Cwt = 1073741823, e2 = 0, Promise.resolve(s3).then(async (t3) => {
        for (; h2.get(); )
          await h2.get();
        const i3 = o2.deref();
        if (i3 !== void 0) {
          const r3 = i3._$Cyt.indexOf(s3);
          r3 > -1 && r3 < i3._$Cwt && (i3._$Cwt = r3, i3.setValue(t3));
        }
      }));
    }
    return b;
  }
  disconnected() {
    this._$CG.disconnect(), this._$CK.pause();
  }
  reconnected() {
    this._$CG.reconnect(this), this._$CK.resume();
  }
}
const c = e$5(h$2);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const l$2 = e$5(class extends i$4 {
  constructor(r2) {
    if (super(r2), r2.type !== t$2.PROPERTY && r2.type !== t$2.ATTRIBUTE && r2.type !== t$2.BOOLEAN_ATTRIBUTE)
      throw Error("The `live` directive is not allowed on child or event bindings");
    if (!r$2(r2))
      throw Error("`live` bindings can only contain a single expression");
  }
  render(r2) {
    return r2;
  }
  update(i2, [t2]) {
    if (t2 === b || t2 === w)
      return t2;
    const o2 = i2.element, l2 = i2.name;
    if (i2.type === t$2.PROPERTY) {
      if (t2 === o2[l2])
        return b;
    } else if (i2.type === t$2.BOOLEAN_ATTRIBUTE) {
      if (!!t2 === o2.hasAttribute(l2))
        return b;
    } else if (i2.type === t$2.ATTRIBUTE && o2.getAttribute(l2) === t2 + "")
      return b;
    return s$4(i2), t2;
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$2 = () => new o$3();
class o$3 {
}
const h$1 = /* @__PURE__ */ new WeakMap(), n$3 = e$5(class extends d {
  render(t2) {
    return w;
  }
  update(t2, [s2]) {
    var e2;
    const o2 = s2 !== this.U;
    return o2 && this.U !== void 0 && this.ot(void 0), (o2 || this.rt !== this.lt) && (this.U = s2, this.ht = (e2 = t2.options) === null || e2 === void 0 ? void 0 : e2.host, this.ot(this.lt = t2.element)), w;
  }
  ot(i2) {
    var t2;
    if (typeof this.U == "function") {
      const s2 = (t2 = this.ht) !== null && t2 !== void 0 ? t2 : globalThis;
      let e2 = h$1.get(s2);
      e2 === void 0 && (e2 = /* @__PURE__ */ new WeakMap(), h$1.set(s2, e2)), e2.get(this.U) !== void 0 && this.U.call(this.ht, void 0), e2.set(this.U, i2), i2 !== void 0 && this.U.call(this.ht, i2);
    } else
      this.U.value = i2;
  }
  get rt() {
    var i2, t2, s2;
    return typeof this.U == "function" ? (t2 = h$1.get((i2 = this.ht) !== null && i2 !== void 0 ? i2 : globalThis)) === null || t2 === void 0 ? void 0 : t2.get(this.U) : (s2 = this.U) === null || s2 === void 0 ? void 0 : s2.value;
  }
  disconnected() {
    this.rt === this.lt && this.ot(void 0);
  }
  reconnected() {
    this.ot(this.lt);
  }
});
const uniqueID = () => {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substr(2);
  return head + tail;
};
const isEmpty = (obj) => [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length;
const isNil = (value) => value === null || value === void 0;
class EventController {
  constructor(host) {
    this.host = host;
    host.addController(this);
  }
  async notify(dispatcher) {
    const resolved = await this.host.updateComplete;
    dispatcher(resolved);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e$1 = Symbol(), n$2 = /* @__PURE__ */ new WeakMap();
class s$2 {
  constructor(t2, n2, s2) {
    if (this._$cssResult$ = true, s2 !== e$1)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = n2;
  }
  get styleSheet() {
    let e2 = this.o;
    const s2 = this.t;
    if (t && e2 === void 0) {
      const t2 = s2 !== void 0 && s2.length === 1;
      t2 && (e2 = n$2.get(s2)), e2 === void 0 && ((this.o = e2 = new CSSStyleSheet()).replaceSync(this.cssText), t2 && n$2.set(s2, e2));
    }
    return e2;
  }
  toString() {
    return this.cssText;
  }
}
const o$2 = (t2) => new s$2(typeof t2 == "string" ? t2 : t2 + "", void 0, e$1), i = (e2, n2) => {
  t ? e2.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((t2) => {
    const n3 = document.createElement("style"), s2 = window.litNonce;
    s2 !== void 0 && n3.setAttribute("nonce", s2), n3.textContent = t2.cssText, e2.appendChild(n3);
  });
}, S = t ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const n2 of t3.cssRules)
    e2 += n2.cssText;
  return o$2(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$1;
const e = window.trustedTypes, r = e ? e.emptyScript : "", h = window.reactiveElementPolyfillSupport, o$1 = { toAttribute(t2, i2) {
  switch (i2) {
    case Boolean:
      t2 = t2 ? r : null;
      break;
    case Object:
    case Array:
      t2 = t2 == null ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, i2) {
  let s2 = t2;
  switch (i2) {
    case Boolean:
      s2 = t2 !== null;
      break;
    case Number:
      s2 = t2 === null ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        s2 = JSON.parse(t2);
      } catch (t3) {
        s2 = null;
      }
  }
  return s2;
} }, n$1 = (t2, i2) => i2 !== t2 && (i2 == i2 || t2 == t2), l$1 = { attribute: true, type: String, converter: o$1, reflect: false, hasChanged: n$1 };
class a extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this.u();
  }
  static addInitializer(t2) {
    var i2;
    (i2 = this.h) !== null && i2 !== void 0 || (this.h = []), this.h.push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i2, s2) => {
      const e2 = this._$Ep(s2, i2);
      e2 !== void 0 && (this._$Ev.set(e2, s2), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i2 = l$1) {
    if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t2, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s2 = typeof t2 == "symbol" ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i2);
      e2 !== void 0 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i2, s2) {
    return { get() {
      return this[i2];
    }, set(e2) {
      const r2 = this[t2];
      this[i2] = e2, this.requestUpdate(t2, r2, s2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$1;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), this.elementProperties = new Map(t2.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i2 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s2 of i2)
        this.createProperty(s2, t3[s2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i2) {
    const s2 = [];
    if (Array.isArray(i2)) {
      const e2 = new Set(i2.flat(1 / 0).reverse());
      for (const i3 of e2)
        s2.unshift(S(i3));
    } else
      i2 !== void 0 && s2.push(S(i2));
    return s2;
  }
  static _$Ep(t2, i2) {
    const s2 = i2.attribute;
    return s2 === false ? void 0 : typeof s2 == "string" ? s2 : typeof t2 == "string" ? t2.toLowerCase() : void 0;
  }
  u() {
    var t2;
    this._$E_ = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t2 = this.constructor.h) === null || t2 === void 0 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i2, s2;
    ((i2 = this._$ES) !== null && i2 !== void 0 ? i2 : this._$ES = []).push(t2), this.renderRoot !== void 0 && this.isConnected && ((s2 = t2.hostConnected) === null || s2 === void 0 || s2.call(t2));
  }
  removeController(t2) {
    var i2;
    (i2 = this._$ES) === null || i2 === void 0 || i2.splice(this._$ES.indexOf(t2) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t2, i2) => {
      this.hasOwnProperty(i2) && (this._$Ei.set(i2, this[i2]), delete this[i2]);
    });
  }
  createRenderRoot() {
    var t2;
    const s2 = (t2 = this.shadowRoot) !== null && t2 !== void 0 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return i(s2, this.constructor.elementStyles), s2;
  }
  connectedCallback() {
    var t2;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t2 = this._$ES) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostConnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    (t2 = this._$ES) === null || t2 === void 0 || t2.forEach((t3) => {
      var i2;
      return (i2 = t3.hostDisconnected) === null || i2 === void 0 ? void 0 : i2.call(t3);
    });
  }
  attributeChangedCallback(t2, i2, s2) {
    this._$AK(t2, s2);
  }
  _$EO(t2, i2, s2 = l$1) {
    var e2, r2;
    const h2 = this.constructor._$Ep(t2, s2);
    if (h2 !== void 0 && s2.reflect === true) {
      const n2 = ((r2 = (e2 = s2.converter) === null || e2 === void 0 ? void 0 : e2.toAttribute) !== null && r2 !== void 0 ? r2 : o$1.toAttribute)(i2, s2.type);
      this._$El = t2, n2 == null ? this.removeAttribute(h2) : this.setAttribute(h2, n2), this._$El = null;
    }
  }
  _$AK(t2, i2) {
    var s2, e2;
    const r2 = this.constructor, h2 = r2._$Ev.get(t2);
    if (h2 !== void 0 && this._$El !== h2) {
      const t3 = r2.getPropertyOptions(h2), n2 = t3.converter, l2 = (e2 = (s2 = n2 == null ? void 0 : n2.fromAttribute) !== null && s2 !== void 0 ? s2 : typeof n2 == "function" ? n2 : null) !== null && e2 !== void 0 ? e2 : o$1.fromAttribute;
      this._$El = h2, this[h2] = l2(i2, t3.type), this._$El = null;
    }
  }
  requestUpdate(t2, i2, s2) {
    let e2 = true;
    t2 !== void 0 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || n$1)(this[t2], i2) ? (this._$AL.has(t2) || this._$AL.set(t2, i2), s2.reflect === true && this._$El !== t2 && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return t2 != null && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t3, i3) => this[i3] = t3), this._$Ei = void 0);
    let i2 = false;
    const s2 = this._$AL;
    try {
      i2 = this.shouldUpdate(s2), i2 ? (this.willUpdate(s2), (t2 = this._$ES) === null || t2 === void 0 || t2.forEach((t3) => {
        var i3;
        return (i3 = t3.hostUpdate) === null || i3 === void 0 ? void 0 : i3.call(t3);
      }), this.update(s2)) : this._$Ek();
    } catch (t3) {
      throw i2 = false, this._$Ek(), t3;
    }
    i2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var i2;
    (i2 = this._$ES) === null || i2 === void 0 || i2.forEach((t3) => {
      var i3;
      return (i3 = t3.hostUpdated) === null || i3 === void 0 ? void 0 : i3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    this._$EC !== void 0 && (this._$EC.forEach((t3, i2) => this._$EO(i2, this[i2], t3)), this._$EC = void 0), this._$Ek();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
}
a.finalized = true, a.elementProperties = /* @__PURE__ */ new Map(), a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, h == null || h({ ReactiveElement: a }), ((s$1 = globalThis.reactiveElementVersions) !== null && s$1 !== void 0 ? s$1 : globalThis.reactiveElementVersions = []).push("1.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l, o;
class s extends a {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const i2 = super.createRenderRoot();
    return (t2 = (e2 = this.renderOptions).renderBefore) !== null && t2 !== void 0 || (e2.renderBefore = i2.firstChild), i2;
  }
  update(t2) {
    const i2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = x(i2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), (t2 = this._$Do) === null || t2 === void 0 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), (t2 = this._$Do) === null || t2 === void 0 || t2.setConnected(false);
  }
  render() {
    return b;
  }
}
s.finalized = true, s._$litElement$ = true, (l = globalThis.litElementHydrateSupport) === null || l === void 0 || l.call(globalThis, { LitElement: s });
const n = globalThis.litElementPolyfillSupport;
n == null || n({ LitElement: s });
((o = globalThis.litElementVersions) !== null && o !== void 0 ? o : globalThis.litElementVersions = []).push("3.2.1");
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
function ComponentMixin(constructor) {
  class SuperElement extends constructor {
    constructor() {
      super(...arguments);
      this.dir = "ltr";
      this.inspect = false;
    }
    set options(options) {
      const oldValue = {
        ...this.settings,
        ...this._options
      };
      this._options = {
        ...this.settings,
        ...options
      };
      this.requestUpdate("options", oldValue);
    }
    get options() {
      var _a;
      return (_a = this._options) != null ? _a : this.settings;
    }
    get isLTR() {
      return this.dir === "ltr";
    }
  }
  __decorateClass([
    e$b({ type: Object })
  ], SuperElement.prototype, "options", 1);
  __decorateClass([
    e$b({ reflect: true })
  ], SuperElement.prototype, "dir", 2);
  __decorateClass([
    e$b({ reflect: true, type: Boolean })
  ], SuperElement.prototype, "inspect", 2);
  return SuperElement;
}
class ComponentElement extends ComponentMixin(s) {
  constructor(registry) {
    super();
    this.registry = Object.freeze(registry);
    this.dataset.qa = registry.qa;
  }
}
function defineWebComponent(name, component, options = {}) {
  Object.defineProperty(component.prototype, "settings", {
    enumerable: true,
    value: options,
    writable: true
  });
  window.customElements.define(name, component);
  return component;
}
export { ComponentElement, ComponentMixin, EventController, o$5 as classMap, e$2 as createRef, n$8 as customElement, defineWebComponent, e$a as eventOptions, $ as html, l$4 as ifDefined, isEmpty, isNil, l$2 as live, b as noChange, w as nothing, e$b as property, i$6 as query, e$9 as queryAll, l$6 as queryAssignedElements, o$7 as queryAssignedNodes, e$8 as queryAsync, n$3 as ref, x as render, c$1 as repeat, t$4 as state, i$2 as styleMap, y as svg, uniqueID, c as until };
//# sourceMappingURL=wbs-ui-common.es.js.map
