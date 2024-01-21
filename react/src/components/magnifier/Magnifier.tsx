import React, { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { ContextLinkedItems, ExposedContextFunctions } from "../../interfaces/hooks/useLinkedItem";
import { assertNonUndefined } from "shared/utils/utils";
import styles from "./Magnifier.module.css";
import { MagnifiersExposedFunctions, MagnifiersConfiguration } from "../../interfaces/generic/magnifiers";
import { MagnifierConfiguration } from "shared/component/magnifier";

const Magnifier = forwardRef<MagnifiersExposedFunctions, MagnifiersConfiguration<MagnifierConfiguration>>(
	({ zoomScale = 2, ...props }, ref) => {
		const linkedItemsContext = useRef<ExposedContextFunctions | null>(null);
		const image = useRef<HTMLDivElement>(null);

		const moveMagnifier = useCallback((x: number, y: number) => {
			if (!image.current) return;
			const glass = linkedItemsContext.current?.getState()?.["magnifier-glass"];
			assertNonUndefined(glass);
			const element = glass.element.current;
			assertNonUndefined(element);

			const width = element.offsetWidth / 2,
				height = element.offsetHeight / 2;
			if (x > image.current.offsetWidth) {
				x = image.current.offsetWidth;
			} else if (x < 0) x = 0;
			if (y > image.current.offsetHeight) {
				y = image.current.offsetHeight;
			} else if (y < 0) y = 0;

			linkedItemsContext.current?.updateState({
				"magnifier-glass": {
					...glass,
					styles: {
						...glass.styles,
						left: `${x - width}px`,
						top: `${y - height}px`,
						backgroundPosition: "-" + (x * zoomScale - width) + "px -" + (y * zoomScale - height) + "px"
					}
				}
			});
		}, [zoomScale]);

		const onMouseMove = useCallback((event: React.MouseEvent) => {
            if (!image.current) return;
            event.preventDefault();
            const rect = image.current.getBoundingClientRect();
            moveMagnifier(event.pageX - rect.left - window.scrollX, event.pageY - rect.top - window.scrollY);
        }, [moveMagnifier]);

		const setup = useCallback(() => {
			if (!image.current) return;
			linkedItemsContext.current?.updateState((elements) => {
				assertNonUndefined(image.current);
				return {
					"magnifier-glass": {
						...elements["magnifier-glass"],
						styles: {
							backgroundImage: `url("${props.imageSource}")`,
							backgroundSize: `${image.current.offsetWidth * zoomScale}px ${image.current.offsetHeight * zoomScale}px`
						}
					}
				};
			});
		}, [props.imageSource, zoomScale]);

		useImperativeHandle(ref, () => ({
			onMouseMove(event) {
				onMouseMove(event);
			}
		}));

		return (
			<ContextLinkedItems ref={linkedItemsContext} innerChildren={props.glassChildren} onAllElementsLoaded={setup}>
				<div className={`${styles.magnifier} ${props.className ?? ""}`}>
					<div className={styles.magnifier__image} onMouseMove={onMouseMove} ref={image}>
						{props.imageChildren}
					</div>
					{props.glassChildren}
				</div>
			</ContextLinkedItems>
		);
	}
);

export { Magnifier };
