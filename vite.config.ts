// import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// console.log('__filename', __filename);
// console.log('__dirname', __dirname);
// console.log('import.meta.dirname', import.meta.dirname); // 20.11.0支持
// console.log('import.meta.filename', import.meta.filename); // 20.11.0支持
const glob = require('glob');

const list = {};

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  for (const file of files) {
    const output = file.split(/[/.]/)[2];
    list[output] = `./${file}`;
  }
}

makeList('components/lib', list);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 原文链接：https://blog.csdn.net/summer_dou/article/details/123922964
  build: {
    outDir: 'lib',
    lib: {
      // entry: 'packages/index.js',
      entry: list,
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖,解决插件报错问题(reading 'isCE')
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
