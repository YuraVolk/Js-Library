import "../../interfaces/transition/transitionComponent";

import { consume } from "@lit/context";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { TabsContext, tabsContext } from "../../interfaces/component/tabs";
import { TabConfiguration } from "shared/component/tabs";

export class Tab extends LitElement implements TabConfiguration {
	static styles = css`
		:host {
			display: contents;
		}
	`;

	@property({ type: Number })
	tabId = 0;
	@property({ type: Number })
	transitionDuration = 300;

	@consume({ context: tabsContext, subscribe: true })
	tabsContext!: TabsContext;

	protected firstUpdated() {
		this.requestUpdate();
	}

	render() {
		const isActive = this.tabId === this.tabsContext.currentTab;
		return html`<transition-element-component
			?isActive=${isActive}
			.duration=${this.transitionDuration}
		>
			<slot></slot>
		</transition-element-component>`;
	}
}
