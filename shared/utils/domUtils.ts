export const getFirstScrollableParent = (node: HTMLElement, isHorizontal: boolean): HTMLElement | Window => {
	if (node.parentElement == null) return window;
	const { overflowX, overflowY, overflow } = window.getComputedStyle(node.parentElement);
	const regex = /auto|scroll/;
	if (regex.test(overflow) || (isHorizontal && regex.test(overflowX)) || (!isHorizontal && regex.test(overflowY)))
		return node.parentElement;
	return getFirstScrollableParent(node.parentElement, isHorizontal);
};
