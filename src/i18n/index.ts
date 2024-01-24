// import { useStore } from 'pinia';
import { createI18n } from 'vue-i18n';

import { LANG } from '@/constant';

// import { useApp } from '@/stores/app';
import mEnLocale from './lang/en';
import mZhLocale from './lang/zh';
// 从localStorage获取之前保存的locale
function getStoredLocale() {
  // return 'zh';
  // 从store中读取选中的语言,实现不了,需要改成从localStorage读取选中的语言
  // const appConfig = useApp();
  // const store = useStore();
  // console.log('store.app.language', store?.app?.language);
  // return appConfig.language;
  const storedLocale = localStorage.getItem(LANG);
  return storedLocale && Object.keys(messages).includes(storedLocale) ? storedLocale : 'en'; // 如果找不到或者不在messages中，则默认为'en'
}

const messages = {
  en: {
    msg: {
      test: 'hello world',
      ...mEnLocale,
    },
  },
  zh: {
    msg: {
      test: '你好世界',
      ...mZhLocale,
    },
  },
};
// const locale: Language = 'zh';

const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  // locale: locale,
  locale: getStoredLocale(),
  messages,
});

export default i18n;
