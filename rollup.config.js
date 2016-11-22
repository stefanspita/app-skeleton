// Rollup plugins
import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import uglify from "rollup-plugin-uglify"

export default {
  entry: "src/scripts/main.js",
  dest: "build/js/main.min.js",
  format: "iife",
  sourceMap: "inline",
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    uglify(),
  ],
}
