import { LitElement, html, css } from "lit";
import { property, query } from "lit/decorators.js";
import { ResizeController } from "../../interfaces/hooks/resizeController";
import { ParallaxConfiguration } from "shared/component/parallax";
import { getFirstScrollableParent } from "shared/utils/domUtils";

export class ParallaxComponent extends LitElement implements ParallaxConfiguration {
	static styles = css`
		.wrap {
			position: relative;
            transition: 0.1s;
		}
	`;

	@property({ type: Boolean })
	isHorizontal = false;
	@property({ type: Boolean })
	isHorizontalTranslation = false;
	@property({ type: Number })
	effect = 1.968;
	@property({ type: Number })
	speed = 2.7;
	@property({ type: Number })
	margin = 0;

	@query(".wrap")
	_wrapper!: HTMLElement;

	private scrollListener!: EventListener;

	protected rerender() {
		const wrap = this._wrapper;
		const parent = getFirstScrollableParent(this, this.isHorizontal);
		parent.removeEventListener("scroll", this.scrollListener);
		const getScrollPoint = () => {
			if (parent instanceof HTMLElement) {
				return this.isHorizontal ? parent.scrollLeft : parent.scrollTop;
			} else return this.isHorizontal ? parent.scrollX : parent.scrollY;
		};

		const animationOffset = wrap.getBoundingClientRect()[this.isHorizontal ? "left" : "top"] + getScrollPoint();
		const innerHeight =
			(parent instanceof HTMLElement
				? this.isHorizontal
					? parent.clientWidth
					: parent.clientHeight
				: this.isHorizontal
				? parent.innerWidth
				: parent.innerHeight) / this.effect;
		parent.addEventListener(
			"scroll",
			(this.scrollListener = () => {
				const scrollPoint = getScrollPoint();
				if (scrollPoint > animationOffset - innerHeight * 2 && scrollPoint < animationOffset + innerHeight) {
					const point = (scrollPoint - (animationOffset - innerHeight)) / this.speed - this.margin;
					wrap.style.transform = `translate${this.isHorizontalTranslation ? "X" : "Y"}(${point}px)`;
				}
			}),
			{ passive: true }
		);
		this.scrollListener(new Event("scroll"));
	}

	protected firstUpdated() {
		this.rerender();
		new ResizeController(this, this.rerender.bind(this));
	}

	render() {
		return html`<div class="wrap">
			<slot></slot>
		</div>`;
	}
}
