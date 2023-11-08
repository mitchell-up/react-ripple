import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import swc, { defineRollupSwcOption } from "rollup-plugin-swc3";
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: './dist/bundle.cjs',
            format: 'cjs',
            sourcemap: 'inline'
        },
        {
            file: './dist/bundle.mjs',
            format: 'esm',
            sourcemap: 'inline'
        }
    ],
    plugins: [
        vanillaExtractPlugin(),
        PeerDepsExternalPlugin(),
        nodeResolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
        commonjs(),
        terser(),
        typescript(),
        swc(defineRollupSwcOption({
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            sourceMaps: true
        }))
    ],
    external: [
        'react',
        'react-dom',
        '@emotion/react',
    ]
}