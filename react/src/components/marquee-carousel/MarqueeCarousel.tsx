import React from "react";
import { MarqueeCarouselConfiguration } from "../../interfaces/component/marqueeCarousel";
import styles from "./MarqueeCarousel.module.css";

interface MarqueeStyles extends React.CSSProperties {
	"--duration": string;
}

export const MarqueeCarousel = ({
	repetitions = 2,
	duration = "15s",
	isPaused = false,
	isReversed = false,
	className,
	renderItem,
    ...props
}: MarqueeCarouselConfiguration) => {
	const marqueeStyles: MarqueeStyles = {
		"--duration": duration
	};

	return (
		<div className={`${styles["marquee-wrap"]} ${className ?? ""}`} {...props}>
			<div className={`${styles.marquee} ${isPaused ? styles["marquee--paused"] : ""}`} style={marqueeStyles}>
				{Array.from({ length: repetitions }, () => (
					<div className={`${styles["marquee-text"]} ${isReversed ? styles["marquee-text--reversed"] : ""}`}>
                        {renderItem()}
                    </div>
				))}
			</div>
		</div>
	);
};
