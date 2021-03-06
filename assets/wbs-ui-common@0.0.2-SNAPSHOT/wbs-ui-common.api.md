## API Report File for "@websublime/wbs-ui-common"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

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

// @public (undocumented)
export class ComponentElement extends ComponentMixin<
Constructor<ReactiveElement>
>(LitElement) {
    constructor(registry: ComponentMetadata) {
        super();

        this.registry = Object.freeze(registry);
        this.dataset.qa = registry.qa;
    }

    // (undocumented)
    inspect: boolean;

    // (undocumented)
    public registry: ComponentMetadata;
}

// @public (undocumented)
export interface ComponentMetadata {
    // (undocumented)
    description: string;
    // (undocumented)
    link: string;
    // (undocumented)
    name: string;
    // (undocumented)
    qa: string;
    // (undocumented)
    scope: string;
    // (undocumented)
    version: string;
}

// @public (undocumented)
export function ComponentMixin<T extends Constructor<ReactiveElement>>(
constructor: T
): T & Constructor<ComponentMixinInterface> {
    // (undocumented)
    export class SuperElement extends constructor {
        // (undocumented)
        @property({ reflect: true })
        public dir: 'ltr' | 'rtl' = 'ltr';

        // (undocumented)
        @property({ reflect: true, type: Boolean })
        public inspect = false;

        // (undocumented)
        public get isLTR(): boolean {
            return this.dir === 'ltr';
        }

        set options(options: WebComponentOptions) {
            const // (undocumented)
            oldValue = {
                ...this.settings,
                ...this._options
            };

            this._options = {
                ...this.settings,
                ...options
            };

            this.requestUpdate('options', oldValue);
        }

        // (undocumented)
        @property({ type: Object })
        get options() {
            return this._options ?? this.settings;
        }

        // (undocumented)
        protected _options!: WebComponentOptions;

        // (undocumented)
        readonly settings!: WebComponentOptions;
    }

    return SuperElement;
}

// @public (undocumented)
export interface ComponentMixinInterface {
    // (undocumented)
    dir: 'ltr' | 'rtl';
    // (undocumented)
    inspect: boolean;
    // (undocumented)
    isLTR: boolean;
    // (undocumented)
    options: WebComponentOptions;
    // (undocumented)
    readonly settings: WebComponentOptions;
}

// @public (undocumented)
export type Constructor<T = Record<string, unknown>> = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new (...arguments_: any[]): T;
    prototype: T;
};

export { createRef }

export { customElement }

// @public
export function defineWebComponent<WebComponent extends ComponentElement>(
name: string,
component: new () => WebComponent,
options: WebComponentOptions = {}
): new () => WebComponent {
    Object.defineProperty(component.prototype, 'settings', {
        enumerable: true,
        value: options,
        writable: true
    });

    window.customElements.define(name, component);

    return component;
}

export { DirectiveParent }

export { Disconnectable }

export { ElementPart }

// @public (undocumented)
export class EventController {
    constructor(host: ReactiveControllerHost) {
        this.host = host;

        host.addController(this as any);
    }

    // (undocumented)
    async notify(dispatcher: (resolved: boolean) => void) {
        const // (undocumented)
        resolved = await this.host.updateComplete;

        dispatcher(resolved);
    }
}

export { eventOptions }

export { EventPart }

export { html }

export { HTMLTemplateResult }

export { ifDefined }

export { InternalPropertyDeclaration }

// @public
export const isEmpty = (obj: any) =>
[Object, Array].includes((obj || {}).constructor) &&
!Object.entries(obj || {}).length;

// @public
export const isNil = (value: any) => value === null || value === undefined;

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

// @public (undocumented)
export type Sizes = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export { state }

export { StyleInfo }

export { styleMap }

export { svg }

export { SVGTemplateResult }

export { TemplateResult }

// @public
export const uniqueID = () => {
    const // (undocumented)
    head = Date.now().toString(36);
    const // (undocumented)
    tail = Math.random().toString(36).substr(2);

    return head + tail;
};

export { until }

// @public (undocumented)
export type ValueOf<T = unknown> = T[keyof T];

export { ValueSanitizer }

// @public (undocumented)
export interface WebComponentOptions {
    // eslint-disable-next-line no-use-before-define
    // (undocumented)
    [key: string]: unknown;
}

// (No @packageDocumentation comment for this package)

```
