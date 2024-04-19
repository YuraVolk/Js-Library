export const extractRealSlotContents = (slot: HTMLSlotElement): Element => {
    const [element] = slot.assignedElements();
    if (element instanceof HTMLSlotElement) {
        return extractRealSlotContents(element);
    } else return element;
};
