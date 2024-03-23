import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { WithChildren } from "../../utils/utils";
import { ScrollingAdConfiguration } from "shared/component/scrollingAd";
import { GenericReactComponentProps } from "../../interfaces/generic/classNameFallthrough";
import { useInterval } from "../../interfaces/hooks/useInterval";
import { getFirstScrollableParent } from "shared/utils/domUtils";
import { generateThreshold } from "shared/interfaces/intersectionObserved";

export const ScrollingAd = ({
	rootMargin = 0,
	checkInterval = 0,
	...props
}: WithChildren<Partial<ScrollingAdConfiguration>> & GenericReactComponentProps) => {
	const [styles, setStyles] = useState<CSSProperties>({});
	const wrap = useRef<HTMLDivElement>(null);
	const intersectionObserver = useRef<IntersectionObserver>();

	useInterval(() => {
		if (!wrap.current) return;

		const scrollableParent = getFirstScrollableParent(wrap.current, false);
		const top = scrollableParent instanceof HTMLElement ? scrollableParent.scrollTop : scrollableParent.scrollY;
		setStyles({
			top: `${String(top + wrap.current.offsetHeight + rootMargin)}px`
		});
	}, checkInterval);

	useEffect(() => {
		if (!wrap.current) return;

		const intersectionObserverInstance = new IntersectionObserver(
			([entry]) => {
				if (!wrap.current) return;

				const scrollableParent = getFirstScrollableParent(wrap.current, false);
				if (entry.intersectionRatio < 1) {
					const top = scrollableParent instanceof HTMLElement ? scrollableParent.scrollTop : scrollableParent.scrollY;
					setStyles({
						top: `${String(top + wrap.current.offsetHeight + rootMargin)}px`
					});
				}
			},
			{
				rootMargin: `${String(rootMargin)}px`,
				threshold: generateThreshold()
			}
		);
		intersectionObserverInstance.observe(wrap.current);
		intersectionObserver.current = intersectionObserverInstance;

		return () => {
			intersectionObserverInstance.disconnect();
		};
	}, [rootMargin]);

	return (
		<div className={props.className} style={styles} ref={wrap}>
			{props.children}
		</div>
	);
};
