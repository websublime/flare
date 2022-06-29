"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function N(n){return(t,e)=>e!==void 0?((s,i,o)=>{i.constructor.createProperty(o,s)})(n,t,e):ut(n,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;((L=window.HTMLSlotElement)===null||L===void 0?void 0:L.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var k;const g=globalThis.trustedTypes,q=g?g.createPolicy("lit-html",{createHTML:n=>n}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,ot="?"+v,pt=`<${ot}>`,y=document,C=(n="")=>y.createComment(n),U=n=>n===null||typeof n!="object"&&typeof n!="function",rt=Array.isArray,$t=n=>{var t;return rt(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K=/-->/g,J=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Q=/'/g,Z=/"/g,lt=/^(?:script|style|textarea|title)$/i,vt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),_t=vt(1),b=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),F=new WeakMap,ft=(n,t,e)=>{var s,i;const o=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let r=o._$litPart$;if(r===void 0){const a=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=r=new T(t.insertBefore(C(),a),a,void 0,e!=null?e:{})}return r._$AI(n),r},A=y.createTreeWalker(y,129,null,!1),At=(n,t)=>{const e=n.length-1,s=[];let i,o=t===2?"<svg>":"",r=w;for(let l=0;l<e;l++){const h=n[l];let p,d,c=-1,$=0;for(;$<h.length&&(r.lastIndex=$,d=r.exec(h),d!==null);)$=r.lastIndex,r===w?d[1]==="!--"?r=K:d[1]!==void 0?r=J:d[2]!==void 0?(lt.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=_):d[3]!==void 0&&(r=_):r===_?d[0]===">"?(r=i!=null?i:w,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,p=d[1],r=d[3]===void 0?_:d[3]==='"'?Z:Q):r===Z||r===Q?r=_:r===K||r===J?r=w:(r=_,i=void 0);const O=r===_&&n[l+1].startsWith("/>")?" ":"";o+=r===w?h+pt:c>=0?(s.push(p),h.slice(0,c)+"$lit$"+h.slice(c)+v+O):h+v+(c===-2?(s.push(void 0),l):O)}const a=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[q!==void 0?q.createHTML(a):a,s]};class P{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const a=t.length-1,l=this.parts,[h,p]=At(t,e);if(this.el=P.createElement(h,s),A.currentNode=this.el.content,e===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(i=A.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const d=[];for(const c of i.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(v)){const $=p[r++];if(d.push(c),$!==void 0){const O=i.getAttribute($.toLowerCase()+"$lit$").split(v),M=/([.?@])?(.*)/.exec($);l.push({type:1,index:o,name:M[2],strings:O,ctor:M[1]==="."?gt:M[1]==="?"?bt:M[1]==="@"?Et:R})}else l.push({type:6,index:o})}for(const c of d)i.removeAttribute(c)}if(lt.test(i.tagName)){const d=i.textContent.split(v),c=d.length-1;if(c>0){i.textContent=g?g.emptyScript:"";for(let $=0;$<c;$++)i.append(d[$],C()),A.nextNode(),l.push({type:2,index:++o});i.append(d[c],C())}}}else if(i.nodeType===8)if(i.data===ot)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(v,d+1))!==-1;)l.push({type:7,index:o}),d+=v.length-1}o++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function E(n,t,e=n,s){var i,o,r,a;if(t===b)return t;let l=s!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[s]:e._$Cu;const h=U(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,s)),s!==void 0?((r=(a=e)._$Cl)!==null&&r!==void 0?r:a._$Cl=[])[s]=l:e._$Cu=l),l!==void 0&&(t=E(n,l._$AS(n,t.values),l,s)),t}class mt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(s,!0);A.currentNode=o;let r=A.nextNode(),a=0,l=0,h=i[0];for(;h!==void 0;){if(a===h.index){let p;h.type===2?p=new T(r,r.nextSibling,this,t):h.type===1?p=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(p=new wt(r,this,t)),this.v.push(p),h=i[++l]}a!==(h==null?void 0:h.index)&&(r=A.nextNode(),a++)}return o}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class T{constructor(t,e,s,i){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),U(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==b&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):$t(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==u&&U(this._$AH)?this._$AA.nextSibling.data=t:this.k(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=P.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(s);else{const r=new mt(o,this),a=r.p(this.options);r.m(s),this.k(a),this._$AH=r}}_$AC(t){let e=F.get(t.strings);return e===void 0&&F.set(t.strings,e=new P(t)),e}S(t){rt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new T(this.M(C()),this.M(C()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class R{constructor(t,e,s,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(o===void 0)t=E(this,t,e,0),r=!U(t)||t!==this._$AH&&t!==b,r&&(this._$AH=t);else{const a=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=E(this,a[s+l],e,l),h===b&&(h=this._$AH[l]),r||(r=!U(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h!=null?h:"")+o[l+1]),this._$AH[l]=h}r&&!i&&this.C(t)}C(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class gt extends R{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===u?void 0:t}}const yt=g?g.emptyScript:"";class bt extends R{constructor(){super(...arguments),this.type=4}C(t){t&&t!==u?this.element.setAttribute(this.name,yt):this.element.removeAttribute(this.name)}}class Et extends R{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=E(this,t,e,0))!==null&&s!==void 0?s:u)===b)return;const i=this._$AH,o=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==u&&(i===u||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class wt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const G=window.litHtmlPolyfillSupport;G==null||G(P,T),((k=globalThis.litHtmlVersions)!==null&&k!==void 0?k:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ct=n=>(...t)=>({_$litDirective$:n,values:t});class Ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=n=>n.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=(n,t)=>{var e,s;const i=n._$AN;if(i===void 0)return!1;for(const o of i)(s=(e=o)._$AO)===null||s===void 0||s.call(e,t,!1),S(o,t);return!0},H=n=>{let t,e;do{if((t=n._$AM)===void 0)break;e=t._$AN,e.delete(n),n=t}while((e==null?void 0:e.size)===0)},ht=n=>{for(let t;t=n._$AM;n=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(n))break;e.add(n),Ot(t)}};function Tt(n){this._$AN!==void 0?(H(this),this._$AM=n,ht(this)):this._$AM=n}function xt(n,t=!1,e=0){const s=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(s))for(let o=e;o<s.length;o++)S(s[o],!1),H(s[o]);else s!=null&&(S(s,!1),H(s));else S(this,n)}const Ot=n=>{var t,e,s,i;n.type==St.CHILD&&((t=(s=n)._$AP)!==null&&t!==void 0||(s._$AP=xt),(e=(i=n)._$AQ)!==null&&e!==void 0||(i._$AQ=Tt))};class Mt extends Ut{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),ht(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)===null||s===void 0||s.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),e&&(S(this,t),H(this))}setValue(t){if(Pt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=()=>new Ht;class Ht{}const D=new WeakMap,Rt=Ct(class extends Mt{render(n){return u}update(n,[t]){var e;const s=t!==this.U;return s&&this.U!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.U=t,this.ht=(e=n.options)===null||e===void 0?void 0:e.host,this.ot(this.lt=n.element)),u}ot(n){var t;if(typeof this.U=="function"){const e=(t=this.ht)!==null&&t!==void 0?t:globalThis;let s=D.get(e);s===void 0&&(s=new WeakMap,D.set(e,s)),s.get(this.U)!==void 0&&this.U.call(this.ht,void 0),s.set(this.U,n),n!==void 0&&this.U.call(this.ht,n)}else this.U.value=n}get rt(){var n,t,e;return typeof this.U=="function"?(t=D.get((n=this.ht)!==null&&n!==void 0?n:globalThis))===null||t===void 0?void 0:t.get(this.U):(e=this.U)===null||e===void 0?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Lt=()=>{const n=Date.now().toString(36),t=Math.random().toString(36).substr(2);return n+t};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,at=Symbol(),Y=new Map;class kt{constructor(t,e){if(this._$cssResult$=!0,e!==at)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Y.get(this.cssText);return W&&t===void 0&&(Y.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Dt=n=>new kt(typeof n=="string"?n:n+"",at),It=(n,t)=>{W?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=window.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)})},X=W?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Dt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const tt=window.trustedTypes,zt=tt?tt.emptyScript:"",et=window.reactiveElementPolyfillSupport,V={toAttribute(n,t){switch(t){case Boolean:n=n?zt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},dt=(n,t)=>t!==n&&(t==t||n==n),z={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:dt};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Eh(s,e);i!==void 0&&(this._$Eu.set(i,s),t.push(i))}),t}static createProperty(t,e=z){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(X(i))}else t!==void 0&&e.push(X(t));return e}static _$Eh(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return It(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=z){var i,o;const r=this.constructor._$Eh(t,s);if(r!==void 0&&s.reflect===!0){const a=((o=(i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&o!==void 0?o:V.toAttribute)(e,s.type);this._$Ei=t,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Ei=null}}_$AK(t,e){var s,i,o;const r=this.constructor,a=r._$Eu.get(t);if(a!==void 0&&this._$Ei!==a){const l=r.getPropertyOptions(a),h=l.converter,p=(o=(i=(s=h)===null||s===void 0?void 0:s.fromAttribute)!==null&&i!==void 0?i:typeof h=="function"?h:null)!==null&&o!==void 0?o:V.fromAttribute;this._$Ei=a,this[a]=p(e,l.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||dt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,o)=>this[o]=i),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(s)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$ES(s,this[s],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},et==null||et({ReactiveElement:f}),((I=globalThis.reactiveElementVersions)!==null&&I!==void 0?I:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j,B;class m extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=ft(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return b}}m.finalized=!0,m._$litElement$=!0,(j=globalThis.litElementHydrateSupport)===null||j===void 0||j.call(globalThis,{LitElement:m});const st=globalThis.litElementPolyfillSupport;st==null||st({LitElement:m});((B=globalThis.litElementVersions)!==null&&B!==void 0?B:globalThis.litElementVersions=[]).push("3.2.0");var jt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,it=(n,t,e,s)=>{for(var i=s>1?void 0:s?Bt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&jt(t,e,i),i};function Vt(n){class t extends n{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return this.dir==="ltr"}}return it([N({type:Object})],t.prototype,"options",2),it([N({reflect:!0})],t.prototype,"dir",2),t}class Wt extends Vt(m){constructor(t){super(),this.registry=Object.freeze(t)}}function qt(n,t,e){return Object.defineProperty(t.prototype,"options",{enumerable:!0,value:e}),window.customElements.define(n,t),t}const Kt=async(n,t)=>{const o=`${{}.VITE_BUCKET_URL}/manifests/${n}/${t}/manifest.json`,r=await fetch(o,{method:"GET"}),a=await r.json();return r.ok?a:void 0},Jt=async(n,t)=>{const e=await Kt(n,t);if(e){let s=document.createElement("script"),i=document.createElement("script");s.setAttribute("src",e.scripts.esm),s.setAttribute("async",""),s.setAttribute("type","module"),i.setAttribute("src",e.scripts.main),i.setAttribute("async",""),i.setAttribute("type","text/javascript"),i.setAttribute("nomodule",""),document.body.append(s),document.body.append(i)}},Qt="0.0.0";var Zt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,ct=(n,t,e,s)=>{for(var i=s>1?void 0:s?Ft(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Zt(t,e,i),i};const nt={description:"Loader container component",link:"https://cdn.websublime.dev",name:"ws-loader",qa:"ws-ui-loader",scope:"@websublime/wbs-loader",version:Qt};class x extends Wt{constructor(){super(nt),this.elRef=Nt(),this.identifier=Lt();const t=this.options.className;this.classList.add(...t),this.dataset.qa=nt.qa}get element(){return{element:this.elRef,registry:this.registry}}connectedCallback(){super.connectedCallback(),Jt(this.scope,this.name)}render(){return _t`
      <template id=${this.identifier} ${Rt(this.elRef)}>
        <slot></slot>
      </template>
    `}}x.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0};ct([N({type:String})],x.prototype,"name",2);ct([N({type:String})],x.prototype,"scope",2);const Gt=(n={},t="ws-loader")=>qt(t,x,{className:["ws-loader"],...n});Gt();exports.WsLoader=x;
//# sourceMappingURL=wbs-loader.cjs.js.map
