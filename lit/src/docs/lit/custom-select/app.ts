import type { CustomSelectComponent } from "lit/src/components/custom-select/customSelect";
import "../../../components/litEntry";
import "../../../global.css";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import("../header");
import("../sidebar");
import("../../../components/custom-select/customSelect")
	.then(({ CustomSelectComponent }) => {
		window.customElements.define("custom-select-component", CustomSelectComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

@customElement("custom-select-application-example-1")
export class CustomSelectApplicationExample1 extends LitElement {
	render() {
		return html`<custom-select-component .items=${[{
            value: 'test1',
            innerContent: 'Test to select...',
            isDisabled: false,
            isSelected: true
        }, {
            value: 'test2',
            innerContent: 'Test 2',
            isDisabled: false,
            isSelected: false
        }, {
            value: 'test3',
            innerContent: 'Test 3',
            isDisabled: false,
            isSelected: false
        }, {
            value: 'test4',
            innerContent: 'Test 4',
            isDisabled: false,
            isSelected: false
        }, {
            value: 'test5',
            innerContent: 'Test 5',
            isDisabled: false,
            isSelected: false
        }, {
            value: 'test6',
            innerContent: 'Test 6',
            isDisabled: false,
            isSelected: false
        }]} selectName="select"></custom-select-component>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"custom-select-component": CustomSelectComponent;
		"custom-select-application-example-1": CustomSelectApplicationExample1;
	}
}
