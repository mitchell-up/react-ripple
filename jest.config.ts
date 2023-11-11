import { Config } from "jest";

const config: Config = {
    setupFiles: ['./__test__/setup.ts'],
    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest",
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
}

export default config