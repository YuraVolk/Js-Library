export const generateThreshold = () => [0, ...Array.from({ length: Math.ceil(1 * 100) }, (_, index) => index / 100), 1];
