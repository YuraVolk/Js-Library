import { ModifyingTextConfiguration } from "../../generic/selfModifyingText/selfModifyingText";

export interface CipheringTextConfiguration extends ModifyingTextConfiguration {
    characters: string[];
}
