/// <reference types="vitest" />
// import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
// 引入loader
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
// 引入 Icon自动引入解析器
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
// 引入 ElementPlus 自动引入解析器
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// 引入自动引入插件
import Components from 'unplugin-vue-components/vite';
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
  plugins: [
    vue(),
    // 使用自动引入插件
    Components({
      // 配置解析器
      resolvers: [
        // Icon自动引入解析器
        IconsResolver({
          // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
          prefix: 'icon',
          // 当图标集名字过长时，可使用集合别名
          alias: {
            system: 'system-uicons',
            mdilight: 'mdi-light',
          },
          // 标识自定义图标集
          customCollections: ['ali'],
        }),
        // 使用 ElementPlus 自动引入解析器
        ElementPlusResolver(),
      ],
    }),
    Icons({
      compiler: 'vue3',
      // 自动安装
      autoInstall: true,
      // 自定义图标加载
      customCollections: {
        // home图标集
        // 给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
        ali: FileSystemIconLoader('src/assets/svg/ali', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        ),
        // about图标集
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    // 启用类似 jest 的全局测试 API
    globals: true,
    // 使用 happy-dom 模拟 DOM
    // 这需要你安装 happy-dom 作为对等依赖（peer dependency）
    environment: 'happy-dom',
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
