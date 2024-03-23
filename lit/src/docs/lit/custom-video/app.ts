import type { CustomVideoComponent } from "lit/src/components/custom-video/customVideo";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import video from "../../../../../assets/video/sample-mp4-file-small.mp4";

import("../header");
import("../sidebar");
import("../../../components/custom-video/customVideo")
	.then(({ CustomVideoComponent }) => {
		window.customElements.define("custom-video-component", CustomVideoComponent);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("custom-video-application-example-1")
export class CustomVideoApplicationExample1 extends LitElement {
	static styles = css`
		.video-wrap {
			display: block;
			width: 320px;
			height: 240px;
		}
	`;

	render() {
		return html`
			<custom-video-component class="video-wrap">
				<source src=${video} type="video/mp4" />
			</custom-video-component>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"custom-video-component": CustomVideoComponent;
		"custom-video-application-example-1": CustomVideoApplicationExample1;
	}
}
