import type { TemplateResult, nothing } from "lit";

export type TransitionRenderProp<T extends Array<unknown>> = (...args: T) => TemplateResult | typeof nothing;
