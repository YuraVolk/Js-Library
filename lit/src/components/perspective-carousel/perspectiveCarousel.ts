import { LitElement, html, css } from "lit";
import { property, query, state } from "lit/decorators.js";
import { PerspectiveCarouselConfiguration, PerspectiveCarouselItemState } from "shared/component/perspectiveCarousel";
import { styleMap } from "lit/directives/style-map.js";
import { CarouselConfigurationAutoplayOptions, CarouselDirection } from "shared/interfaces/carousel";
import { carouselControlsStyles } from "../../interfaces/generic/carousel";
import { resetInternalLitState } from "../../interfaces/component/perspectiveCarousel";
import { CarouselItem, LinkedCarouselMixin } from "../../interfaces/hooks/linkedItems";
import { MovedToCenterEvent, MovingFromCenterEvent, MovingToCenterEvent } from "./events";
import { ResizeController } from "../../interfaces/hooks/resizeController";
import { when } from "lit/directives/when.js";
import { map } from "lit/directives/map.js";
import { range } from "lit/directives/range.js";
import { getCurrentItemInfo } from "shared/utils/carousel";
import { classMap } from "lit/directives/class-map.js";
import { AutoplayController } from "../../interfaces/hooks/autoplayController";

export class PerspectiveCarouselComponent extends LinkedCarouselMixin(LitElement) implements PerspectiveCarouselConfiguration {
	static styles = css`
		:host {
			display: block;
			position: relative;
		}

		.images {
			width: 80%;
			padding: 0;
			margin: 0;
			list-style-type: none;
		}

		${carouselControlsStyles}

		.root-carousel-controls {
			position: absolute;
			left: 40%;
			transform: translate(-50%, 100%);
			bottom: 0;
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
	@property({ type: Boolean })
	allowSwitchingOrientation = false;
	@property({ type: Boolean })
	showArrows = false;
	@property({ type: Boolean })
	showToggles = false;
	@property({ type: Object })
	autoplay?: CarouselConfigurationAutoplayOptions;

	@state()
	private _currentItem = 0;
	private _isNavigatingByToggles = false;
	private _isStateCurrentlyMoving?: Promise<void>;
	private _resolveStateCurrentlyMoving?: () => void;
	protected _internalState = resetInternalLitState<number>();
	protected _elementsState: Record<string, Partial<PerspectiveCarouselItemState>> = {};
	private _autoplayController!: AutoplayController;

	@query(".images")
	protected _parentElement!: HTMLDivElement;

	protected initializeCarouselData() {
		const parentStyle = window.getComputedStyle(this._parentElement);
		this._internalState.totalItems = this.itemValues.length;
		this._internalState.containerDimensions = [parseInt(parentStyle.width, 10), parseInt(parentStyle.height, 10)];
	}

	protected async forceImageDimensionsIfEnabled() {
		for (const image of this.itemValues) {
			image.styles = { display: "none" };
			if (!this.forcedImageWidth || !this.forcedImageHeight) continue;
			image.styles = {
				...image.styles,
				width: `${String(this.forcedImageWidth)}px`,
				height: `${String(this.forcedImageHeight)}px`
			};
		}

		await this.updateComplete;
	}

	protected async setOriginalItemDimensions() {
		for (const [key, image] of this.itemEntries) {
			const state = this._elementsState[key];
			if ((!state.originalWidth && !state.originalHeight) || this.forcedImageWidth > 0 || this.forcedImageHeight > 0) {
				image.styles = {
					...image.styles,
					display: ""
				};
				await this.updateComplete;
				if (!state.originalWidth || this.forcedImageWidth > 0) state.originalWidth = image.element.clientWidth;
				if (!state.originalHeight || this.forcedImageHeight > 0) state.originalHeight = image.element.clientHeight;
				image.styles = {
					...image.styles,
					display: "none"
				};
			}
		}
	}

	protected calculatePositionProperties() {
		let horizonOffset = this.horizonOffset,
			separation = this.separation;
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

	protected async setupCarousel() {
		this.horizon ||= this._internalState.containerDimensions[Number(!this.isVertical)] / 2;

		for (const [key, item] of this.itemEntries) {
			const itemState = this._elementsState[key];
			let left, top;
			if (this.isVertical) {
				left = this.horizon - Number(itemState.originalWidth) / 2;
				top = this._internalState.containerDimensions[1] / 2 - Number(itemState.originalHeight) / 2;
			} else {
				left = this._internalState.containerDimensions[0] / 2 - Number(itemState.originalWidth) / 2;
				top = this.horizon - Number(itemState.originalHeight) / 2;
			}

			item.styles = {
				...item.styles,
				left: `${String(left)}px`,
				top: `${String(top)}px`,
				visibility: "visible",
				position: "absolute",
				zIndex: "0",
				opacity: "0",
				display: ""
			};
		}

		await this.updateComplete;
	}

	protected performCalculations(elementIndex: number, newPosition: number) {
		const itemState = this._elementsState[this.itemKeys[elementIndex]];

		const newDistanceFromCenter = Math.abs(newPosition);
		const calculations =
			newDistanceFromCenter < this.flankingItems + 1
				? this._internalState.calculations[newDistanceFromCenter]
				: this._internalState.calculations[this.flankingItems + 1];
		const distanceFactor = this.sizeMultiplier ** newDistanceFromCenter;
		const newWidth = distanceFactor * Number(itemState.originalWidth);
		const newHeight = distanceFactor * Number(itemState.originalHeight);
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

		itemState.width = newWidth;
		itemState.height = newHeight;
		itemState.top = top;
		itemState.left = left;
		itemState.oldPosition ??= 0;
		itemState.depth = this.flankingItems + 2 - newDistanceFromCenter;
		itemState.opacity = newPosition ? calculations.opacity : 1;
	}

	protected rotateCarousel() {
		if (this._internalState.currentlyMoving) return;
		this._internalState.currentlyMoving = true;
		this._internalState.itemsAnimating = 0;
		this._internalState.carouselRotationsLeft++;
		this._isStateCurrentlyMoving = new Promise((resolve) => {
			this._resolveStateCurrentlyMoving = resolve;
		});

		this.itemKeys.forEach((key, i) => {
			const currentPosition = this._elementsState[key].currentPosition ?? NaN;
			let newPosition = currentPosition + -Number(this._internalState.currentDirection);
			if (Math.abs(newPosition) > this._internalState[newPosition > 0 ? "rightItemsCount" : "leftItemsCount"]) {
				newPosition = -currentPosition;
				if (this._internalState.totalItems % 2 === 0) newPosition++;
			}

			this.moveItem(i, newPosition);
		});
	}

	protected itemAnimationComplete(elementIndex: number, newPosition: number) {
		const itemState = this._elementsState[this.itemKeys[elementIndex]];

		this._internalState.itemsAnimating--;
		itemState.currentPosition = newPosition;
		if (newPosition === 0) {
			this._internalState.currentCenterItem = elementIndex;
			this._currentItem = this._internalState.currentCenterItem;
		}

		if (this._internalState.itemsAnimating) return;
		this._internalState.currentlyMoving = false;

		if (--this._internalState.carouselRotationsLeft <= 0) {
			if (!this._internalState.performingSetup) {
				this.dispatchEvent(new MovingToCenterEvent());
				this.dispatchEvent(new MovedToCenterEvent());
			} else this._internalState.performingSetup = false;
		} else this.rotateCarousel();

		if (this._isStateCurrentlyMoving && this._resolveStateCurrentlyMoving) {
			this._resolveStateCurrentlyMoving();
			this._isStateCurrentlyMoving = this._resolveStateCurrentlyMoving = undefined;
		}
	}

	protected moveItem(elementIndex: number, newPosition: number) {
		const item = this.itemValues[elementIndex];
		const itemState = this._elementsState[this.itemKeys[elementIndex]];

		const assignToItem = () => {
			item.styles = {
				...item.styles,
				left: `${String(itemState.left)}px`,
				width: `${String(itemState.width)}px`,
				height: `${String(itemState.height)}px`,
				top: `${String(itemState.top)}px`,
				opacity: String(itemState.opacity)
			};
		};

		if (Math.abs(newPosition) <= this.flankingItems + 1) {
			this.performCalculations(elementIndex, newPosition);
			this._internalState.itemsAnimating++;

			item.styles = {
				...item.styles,
				zIndex: String(itemState.depth ?? "")
			};
			assignToItem();
			if (newPosition === 0) {
				window.setTimeout(() => {
					this._currentItem = elementIndex;
				}, 1);
			}

			setTimeout(() => {
				this.itemAnimationComplete(elementIndex, newPosition);
			}, this.animationLength);
		} else {
			itemState.currentPosition = newPosition;
			if (!itemState.oldPosition) {
				this.performCalculations(elementIndex, newPosition);
				assignToItem();
			}
		}
	}

	protected setupStarterRotation() {
		this.startingItem ||= Math.round(this._internalState.totalItems / 2);
		this._internalState.rightItemsCount = Math.ceil((this._internalState.totalItems - 1) / 2);
		this._internalState.leftItemsCount = Math.floor((this._internalState.totalItems - 1) / 2);
		this._internalState.carouselRotationsLeft = 1;

		let itemIndex = this.startingItem - 1;
		const itemValues = this.itemValues;
		const moveToIndex = (pos: number) => {
			itemValues[itemIndex].styles = {
				...itemValues[itemIndex].styles,
				opacity: "1"
			};

			this.moveItem(itemIndex, pos);
		};
		moveToIndex(0);

		for (let pos = 1; pos <= this._internalState.rightItemsCount; pos++) {
			itemIndex < this._internalState.totalItems - 1 ? itemIndex++ : (itemIndex = 0);
			moveToIndex(pos);
		}
		itemIndex = this.startingItem - 1;
		for (let pos = -1; pos >= -this._internalState.leftItemsCount; pos--) {
			itemIndex > 0 ? itemIndex-- : (itemIndex = this._internalState.totalItems - 1);
			moveToIndex(pos);
		}
	}

	async initCarousel() {
		this._internalState = resetInternalLitState();
		for (const key of this.itemKeys) {
			if (!(key in this._elementsState)) this._elementsState[key] = {};
		}

		this.initializeCarouselData();
		await this.forceImageDimensionsIfEnabled();
		await this.setOriginalItemDimensions();
		this.calculatePositionProperties();
		await this.setupCarousel();
		this.setupStarterRotation();
	}

	protected async scheduleUpdate() {
		const values = this.itemValues.map((value) => value.element);
		if (!values.every<CarouselItem>((value): value is CarouselItem => value instanceof CarouselItem && !value.hasUpdated)) {
			return super.scheduleUpdate();
		}

		for (const item of values) await item.updateComplete;
		return super.scheduleUpdate();
	}

	protected firstUpdated(): void {
		new ResizeController(this, this.initCarousel.bind(this));
		this._autoplayController = new AutoplayController(this, {
			autoplay: this.autoplay,
			previousSlide: this.previousSlide.bind(this),
			nextSlide: this.nextSlide.bind(this)
		});

		this.initCarousel().catch((e: unknown) => {
			console.trace(e);
		});
	}

	moveOnce(direction: CarouselDirection) {
		if (this._internalState.currentlyMoving) return;
		if (direction === CarouselDirection.BACKWARDS && this._internalState.currentCenterItem !== undefined) {
			this.dispatchEvent(
				new MovingFromCenterEvent(this._internalState.currentCenterItem - 1 < 0 ? undefined : this._internalState.currentCenterItem - 1)
			);
		} else if (direction === CarouselDirection.FORWARDS && this._internalState.currentCenterItem !== undefined) {
			this.dispatchEvent(
				new MovingFromCenterEvent(
					this._internalState.currentCenterItem + 1 > this._internalState.totalItems ? undefined : this._internalState.currentCenterItem + 1
				)
			);
		} else this.dispatchEvent(new MovingFromCenterEvent(this._internalState.currentCenterItem));

		this._internalState.currentDirection = direction;
	}

	async navigateByDifference(difference: number) {
		this._isNavigatingByToggles = true;
		const direction = Math.sign(difference);
		if (direction === 1 || direction === -1) {
			this._internalState.currentDirection = direction;
		} else {
			this._internalState.currentDirection = CarouselDirection.STILL;
			return;
		}

		for (let i = 0; i < Math.abs(difference); i++) {
			this.rotateCarousel();
			await this._isStateCurrentlyMoving;
			this._autoplayController.abortTimeout();
		}
	}

	nextSlide() {
		this.moveOnce(CarouselDirection.FORWARDS);
		this.rotateCarousel();
	}

	previousSlide() {
		this.moveOnce(CarouselDirection.BACKWARDS);
		this.rotateCarousel();
	}

	switchOrientation() {
		if (!this.allowSwitchingOrientation) return;
		this.isVertical = !this.isVertical;
		this._internalState.currentDirection = CarouselDirection.STILL;
		this.rotateCarousel();
	}

	render() {
		const { realCurrentItem, childrenLength, getCurrentItem } = getCurrentItemInfo({
			childrenLength: this.itemKeys.length,
			currentItem: this._currentItem
		});

		return html`<div class="images" style=${styleMap({ height: this.imageSize, margin: this.margin })}>
				<slot></slot>
			</div>
			${when(
				this.allowSwitchingOrientation || this.showArrows || this.showToggles,
				() =>
					html`<div class="root-carousel-controls">
						${when(
							this.allowSwitchingOrientation || this.showArrows,
							() =>
								html`<div class="carousel-controls">
									${when(
										this.showArrows,
										() =>
											html`<button
												class="carousel-controls__previous-button"
												@click="${() => {
													this._autoplayController.abortTimeout();
													this.previousSlide();
												}}"
											></button>`
									)}
									${when(
										this.allowSwitchingOrientation,
										() =>
											html`<button
												class="carousel-controls__perspective-button"
												@click="${() => {
													this._autoplayController.abortTimeout();
													this.switchOrientation();
												}}"
											>
												Switch
											</button>`
									)}
									${when(
										this.allowSwitchingOrientation,
										() =>
											html`<button
												class="carousel-controls__next-button"
												@click="${() => {
													this._autoplayController.abortTimeout();
													this.nextSlide();
												}}"
											></button>`
									)}
								</div>`
						)}
						${when(
							this.showToggles,
							() =>
								html`<ul class="carousel-controls__toggles">
									${map(
										range(childrenLength),
										(i) =>
											html`<li
												class="carousel-controls__toggle ${classMap({
													"carousel-controls__toggle--active": i === realCurrentItem
												})}"
												@click=${() => {
													if (this._isNavigatingByToggles) return;
													this._autoplayController.abortTimeout();
													const difference = (getCurrentItem(i) % childrenLength) - (this._currentItem % childrenLength);
													this.navigateByDifference(difference)
														.catch((e: unknown) => {
															console.log(e);
														})
														.finally(() => {
															this._isNavigatingByToggles = false;
														});
												}}
											></li>`
									)}
								</ul>`
						)}
					</div>`
			)}`;
	}
}

export { CarouselItem };
