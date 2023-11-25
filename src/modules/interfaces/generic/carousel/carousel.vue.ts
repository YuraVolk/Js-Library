export const INJECTED_ELEMENTS_NAME = "carouselItems";

export type CarouselItems = Record<string, {
    element: HTMLElement;
    styles: Partial<CSSStyleDeclaration>;
}>;
