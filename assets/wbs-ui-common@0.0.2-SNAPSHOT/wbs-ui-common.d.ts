import { AttributePart } from 'lit/html.js';
import { BooleanAttributePart } from 'lit/html.js';
import { ChildPart } from 'lit/html.js';
import { classMap } from 'lit/directives/class-map.js';
import { CompiledTemplate } from 'lit/html.js';
import { CompiledTemplateResult } from 'lit/html.js';
import { createRef } from 'lit/directives/ref.js';
import { customElement } from 'lit/decorators.js';
import { DirectiveParent } from 'lit/html.js';
import { Disconnectable } from 'lit/html.js';
import { ElementPart } from 'lit/html.js';
import { eventOptions } from 'lit/decorators.js';
import { EventPart } from 'lit/html.js';
import { html } from 'lit/html.js';
import { HTMLTemplateResult } from 'lit/html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { InternalPropertyDeclaration } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { noChange } from 'lit/html.js';
import { nothing } from 'lit/html.js';
import { Part } from 'lit/html.js';
import { property } from 'lit/decorators.js';
import { PropertyPart } from 'lit/html.js';
import { query } from 'lit/decorators.js';
import { queryAll } from 'lit/decorators.js';
import { queryAssignedElements } from 'lit/decorators.js';
import { QueryAssignedElementsOptions } from 'lit/decorators.js';
import { queryAssignedNodes } from 'lit/decorators.js';
import { QueryAssignedNodesOptions } from 'lit/decorators.js';
import { queryAsync } from 'lit/decorators.js';
import { ReactiveControllerHost } from 'lit';
import { ReactiveElement } from 'lit';
import { Ref } from 'lit/directives/ref.js';
import { ref } from 'lit/directives/ref.js';
import { RefDirective } from 'lit/directives/ref.js';
import { RefOrCallback } from 'lit/directives/ref.js';
import { render } from 'lit/html.js';
import { RenderOptions } from 'lit/html.js';
import { repeat } from 'lit/directives/repeat.js';
import { RootPart } from 'lit/html.js';
import { SanitizerFactory } from 'lit/html.js';
import { state } from 'lit/decorators.js';
import { StyleInfo } from 'lit/directives/style-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { svg } from 'lit/html.js';
import { SVGTemplateResult } from 'lit/html.js';
import { TemplateResult } from 'lit/html.js';
import { until } from 'lit/directives/until.js';
import { ValueSanitizer } from 'lit/html.js';

export { AttributePart }

export { BooleanAttributePart }

export { ChildPart }

export { classMap }

export { CompiledTemplate }

export { CompiledTemplateResult }

/**
 * @public
 */
export declare class ComponentElement extends ComponentMixin<
Constructor<ReactiveElement>
>(LitElement) {
    public registry: ComponentMetadata;

    constructor(registry: ComponentMetadata) {
        super();

        this.registry = Object.freeze(registry);
    }
}

export declare interface ComponentMetadata {
    description: string;
    link: string;
    name: string;
    qa: string;
    scope: string;
    version: string;
}

/**
 * @public
 */
export declare function ComponentMixin<T extends Constructor<ReactiveElement>>(
constructor: T
): T & Constructor<ComponentMixinInterface> {
    export class SuperElement extends constructor {
        // TODO: merge options from defineWebComponent
        @property({ type: Object })
        options!: WebComponentOptions;

        /**
         * @private
         */
        @property({ reflect: true })
        public dir: 'ltr' | 'rtl' = 'ltr';

        /**
         * @private
         */
        public get isLTR(): boolean {
            return this.dir === 'ltr';
        }
    }

    return SuperElement;
}

export declare interface ComponentMixinInterface {
    options: WebComponentOptions;
    isLTR: boolean;
    dir: 'ltr' | 'rtl';
}

export declare type Constructor<T = Record<string, unknown>> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...arguments_: any[]): T;
    prototype: T;
};

export { createRef }

export { customElement }

/**
 * Register a custom element Lit class component
 *
 * @public
 */
export declare function defineWebComponent<WebComponent extends ComponentElement>(
name: string,
component: new () => WebComponent,
options?: WebComponentOptions
): new () => WebComponent {
    Object.defineProperty(component.prototype, 'options', {
        enumerable: true,
        value: options
    });

    window.customElements.define(name, component);

    return component;
}

export { DirectiveParent }

export { Disconnectable }

export { ElementPart }

/**
 * @public
 */
export declare class EventController {
    private host: ReactiveControllerHost;

    constructor(host: ReactiveControllerHost) {
        this.host = host;

        host.addController(this as any);
    }

    async notify(dispatcher: (resolved: boolean) => void) {
        const resolved = await this.host.updateComplete;

        dispatcher(resolved);
    }
}

export { eventOptions }

export { EventPart }

export { html }

export { HTMLTemplateResult }

export { ifDefined }

export { InternalPropertyDeclaration }

/**
 * Checks if value is an empty object or collection.
 *
 * @public
 */
export declare const isEmpty = (obj: any) =>
[Object, Array].includes((obj || {}).constructor) &&
!Object.entries(obj || {}).length;

/**
 * Checks if value is null or undefined.
 *
 * @public
 */
export declare const isNil = (value: any) => value === null || value === undefined;

export { live }

export { noChange }

export { nothing }

export { Part }

export { property }

export { PropertyPart }

export { query }

export { queryAll }

export { queryAssignedElements }

export { QueryAssignedElementsOptions }

export { queryAssignedNodes }

export { QueryAssignedNodesOptions }

export { queryAsync }

export { Ref }

export { ref }

export { RefDirective }

export { RefOrCallback }

export { render }

export { RenderOptions }

export { repeat }

export { RootPart }

export { SanitizerFactory }

export declare type Sizes = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export { state }

export { StyleInfo }

export { styleMap }

export { svg }

export { SVGTemplateResult }

export { TemplateResult }

/**
 * Creates a unique identifier
 *
 * @public
 */
export declare const uniqueID = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substr(2);

    return head + tail;
};

export { until }

export declare type ValueOf<T = unknown> = T[keyof T];

export { ValueSanitizer }

export declare interface WebComponentOptions {
    // eslint-disable-next-line no-use-before-define
    [key: string]: unknown;
}

export { }
