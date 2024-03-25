import React, { useCallback, useRef } from "react";
import { GenericReactComponentProps } from "../../interfaces/generic/classNameFallthrough";
import { ContextLinkedItems, ExposedContextFunctions } from "../../interfaces/hooks/useLinkedItem";
import { WithChildren } from "../../utils/utils";
import { StickyHeaderConfiguration } from "shared/component/stickyHeader";
import { generateThreshold } from "shared/interfaces/intersectionObserved";
import { assertNonUndefined } from "shared/utils/utils";

export const StickyHeader = ({
	rootMargin = "0px",
	ratio = 0.25,
	...props
}: WithChildren<Partial<StickyHeaderConfiguration>> & GenericReactComponentProps) => {
	const headerElements = useRef<ExposedContextFunctions | null>(null);
	const outerWrap = useRef<HTMLDivElement>(null);
	const isFixed = useRef(false);
	const intersectionObserver = useRef<IntersectionObserver>();

	const setup = useCallback(() => {
		const wrap = headerElements.current?.getState()["sticky-header"];
		if (!wrap || !outerWrap.current) return;

		const intersectionObserverInstance = new IntersectionObserver(
			([entry]) => {
				if (!outerWrap.current) return;

				if (entry.intersectionRatio <= ratio && !isFixed.current) {
					isFixed.current = true;
					const { top, left, width, height } = wrap.element.current?.getBoundingClientRect() ?? {};
					assertNonUndefined(wrap.element.current);
					Object.assign(wrap.element.current.style, {
						...wrap.styles,
						position: "fixed",
						top: `${String(top)}px`,
						left: `${String(left)}px`,
						width: `${String(width)}px`,
						height: `${String(height)}px`,
						zIndex: 9999
					});

					wrap.element.current.getBoundingClientRect();
					headerElements.current?.updateState({
						"sticky-header": {
							element: wrap.element,
							styles: {
								position: "fixed",
								top: 0,
								left: 0,
								right: 0,
								width: "auto",
								height: "auto",
								zIndex: 9999
							}
						}
					});
				} else if (entry.intersectionRatio > ratio && isFixed.current) {
					isFixed.current = false;
					headerElements.current?.updateState({
						"sticky-header": {
							element: wrap.element,
							styles: {
								position: "static",
								top: "",
								left: "",
								right: "",
								width: "",
								height: "",
								zIndex: ""
							}
						}
					});
				}
			},
			{
				rootMargin,
				threshold: generateThreshold()
			}
		);
		intersectionObserverInstance.observe(outerWrap.current);
		intersectionObserver.current = intersectionObserverInstance;
	}, [ratio, rootMargin]);

	return (
		<ContextLinkedItems ref={headerElements} innerChildren={props.children} onAllElementsLoaded={setup}>
			<div className={props.className} ref={outerWrap}>
				{props.children}
			</div>
		</ContextLinkedItems>
	);
};
