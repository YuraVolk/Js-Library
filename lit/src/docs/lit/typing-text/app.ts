import type { TypingTextComponent } from "lit/src/components/typing-text/typingText";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";

import("../header");
import("../sidebar");
import("../../../components/typing-text/typingText")
	.then(({ TypingTextComponent }) => {
		window.customElements.define("typing-text-component", TypingTextComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"typing-text-component": TypingTextComponent;
	}
}
