import { ComponentElement } from '@websublime/wbs-ui-common';
import { ComponentMetadata } from '@websublime/wbs-ui-common';
import { Ref } from '@websublime/wbs-ui-common';
import { TemplateResult } from 'lit-html';

/**
 * Loader component element
 */
export declare class WsLoader extends ComponentElement {
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    elRef: Ref<HTMLHeadingElement>;
    name: string;
    scope: string;
    /**
     * Element id
     */
    private identifier;
    get element(): {
        element: Ref<HTMLHeadingElement>;
        registry: ComponentMetadata;
    };
    constructor();
    connectedCallback(): void;
    render(): TemplateResult<1>;
}

export { }
