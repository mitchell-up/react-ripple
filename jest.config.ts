import { Config } from "jest";

const config: Config = {
    setupFilesAfterEnv: ['./src/__test__/setup.ts'],
    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
            },
        ],
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy'
    },
    testEnvironment: 'jsdom'
}

export default config