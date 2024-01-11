import React, {
	CSSProperties,
	MutableRefObject,
	ReactNode,
	createContext,
	forwardRef,
	useContext,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState
} from "react";
import { LinkedRegistryRecord } from "shared/hooks/useLinkedItem";
import { assertNonUndefined } from "shared/utils/utils";

type LinkedReactItems = LinkedRegistryRecord<keyof CSSProperties, CSSProperties, MutableRefObject<HTMLElement | null>>;
export type LinkedReactItem = LinkedReactItems[string];

interface LinkedReactItemsContext {
	state: LinkedReactItems;
	updateState(updateFunction: (state: LinkedReactItems) => LinkedReactItems): void;
}

const LinkedItemContext = createContext<LinkedReactItemsContext>({
	state: {},
	updateState: function (): void {
		throw new Error("Function not implemented.");
	}
});

export function useLinkedItem(generateId: () => string, item: MutableRefObject<HTMLElement | null>) {
	const [id] = useState(generateId());
	const elements = useContext(LinkedItemContext);

	useEffect(() => {
		assertNonUndefined(item.current);
		elements.updateState((state) => ({
			...state,
			[id]: {
				element: item,
				styles: {}
			}
		}));
	}, []);

	return typeof elements.state[id] === "undefined" ? {} : elements.state[id].styles;
}

export interface ExposedContextFunctions {
	getState(): LinkedReactItems;
	updateState(items: LinkedReactItems): void;
	wasSetupPerformed(): boolean;
}

interface ExposedContextProps {
	children: ReactNode;
	innerChildren: ReactNode;
	onAllElementsLoaded?(): void;
}

const ContextLinkedItems = forwardRef<ExposedContextFunctions, ExposedContextProps>((props, ref) => {
	const [elements, setElements] = useState<LinkedReactItems>({});
	const wasSetupPerformed = useRef(false);
	const contextElements = useMemo<LinkedReactItemsContext>(
		() => ({
			state: elements,
			updateState: setElements
		}),
		[elements]
	);

	useEffect(() => {
		if (wasSetupPerformed.current || !Array.isArray(props.innerChildren)) return;
		if (Object.keys(elements).length === props.innerChildren.length) {
			wasSetupPerformed.current = true;
			props.onAllElementsLoaded?.();
		}
	}, [elements]);

	useImperativeHandle(ref, () => ({
		getState() {
			return elements;
		},
		updateState(newState) {
			setElements(newState);
		},
		wasSetupPerformed() {
			return wasSetupPerformed.current;
		}
	}));

	return <LinkedItemContext.Provider value={contextElements}>{props.children}</LinkedItemContext.Provider>;
});

export { ContextLinkedItems };
