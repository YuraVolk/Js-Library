export class AutocompleteListChangeEvent extends Event {
    constructor(readonly value: string) {
        super("autocomplete-selected");
    }
}
