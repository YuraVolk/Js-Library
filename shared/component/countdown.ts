export interface TimeUnit {
	name: string;
	timeFactor: number;
}

export const defaultTimeUnits: TimeUnit[] = [
	{ name: "second", timeFactor: 1000 },
	{ name: "minute", timeFactor: 60 },
	{ name: "hour", timeFactor: 60 },
	{ name: "day", timeFactor: 24 },
	{ name: "year", timeFactor: 356 }
];

export const reduceTimeUnits = (units: TimeUnit[]) => units
	.map((unit, i) => ({ ...unit, timeFactor: units.slice(0, i + 1).reduce((factor, unit) => factor * unit.timeFactor, 1) }))
	.reverse();

export interface CountdownConfiguration {
	date: Date;
}
