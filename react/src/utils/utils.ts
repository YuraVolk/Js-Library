import { GenericReactComponentProps } from "../interfaces/generic/classNameFallthrough";

export type WithChildren<T> = WithGenerics<T> & {
	children: React.ReactNode;
};

export type WithGenerics<T> = T & GenericReactComponentProps;
