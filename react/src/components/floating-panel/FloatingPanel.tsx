import React, { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { ReactFloatingPanelConfiguration } from "../../interfaces/component/floatingPanel";
import { FloatingPanelInternalSettings } from "shared/component/floatingPanel";

export const FloatingPanel = (props: ReactFloatingPanelConfiguration) => {
	const panel = useRef<HTMLDivElement>(null);
	const [panelProperties, setPanelProperties] = useState<FloatingPanelInternalSettings>({
		panelX: panel.current?.offsetLeft ?? 0,
		panelY: panel.current?.offsetTop ?? 0,
		clientX: 0,
		clientY: 0,
		dragging: false
	});
	const [panelStyles, setPanelStyles] = useState<CSSProperties>({});

	const changePosition = useCallback(
		({ clientX, clientY }: MouseEvent) => {
			if (!panelProperties.dragging || !props.isOpen) return;
			setPanelStyles({
				left: panelProperties.panelX + clientX - panelProperties.clientX + "px",
				top: panelProperties.panelY + clientY - panelProperties.clientY + "px"
			});
		},
		[
			panelProperties.clientX,
			panelProperties.clientY,
			panelProperties.dragging,
			panelProperties.panelX,
			panelProperties.panelY,
			props.isOpen
		]
	);

	const onMouseDown = useCallback(
		({ clientX, clientY }: MouseEvent) => {
			if (!panel.current || !props.isOpen) return;
			setPanelProperties((panelProperties) => ({
				panelX: panel.current?.offsetLeft ?? panelProperties.panelX,
				panelY: panel.current?.offsetTop ?? panelProperties.panelY,
				clientX,
				clientY,
				dragging: true
			}));
		},
		[props.isOpen]
	);

	const onMouseUp = useCallback(() => {
		setPanelProperties((panelProperties) => ({
			...panelProperties,
			dragging: false
		}));
	}, []);

	useEffect(() => {
		window.addEventListener("mouseup", onMouseUp, false);
		document.addEventListener("mousedown", onMouseDown);

		return () => {
			window.removeEventListener("mouseup", onMouseUp, false);
			document.removeEventListener("mousedown", onMouseDown);
		};
	}, [onMouseDown, onMouseUp]);

	if (!props.isOpen) return null;
	return (
		<div
			className={props.className}
			ref={panel}
			onMouseMove={(e) => {
				changePosition(e.nativeEvent);
			}}
			style={panelStyles}
		>
			{props.children}
		</div>
	);
};
