import { CountdownConfiguration, TimeUnit } from "shared/component/countdown";
import { GenericReactComponentProps } from "../generic/classNameFallthrough";

export interface CountdownReactConfiguration extends Partial<CountdownConfiguration>, GenericReactComponentProps {
    units?: TimeUnit[];
}
