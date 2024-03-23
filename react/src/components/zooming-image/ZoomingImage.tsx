import React, { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { ContextLinkedItems, ExposedContextFunctions } from "../../interfaces/hooks/useLinkedItem";
import styles from "./ZoomingImage.module.css";
import { MagnifiersExposedFunctions, MagnifiersConfiguration } from "react/src/interfaces/generic/magnifiers";
import { ZoomingImageConfiguration } from "shared/component/zoomingImage";
import { assertNonUndefined } from "shared/utils/utils";

const ZoomingImage = forwardRef<MagnifiersExposedFunctions, MagnifiersConfiguration<Partial<ZoomingImageConfiguration>>>(
	({ moveRatio = 0.15, backgroundShift = 9, positionShift = 34, ...props }, ref) => {
		const elements = useRef<ExposedContextFunctions | null>(null);
		const wrap = useRef<HTMLDivElement>(null);

		const onMouseMove = useCallback(
			(event: React.MouseEvent<HTMLElement>) => {
				if (!wrap.current || !elements.current?.wasSetupPerformed()) return;
				const { top, left } = wrap.current.getBoundingClientRect();
				const x = event.nativeEvent.x - left,
					y = event.pageY - top;
				const { offsetWidth, offsetHeight } = wrap.current;
				let xMove = (x / offsetWidth) * 100,
					yMove = (y / offsetHeight) * 100;
				if (x >= 0.01 * offsetWidth) xMove += moveRatio * xMove;
				if (y >= 0.01 * offsetHeight) yMove += moveRatio * yMove;

				const zoomingImage = elements.current.getState()["zooming-image-glass"];
				assertNonUndefined(zoomingImage);
				elements.current.updateState({
					"zooming-image-glass": {
						...zoomingImage,
						styles: {
							backgroundPositionX: `${String(xMove - backgroundShift)}%`,
							backgroundPositionY: `${String(yMove - backgroundShift)}%`,
							left: `${String(x - positionShift)}px`,
							top: `${String(y - positionShift)}px`
						}
					}
				});
			},
			[backgroundShift, moveRatio, positionShift]
		);

		useImperativeHandle(ref, () => ({
			onMouseMove(event) {
				onMouseMove(event);
			}
		}));

		return (
			<ContextLinkedItems ref={elements} innerChildren={props.glassChildren}>
				<div className={`${styles.wrap} ${props.className ?? ""}`} ref={wrap} onMouseMove={onMouseMove} onPointerMove={onMouseMove}>
					{props.imageChildren}
					{props.glassChildren}
				</div>
			</ContextLinkedItems>
		);
	}
);

export { ZoomingImage };
