import { defineConfig } from 'vite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vue from '@vitejs/plugin-vue';

const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);
export default defineConfig({
  build: {
    outDir: '',
    lib: {
      entry: resolve(__dirname, '../packages/index.ts'),
      name: 'my-components',
      fileName: (name) => `my-component-${name}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // umd模式下,为那些外部化的依赖提供一个全局变量
        globals: {
          vue: ['Vue'],
        },
      },
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
  ],
});
