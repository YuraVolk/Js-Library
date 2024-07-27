import React, { Children } from "react";

export interface GetCurrentItemInfoProps {
	children: React.ReactNode;
	currentItem: number;
}

export const getCurrentItemCallback = ({ children, currentItem }: GetCurrentItemInfoProps) => {
	const childrenLength = Children.count(children);
	let realCurrentItem = currentItem % childrenLength;
	if (realCurrentItem < 0) {
		realCurrentItem = childrenLength - Math.abs(realCurrentItem);
	}

	return {
		getCurrentItem: (i: number) => {
			const currentItemOffset = currentItem - (childrenLength - 1);
			if (currentItemOffset && currentItemOffset % childrenLength === 0) {
				return Math.floor(currentItemOffset / childrenLength) * childrenLength + i;
			} else if (currentItemOffset) {
				return (Math.floor(currentItemOffset / childrenLength) + 1) * childrenLength + i;
			} else return i;
		},
		realCurrentItem,
		childrenLength
	};
};
