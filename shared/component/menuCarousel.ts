export abstract class MenuCarouselInternalItem {
	image: HTMLElement;
	fullWidth: number;
	fullHeight: number;
	width?: number;
	height?: number;
	x?: number;
	y?: number;
	scale?: number;

	constructor(image: HTMLElement) {
		this.image = image;
		this.fullWidth = image.clientWidth;
		this.fullHeight = image.clientHeight;
	}

	moveTo(x: number, y: number, scale: number) {
		this.width = this.fullWidth * scale;
		this.height = this.fullHeight * scale;
		this.x = x;
		this.y = y;
		this.scale = scale;
		this.setMovingStyle(x, y, scale);
	}

	abstract initStyles(): this;
	abstract setMovingStyle(x: number, y: number, scale: number): void;
}

export interface MenuCarouselConfiguration {
	xPos?: number;
	yPos: number;
	xRadius?: number;
	yRadius: number;
	farScale: number;
	speed: number;
}
