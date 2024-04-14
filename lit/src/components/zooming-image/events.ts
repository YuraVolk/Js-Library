export class GlassMoveEvent extends Event {
    constructor(readonly event: MouseEvent) {
		super("glass-move");
	}
}
