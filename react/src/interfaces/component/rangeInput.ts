import { CSSProperties } from "react";
import { RangeInputConfiguration } from "shared/component/rangeInput";
import { GenericReactComponentProps } from "../generic/classNameFallthrough";

export interface RangeInputReactConfiguration extends RangeInputConfiguration, GenericReactComponentProps {
	onUpdate?(value: number): void;
}

export interface RangeInputCSSVariableKeys extends CSSProperties {
	"--thumbSize": string;
	"--trackColor": string;
	"--thumbColor": string;
	"--hoverColor": string;
	"--activeColor": string;
	"--valueSize": string;
}

export interface RangeInputTickCSSVariableKeys extends CSSProperties {
	"--value": string;
}
