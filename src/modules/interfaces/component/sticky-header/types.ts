export interface StickyHeaderMinimalConfiguration {
    rootMargin: string;
    ratio: number;
}

export interface StickyHeaderConfiguration extends StickyHeaderMinimalConfiguration {
    fixedClassName: string;
}
