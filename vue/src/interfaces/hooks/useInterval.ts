import { ref, onMounted, onUnmounted } from 'vue';

export function useInterval(callback: () => void, timeout: number) {
    const interval = ref<number | undefined>();

    const abortInterval = () => {
        window.clearInterval(interval.value);
        interval.value = undefined;
    };

    const restartInterval = () => {
        interval.value = window.setInterval(callback, timeout);
    };

    onMounted(() => {
        startInterval();
    });

    onUnmounted(() => {
        abortInterval();
    });

    return { abortInterval, restartInterval };
}
