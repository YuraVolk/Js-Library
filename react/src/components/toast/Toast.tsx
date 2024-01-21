import React, { useEffect, useRef } from "react";
import { ToastConfiguration } from "../../interfaces/component/toast";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

export const Toast = ({ isOpen, autoCloseDelay, closeToast, ...props }: ToastConfiguration) => {
	const timeout = useRef<number>();

	useEffect(() => {
		if (!autoCloseDelay || !isOpen) return;
		timeout.current = window.setTimeout(() => {
			closeToast?.();
			timeout.current = undefined;
		}, autoCloseDelay);

		return () => {
			window.clearTimeout(timeout.current);
		};
	}, [autoCloseDelay, closeToast, isOpen]);

	return createPortal(
		<CSSTransition timeout={props.animationDuration} in={isOpen} unmountOnExit classNames={props.classes}>
			{props.children}
		</CSSTransition>,
		document.body
	);
};
