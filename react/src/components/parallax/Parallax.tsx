import React, { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { ParallaxConfiguration } from "../../interfaces/component/parallax";
import { getFirstScrollableParent } from "shared/utils/domUtils";
import cssStyles from "./Parallax.module.css";

export const Parallax = ({
	isHorizontal = false,
	isHorizontalTranslation = false,
	effect = 1.968,
	speed = 2.7,
	margin = 0,
	...props
}: Partial<ParallaxConfiguration>) => {
	const wrap = useRef<HTMLDivElement>(null);
	const scrollListener = useRef<EventListener | undefined>();
	const [styles, setStyles] = useState<CSSProperties>({});

	const rerender = useCallback(() => {
		if (!wrap.current) return;
		const parent = getFirstScrollableParent(wrap.current, isHorizontal);
		if (scrollListener.current) parent.removeEventListener("scroll", scrollListener.current);
		const getScrollPoint = (parent: HTMLElement | Window) => {
			if (parent instanceof HTMLElement) {
				return isHorizontal ? parent.scrollLeft : parent.scrollTop;
			} else return isHorizontal ? parent.scrollX : parent.scrollY;
		};

		const animationOffset = wrap.current.getBoundingClientRect()[isHorizontal ? "left" : "top"] + getScrollPoint(parent);
		const innerHeight =
			(parent instanceof HTMLElement
				? isHorizontal
					? parent.clientWidth
					: parent.clientHeight
				: isHorizontal
				? parent.innerWidth
				: parent.innerHeight) / effect;

		const scrollEventListener = () => {
			if (!wrap.current) return;
			const scrollPoint = getScrollPoint(getFirstScrollableParent(wrap.current, isHorizontal));
			if (scrollPoint > animationOffset - innerHeight * 2 && scrollPoint < animationOffset + innerHeight) {
				const point = (scrollPoint - (animationOffset - innerHeight)) / speed - margin;
				setStyles({ transform: `translate${isHorizontalTranslation ? "X" : "Y"}(${point}px)` });
			}
		};

		scrollListener.current = scrollEventListener;
		parent.addEventListener("scroll", scrollEventListener, { passive: true });
		scrollEventListener();
	}, [effect, isHorizontal, isHorizontalTranslation, margin, speed]);

	useEffect(() => {
		rerender();
		window.addEventListener("resize", rerender);

		return () => {
			window.removeEventListener("resize", rerender);
		};
	}, [rerender]);

	return (
		<div className={`${cssStyles.wrap} ${props.className ?? ""}`} ref={wrap} style={styles}>
			{props.children}
		</div>
	);
};
