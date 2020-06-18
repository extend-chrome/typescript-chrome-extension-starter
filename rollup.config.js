import {
  chromeExtension,
  simpleReloader,
} from 'rollup-plugin-chrome-extension'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { emptyDir } from 'rollup-plugin-empty-dir'

export default {
  input: 'src/manifest.json',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: 'inline',
  },
  plugins: [
    chromeExtension(),
    simpleReloader(),
    typescript(),
    resolve(),
    commonjs(),
    emptyDir(),
  ],
}
