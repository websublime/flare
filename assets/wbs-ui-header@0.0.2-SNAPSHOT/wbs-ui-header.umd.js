(function(e,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("@websublime/wbs-ui-common"),require("lit")):typeof define=="function"&&define.amd?define(["exports","@websublime/wbs-ui-common","lit"],t):(e=typeof globalThis!="undefined"?globalThis:e||self,t(e["wbs-ui-header"]={},e.wbsUiCommon,e.lit))})(this,function(e,t,n){"use strict";const d={description:"Header container component",link:"https://cdn.websublime.dev",name:"ws-header",qa:"ws-ui-header",scope:"@websublime/wbs-ui-header",version:"0.0.2"};class s extends t.ComponentElement{constructor(){super(d),this.elRef=t.createRef(),this.identifier=t.uniqueID();const i=this.options.className;this.classList.add(...i)}get element(){return{element:this.elRef,registry:this.registry}}render(){return n.html`
      <ws-inspector .el=${this.element} .inspect=${this.inspect}></ws-inspector>
      <header id=${this.identifier} ${t.ref(this.elRef)}>
        <slot name="slogan"></slot>
        <slot name="menu"></slot>
        <slot></slot>
        <slot name="extra"></slot>
      </header>
    `}}s.shadowRootOptions={...n.LitElement.shadowRootOptions,delegatesFocus:!0};const o=(r={},i="ws-header")=>t.defineWebComponent(i,s,{className:["ws-header"],...r});o(),e.WsHeader=s,e.registerHeaderComponent=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=wbs-ui-header.umd.js.map
