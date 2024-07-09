export interface FilteringButtonConfiguration<T> {
	filter?: T;
}

export interface FilteringWrapperConfiguration<T, V> {
	activeFilter?: T;
	items: Array<{
		filter: T;
		value: V;
	}>;
}
