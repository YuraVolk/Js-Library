import { consume } from "@lit/context";
import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { TabsContext, tabsContext } from "../../interfaces/component/tabs";
import { TabConfiguration } from "shared/component/tabs";
import "../../interfaces/transition";
import { createRef, ref } from "lit/directives/ref.js";
import { Transition } from "../../interfaces/transition";
import { assertNonUndefined } from "shared/utils/utils";

export class Tab extends LitElement implements TabConfiguration {
	static styles = css`
		:host {
			display: contents;
		}
	`;

	private _transition = createRef<Transition>();

	@property({ type: Number })
	tabId = 0;
	@property({ type: Number })
	transitionDuration = 300;

	@consume({ context: tabsContext, subscribe: true })
	tabsContext!: TabsContext;

	transitionDirective() {
		assertNonUndefined(this._transition.value);
		return this._transition.value.directive();
	}
	
	protected firstUpdated() {
		this.requestUpdate();
	}

	render() {
		const isActive = this.tabId === this.tabsContext.currentTab;
		return html`<transition-component
			?isActive=${isActive}
			.duration=${this.transitionDuration}
			@transition-display-update-request=${() => {
				this.requestUpdate();
			}}
			${ref(this._transition)}
		>
			${this._transition.value?.displayDirective(html`<slot></slot>`, isActive)}
		</transition-component>`;
	}
}
