import { useEffect, useRef } from "react";

export function useResizeListener(callback: () => void) {
	const resizeListener = useRef<() => void>();

	useEffect(() => {
		resizeListener.current = callback;
		window.addEventListener("resize", callback);

		return () => {
			if (resizeListener.current) window.removeEventListener("resize", resizeListener.current);
			resizeListener.current = undefined;
			window.removeEventListener("resize", callback);
		};
	}, [callback]);
}
