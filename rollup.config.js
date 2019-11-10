import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';

let defaults = { compilerOptions: { declaration: true } };
let override = { compilerOptions: { declaration: false } };

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/bundle.js',
    format: 'cjs'
  },
  plugin: [
    nodeResolve({ jsnext: true }),
    commonjs(),
    typescript({
      tsconfigDefaults: defaults,
      tsconfig: "tsconfig.json",
      tsconfigOverride: override
    })
  ]
};

