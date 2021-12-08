import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  external: Object.keys(pkg.peerDependencies),
  output: [
    {
      name: "ReactToolkit",
      file: 'dist/index.js',
      format: 'umd',
      globals: {
        "react": "React"
      }
    },
  ],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs()
  ],
}
