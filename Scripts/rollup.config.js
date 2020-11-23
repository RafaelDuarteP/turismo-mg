// Plugins do Rollup (importando)
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import resolve from '@rollup/plugin-node-resolve'; 
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
//import multiInput from 'rollup-plugin-multi-input';

import posthtml from 'rollup-plugin-posthtml-template';
import include from 'posthtml-include';
import minifier from 'posthtml-minifier';

//import autoprefixer from 'autoprefixer';


// Definindo opções dos plugins
const defaultPlugins = [
  resolve({
    jsnext: true,
    main: true,
    browser: true,
  }),
  eslint({
    babelHelpers: 'bundled',
    exclude: [
      'node_modules/**',
      'src/data/**',
      'src/styles/**',
      'tests/**',
    ],
  }),
  posthtml({
    plugins: [include(),  minifier()],
    template: true  
  }),
  json({
    compact: true,
    include: '../data/**',
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: [
      'node_modules/**'
    ],
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: false,
        }
      ]
    ],
    plugins: [
      '@babel/transform-template-literals',
    ],
    babelrc: false,
  }),
  postcss({
    extensions: ['scss'],
    minimize: true,
    extract: 'styles.min.css'
  }),

];


// Configuração do babel
const babelOutputConfig = {
  allowAllFormats: true,
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
      }
    ]
  ],
  plugins: [
    '@babel/transform-template-literals',
  ],
};


// Configuração do output
export default [
  // Módulo para o browser
  {
    input: 'src/scripts/main.js',
    output: [
      {
        file: 'build/turismomg.dev.js',
        format: 'iife',
        plugins: [
          getBabelOutputPlugin(babelOutputConfig),
        ],
      },
      {
        file: 'build/turismomg.min.js',
        format: 'iife',
        plugins: [
          getBabelOutputPlugin(babelOutputConfig),
          terser(),
        ],
      },
    ],
    watch: {
      include: 'src/**',
    },
    plugins: defaultPlugins,
  },
  // Módulos individuais, para teste
  /*
  {
    input: [
      'src/scripts/components/**.js', 
      'src/scripts/modules/**', 
    ],
    output: {
      dir: 'tests/bundle',
      format: 'es',
      plugins: [
        getBabelOutputPlugin(babelOutputConfig),
      ]
    },
    watch: {
      include: 'src/**',
    },
    plugins: defaultPlugins.concat([
      multiInput(),
    ]),
  },
  */
];
