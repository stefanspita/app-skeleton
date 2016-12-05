/*eslint no-process-env: "off"*/
// Rollup plugins
import babel from "rollup-plugin-babel"
import eslint from "rollup-plugin-eslint"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import replace from "rollup-plugin-replace"
import uglify from "rollup-plugin-uglify"
import postcss from "rollup-plugin-postcss"

// PostCSS plugins
import simplevars from "postcss-simple-vars"
import nested from "postcss-nested"
import cssnext from "postcss-cssnext"
import cssnano from "cssnano"

export default {
  entry: "src/main.js",
  dest: "build/js/main.min.js",
  format: "iife",
  sourceMap: "inline",
  plugins: [
    postcss({
      extensions: [".css"],
      plugins: [
        simplevars(),
        nested(),
        cssnext({warnForDuplicates: false}),
        cssnano(),
      ],
    }),
    commonjs({
      include: ["node_modules/**"],
      exclude: [
        "node_modules/lodash-es/**",
        "node_modules/symbol-observable/**",
      ],
      namedExports: {
        "node_modules/react-dom/index.js": ["render"],
      },
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    eslint({
      exclude: [
        "src/main.css",
      ],
    }),
    babel({
      exclude: "node_modules/**",
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
    }),
    (process.env.NODE_ENV === "production" && uglify()),
  ],
}
