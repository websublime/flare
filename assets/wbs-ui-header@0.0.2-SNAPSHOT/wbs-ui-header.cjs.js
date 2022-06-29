"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var e=require("@websublime/wbs-ui-common"),n=require("lit");const r="0.0.2",a={description:"Header container component",link:"https://cdn.websublime.dev",name:"ws-header",qa:"ws-ui-header",scope:"@websublime/wbs-ui-header",version:r};class t extends e.ComponentElement{constructor(){super(a),this.elRef=e.createRef(),this.identifier=e.uniqueID();const s=this.options.className;this.classList.add(...s)}get element(){return{element:this.elRef,registry:this.registry}}render(){return n.html`
      <ws-inspector .el=${this.element} .inspect=${this.inspect}></ws-inspector>
      <header id=${this.identifier} ${e.ref(this.elRef)}>
        <slot name="slogan"></slot>
        <slot name="menu"></slot>
        <slot></slot>
        <slot name="extra"></slot>
      </header>
    `}}t.shadowRootOptions={...n.LitElement.shadowRootOptions,delegatesFocus:!0};const o=(i={},s="ws-header")=>e.defineWebComponent(s,t,{className:["ws-header"],...i});o();exports.WsHeader=t;exports.registerHeaderComponent=o;
//# sourceMappingURL=wbs-ui-header.cjs.js.map
