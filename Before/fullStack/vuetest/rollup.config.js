import babel from 'rollup-plugin-babel'

import resolve from '@rollup/plugin-node-resolve'
// 导出默认配置
export default {
  input: './src/index.js',
  output: {
    file: './dist/vue.js',
    name: 'Vue',
    format: 'umd',
    sourcemap: true
  },
  pulgin: [
    babel({
      exclude: 'node_modules/**' // 排除node_modules下的文件
    }),
    resolve()
  ]
}
