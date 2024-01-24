import { LitElement, html } from "lit";
import { queryAssignedElements, property } from "lit/decorators.js";
import { FloatingPanelConfiguration } from "shared/component/floatingPanel";

export class FloatingPanelComponent extends LitElement implements FloatingPanelConfiguration {
  @property({ type: Boolean })
  isOpen = false;

  @queryAssignedElements({ flatten: true })
	_floatingPanels!: HTMLElement[];

  private listener!: (event: MouseEvent) => void;

  protected firstUpdated(): void {
    if (this._floatingPanels.length === 0) return;
    const [panel] = this._floatingPanels;
    document.addEventListener("mousedown", this.listener = ({ clientX, clientY }) => {
      const panelX = panel.offsetLeft, panelY = panel.offsetTop;
      const changePosition = (event: MouseEvent) => {
        panel.style.left = panelX + event.clientX - clientX + 'px';
        panel.style.top = panelY + event.clientY - clientY + 'px';
      };

      panel.addEventListener("mousemove", changePosition, false);
      window.addEventListener("mouseup", () => { panel.removeEventListener("mousemove", changePosition, false); });
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener("mousedown", this.listener);
  }

  render() {
    return this.isOpen ? html`<slot></slot>` : "";
  }
}
