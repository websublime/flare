import { ComponentElement } from '@websublime/wbs-ui-common';
import { ComponentMetadata } from '@websublime/wbs-ui-common';
import { Ref } from '@websublime/wbs-ui-common';
import { TemplateResult } from 'lit-html';
import { WebComponentOptions } from '@websublime/wbs-ui-common';

/**
 * @public
 */
export declare const registerHeaderComponent: (options?: WsHeaderOptions, name?: string) => new () => WsHeader;

/**
 * Header component element
 */
export declare class WsHeader extends ComponentElement {
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    elRef: Ref<HTMLHeadingElement>;
    /**
     * Element id
     */
    private identifier;
    get element(): {
        element: Ref<HTMLHeadingElement>;
        registry: ComponentMetadata;
    };
    constructor();
    render(): TemplateResult<1>;
}

declare interface WsHeaderOptions extends WebComponentOptions {
    className?: string[];
}

export { }
