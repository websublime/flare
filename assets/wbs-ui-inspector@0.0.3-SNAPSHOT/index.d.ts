import { ComponentElement } from '@websublime/wbs-ui-common';
import { ComponentMetadata } from '@websublime/wbs-ui-common';
import { Ref } from '@websublime/wbs-ui-common';
import { TemplateResult } from 'lit-html';
import { WebComponentOptions } from '@websublime/wbs-ui-common';

/**
 * @public
 */
export declare const registerInspectorComponent: (options?: WsInspectorOptions, name?: string) => new () => WsInspector;

/**
 * Inspector component element
 */
export declare class WsInspector extends ComponentElement {
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    el: {
        element: Ref<HTMLElement>;
        registry: ComponentMetadata;
    };
    /**
     * Element id
     */
    private identifier;
    constructor();
    connectedCallback(): void;
    private createSurroundingElement;
    render(): TemplateResult<1>;
}

declare interface WsInspectorOptions extends WebComponentOptions {
    className?: string[];
    enabled?: boolean;
}

export { }
