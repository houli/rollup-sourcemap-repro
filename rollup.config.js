import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'test/test.js',
  dest: 'bundle.js',
  format: 'iife',
  // The important part, switching to true/'inline' causes bundling time to increase
  // significantly. Beyond this minimal reproduction 'inline' useful in Karma
  // bundled test files for debugging
  sourceMap: false,
  plugins: [
    nodeResolve(),
    commonjs({
      namedExports: {
        'node_modules/chai/index.js': ['expect']
      }
    })
  ]
}
