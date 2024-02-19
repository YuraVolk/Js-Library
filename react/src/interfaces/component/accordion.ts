import {
	AccordionListConfiguration as RootListConfiguration,
	AccordionListItemConfiguration as RootListItemConfiguration
} from "shared/component/accordion";

export interface AccordionListConfiguration extends RootListConfiguration {
	expandedIndex: string | string[];
	expandIndex(index: string): void;
}

export interface AccordionListItemConfiguration extends RootListItemConfiguration {
	header: React.ReactNode;
	content: React.ReactNode;
}
