import React, { useContext } from "react";
import { FilteringContext } from "./context";

interface FilteringButtonProps {
	children?: React.ReactNode;
	filter?: unknown;
	className?: string;
}

export const FilteringButton = ({ filter, children, className }: FilteringButtonProps) => {
	const context = useContext(FilteringContext);

	return (
		<div
			className={className}
			onClick={() => {
				context.setContextActiveFilter(filter);
			}}
		>
			{children}
		</div>
	);
};
