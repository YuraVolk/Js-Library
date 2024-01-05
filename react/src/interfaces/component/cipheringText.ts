import { CipheringTextConfiguration } from "shared/component/cipheringText";

export interface ReactCipheringTextConfiguration extends Partial<CipheringTextConfiguration> {
    strings: string[];
}
