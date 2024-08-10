import { CarouselConfigurationAutoplayOptions, CarouselDirection } from "shared/interfaces/carousel";
import { onMounted, onUnmounted, ref } from "vue";

export interface UseAutoplayProps {
    autoplay?: CarouselConfigurationAutoplayOptions;
    nextSlide(): void;
    previousSlide(): void;
}

export function useAutoplay(settings?: UseAutoplayProps) {
    const repetitionsLeft = ref(settings?.autoplay?.totalRepetitions ?? 0);
    const timeout = ref<number>();

    const abortTimeout = () => {
        window.clearTimeout(timeout.value);
        if (!repetitionsLeft.value) {
            return;
        }

        timeout.value = window.setTimeout(() => {
            if (settings?.autoplay?.direction === CarouselDirection.BACKWARDS) {
                settings?.previousSlide();
            } else if (settings?.autoplay?.direction === CarouselDirection.FORWARDS) {
                settings?.nextSlide();
            }

            repetitionsLeft.value--;
            abortTimeout();
        }, settings?.autoplay?.delay);
    };

    onMounted(() => {
        abortTimeout();
    });

    onUnmounted(() => {
        window.clearTimeout(timeout.value);
    });

    return { abortTimeout };
}
