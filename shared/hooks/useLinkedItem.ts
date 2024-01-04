type CSSProperty = string | number | undefined;

export type LinkedRegistryRecord<S extends string, T extends Partial<Record<S, CSSProperty>>, E = HTMLElement> = Record<
	string,
	{
		element: E;
		styles: Partial<T>;
	}
>;
