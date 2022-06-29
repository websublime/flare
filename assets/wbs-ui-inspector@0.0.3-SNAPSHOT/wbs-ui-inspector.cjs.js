"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function T(n){return(t,e)=>e!==void 0?((s,i,r)=>{i.constructor.createProperty(r,s)})(n,t,e):ht(n,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var M;((M=window.HTMLSlotElement)===null||M===void 0?void 0:M.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R;const g=globalThis.trustedTypes,q=g?g.createPolicy("lit-html",{createHTML:n=>n}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,st="?"+v,at=`<${st}>`,A=document,w=(n="")=>A.createComment(n),C=n=>n===null||typeof n!="object"&&typeof n!="function",it=Array.isArray,dt=n=>{var t;return it(n)||typeof((t=n)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W=/-->/g,V=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,K=/'/g,J=/"/g,nt=/^(?:script|style|textarea|title)$/i,ct=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),pt=ct(1),b=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Z=new WeakMap,ut=(n,t,e)=>{var s,i;const r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let o=r._$litPart$;if(o===void 0){const d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new x(t.insertBefore(w(),d),d,void 0,e!=null?e:{})}return o._$AI(n),o},y=A.createTreeWalker(A,129,null,!1),$t=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":"",o=S;for(let l=0;l<e;l++){const h=n[l];let $,a,c=-1,u=0;for(;u<h.length&&(o.lastIndex=u,a=o.exec(h),a!==null);)u=o.lastIndex,o===S?a[1]==="!--"?o=W:a[1]!==void 0?o=V:a[2]!==void 0?(nt.test(a[2])&&(i=RegExp("</"+a[2],"g")),o=_):a[3]!==void 0&&(o=_):o===_?a[0]===">"?(o=i!=null?i:S,c=-1):a[1]===void 0?c=-2:(c=o.lastIndex-a[2].length,$=a[1],o=a[3]===void 0?_:a[3]==='"'?J:K):o===J||o===K?o=_:o===W||o===V?o=S:(o=_,i=void 0);const O=o===_&&n[l+1].startsWith("/>")?" ":"";r+=o===S?h+at:c>=0?(s.push($),h.slice(0,c)+"$lit$"+h.slice(c)+v+O):h+v+(c===-2?(s.push(void 0),l):O)}const d=r+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[q!==void 0?q.createHTML(d):d,s]};class P{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const d=t.length-1,l=this.parts,[h,$]=$t(t,e);if(this.el=P.createElement(h,s),y.currentNode=this.el.content,e===2){const a=this.el.content,c=a.firstChild;c.remove(),a.append(...c.childNodes)}for(;(i=y.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const a=[];for(const c of i.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(v)){const u=$[o++];if(a.push(c),u!==void 0){const O=i.getAttribute(u.toLowerCase()+"$lit$").split(v),U=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:U[2],strings:O,ctor:U[1]==="."?_t:U[1]==="?"?yt:U[1]==="@"?mt:H})}else l.push({type:6,index:r})}for(const c of a)i.removeAttribute(c)}if(nt.test(i.tagName)){const a=i.textContent.split(v),c=a.length-1;if(c>0){i.textContent=g?g.emptyScript:"";for(let u=0;u<c;u++)i.append(a[u],w()),y.nextNode(),l.push({type:2,index:++r});i.append(a[c],w())}}}else if(i.nodeType===8)if(i.data===st)l.push({type:2,index:r});else{let a=-1;for(;(a=i.data.indexOf(v,a+1))!==-1;)l.push({type:7,index:r}),a+=v.length-1}r++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}}function E(n,t,e=n,s){var i,r,o,d;if(t===b)return t;let l=s!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[s]:e._$Cu;const h=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,s)),s!==void 0?((o=(d=e)._$Cl)!==null&&o!==void 0?o:d._$Cl=[])[s]=l:e._$Cu=l),l!==void 0&&(t=E(n,l._$AS(n,t.values),l,s)),t}class vt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(s,!0);y.currentNode=r;let o=y.nextNode(),d=0,l=0,h=i[0];for(;h!==void 0;){if(d===h.index){let $;h.type===2?$=new x(o,o.nextSibling,this,t):h.type===1?$=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&($=new gt(o,this,t)),this.v.push($),h=i[++l]}d!==(h==null?void 0:h.index)&&(o=y.nextNode(),d++)}return r}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class x{constructor(t,e,s,i){var r;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),C(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==b&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):dt(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==p&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(A.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=P.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(s);else{const o=new vt(r,this),d=o.p(this.options);o.m(s),this.k(d),this._$AH=o}}_$AC(t){let e=Z.get(t.strings);return e===void 0&&Z.set(t.strings,e=new P(t)),e}S(t){it(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new x(this.M(w()),this.M(w()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class H{constructor(t,e,s,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=E(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==b,o&&(this._$AH=t);else{const d=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=E(this,d[s+l],e,l),h===b&&(h=this._$AH[l]),o||(o=!C(h)||h!==this._$AH[l]),h===p?t=p:t!==p&&(t+=(h!=null?h:"")+r[l+1]),this._$AH[l]=h}o&&!i&&this.C(t)}C(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class _t extends H{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===p?void 0:t}}const ft=g?g.emptyScript:"";class yt extends H{constructor(){super(...arguments),this.type=4}C(t){t&&t!==p?this.element.setAttribute(this.name,ft):this.element.removeAttribute(this.name)}}class mt extends H{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=E(this,t,e,0))!==null&&s!==void 0?s:p)===b)return;const i=this._$AH,r=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class gt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const F=window.litHtmlPolyfillSupport;F==null||F(P,x),((R=globalThis.litHtmlVersions)!==null&&R!==void 0?R:globalThis.litHtmlVersions=[]).push("2.2.6");const At=()=>{const n=Date.now().toString(36),t=Math.random().toString(36).substr(2);return n+t};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ot=Symbol(),G=new WeakMap;class bt{constructor(t,e,s){if(this._$cssResult$=!0,s!==ot)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(B&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=G.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&G.set(e,t))}return t}toString(){return this.cssText}}const Et=n=>new bt(typeof n=="string"?n:n+"",void 0,ot),St=(n,t)=>{B?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=window.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)})},Q=B?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Et(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var k;const X=window.trustedTypes,wt=X?X.emptyScript:"",Y=window.reactiveElementPolyfillSupport,I={toAttribute(n,t){switch(t){case Boolean:n=n?wt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},rt=(n,t)=>t!==n&&(t==t||n==n),L={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:rt};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=L){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||L}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Q(i))}else t!==void 0&&e.push(Q(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return St(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=L){var i,r;const o=this.constructor._$Ep(t,s);if(o!==void 0&&s.reflect===!0){const d=((r=(i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&r!==void 0?r:I.toAttribute)(e,s.type);this._$El=t,d==null?this.removeAttribute(o):this.setAttribute(o,d),this._$El=null}}_$AK(t,e){var s,i;const r=this.constructor,o=r._$Ev.get(t);if(o!==void 0&&this._$El!==o){const d=r.getPropertyOptions(o),l=d.converter,h=(i=(s=l==null?void 0:l.fromAttribute)!==null&&s!==void 0?s:typeof l=="function"?l:null)!==null&&i!==void 0?i:I.fromAttribute;this._$El=o,this[o]=h(e,d.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||rt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},Y==null||Y({ReactiveElement:f}),((k=globalThis.reactiveElementVersions)!==null&&k!==void 0?k:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j,D;class m extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ut(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return b}}m.finalized=!0,m._$litElement$=!0,(j=globalThis.litElementHydrateSupport)===null||j===void 0||j.call(globalThis,{LitElement:m});const tt=globalThis.litElementPolyfillSupport;tt==null||tt({LitElement:m});((D=globalThis.litElementVersions)!==null&&D!==void 0?D:globalThis.litElementVersions=[]).push("3.2.1");var Ct=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,z=(n,t,e,s)=>{for(var i=s>1?void 0:s?Pt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Ct(t,e,i),i};function xt(n){class t extends n{constructor(){super(...arguments),this.dir="ltr",this.inspect=!1}set options(s){const i={...this.settings,...this._options};this._options={...this.settings,...s},this.requestUpdate("options",i)}get options(){var s;return(s=this._options)!=null?s:this.settings}get isLTR(){return this.dir==="ltr"}}return z([T({type:Object})],t.prototype,"options",1),z([T({reflect:!0})],t.prototype,"dir",2),z([T({reflect:!0,type:Boolean})],t.prototype,"inspect",2),t}class Ot extends xt(m){constructor(t){super(),this.registry=Object.freeze(t),this.dataset.qa=t.qa}}function Ut(n,t,e={}){return Object.defineProperty(t.prototype,"settings",{enumerable:!0,value:e,writable:!0}),window.customElements.define(n,t),t}const Tt="0.0.3";var Ht=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,Mt=(n,t,e,s)=>{for(var i=s>1?void 0:s?Nt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Ht(t,e,i),i};const et={description:"Inspector container component",link:"",name:"ws-inspector",qa:"ws-ui-inspector",scope:"@websublime/wbs-ui-inspector",version:Tt};class N extends Ot{constructor(){super(et),this.identifier=At();const t=this.options.className;this.classList.add(...t),this.dataset.qa=et.qa}connectedCallback(){super.connectedCallback();const{element:t}=this.el,e=t.value;if(e&&this.inspect){const s=this.createSurroundingElement();e.style.outline="2px solid  #ff00ff",e.prepend(s),e.addEventListener("mouseover",()=>{e.style.outline="2px solid  #ff00ff",e.style.position="relative",e.style.borderRadius="10px",e.prepend(s)}),e.addEventListener("mouseout",()=>{e.style.outline="",e.style.borderRadius="",e.style.position="",s.remove()})}}createSurroundingElement(){const{registry:t}=this.el,{scope:e="",version:s=""}=t,i=document.createElement("span");return i.textContent=`${e}@${s}`,i.style.display="inline",i.style.borderRadius="4px",i.style.backgroundColor="#ff00ff",i.style.color="white",i.style.position="absolute",i.style.bottom="-10px",i.style.left="45%",i.style.padding="2px 4px",i}render(){return pt` <template id=${this.identifier}></template> `}}N.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0};Mt([T({type:Object})],N.prototype,"el",2);const lt=(n={},t="ws-inspector")=>Ut(t,N,{className:["ws-inspector"],enabled:!1,...n});lt();exports.WsInspector=N;exports.registerInspectorComponent=lt;
//# sourceMappingURL=wbs-ui-inspector.cjs.js.map
