import { LitElement, html } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";
import { assertDevOnly } from "../../utils";
import { TabsLitConfiguration } from "src/modules/interfaces/component/tabs/types-lit";

declare global {
	interface HTMLElementTagNameMap {
		"tabs-component": TabsComponent;
	}
}

@customElement("tabs-component")
export class TabsComponent extends LitElement implements TabsLitConfiguration {
	@property({ type: Number })
	currentTab = 0;
	@property({ type: Number })
	transitionTime = 300;
	@property()
	activeTabClassName = "active";
	@property()
	leaveTabClassName = "leave";
	@property()
	inactiveTabClassName = "inactive";

	@queryAssignedElements({ slot: "headers" })
	_headers!: HTMLElement[];
	@queryAssignedElements({ slot: "tabs" })
	_tabs!: HTMLElement[];

    private animationTimeout?: number;

	protected firstUpdated() {
		this.switchToTab();
		for (const header of this._headers) {
			Array.from(header.children).forEach((header, i) => { header.addEventListener("click", () => { this.switchToTab(i); }); });
		}
	}

	switchToTab(newTab?: number) {
        window.clearTimeout(this.animationTimeout);
        this.animationTimeout = undefined;
        
        const previousTab = this.currentTab;
		if (newTab !== undefined) this.currentTab = newTab;
		for (const header of this._headers) {
			Array.from(header.children).forEach((header, i) => {
				i === this.currentTab ? header.classList.add(this.activeTabClassName) : header.classList.remove(this.activeTabClassName);
			});
		}

		for (const tabs of this._tabs) {
			Array.from(tabs.children).forEach((tab, i) => {
				assertDevOnly(tab instanceof HTMLElement);
				if (i === this.currentTab) {
					tab.style.removeProperty("display");
				} else if (previousTab === i) {
                    tab.classList.add(this.leaveTabClassName);
                    this.animationTimeout = window.setTimeout(() => {
                        tab.classList.remove(this.leaveTabClassName);
                        tab.style.display = "none";
                    }, this.transitionTime);
                } else if (newTab === undefined) {
                    tab.style.display = "none";
                } else tab.classList.remove(this.inactiveTabClassName);
			});
		}
	}

	render() {
		return html`<div>
			<slot name="headers"></slot>
			<slot name="tabs"></slot>
		</div>`;
	}
}
