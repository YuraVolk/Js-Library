import { consume } from "@lit/context";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { FilteringButtonConfiguration } from "shared/component/filtering";
import { FilteringContext, filteringContext } from "./context";

export class FilteringButton extends LitElement implements FilteringButtonConfiguration<unknown> {
	static styles = css`
		:host {
			display: inline-block;
		}
	`;

	@property()
	filter?: unknown;
	@consume({ context: filteringContext })
	private _context!: FilteringContext<unknown>;

	private _clickListener?: () => void;

	connectedCallback(): void {
		super.connectedCallback();
		this.addEventListener(
			"click",
			(this._clickListener = () => {
				this._context.contextActiveFilter = this.filter;
			})
		);
	}

	disconnectedCallback(): void {
		if (this._clickListener) {
			this.removeEventListener("click", this._clickListener);
		}
	}

	protected render(): unknown {
		return html`<slot></slot>`;
	}
}
