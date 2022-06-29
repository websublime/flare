import { ComponentElement, createRef, uniqueID, ref, defineWebComponent } from "@websublime/wbs-ui-common";
import { LitElement, html } from "lit";
const version = "0.0.2";
const metadata = {
  description: "Header container component",
  link: "https://cdn.websublime.dev",
  name: "ws-header",
  qa: "ws-ui-header",
  scope: "@websublime/wbs-ui-header",
  version
};
class WsHeader extends ComponentElement {
  constructor() {
    super(metadata);
    this.elRef = createRef();
    this.identifier = uniqueID();
    const classes = this.options.className;
    this.classList.add(...classes);
  }
  get element() {
    return { element: this.elRef, registry: this.registry };
  }
  render() {
    return html`
      <ws-inspector .el=${this.element} .inspect=${this.inspect}></ws-inspector>
      <header id=${this.identifier} ${ref(this.elRef)}>
        <slot name="slogan"></slot>
        <slot name="menu"></slot>
        <slot></slot>
        <slot name="extra"></slot>
      </header>
    `;
  }
}
WsHeader.shadowRootOptions = {
  ...LitElement.shadowRootOptions,
  delegatesFocus: true
};
const registerComponent = (options = {}, name = "ws-header") => defineWebComponent(name, WsHeader, { className: ["ws-header"], ...options });
registerComponent();
export { WsHeader, registerComponent as registerHeaderComponent };
//# sourceMappingURL=wbs-ui-header.es.js.map
