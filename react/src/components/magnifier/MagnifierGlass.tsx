import React, { useRef } from "react";
import { useLinkedItem } from "../../../src/interfaces/hooks/useLinkedItem";
import styles from "./Magnifier.module.css";
import { MagnifiersGlassConfiguration } from "../../interfaces/generic/magnifiers";

export const MagnifierGlass = (props: MagnifiersGlassConfiguration) => {
	const item = useRef<HTMLDivElement>(null);
	const styleObject = useLinkedItem(() => "magnifier-glass", item);

	return (
		<div
			ref={item}
			style={styleObject}
			className={`${styles["magnifier-glass"]} ${props.className ?? ""}`}
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
