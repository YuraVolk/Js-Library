import React, { useRef } from "react";
import { useLinkedItem } from "../../../src/interfaces/hooks/useLinkedItem";
import styles from "./ZoomingImage.module.css";
import { MagnifiersGlassConfiguration } from "../../interfaces/generic/magnifiers";

export const ZoomingImageGlass = (props: MagnifiersGlassConfiguration) => {
	const item = useRef<HTMLDivElement>(null);
	const styleObject = useLinkedItem(() => "zooming-image-glass", item);

	return (
		<div
			ref={item}
			style={styleObject}
			className={`${styles["zooming-image-glass"]} ${props.className ?? ""}`}
			onPointerMove={(e) => {
				props.onGlassMove(e);
			}}
			onMouseMove={(e) => {
				props.onGlassMove(e);
			}}
		>
			{props.children}
		</div>
	);
};
