import { MarqueeCarouselConfiguration as RootConfiguration } from "shared/component/marqueeCarousel";

export interface MarqueeCarouselConfiguration extends RootConfiguration, React.HTMLAttributes<HTMLDivElement> {
	renderItem: () => JSX.Element;
}
