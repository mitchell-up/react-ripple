import { Config } from "jest";

const config: Config = {
    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest",
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
}

export default config