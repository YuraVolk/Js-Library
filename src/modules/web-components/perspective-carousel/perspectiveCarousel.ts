import { LitElement, html, css } from "lit";
import { customElement, property, queryAssignedElements, queryAsync, state } from "lit/decorators.js";
import { PerspectiveCarouselConfiguration, resetInternalState } from "../../interfaces/component/perspective-carousel/types";
import { styleMap } from "lit/directives/style-map.js";
import { assertDevOnly } from "../../utils";
import { CarouselDirection } from "src/modules/interfaces/generic/carousel/carousel";
import { carouselControlsStyles } from "src/modules/interfaces/generic/carousel/carousel.lit";

declare global {
	interface HTMLElementTagNameMap {
		"perspective-carousel-component": PerspectiveCarouselComponent;
	}
}

@customElement("perspective-carousel-component")
export class PerspectiveCarouselComponent extends LitElement implements PerspectiveCarouselConfiguration  {
	static styles = css`
		.wrap {
			position: relative;
		}

		.images {
			width: 80%;
		}

		${carouselControlsStyles}

		.carousel-controls {
			position: absolute;
			left: 40%;
			transform: translateX(-50%);
			bottom: -5%;
			z-index: 99;
		}
	`;

	@property()
	imageSize = "300px";
	@property()
	margin = "250px auto";
	@property({ type: Number })
	startingItem = 1;
	@property({ type: Number })
	separation = 175;
	@property({ type: Number })
	separationMultiplier = 0.6;
	@property({ type: Number })
	horizonOffset = 0;
	@property({ type: Number })
	horizonOffsetMultiplier = 1;
	@property({ type: Number })
	sizeMultiplier = 0.7;
	@property({ type: Number })
	opacityMultiplier = 0.87;
	@property({ type: Number })
	horizon = 0;
	@property({ type: Number })
	flankingItems = 3;
	@property({ type: Boolean })
	isVertical = false;
	@property({ type: Boolean })
	preloadImages = false;
	@property({ type: Number })
	forcedImageWidth = 0;
	@property({ type: Number })
	forcedImageHeight = 0;
	@property({ type: Number })
	animationLength = 300;
	@property()
	centralItemClassName = "active";
	@property({ type: Boolean })
	allowSwitchingOrientation = false;

	@queryAsync(".images")
	parent!: Promise<HTMLElement>;
	@queryAssignedElements({ flatten: true })
	images!: HTMLElement[];

	@state()
	_internalState = resetInternalState<HTMLElement>();

	private windowResizeListener!: EventListener;

	private initializeCarouselData(parent: HTMLElement) {
		const parentStyle = window.getComputedStyle(parent);
		this._internalState.totalItems = this.images.length;
		this._internalState.containerDimensions = [parseInt(parentStyle.width, 10), parseInt(parentStyle.height, 10)];
	}

	private forceImageDimensionIfEnabled() {
		this.images.forEach((el) => (el.style.display = "none"));
		if (!this.forcedImageWidth || !this.forcedImageHeight) return;
		this.images.forEach((image) => {
			image.style.width = `${this.forcedImageWidth}px`;
			image.style.height = `${this.forcedImageHeight}px`;
		});
	}

	private preload(callback: () => void) {
		if (!this.preloadImages) {
			callback();
			return;
		}

		const images = this.images;
		let loadedImages = 0;
		for (const image of images) {
			image.setAttribute("src", image.getAttribute("src") ?? "");
			image.addEventListener("load", () => {
				image.style.display = "";
				if (++loadedImages === images.length) callback();
			});
		}
	}

	private setOriginalItemDimensions() {
		this.images.forEach((element) => {
			if (!element.dataset.originalWidth || this.forcedImageWidth > 0) {
				element.style.display = "";
				element.dataset.originalWidth = String(element.clientWidth);
				element.style.display = "none";
			}
			if (!element.dataset.originalHeight || this.forcedImageHeight > 0) {
				element.style.display = "";
				element.dataset.originalHeight = String(element.clientHeight);
				element.style.display = "none";
			}
		});
	}

	private calculatePositionProperties() {
		let horizonOffset = this.horizonOffset;
		let separation = this.separation;
		for (let i = 1; i <= this.flankingItems + 2; i++) {
			if (i > 1) {
				horizonOffset *= this.horizonOffsetMultiplier;
				separation *= this.separationMultiplier;
			}
			const { distance, offset, opacity } = this._internalState.calculations[i - 1];
			this._internalState.calculations[i] = {
				distance: distance + separation,
				offset: offset + horizonOffset,
				opacity: opacity * this.opacityMultiplier
			};
		}

		this._internalState.calculations[this.flankingItems + 1] = {
			distance: 0,
			offset: 0,
			opacity: 0
		};
	}

	private setupCarousel() {
		this._internalState.items = this.images;
		if (this.horizon === 0) this.horizon = this._internalState.containerDimensions[Number(!this.isVertical)] / 2;
		for (const item of this._internalState.items) {
			let left, top;
			if (this.isVertical) {
				left = this.horizon - Number(item.dataset.originalWidth) / 2;
				top = this._internalState.containerDimensions[1] / 2 - Number(item.dataset.originalHeight) / 2;
			} else {
				left = this._internalState.containerDimensions[0] / 2 - Number(item.dataset.originalWidth) / 2;
				top = this.horizon - Number(item.dataset.originalHeight) / 2;
			}

			Object.assign(item.style, {
				left: `${left}px`,
				top: `${top}px`,
				visibility: "visible",
				position: "absolute",
				"z-index": 0,
				opacity: 0,
				display: ""
			});
		}
	}

	private performCalculations(item: HTMLElement, newPosition: number) {
		const newDistanceFromCenter = Math.abs(newPosition);
		const calculations =
			newDistanceFromCenter < this.flankingItems + 1
				? this._internalState.calculations[newDistanceFromCenter]
				: this._internalState.calculations[this.flankingItems + 1];
		const distanceFactor = this.sizeMultiplier ** newDistanceFromCenter;
		const newWidth = distanceFactor * Number(item.dataset.originalWidth);
		const newHeight = distanceFactor * Number(item.dataset.originalHeight);
		const newDistance = newPosition < 0 ? -calculations.distance : calculations.distance;

		const center = this._internalState.containerDimensions[Number(this.isVertical)] / 2;
		let top: number, left: number;
		if (this.isVertical) {
			left = this.horizon - calculations.offset - newWidth / 2;
			top = center + newDistance - newHeight / 2;
		} else {
			left = center + newDistance - newWidth / 2;
			top = this.horizon - calculations.offset - newHeight / 2;
		}

		item.dataset.width = String(newWidth);
		item.dataset.height = String(newHeight);
		item.dataset.top = String(top);
		item.dataset.left = String(left);
		item.dataset.oldPosition ||= "0";
		item.dataset.depth = String(this.flankingItems + 2 - newDistanceFromCenter);
		item.dataset.opacity = String(newPosition ? calculations.opacity : 1);
	}

	private itemAnimationComplete(item: HTMLElement, newPosition: number) {
		this._internalState.itemsAnimating--;
		item.dataset.currentPosition = String(newPosition);
		if (newPosition === 0) this._internalState.currentCenterItem = item;
		if (this._internalState.itemsAnimating) return;
		this._internalState.currentlyMoving = false;
		if (--this._internalState.carouselRotationsLeft <= 0) {
			this._internalState.currentCenterItem?.classList.add(this.centralItemClassName);
			if (!this._internalState.performingSetup) {
				this.movingToCenter();
				this.movedToCenter();
			} else this._internalState.performingSetup = false;
		} else this.rotateCarousel();
	}

	protected movingFromCenter(element?: Element) {
		if (element) {
			assertDevOnly(element instanceof HTMLElement);
			return element;
		} else return;
	}

	protected movingToCenter() {
		/* no-op */
	}

	protected movedToCenter() {
		/* no-op */
	}

	protected moveItem(item: HTMLElement, newPosition: number) {
		const assignToItem = () => {
			Object.assign(item.style, {
				left: `${item.dataset.left}px`,
				width: `${item.dataset.width}px`,
				height: `${item.dataset.height}px`,
				top: `${item.dataset.top}px`,
				opacity: String(item.dataset.opacity)
			});
		};

		if (Math.abs(newPosition) <= this.flankingItems + 1) {
			this.performCalculations(item, newPosition);
			this._internalState.itemsAnimating++;
			item.style.zIndex = item.dataset.depth ?? "";
			assignToItem();
			setTimeout(() => {
				this.itemAnimationComplete(item, newPosition);
			}, this.animationLength);
		} else {
			item.dataset.currentPosition = String(newPosition);
			if (item.dataset.oldPosition === "0" || !item.dataset.oldPosition) {
				this.performCalculations(item, newPosition);
				assignToItem();
			}
		}
	}

	private setupStarterRotation() {
		this.startingItem ||= Math.round(this._internalState.totalItems / 2);
		this._internalState.rightItemsCount = Math.ceil((this._internalState.totalItems - 1) / 2);
		this._internalState.leftItemsCount = Math.floor((this._internalState.totalItems - 1) / 2);
		this._internalState.carouselRotationsLeft = 1;
		let itemIndex = this.startingItem - 1;
		this.moveItem(this._internalState.items[itemIndex], 0);
		this._internalState.items[itemIndex].style.opacity = "1";

		for (let pos = 1; pos <= this._internalState.rightItemsCount; pos++) {
			itemIndex < this._internalState.totalItems - 1 ? itemIndex++ : (itemIndex = 0);
			this._internalState.items[itemIndex].style.opacity = "1";
			this.moveItem(this._internalState.items[itemIndex], pos);
		}
		itemIndex = this.startingItem - 1;
		for (let pos = -1; pos >= -this._internalState.leftItemsCount; pos--) {
			itemIndex > 0 ? itemIndex-- : (itemIndex = this._internalState.totalItems - 1);
			this._internalState.items[itemIndex].style.opacity = "1";
			this.moveItem(this._internalState.items[itemIndex], pos);
		}
	}

	initCarousel(parent: HTMLElement) {
		this._internalState = resetInternalState();
		this.initializeCarouselData(parent);
		this.forceImageDimensionIfEnabled();
		this.preload(() => {
			this.setOriginalItemDimensions();
			this.calculatePositionProperties();
			this.setupCarousel();
			this.setupStarterRotation();
		});
	}

	private moveOnce(direction: CarouselDirection) {
		if (this._internalState.currentlyMoving) return;
		this._internalState.previousCenterItem = this._internalState.currentCenterItem;
		if (direction === CarouselDirection.BACKWARDS) {
			this.movingFromCenter(this._internalState.currentCenterItem?.previousElementSibling ?? undefined);
		} else if (direction === CarouselDirection.FORWARDS) {
			this.movingFromCenter(this._internalState.currentCenterItem?.nextElementSibling ?? undefined);
		} else this.movingFromCenter(this._internalState.currentCenterItem);
		this._internalState.currentDirection = direction;
	}

	private rotateCarousel() {
		if (this._internalState.currentlyMoving) return;
		this._internalState.currentCenterItem?.classList.remove(this.centralItemClassName);
		this._internalState.currentlyMoving = true;
		this._internalState.itemsAnimating = 0;
		this._internalState.carouselRotationsLeft++;
		for (const item of this._internalState.items) {
			const currentPosition = parseInt(item.dataset.currentPosition ?? "", 10);
			let newPosition = currentPosition + -Number(this._internalState.currentDirection);
			if (Math.abs(newPosition) > this._internalState[newPosition > 0 ? "rightItemsCount" : "leftItemsCount"]) {
				newPosition = -currentPosition;
				if (this._internalState.totalItems % 2 === 0) newPosition++;
			}

			this.moveItem(item, newPosition);
		}
	}

	nextItem() {
		this.moveOnce(CarouselDirection.FORWARDS);
		this.rotateCarousel();
	}

	previousItem() {
		this.moveOnce(CarouselDirection.BACKWARDS);
		this.rotateCarousel();
	}

	switchOrientation() {
		this.isVertical = !this.isVertical;
		this.rotateCarousel();
	}

	connectedCallback(): void {
		super.connectedCallback();
		this.parent.then((parent) => { this.initCarousel(parent); }).catch(e => { console.error(e); });
		window.addEventListener(
			"resize",
			(this.windowResizeListener = () => {
				this.parent.then((p) => { this.initCarousel(p); }).catch(e => { console.log(e) });
			})
		);
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		window.removeEventListener("resize", this.windowResizeListener);
	}

	render() {
		return html`<div class="wrap">
			<div class="images" style=${styleMap({ height: this.imageSize, margin: this.margin })}>
				<slot></slot>
			</div>
			<div class="carousel-controls">
				<button class="carousel-controls__previous-button" @click="${() => { this.previousItem(); }}"></button>
				${this.allowSwitchingOrientation
					? html`<button class="carousel-controls__perspective-button" @click="${() => { this.switchOrientation(); }}">Switch</button>`
					: ""}
				<button class="carousel-controls__next-button" @click="${() => { this.nextItem(); }}"></button>
			</div>
		</div>`;
	}
}
