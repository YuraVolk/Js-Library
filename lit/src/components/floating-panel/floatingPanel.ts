import { LitElement, css, html } from "lit";
import { queryAssignedElements, property } from "lit/decorators.js";
import { FloatingPanelConfiguration } from "shared/component/floatingPanel";

export class FloatingPanelComponent extends LitElement implements FloatingPanelConfiguration {
	static styles = css`
		:host {
			position: absolute;
			display: block;
		}
	`;

	@property({ type: Boolean })
	isOpen = false;

	@queryAssignedElements({ flatten: true })
	_floatingPanels!: HTMLElement[];

	private _listener!: (event: MouseEvent) => void;
	private _panelListener!: (event: MouseEvent) => void;

	protected firstUpdated(): void {
		if (this._floatingPanels.length === 0) return;
		document.addEventListener(
			"mousedown",
			(this._listener = ({ clientX, clientY }) => {
        this.removeEventListener("mousemove", this._panelListener);
				const panelX = this.offsetLeft,
					panelY = this.offsetTop;
				this._panelListener = (event: MouseEvent) => {
					this.style.left = String(panelX + event.clientX - clientX) + "px";
					this.style.top = String(panelY + event.clientY - clientY) + "px";
				};

				this.addEventListener("mousemove", this._panelListener, false);
			})
		);

    window.addEventListener("mouseup", () => {
      this.removeEventListener("mousemove", this._panelListener);
    });
	}

	disconnectedCallback(): void {
    this.removeEventListener("mousemove", this._panelListener);
		super.disconnectedCallback();
		document.removeEventListener("mousedown", this._listener);
    window.removeEventListener("mousemove", this._panelListener);
	}

	render() {
		return this.isOpen ? html`<slot></slot>` : "";
	}
}
