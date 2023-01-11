/**
 * @Author: sroxck
 * @Date: 2023-01-11 15:30:29
 * @LastEditors: sroxck
 * @LastEditTime: 2023-01-11 17:43:31
 * @Description: 
 */
import path from 'path'
import typescript from 'rollup-plugin-typescript2';
import esbuild from 'rollup-plugin-esbuild'
import { terser } from 'rollup-plugin-terser'
  const input = 'src/index.ts'

export default [
  {
    input,
    output: [
      {
        preserveModules: true, // 保留导入的模块为单独文件
        dir: 'dist',
        format: 'es'
      }
    ],
    plugins: [
      typescript({
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: false,
            declaration: true,
            declarationMap: false,
            rootDir: './src',
            outDir: 'dist',
            declarationDir: 'dist'
          }
        }
      }),
      esbuild({
        include: /\.[jt]s$/,
        minify: process.env.NODE_ENV === 'production',
        target: 'es2015'
      })
    ]
  },
]
