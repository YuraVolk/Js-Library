import { LitElement, TemplateResult, css, html, render } from "lit";
import { FilteringButton } from "./filteringButton";
import { FilteringWrapperConfiguration } from "shared/component/filtering";
import { property } from "lit/decorators.js";
import { provide } from "@lit/context";
import { FilteringContext, filteringContext } from "./context";
import "../../interfaces/transition/transitionGroup";
import { TransitionGroupRenderer } from "../../interfaces/transition/transitionGroup";
import "../../interfaces/transition/transition";

export type FilteringWrapperRender = (itemsLength: number, i: number) => { key: string; value: TemplateResult<1> };
export class FilteringWrapper<T, V extends FilteringWrapperRender> extends LitElement implements FilteringWrapperConfiguration<T, V> {
	static styles = css`
		:host {
			display: block;
		}
	`;

	@property()
	activeFilter?: T | undefined;
	@property({ type: Array })
	items: Array<{ filter: T; value: V }> = [];
	@property({ type: Number })
	duration = 1;

	@provide({ context: filteringContext })
	_context = {
		self: this,
		get contextActiveFilter() {
			return this.self.activeFilter;
		},
		set contextActiveFilter(filter: T | undefined) {
			this.self.activeFilter = filter;
		}
	} satisfies FilteringContext<T> & { self: FilteringWrapper<T, V> };

	private getItems() {
		if (!this.activeFilter) {
			return this.items;
		}

		return this.items.filter((item) => item.filter === this.activeFilter);
	}

	protected render(): unknown {
		const transitionGroup = html`<transition-group-component
			animateTransform
			.renderElements=${this.getItems().map<TransitionGroupRenderer>((item, index, array) => {
				const { key, value } = item.value(array.length, index);

				return {
					key,
					isActive: true,
					render: ({ isActive, onExited }) =>
						html`<transition-component @finished=${onExited} ?isActive=${isActive} .duration=${this.duration}
							>${value}</transition-component
						>`,
					onExited: () => {}
				};
			})}
		></transition-group-component>`;

		render(transitionGroup, this);
		return html`
			<slot name="filters"></slot>
			<slot></slot>
		`;
	}
}

export { FilteringButton };
