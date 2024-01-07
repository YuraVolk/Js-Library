import { SelectInternalItem } from "shared/component/customSelect";
import { GenericReactComponentProps } from "../generic/classNameFallthrough";

export interface CustomSelectReactConfiguration extends GenericReactComponentProps {
    items: SelectInternalItem[];
    selectName: string;
    onChange?(element: SelectInternalItem): void;
}
