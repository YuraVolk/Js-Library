import { TabsComponent, Tab } from "../../../components/tabs/tabs";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";
import { LitElement, css, html } from "lit";
import { customElement, queryAll, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { range } from "lit/directives/range.js";
import { classMap } from "lit/directives/class-map.js";

import("../header");
import("../sidebar");
import("../../../components/tabs/tabs")
	.then(({ TabsComponent, Tab }) => {
		window.customElements.define("tabs-component", TabsComponent);
		window.customElements.define("tab-component", Tab);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("tabs-application-example-1")
export class TabsApplicationExample1 extends LitElement {
	static styles = css`
		.tabs-wrap {
			display: block;
			width: 320px;
		}

		.tabs-headers {
			display: flex;
			justify-content: space-around;
			width: inherit;
			border-radius: 4px;
			border: 1px solid #333;
		}

		.tabs {
			position: relative;
			width: inherit;
			border: 2px solid #222;
			box-sizing: border-box;
		}

		.tab {
			position: relative;
			width: 100%;
			height: 320px;
			box-sizing: border-box;
			padding: 20px;
			transition: all 0.3s ease-in-out;
			background-color: #222;
			overflow: hidden;
			clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
		}

		.tab-header {
			flex: 1 1 0;
			text-align: center;
			cursor: pointer;
		}

		.tab-header:nth-child(even) {
			background-color: #e2e2e2;
			color: #222;
		}

		.tab-header:nth-child(odd) {
			color: #e2e2e2;
			background-color: #333;
		}

		.tab-header.active {
			font-weight: 700;
			text-transform: uppercase;
		}

		.tab.leave-active {
			position: absolute;
			top: 0;
			bottom: 0;
			width: 0;
			padding: 0;
			z-index: 999;
		}

		h3 {
			margin: 0;
		}
	`;

	@state()
	_openTab = 0;

	@queryAll("tab-component")
	_tabs!: Tab[];

	protected async firstUpdated() {
		await this.updateComplete;
		this.requestUpdate();
	}

	render() {
		return html`<tabs-component class="tabs-wrap" currentTab=${this._openTab}>
			<div class="tabs-headers" slot="headers">
				${map(
					range(3),
					(i) =>
						html`<div
							class="tab-header ${classMap({
								active: i === this._openTab
							})}"
							@click=${() => {
								this._openTab = i;
							}}
						>
							Tab ${i + 1}
						</div>`
				)}
			</div>
			<div slot="tabs" class="tabs">
				<tab-component .tabId=${0}>
					<div class="tab">
						<h3>Tab 1</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus maiores eos quidem. Distinctio consequatur repellat,
							officiis magnam quia odit voluptatum ipsam possimus quae eum fugit veniam quibusdam commodi consectetur.
						</p>
					</div>
				</tab-component>
				<tab-component .tabId=${1}>
					<div class="tab">
						<h3>Tab 2</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus maiores eos quidem. Distinctio consequatur repellat,
							officiis magnam quia odit voluptatum ipsam possimus quae eum fugit veniam quibusdam commodi consectetur.
						</p>
					</div>
				</tab-component>
				<tab-component .tabId=${2}>
					<div class="tab">
						<h3>Tab 3</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus maiores eos quidem. Distinctio consequatur repellat,
							officiis magnam quia odit voluptatum ipsam possimus quae eum fugit veniam quibusdam commodi consectetur.
						</p>
					</div>
				</tab-component>
			</div>
		</tabs-component>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"tabs-component": TabsComponent;
		"tab-component": Tab;
		"tabs-application-example-1": TabsApplicationExample1;
	}
}
