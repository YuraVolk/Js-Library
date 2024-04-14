import { LitElement, css, html } from "lit";
import { LinkedItemMixin } from "../../interfaces/hooks/linkedItems";
import { styleMap } from "lit/directives/style-map.js";
import { GlassMoveEvent } from "./events";

export class ZoomingImageGlass extends LinkedItemMixin(LitElement) {
	static styles = css`
		:host {
			display: contents;
		}

		.zooming-image-glass {
			all: inherit;
			position: absolute;
			display: block;
			z-index: 99;
			overflow: hidden;
		}
	`;

    protected getUid(): string {
        return "zooming-image-glass";
    }

	render() {
		return html`<div
			class="zooming-image-glass"
            @pointermove=${(e: PointerEvent) => {
				this.dispatchEvent(new GlassMoveEvent(e));
			}}
			@mousemove=${(e: MouseEvent) => {
				this.dispatchEvent(new GlassMoveEvent(e));
			}}
			style=${styleMap(this.linkedItemStyles)}
		>
			<slot></slot>
		</div>`;
	}
}
