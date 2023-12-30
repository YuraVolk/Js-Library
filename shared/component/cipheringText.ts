import { ModifyingTextConfiguration } from "../interfaces/selfModifyingText";

export interface CipheringTextConfiguration extends ModifyingTextConfiguration {
    characters: string[];
}
