import { useCallback, useEffect, useRef, useState } from "react";
import { CarouselConfigurationAutoplayOptions, CarouselDirection } from "shared/interfaces/carousel";

export interface UseAutoplayProps {
	autoplay?: CarouselConfigurationAutoplayOptions;
	nextSlide(): void;
	previousSlide(): void;
}

export const useAutoplay = ({ autoplay, nextSlide, previousSlide }: UseAutoplayProps) => {
	const [repetitionsLeft, setRepetitionsLeft] = useState(autoplay?.totalRepetitions ?? 0);
	const timeout = useRef<number>();
	
	const abortTimeout = useCallback(() => {
		window.clearTimeout(timeout.current);
		if (!repetitionsLeft) {
			return;
		}

		timeout.current = window.setTimeout(() => {
			if (autoplay?.direction === CarouselDirection.BACKWARDS) {
				previousSlide();
			} else if (autoplay?.direction === CarouselDirection.FORWARDS) {
				nextSlide();
			}

			setRepetitionsLeft((repetitionsLeft) => repetitionsLeft - 1);
		}, autoplay?.delay);
	}, [repetitionsLeft, autoplay, nextSlide, previousSlide]);

	useEffect(() => {
		abortTimeout();
		return () => {
			window.clearTimeout(timeout.current);
		};
	}, [abortTimeout]);

	return { abortTimeout };
};
