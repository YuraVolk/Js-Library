import type { CipheringTextComponent } from "lit/src/components/ciphering-text/cipheringText";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";

import("../header");
import("../sidebar");
import("../../../components/ciphering-text/cipheringText")
	.then(({ CipheringTextComponent }) => {
		window.customElements.define("ciphering-text-component", CipheringTextComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"ciphering-text-component": CipheringTextComponent;
	}
}
