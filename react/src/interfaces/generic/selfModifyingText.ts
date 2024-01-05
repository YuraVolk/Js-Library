import { LetterSettings, SelfModifyingTextInterface } from "shared/interfaces/selfModifyingText";

export interface ReactModifyingTextFunctions {
    interval: React.MutableRefObject<number | undefined>;
    settings: SelfModifyingTextInterface;
    currentTextValue: LetterSettings[];
    setCurrentTextValue: React.Dispatch<LetterSettings[]>;
}
