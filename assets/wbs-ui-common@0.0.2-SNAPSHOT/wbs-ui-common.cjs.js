"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=i=>t=>typeof t=="function"?((e,s)=>(window.customElements.define(e,s),s))(i,t):((e,s)=>{const{kind:n,elements:r}=s;return{kind:n,elements:r,finisher(o){window.customElements.define(e,o)}}})(i,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function j(i){return(t,e)=>e!==void 0?((s,n,r)=>{n.constructor.createProperty(r,s)})(i,t,e):Bt(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function It(i){return j({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=({finisher:i,descriptor:t})=>(e,s)=>{var n;if(s===void 0){const r=(n=e.originalKey)!==null&&n!==void 0?n:e.key,o=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:{...e,key:r};return i!=null&&(o.finisher=function(d){i(d,r)}),o}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,s,t(s)),i==null||i(r,s)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lt(i){return U({finisher:(t,e)=>{Object.assign(t.prototype[e],i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function jt(i,t){return U({descriptor:e=>{const s={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const n=typeof e=="symbol"?Symbol():"__"+e;s.get=function(){var r,o;return this[n]===void 0&&(this[n]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&o!==void 0?o:null),this[n]}}return s}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Dt(i){return U({descriptor:t=>({get(){var e,s;return(s=(e=this.renderRoot)===null||e===void 0?void 0:e.querySelectorAll(i))!==null&&s!==void 0?s:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zt(i){return U({descriptor:t=>({async get(){var e;return await this.updateComplete,(e=this.renderRoot)===null||e===void 0?void 0:e.querySelector(i)},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;const qt=((q=window.HTMLSlotElement)===null||q===void 0?void 0:q.prototype.assignedElements)!=null?(i,t)=>i.assignedElements(t):(i,t)=>i.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function ft(i){const{slot:t,selector:e}=i!=null?i:{};return U({descriptor:s=>({get(){var n;const r="slot"+(t?`[name=${t}]`:":not([name])"),o=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(r),d=o!=null?qt(o,i):[];return e?d.filter(l=>l.matches(e)):d},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vt(i,t,e){let s,n=i;return typeof i=="object"?(n=i.slot,s=i):s={flatten:t},e?ft({slot:n,flatten:t,selector:e}):U({descriptor:r=>({get(){var o,d;const l="slot"+(n?`[name=${n}]`:":not([name])"),h=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(l);return(d=h==null?void 0:h.assignedNodes(s))!==null&&d!==void 0?d:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V;const S=globalThis.trustedTypes,et=S?S.createPolicy("lit-html",{createHTML:i=>i}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,F="?"+g,Wt=`<${F}>`,T=document,H=(i="")=>T.createComment(i),k=i=>i===null||typeof i!="object"&&typeof i!="function",At=Array.isArray,yt=i=>{var t;return At(i)||typeof((t=i)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,it=/-->/g,st=/>/g,m=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,nt=/'/g,rt=/"/g,gt=/^(?:script|style|textarea|title)$/i,mt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),Kt=mt(1),Yt=mt(2),f=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ot=new WeakMap,Et=(i,t,e)=>{var s,n;const r=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let o=r._$litPart$;if(o===void 0){const d=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new P(t.insertBefore(H(),d),d,void 0,e!=null?e:{})}return o._$AI(i),o},w=T.createTreeWalker(T,129,null,!1),bt=(i,t)=>{const e=i.length-1,s=[];let n,r=t===2?"<svg>":"",o=O;for(let l=0;l<e;l++){const h=i[l];let p,a,c=-1,u=0;for(;u<h.length&&(o.lastIndex=u,a=o.exec(h),a!==null);)u=o.lastIndex,o===O?a[1]==="!--"?o=it:a[1]!==void 0?o=st:a[2]!==void 0?(gt.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=m):a[3]!==void 0&&(o=m):o===m?a[0]===">"?(o=n!=null?n:O,c=-1):a[1]===void 0?c=-2:(c=o.lastIndex-a[2].length,p=a[1],o=a[3]===void 0?m:a[3]==='"'?rt:nt):o===rt||o===nt?o=m:o===it||o===st?o=O:(o=m,n=void 0);const $=o===m&&i[l+1].startsWith("/>")?" ":"";r+=o===O?h+Wt:c>=0?(s.push(p),h.slice(0,c)+"$lit$"+h.slice(c)+g+$):h+g+(c===-2?(s.push(void 0),l):$)}const d=r+(i[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[et!==void 0?et.createHTML(d):d,s]};class B{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let r=0,o=0;const d=t.length-1,l=this.parts,[h,p]=bt(t,e);if(this.el=B.createElement(h,s),w.currentNode=this.el.content,e===2){const a=this.el.content,c=a.firstChild;c.remove(),a.append(...c.childNodes)}for(;(n=w.nextNode())!==null&&l.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const a=[];for(const c of n.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(g)){const u=p[o++];if(a.push(c),u!==void 0){const $=n.getAttribute(u.toLowerCase()+"$lit$").split(g),_=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:_[2],strings:$,ctor:_[1]==="."?wt:_[1]==="?"?St:_[1]==="@"?Tt:I})}else l.push({type:6,index:r})}for(const c of a)n.removeAttribute(c)}if(gt.test(n.tagName)){const a=n.textContent.split(g),c=a.length-1;if(c>0){n.textContent=S?S.emptyScript:"";for(let u=0;u<c;u++)n.append(a[u],H()),w.nextNode(),l.push({type:2,index:++r});n.append(a[c],H())}}}else if(n.nodeType===8)if(n.data===F)l.push({type:2,index:r});else{let a=-1;for(;(a=n.data.indexOf(g,a+1))!==-1;)l.push({type:7,index:r}),a+=g.length-1}r++}}static createElement(t,e){const s=T.createElement("template");return s.innerHTML=t,s}}function b(i,t,e=i,s){var n,r,o,d;if(t===f)return t;let l=s!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[s]:e._$Cu;const h=k(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(i),l._$AT(i,e,s)),s!==void 0?((o=(d=e)._$Cl)!==null&&o!==void 0?o:d._$Cl=[])[s]=l:e._$Cu=l),l!==void 0&&(t=b(i,l._$AS(i,t.values),l,s)),t}class Ct{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:T).importNode(s,!0);w.currentNode=r;let o=w.nextNode(),d=0,l=0,h=n[0];for(;h!==void 0;){if(d===h.index){let p;h.type===2?p=new P(o,o.nextSibling,this,t):h.type===1?p=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(p=new Ut(o,this,t)),this.v.push(p),h=n[++l]}d!==(h==null?void 0:h.index)&&(o=w.nextNode(),d++)}return r}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class P{constructor(t,e,s,n){var r;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cg=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),k(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==f&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):yt(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==v&&k(this._$AH)?this._$AA.nextSibling.data=t:this.k(T.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=B.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(s);else{const o=new Ct(r,this),d=o.p(this.options);o.m(s),this.k(d),this._$AH=o}}_$AC(t){let e=ot.get(t.strings);return e===void 0&&ot.set(t.strings,e=new B(t)),e}S(t){At(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const r of t)n===e.length?e.push(s=new P(this.M(H()),this.M(H()),this,this.options)):s=e[n],s._$AI(r),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class I{constructor(t,e,s,n,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,n){const r=this.strings;let o=!1;if(r===void 0)t=b(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==f,o&&(this._$AH=t);else{const d=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=b(this,d[s+l],e,l),h===f&&(h=this._$AH[l]),o||(o=!k(h)||h!==this._$AH[l]),h===v?t=v:t!==v&&(t+=(h!=null?h:"")+r[l+1]),this._$AH[l]=h}o&&!n&&this.C(t)}C(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class wt extends I{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===v?void 0:t}}const Gt=S?S.emptyScript:"";class St extends I{constructor(){super(...arguments),this.type=4}C(t){t&&t!==v?this.element.setAttribute(this.name,Gt):this.element.removeAttribute(this.name)}}class Tt extends I{constructor(t,e,s,n,r){super(t,e,s,n,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=b(this,t,e,0))!==null&&s!==void 0?s:v)===f)return;const n=this._$AH,r=t===v&&n!==v||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==v&&(n===v||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const Zt={L:"$lit$",P:g,V:F,I:1,N:bt,R:Ct,j:yt,D:b,H:P,F:I,O:St,W:Tt,B:wt,Z:Ut},lt=window.litHtmlPolyfillSupport;lt==null||lt(B,P),((V=globalThis.litHtmlVersions)!==null&&V!==void 0?V:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=i=>i!=null?i:v;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},x=i=>(...t)=>({_$litDirective$:i,values:t});class L{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:Jt}=Zt,Ft=i=>i===null||typeof i!="object"&&typeof i!="function",Pt=i=>i.strings===void 0,ht=()=>document.createComment(""),M=(i,t,e)=>{var s;const n=i._$AA.parentNode,r=t===void 0?i._$AB:t._$AA;if(e===void 0){const o=n.insertBefore(ht(),r),d=n.insertBefore(ht(),r);e=new Jt(o,d,i,i.options)}else{const o=e._$AB.nextSibling,d=e._$AM,l=d!==i;if(l){let h;(s=e._$AQ)===null||s===void 0||s.call(e,i),e._$AM=i,e._$AP!==void 0&&(h=i._$AU)!==d._$AU&&e._$AP(h)}if(o!==r||l){let h=e._$AA;for(;h!==o;){const p=h.nextSibling;n.insertBefore(h,r),h=p}}}return e},E=(i,t,e=i)=>(i._$AI(t,e),i),Xt={},xt=(i,t=Xt)=>i._$AH=t,te=i=>i._$AH,W=i=>{var t;(t=i._$AP)===null||t===void 0||t.call(i,!1,!0);let e=i._$AA;const s=i._$AB.nextSibling;for(;e!==s;){const n=e.nextSibling;e.remove(),e=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=(i,t,e)=>{const s=new Map;for(let n=t;n<=e;n++)s.set(i[n],n);return s},ee=x(class extends L{constructor(i){if(super(i),i.type!==A.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);const n=[],r=[];let o=0;for(const d of i)n[o]=s?s(d,o):o,r[o]=e(d,o),o++;return{values:r,keys:n}}render(i,t,e){return this.dt(i,t,e).values}update(i,[t,e,s]){var n;const r=te(i),{values:o,keys:d}=this.dt(t,e,s);if(!Array.isArray(r))return this.ut=d,o;const l=(n=this.ut)!==null&&n!==void 0?n:this.ut=[],h=[];let p,a,c=0,u=r.length-1,$=0,_=o.length-1;for(;c<=u&&$<=_;)if(r[c]===null)c++;else if(r[u]===null)u--;else if(l[c]===d[$])h[$]=E(r[c],o[$]),c++,$++;else if(l[u]===d[_])h[_]=E(r[u],o[_]),u--,_--;else if(l[c]===d[_])h[_]=E(r[c],o[_]),M(i,h[_+1],r[c]),c++,_--;else if(l[u]===d[$])h[$]=E(r[u],o[$]),M(i,r[c],r[u]),u--,$++;else if(p===void 0&&(p=dt(d,$,_),a=dt(l,c,u)),p.has(l[c]))if(p.has(l[u])){const y=a.get(d[$]),z=y!==void 0?r[y]:null;if(z===null){const tt=M(i,r[c]);E(tt,o[$]),h[$]=tt}else h[$]=E(z,o[$]),M(i,r[c],z),r[y]=null;$++}else W(r[u]),u--;else W(r[c]),c++;for(;$<=_;){const y=M(i,h[_+1]);E(y,o[$]),h[$++]=y}for(;c<=u;){const y=r[c++];y!==null&&W(y)}return this.ut=d,xt(i,h),f}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=x(class extends L{constructor(i){var t;if(super(i),i.type!==A.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,s;if(this.et===void 0){this.et=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.st)===null||e===void 0)&&e.has(r))&&this.et.add(r);return this.render(t)}const n=i.element.classList;this.et.forEach(r=>{r in t||(n.remove(r),this.et.delete(r))});for(const r in t){const o=!!t[r];o===this.et.has(r)||((s=this.st)===null||s===void 0?void 0:s.has(r))||(o?(n.add(r),this.et.add(r)):(n.remove(r),this.et.delete(r)))}return f}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=x(class extends L{constructor(i){var t;if(super(i),i.type!==A.ATTRIBUTE||i.name!=="style"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const s=i[e];return s==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ct===void 0){this.ct=new Set;for(const s in t)this.ct.add(s);return this.render(t)}this.ct.forEach(s=>{t[s]==null&&(this.ct.delete(s),s.includes("-")?e.removeProperty(s):e[s]="")});for(const s in t){const n=t[s];n!=null&&(this.ct.add(s),s.includes("-")?e.setProperty(s,n):e[s]=n)}return f}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=(i,t)=>{var e,s;const n=i._$AN;if(n===void 0)return!1;for(const r of n)(s=(e=r)._$AO)===null||s===void 0||s.call(e,t,!1),N(r,t);return!0},D=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},Ot=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),oe(t)}};function ne(i){this._$AN!==void 0?(D(this),this._$AM=i,Ot(this)):this._$AM=i}function re(i,t=!1,e=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let r=e;r<s.length;r++)N(s[r],!1),D(s[r]);else s!=null&&(N(s,!1),D(s));else N(this,i)}const oe=i=>{var t,e,s,n;i.type==A.CHILD&&((t=(s=i)._$AP)!==null&&t!==void 0||(s._$AP=re),(e=(n=i)._$AQ)!==null&&e!==void 0||(n._$AQ=ne))};class Mt extends L{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Ot(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,n;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)===null||s===void 0||s.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),e&&(N(this,t),D(this))}setValue(t){if(Pt(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class le{constructor(t){this.U=t}disconnect(){this.U=void 0}reconnect(t){this.U=t}deref(){return this.U}}class he{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var t;(t=this.Y)!==null&&t!==void 0||(this.Y=new Promise(e=>this.q=e))}resume(){var t;(t=this.q)===null||t===void 0||t.call(this),this.Y=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=i=>!Ft(i)&&typeof i.then=="function";class de extends Mt{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new le(this),this._$CK=new he}render(...t){var e;return(e=t.find(s=>!ct(s)))!==null&&e!==void 0?e:f}update(t,e){const s=this._$Cyt;let n=s.length;this._$Cyt=e;const r=this._$CG,o=this._$CK;this.isConnected||this.disconnected();for(let d=0;d<e.length&&!(d>this._$Cwt);d++){const l=e[d];if(!ct(l))return this._$Cwt=d,l;d<n&&l===s[d]||(this._$Cwt=1073741823,n=0,Promise.resolve(l).then(async h=>{for(;o.get();)await o.get();const p=r.deref();if(p!==void 0){const a=p._$Cyt.indexOf(l);a>-1&&a<p._$Cwt&&(p._$Cwt=a,p.setValue(h))}}))}return f}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}}const ce=x(de);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=x(class extends L{constructor(i){if(super(i),i.type!==A.PROPERTY&&i.type!==A.ATTRIBUTE&&i.type!==A.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Pt(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===f||t===v)return t;const e=i.element,s=i.name;if(i.type===A.PROPERTY){if(t===e[s])return f}else if(i.type===A.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(s))return f}else if(i.type===A.ATTRIBUTE&&e.getAttribute(s)===t+"")return f;return xt(i),t}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=()=>new pe;class pe{}const K=new WeakMap,$e=x(class extends Mt{render(i){return v}update(i,[t]){var e;const s=t!==this.U;return s&&this.U!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.U=t,this.ht=(e=i.options)===null||e===void 0?void 0:e.host,this.ot(this.lt=i.element)),v}ot(i){var t;if(typeof this.U=="function"){const e=(t=this.ht)!==null&&t!==void 0?t:globalThis;let s=K.get(e);s===void 0&&(s=new WeakMap,K.set(e,s)),s.get(this.U)!==void 0&&this.U.call(this.ht,void 0),s.set(this.U,i),i!==void 0&&this.U.call(this.ht,i)}else this.U.value=i}get rt(){var i,t,e;return typeof this.U=="function"?(t=K.get((i=this.ht)!==null&&i!==void 0?i:globalThis))===null||t===void 0?void 0:t.get(this.U):(e=this.U)===null||e===void 0?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),ve=()=>{const i=Date.now().toString(36),t=Math.random().toString(36).substr(2);return i+t},_e=i=>[Object,Array].includes((i||{}).constructor)&&!Object.entries(i||{}).length,fe=i=>i==null;class Ae{constructor(t){this.host=t,t.addController(this)}async notify(t){const e=await this.host.updateComplete;t(e)}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nt=Symbol(),at=new Map;class ye{constructor(t,e){if(this._$cssResult$=!0,e!==Nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=at.get(this.cssText);return X&&t===void 0&&(at.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const ge=i=>new ye(typeof i=="string"?i:i+"",Nt),me=(i,t)=>{X?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),n=window.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)})},ut=X?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ge(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Y;const pt=window.trustedTypes,Ee=pt?pt.emptyScript:"",$t=window.reactiveElementPolyfillSupport,J={toAttribute(i,t){switch(t){case Boolean:i=i?Ee:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Rt=(i,t)=>t!==i&&(t==t||i==i),G={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:Rt};class C extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const n=this._$Eh(s,e);n!==void 0&&(this._$Eu.set(n,s),t.push(n))}),t}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,s,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||G}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of s)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)e.unshift(ut(n))}else t!==void 0&&e.push(ut(t));return e}static _$Eh(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return me(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=G){var n,r;const o=this.constructor._$Eh(t,s);if(o!==void 0&&s.reflect===!0){const d=((r=(n=s.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&r!==void 0?r:J.toAttribute)(e,s.type);this._$Ei=t,d==null?this.removeAttribute(o):this.setAttribute(o,d),this._$Ei=null}}_$AK(t,e){var s,n,r;const o=this.constructor,d=o._$Eu.get(t);if(d!==void 0&&this._$Ei!==d){const l=o.getPropertyOptions(d),h=l.converter,p=(r=(n=(s=h)===null||s===void 0?void 0:s.fromAttribute)!==null&&n!==void 0?n:typeof h=="function"?h:null)!==null&&r!==void 0?r:J.fromAttribute;this._$Ei=d,this[d]=p(e,l.type),this._$Ei=null}}requestUpdate(t,e,s){let n=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||Rt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,r)=>this[r]=n),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(s)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var n;return(n=s.hostUpdated)===null||n===void 0?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$ES(s,this[s],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}C.finalized=!0,C.elementProperties=new Map,C.elementStyles=[],C.shadowRootOptions={mode:"open"},$t==null||$t({ReactiveElement:C}),((Y=globalThis.reactiveElementVersions)!==null&&Y!==void 0?Y:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z,Q;class R extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Et(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return f}}R.finalized=!0,R._$litElement$=!0,(Z=globalThis.litElementHydrateSupport)===null||Z===void 0||Z.call(globalThis,{LitElement:R});const vt=globalThis.litElementPolyfillSupport;vt==null||vt({LitElement:R});((Q=globalThis.litElementVersions)!==null&&Q!==void 0?Q:globalThis.litElementVersions=[]).push("3.2.0");var be=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,_t=(i,t,e,s)=>{for(var n=s>1?void 0:s?Ce(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&be(t,e,n),n};function Ht(i){class t extends i{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return this.dir==="ltr"}}return _t([j({type:Object})],t.prototype,"options",2),_t([j({reflect:!0})],t.prototype,"dir",2),t}class we extends Ht(R){constructor(t){super(),this.registry=Object.freeze(t)}}function Se(i,t,e){return Object.defineProperty(t.prototype,"options",{enumerable:!0,value:e}),window.customElements.define(i,t),t}exports.ComponentElement=we;exports.ComponentMixin=Ht;exports.EventController=Ae;exports.classMap=ie;exports.createRef=ue;exports.customElement=kt;exports.defineWebComponent=Se;exports.eventOptions=Lt;exports.html=Kt;exports.ifDefined=Qt;exports.isEmpty=_e;exports.isNil=fe;exports.live=ae;exports.noChange=f;exports.nothing=v;exports.property=j;exports.query=jt;exports.queryAll=Dt;exports.queryAssignedElements=ft;exports.queryAssignedNodes=Vt;exports.queryAsync=zt;exports.ref=$e;exports.render=Et;exports.repeat=ee;exports.state=It;exports.styleMap=se;exports.svg=Yt;exports.uniqueID=ve;exports.until=ce;
//# sourceMappingURL=wbs-ui-common.cjs.js.map