import { ImageComparisonData } from "shared/component/imageComparator";
import React, { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { WithChildren } from "../../utils/utils";
import { ExposedContextFunctions, ContextLinkedItems } from "../../interfaces/hooks/useLinkedItem";
import styles from "./ImageComparator.module.css";
import { assertNonUndefined } from "shared/utils/utils";
import { GenericReactComponentProps } from "../../interfaces/generic/classNameFallthrough";

export const ImageComparator = (props: WithChildren<object> & GenericReactComponentProps) => {
	const linkedItemsContext = useRef<ExposedContextFunctions | null>(null);
	const [imageData, setImageData] = useState<Record<string, ImageComparisonData<CSSProperties>>>({});
	const clickedElement = Object.keys(linkedItemsContext.current?.getState() ?? []).find((key) => imageData[key].isClicked);

	const slide = useCallback((elementKey: string, difference: number) => {
		linkedItemsContext.current?.updateState((elements) => ({
			...elements,
			[elementKey]: {
				...elements[elementKey],
				styles: {
					width: String(difference) + "px"
				}
			}
		}));

		setImageData((imageData) => ({
			...imageData,
			[elementKey]: {
				...imageData[elementKey],
				style: {
					left: String(difference) + "px"
				}
			}
		}));
	}, []);

	const onMouseStart = useCallback((event: Event, elementKey: string) => {
		event.preventDefault();
		setImageData((imageData) => ({
			...imageData,
			[elementKey]: {
				...imageData[elementKey],
				isClicked: true
			}
		}));
	}, []);

	const onMouseMove = useCallback(
		(event: MouseEvent | PointerEvent) => {
			if (!clickedElement || !linkedItemsContext.current) return;
			const { element } = linkedItemsContext.current.getState()[clickedElement];
			assertNonUndefined(element.current);
			linkedItemsContext.current.updateState((elements) => ({
				...elements,
				[clickedElement]: {
					...elements[clickedElement],
					styles: {
						left: "0"
					}
				}
			}));

			let pos = event.pageX - element.current.getBoundingClientRect().left - window.scrollX;
			if (pos < 0) pos = 0;
			if (pos > imageData[clickedElement].offsetWidth) {
				pos = imageData[clickedElement].offsetWidth;
			}

			slide(clickedElement, pos);
		},
		[clickedElement, linkedItemsContext, imageData, slide]
	);

	const onMouseUp = useCallback(() => {
		setImageData((imageData) => {
			const newImageData = { ...imageData };
			for (const key of Object.keys(newImageData)) {
				newImageData[key] = {
					...newImageData[key],
					isClicked: false
				};
			}

			return newImageData;
		});
	}, []);

	const setup = useCallback(() => {
		assertNonUndefined(linkedItemsContext.current);
		Object.entries(linkedItemsContext.current.getState()).forEach(([key, { element }], index, arr) => {
			const offsetWidth = element.current?.offsetWidth;
			assertNonUndefined(offsetWidth);
			setImageData((imageData) => ({
				...imageData,
				[key]: {
					isClicked: false,
					offsetWidth,
					style: {}
				}
			}));
			slide(key, offsetWidth - (offsetWidth / arr.length) * index);
		});
	}, [slide]);

	useEffect(() => {
		window.addEventListener("mouseup", onMouseUp, { passive: true });
		window.addEventListener("pointerup", onMouseUp, { passive: true });
		window.addEventListener("mousemove", onMouseMove, { passive: true });
		window.addEventListener("pointermove", onMouseMove, { passive: true });

		return () => {
			window.removeEventListener("mouseup", onMouseUp);
			window.removeEventListener("pointerup", onMouseUp);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("pointermove", onMouseMove);
		};
	}, [onMouseMove, onMouseUp]);

	return (
		<ContextLinkedItems ref={linkedItemsContext} innerChildren={props.children} onAllElementsLoaded={setup}>
			<ul className={`${styles.wrap} ${props.className ?? ""}`}>
				{props.children}
				{Object.keys(linkedItemsContext.current?.getState() ?? [undefined])
					.slice(1)
					.map((elementKey) => (
						<div
							className={styles["comparison-slider"]}
							key={elementKey}
							style={imageData[elementKey].style}
							onMouseDown={(e) => {
								onMouseStart(e.nativeEvent, elementKey);
							}}
							onPointerDown={(e) => {
								onMouseStart(e.nativeEvent, elementKey);
							}}
						></div>
					))}
			</ul>
		</ContextLinkedItems>
	);
};
