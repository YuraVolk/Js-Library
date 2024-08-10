export interface GetCurrentItemInfoConfiguration {
	childrenLength: number;
	currentItem: number;
}

export const getCurrentItemInfo = ({ childrenLength, currentItem }: GetCurrentItemInfoConfiguration) => {
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
