import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

export const useStateWithCallback = <T>(initialValue: T | (() => T), callback?: (value: T) => void) => {
	const callbackRef = useRef<(value: T) => void>();
	const [value, setValue] = useState<T>(initialValue);

	useLayoutEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		if (callbackRef.current) {
			callbackRef.current(value);
			callbackRef.current = undefined;
		}
	}, [value]);

	const setValueCallback = useCallback((newValue: T | ((value: T) => T)) => {
		callbackRef.current = callback;
		return setValue(newValue);
	}, []);

	return [value, setValueCallback] as const;
};
