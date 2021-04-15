import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve'; // for node_modules dependecies
import external from 'rollup-plugin-peer-deps-external'; // expect packages in peerDependecies
import postcss from 'rollup-plugin-postcss'; // for css
import { terser } from 'rollup-plugin-terser'; // for minify

export default [
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
            }
        ],
        plugins: [
            postcss({
                plugins: [],
                minimize: true
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            resolve(),
            terser()
        ]
    }
];