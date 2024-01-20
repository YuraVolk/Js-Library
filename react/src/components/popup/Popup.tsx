import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PopupConfiguration, PopupExposedFunctions } from "../../interfaces/component/popup";
import styles from "./Popup.module.css";

const Popup = forwardRef<PopupExposedFunctions, Partial<PopupConfiguration>>(
	({ open = false, displayOpenButton = false, autoClosingTime, ...props }, ref) => {
		const timeout = useRef<number>();
		const [isOpen, setOpen] = useState(open);

		useEffect(() => {
			if (isOpen && autoClosingTime) {
				timeout.current = window.setTimeout(() => {
					setOpen(false);
				}, autoClosingTime);
			}

			return () => {
				window.clearTimeout(timeout.current);
			};
		}, [autoClosingTime, isOpen]);

		useImperativeHandle(ref, () => ({
			open() {
				setOpen(true);
			},
			close() {
				setOpen(false);
			}
		}));

		return (
			<>
				{isOpen && createPortal(<div className={styles.popup}>{props.children}</div>, document.body)}
				{displayOpenButton && (
					<div
						className={props.className}
						onClick={() => {
							setOpen(true);
						}}
					>
						{props.buttonChildren}
					</div>
				)}
			</>
		);
	}
);

export { Popup };
