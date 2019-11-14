import typescript from 'rollup-plugin-typescript2';

let defaults = { compilerOptions: { declaration: true } };
let override = { 
  compilerOptions: { 
    module: "es2015",
    moduleResolution: "node"
  } 
};

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/bundle.js',
    format: 'cjs'
  },
  plugin: [
    typescript({
      tsconfigDefaults: defaults,
      tsconfig: "tsconfig.json",
      tsconfigOverride: override
    })
  ]
};

