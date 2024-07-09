import type { FilteringWrapper, FilteringButton, FilteringWrapperRender } from "lit/src/components/filtering/filteringWrapper";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
const arrayUtils = import("shared/utils/array");
import { map } from "lit/directives/map.js";
import { until } from "lit/directives/until.js";

import("../header");
import("../sidebar");
import("../../../components/filtering/filteringWrapper")
	.then(({ FilteringWrapper, FilteringButton }) => {
		window.customElements.define("filtering-wrapper-component", FilteringWrapper);
		window.customElements.define("filtering-button-component", FilteringButton);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

const filters = ["First Category", "Second Category", "Third Category", "Fourth Category"];
const items = arrayUtils.then(({ shuffle }) =>
	shuffle(
		Array.from({ length: 16 }, (_, i) => ({
			value: ((itemsLength, j) => ({
				key: String(i) + String(j) + String(itemsLength),
				value: html`<li class="item leave">
					<div class="item-inner">Item ${i + 1}</div>
				</li>`
			})) satisfies FilteringWrapperRender,
			filter: filters[i % filters.length]
		}))
	)
);

@customElement("filtering-application-example-1")
export class FilteringApplicationExample1 extends LitElement {
	static styles = css`
		.items-list > transition-group-component {
			position: relative;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: flex-start;
			gap: 0.2rem;
			list-style-type: none;
			margin: 0;
			padding: 0;
			transition: all 0.24s ease-in;
			min-width: 100%;
		}

		.item {
			width: 320px;
			height: 240px;
			margin: 0.8rem;
			box-shadow: 0px 2px 6px #555555;
			border-radius: 2px;
			background-color: #222;
			transition: all 0.35s ease-in-out;
		}

		.item-inner {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			opacity: 1;
			color: #e2e2e2;
			transition: all 0.25s ease-out;
		}

		.appear-active {
            position: absolute;
			opacity: 0;
			transform: scale(0.5) translateY(-80px);
        }

        .appear {
            position: relative;
			opacity: 1;
			transform: scale(1) translateY(0);
        }

        .enter {
			position: relative;
			opacity: 1;
			transform: scale(1) translateY(0);
		}

		.enter-active {
			position: absolute;
			opacity: 0;
			transform: scale(0.5) translateY(-80px);
		}

		.leave {
			position: absolute;
			opacity: 0;
			transform: scale(0.5) translateY(-80px);
		}

        .leave-active {
            position: absolute;
			transform: scale(1) translateY(0);
		}

		.buttons {
			width: fit-content;
			margin: 0 auto 24px;
		}

		.button {
            display: inline-flex;
            justify-content: center;
            align-items: center;
			appearance: button;
			backface-visibility: hidden;
			background-color: #405cf5;
			border-radius: 6px;
			border-width: 0;
			box-shadow:
				rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
				rgba(50, 50, 93, 0.1) 0 2px 5px 0,
				rgba(0, 0, 0, 0.07) 0 1px 1px 0;
			box-sizing: border-box;
			color: #fff;
			cursor: pointer;
			font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
			font-size: 100%;
			height: 44px;
			line-height: 1.15;
			margin: 12px 0 0;
			outline: none;
			overflow: hidden;
			padding: 0 25px;
			position: relative;
			text-align: center;
			text-transform: none;
			transform: translateZ(0);
			transition:
				all 0.2s,
				box-shadow 0.08s ease-in;
			user-select: none;
			-webkit-user-select: none;
			touch-action: manipulation;
			width: 175px;
			margin-right: 10px;
		}

		.button:focus {
			box-shadow:
				rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
				rgba(50, 50, 93, 0.2) 0 6px 15px 0,
				rgba(0, 0, 0, 0.1) 0 2px 2px 0,
				rgba(50, 151, 211, 0.3) 0 0 0 4px;
		}
	`;

	render() {
		return html`<filtering-wrapper-component class="items-list" .items=${until(items, [])} .duration=${350}>
			<div slot="filters" class="buttons">
				<filtering-button-component class="button">All</filtering-button-component>
				${map(filters, (filter) => html`<filtering-button-component class="button" .filter=${filter}>${filter}</filtering-button-component>`)}
			</div>
		</filtering-wrapper-component>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"filtering-wrapper-component": FilteringWrapper<unknown, never>;
		"filtering-button-component": FilteringButton;
		"filtering-application-example-1": FilteringApplicationExample1;
	}
}
