import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

const name = 'countdown';

export default {
  input: './src/countdown.tsx',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external: ['react'],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),
    // Compile TypeScript/JavaScript files
    babel({ 
      extensions, include: ['src/**/*'] 
    }),
    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),
  ],

  output: [{
    file: pkg.main,
    format: 'cjs',
  }, {
    file: pkg.module,
    format: 'es',
  }, {
    file: pkg.browser,
    format: 'iife',
    name,

    // https://rollupjs.org/guide/en#output-globals-g-globals
    globals: {
      'react': 'React',
    },
  }],
};