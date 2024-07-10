import React, { useMemo, useState } from "react";
import { FilteringContext } from "./context";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { GenericReactComponentProps } from "react/src/interfaces/generic/classNameFallthrough";

interface FilteringWrapperProps<T> extends GenericReactComponentProps {
	activeFilter?: T;
	items: Array<{ filter: T; value: (itemsLength: number, i: number) => JSX.Element }>;
	duration?: number;
	children?: React.ReactNode;
}

export const FilteringWrapper = <T,>({ activeFilter, items, duration, children, className }: FilteringWrapperProps<T>) => {
	const [currentFilter, setCurrentFilter] = useState(activeFilter);
	const filteredItems = useMemo(() => {
		if (currentFilter === undefined) {
			return items;
		} else {
			return items.filter((item) => item.filter === currentFilter);
		}
	}, [items, currentFilter]);

	const context = useMemo<FilteringContext<T>>(
		() => ({
			contextActiveFilter: currentFilter,
			setContextActiveFilter: setCurrentFilter
		}),
		[currentFilter]
	);

	if (!duration) {
		return (
			<FilteringContext.Provider value={context}>
				{children}
				<ul className={className}>{filteredItems.map(({ value }, i, array) => value(array.length, i))}</ul>
			</FilteringContext.Provider>
		);
	}

	return (
		<FilteringContext.Provider value={context}>
			{children}
			<MotionConfig transition={{ duration }}>
				<motion.ul layout className={className}>
					<AnimatePresence>{filteredItems.map(({ value }, i, array) => value(array.length, i))}</AnimatePresence>
				</motion.ul>
			</MotionConfig>
		</FilteringContext.Provider>
	);
};
