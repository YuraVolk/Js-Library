import { CountdownConfiguration, TimeUnit } from "shared/component/countdown";

export interface CountdownVueConfiguration extends CountdownConfiguration {
    units: TimeUnit[];    
}
