import type { AutocompleteListComponent } from "lit/src/components/autocomplete-list/autocompleteList";
import "../../../components/litEntry";
import "./style.css";
import "../../../global.css";

import("../header");
import("../sidebar");
import("../../../components/autocomplete-list/autocompleteList")
	.then(({ AutocompleteListComponent }) => {
		window.customElements.define("autocomplete-list-component", AutocompleteListComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"autocomplete-list-component": AutocompleteListComponent;
	}
}
