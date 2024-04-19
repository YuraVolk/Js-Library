import "../../interfaces/transition/transition";

import { consume } from "@lit/context";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { TabsContext, tabsContext } from "../../interfaces/component/tabs";
import { TabConfiguration } from "shared/component/tabs";
import { defaultClassNames } from "../../interfaces/transition/interface";

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
	@property({ type: Object })
	classNames = defaultClassNames();

	@consume({ context: tabsContext, subscribe: true })
	tabsContext!: TabsContext;

	render() {
		const isActive = this.tabId === this.tabsContext.currentTab;
		return html`<transition-component
			?isActive=${isActive}
			.duration=${this.transitionDuration}
			.classNames=${this.classNames}
		>
			<slot></slot>
		</transition-component>`;
	}
}
