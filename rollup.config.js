import typescript from 'rollup-plugin-typescript2';
import {terser} from "rollup-plugin-terser";

export default {
 input: 'index.ts',
 output: [
  {
   file: 'dist/index.js',
   format: 'cjs',
   sourcemap: true
  },
  {
   file: 'dist/index.esm.js',
   format: "esm",
   sourcemap: true
  }
 ],
 plugins: [
  typescript({
   typescript: require('typescript'),
  }),
  terser()
 ]
};