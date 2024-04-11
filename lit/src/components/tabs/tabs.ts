import { provide } from "@lit/context";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { TabsContext, tabsContext } from "../../interfaces/component/tabs";
import { TabsConfiguration } from "shared/component/tabs";
import { Tab } from "./tab";

export class TabsComponent extends LitElement implements TabsConfiguration {
	static styles = css`
		:host {
			display: block;
		}
	`;

	@property({ type: Number })
	currentTab = 0;

	@provide({ context: tabsContext })
	tabsContext: TabsContext = {
		currentTab: this.currentTab
	};

	protected updated(_changedProperties: Map<keyof TabsComponent, TabsComponent[keyof TabsComponent]>): void {
		for (const [key] of _changedProperties) {
			if (key === "currentTab") {
				this.tabsContext = {
					currentTab: this.currentTab
				};
			}
		}
	}

	render() {
		return html`
			<slot name="headers"></slot>
			<slot name="tabs"></slot>
		`;
	}
}

export { Tab };
