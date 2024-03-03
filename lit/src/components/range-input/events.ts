export class RangeInputChangeEvent extends Event {
    constructor(readonly value: number) {
        super("change");
    }
}
