import { AutocompleteListConfiguration } from "shared/component/autocompleteList";
import { WithChildren } from "../../utils/utils";

export interface AutocompleteListReactConfiguration extends WithChildren<AutocompleteListConfiguration> {
    inputValue: string;
    changeInputValue(value: string): void;
}
