import { LitElement, html, css } from "lit";
import { customElement, property, query } from "lit/decorators.js";

declare global {
	interface HTMLElementTagNameMap {
		"parallax-component": ParallaxComponent;
	}
}

@customElement("parallax-component")
export class ParallaxComponent extends LitElement {
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
	private resizeListener!: EventListener;

	private getFirstScrollableParent(): HTMLElement | Window {
		const getFirstScrollableParent = (node: HTMLElement): HTMLElement | Window => {
			if (node.parentElement == null) return window;
			const { overflowX, overflowY, overflow } = window.getComputedStyle(node.parentElement);
			console.log(overflowX, overflowY, overflow);
			const regex = /auto|scroll/;
			if (regex.test(overflow) || (this.isHorizontal && regex.test(overflowX)) || (!this.isHorizontal && regex.test(overflowY)))
				return node.parentElement;
			return getFirstScrollableParent(node.parentElement);
		};

		return getFirstScrollableParent(this);
	}

	protected rerender() {
		const wrap = this._wrapper;
		const parent = this.getFirstScrollableParent();
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
		window.addEventListener(
			"resize",
			(this.resizeListener = () => {
				this.rerender();
			})
		);
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		window.removeEventListener("resize", this.resizeListener);
	}

	render() {
		return html`<div class="wrap">
			<slot></slot>
		</div>`;
	}
}
