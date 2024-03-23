import { LitElement, css, html } from "lit";
import { property, query } from "lit/decorators.js";
import { consume } from "@lit/context";
import { AccordionContext, accordionContext } from "./context";
import { uid } from "shared/utils/utils";
import { Ref, createRef, ref } from "lit/directives/ref.js";
import { styleMap } from "lit/directives/style-map.js";
import { AccordionListItemConfiguration } from "shared/component/accordion";

export class AccordionItemComponent extends LitElement implements AccordionListItemConfiguration {
	static styles = css`
		:host {
			display: block;
			border-bottom: 1px solid rgba(255, 255, 255, 0.5);
			width: 100%;
			overflow: hidden;
			transition: max-height 0.4s linear;
		}

		.accordion {
			width: 100%;
			overflow: hidden;
			background-color: #000000;
			border-radius: 0.4rem;
			-webkit-transition: max-height 0.4s linear;
			transition: max-height 0.4s linear;
		}

		.accordion__content {
			color: #fff;
			font-size: 15px;
			padding: 4px 12px;
			-webkit-transition: max-height 0.2s linear forwards;
			transition: max-height 0.2s linear forwards;
		}

		.accordion__heading {
			position: relative;
			z-index: 1;
			display: block;
			width: 100%;
			border: none;
			font-size: 1.6rem;
			color: rgba(255, 255, 255, 0.8);
			text-decoration: none;
			background-color: #000000;
			padding: 0.25rem 1rem;
			text-transform: uppercase;
			text-align: left;
			font-family: Segoe UI;
			cursor: pointer;
		}
	`;

	private readonly _uid = uid();

	@query(".accordion")
	accordionWrap?: HTMLLIElement;
	headingRef: Ref<HTMLButtonElement> = createRef();
	contentRef: Ref<HTMLDivElement> = createRef();

	@property({ type: Boolean })
	isOpen = false;

	@consume({ context: accordionContext, subscribe: true })
	_accordionContext!: AccordionContext;

	private calculateHeight() {
		if (!this.headingRef.value || !this.contentRef.value) return;
		const isOpen =
			typeof this._accordionContext.expandedIndex === "string"
				? this._accordionContext.expandedIndex === this._uid
				: this._accordionContext.expandedIndex.includes(this._uid);

		const headerHeight = this.headingRef.value.offsetHeight;
		if (isOpen) {
			const contentHeight = this.contentRef.value.offsetHeight;
			return `${String(headerHeight + contentHeight)}px`;
		} else return `${String(headerHeight)}px`;
	}

	toggleContent() {
		this._accordionContext.setExpandedIndex(this._uid);
	}

	protected firstUpdated() {
		if (this.isOpen) {
			this.toggleContent();
		} else if (this.accordionWrap) this.accordionWrap.style.maxHeight = this.calculateHeight() ?? "";
	}

	render() {
		return html`
			<li
				class="accordion"
				style=${styleMap({
					maxHeight: this.calculateHeight()
				})}
			>
				<button
					@click=${() => {
						this.toggleContent();
					}}
					class="accordion__heading"
					${ref(this.headingRef)}
				>
					<slot name="heading"></slot>
				</button>
				<div class="accordion__content" ${ref(this.contentRef)}>
					<slot name="body"></slot>
				</div>
			</li>
		`;
	}
}
