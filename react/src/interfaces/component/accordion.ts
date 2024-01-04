import { AccordionListConfiguration } from "shared/component/accordion";

export interface AccordionContextInterface extends AccordionListConfiguration {
    expandedIndex: string | string[];
    expandIndex(index: string): void;
}

export interface AccordionItemProps {
    isOpen?: boolean;
    header: React.ReactNode;
    content: React.ReactNode;
}
