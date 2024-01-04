import { useCallback, useEffect, useRef } from "react";

export function useInterval(callback: () => void, timeout: number) {
    const interval = useRef<number>();

    const abortInterval = useCallback(() => {
        window.clearInterval(interval.current);
        interval.current = undefined;
    }, []);

    const restartInterval = useCallback(() => {
        interval.current = window.setInterval(callback, timeout);
    }, [callback, timeout]);

    useEffect(() => {
        restartInterval();

        return () => {
            abortInterval();
        };
    }, [restartInterval]);

    return { abortInterval, restartInterval };
}
