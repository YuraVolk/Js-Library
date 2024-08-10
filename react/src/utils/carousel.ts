import React, { Children } from "react";
import { getCurrentItemInfo } from "shared/utils/carousel";
 
export interface GetCurrentItemInfoProps {
	children: React.ReactNode;
	currentItem: number;
}

export const getCurrentItemCallback = ({ children, currentItem }: GetCurrentItemInfoProps) => {
	const childrenLength = Children.count(children);
	return getCurrentItemInfo({ childrenLength, currentItem });
};
