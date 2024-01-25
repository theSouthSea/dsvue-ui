import { type Preview, setup } from '@storybook/vue3';
import { createI18n } from 'vue-i18n';
// require("dotenv").config();
// import 'dotenv/config';
import 'element-plus/dist/index.css';

import ElementPlus from 'element-plus';
import en from '@/i18n/lang/en.ts';
import zh from '@/i18n/lang/zh.ts';

const i18n = createI18n({
  locale: 'en',
  messages: {
    zh: {
      language: '简体中文',
      ...zh,
    },
    en: {
      language: 'English',
      ...en,
    },
  },
});

// Vue.use(i18n);
setup((app) => {
  //👇 Registers a global Pinia instance inside Storybook to be consumed by existing stories
  app.use(i18n);
  app.use(ElementPlus);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => ({
      components: { Story },
      template: '<story v-bind="$props" />',
    }),
  ],
};

export default preview;
