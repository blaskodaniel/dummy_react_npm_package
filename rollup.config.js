import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve'; // for node_modules dependecies
import external from 'rollup-plugin-peer-deps-external'; // expect packages in peerDependecies
import postcss from 'rollup-plugin-postcss'; // for css
import { terser } from 'rollup-plugin-terser'; // for minify

const extensions = ['.js', '.jsx']

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
            },
            {
                file: 'dist/index.esm.js',
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
			external(),
            postcss({
                plugins: [],
                minimize: true
            }),
			resolve(extensions),
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
				include: ['src/**/*.js(x)?'],
				extensions,
                presets: ['@babel/preset-react']
            }),
            terser()
        ]
    }
];