import { assertNonUndefinedDevOnly, assertNonUndefined } from "shared/utils/utils";

class Node<K, V> {
	prev?: Node<K, V>;
	next?: Node<K, V>;
	constructor(
		public key: K,
		public value: V
	) {}
}

export class LinkedHashMap<K, V> {
	private map = new Map<K, Node<K, V>>();
	private head?: Node<K, V>;
	private tail?: Node<K, V>;

	set(key: K, value: V) {
		if (this.map.has(key)) {
			const node = this.map.get(key);
			assertNonUndefinedDevOnly(node);
			node.value = value;
		} else {
			const newNode = new Node(key, value);
			if (this.tail) {
				this.tail.next = newNode;
				newNode.prev = this.tail;
				this.tail = newNode;
			} else this.head = this.tail = newNode;

			this.map.set(key, newNode);
		}
	}

	has(key: K): boolean {
		return this.map.has(key);
	}

	get(key: K): V {
		const node = this.map.get(key);
		assertNonUndefined(node);
		return node.value;
	}

	delete(key: K) {
		if (this.map.has(key)) {
			const node = this.map.get(key);
			assertNonUndefinedDevOnly(node);
			if (node.prev) node.prev.next = node.next;
			if (node.next) node.next.prev = node.prev;
			if (node === this.head) this.head = node.next;
			if (node === this.tail) this.tail = node.prev;
			this.map.delete(key);
		}
	}

	insertAt(index: number, key: K, value: V) {
		if (index < 0 || index > this.map.size) {
			throw new Error("Index out ouf bounds");
		} else if (this.map.has(key)) {
			throw new Error("Key already exists");
		}

		const newNode = new Node(key, value);
		if (index === this.map.size) {
			if (this.tail) {
				this.tail.next = newNode;
				newNode.prev = this.tail;
				this.tail = newNode;
			} else this.head = this.tail = newNode;
		} else {
			let current = this.head;
			for (let i = 0; i < index; i++) current = current?.next;
			assertNonUndefined(current);

			newNode.next = current;
			newNode.prev = current.prev;
			if (current.prev) {
				current.prev.next = newNode;
			} else this.head = newNode;
			current.prev = newNode;
		}

		this.map.set(key, newNode);
	}

	copy(): LinkedHashMap<K, V> {
		const newMap = new LinkedHashMap<K, V>();
		let current = this.head;
		while (current) {
			newMap.set(current.key, current.value);
			current = current.next;
		}

		return newMap;
	}

	[Symbol.iterator](): Iterator<[K, V], undefined> {
		let current = this.head;
		return {
			next() {
				if (current) {
					const value: [K, V] = [current.key, current.value];
					current = current.next;
					return { value, done: false };
				} else {
					return { done: true };
				}
			}
		};
	}
}
