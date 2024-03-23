export class MovingToCenterEvent extends Event {
	constructor() {
		super("moving-to-center");
	}
}

export class MovedToCenterEvent extends Event {
	constructor() {
		super("moved-to-center");
	}
}

export class MovingFromCenterEvent extends Event {
	constructor(readonly elementIndex?: number) {
		super("moving-from-center");
	}
}
