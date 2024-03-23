export function toMinutesSeconds(time: number) {
	const hours = Math.floor(time / 3600),
		minutes = Math.floor((time - hours * 3600) / 60),
		seconds = Math.floor(time - hours * 3600 - minutes * 60);
	return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export interface VideoConfigurationProps {
	autoplay?: boolean;
	crossorigin?: "anonymous" | "use-credentials";
	height?: number;
	muted?: boolean;
	poster?: string;
	preload?: "none" | "metadata" | "auto";
	src?: string;
	width?: number;
}
