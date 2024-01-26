// import { useStore } from 'pinia';
import { nextTick } from 'vue';
import { createI18n } from 'vue-i18n';

import { LANG } from '@/constant';

// import { useApp } from '@/stores/app';
import mEnLocale from './lang/en';
// import mZhLocale from './lang/zh';
// 从localStorage获取之前保存的locale
function getStoredLocale() {
  // return 'zh';
  // 从store中读取选中的语言,实现不了,需要改成从localStorage读取选中的语言
  // const appConfig = useApp();
  // const store = useStore();
  // console.log('store.app.language', store?.app?.language);
  // return appConfig.language;
  const storedLocale = localStorage.getItem(LANG);
  // return storedLocale && Object.keys(messages).includes(storedLocale) ? storedLocale : 'en'; // 如果找不到或者不在messages中，则默认为'en'
  return storedLocale || 'en';
}

// const messages = {
//   en: {
//     msg: {
//       test: 'hello world',
//       ...mEnLocale,
//     },
//   },
//   zh: {
//     msg: {
//       test: '你好世界',
//       ...mZhLocale,
//     },
//   },
// };
// const locale: Language = 'zh';

// const i18n = createI18n({
//   // 使用 Composition API 模式，则需要将其设置为false
//   legacy: false,
//   // 全局注入 $t 函数
//   globalInjection: true,
//   // locale: locale,
//   locale: getStoredLocale(),
//   // 异步加载消息函数
//   async loadMessages(lang: string) {
//     const messages = await import(/* webpackChunkName: "lang-[request]" */ `@/lang/${lang}.ts`);
//     console.log('messages===', messages?.default?.login);
//     return messages.default;
//   },
//   // 按需加载的消息处理器
//   messageProcessor: async (key: string, locale: Language, messages: any, args: any) => {
//     if (!messages[key]) {
//       // 当指定的语言包未加载时，异步加载它
//       i18n.global.setLocaleMessage(locale, await i18n.loadMessages(locale));
//     }
//     return messages[key];
//   },
//   // messages,
// });
// 在应用程序初始化之前加载初始语言包
// (async () => {
//   await i18n.global.setLocaleMessage(
//     i18n.global.locale,
//     await i18n.loadMessages(i18n.global.locale)
//   );
// })();
export const SUPPORT_LOCALES = ['en', 'zh'];

export function setupI18n(options = { locale: 'en' }) {
  const i18n = createI18n(options);
  setI18nLanguage(i18n, options.locale);
  return i18n;
}

export function setI18nLanguage(i18n, locale) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale;
  } else {
    i18n.global.locale.value = locale;
  }
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector('html')?.setAttribute('lang', locale);
}

export async function loadLocaleMessages(i18n, locale) {
  // load locale messages with dynamic import
  const messages = await import(/* webpackChunkName: "locale-[request]" */ `./lang/${locale}.ts`);
  console.log('messages===', messages?.default?.login);
  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
}
// const defaultMessages = (async () => {
//   const locale = getStoredLocale();
//   const messages = await import(/* webpackChunkName: "locale-[request]" */ `./lang/${locale}.ts`);
//   console.log('messages===', messages?.default?.login);
//   return messages.default;
// })();
const i18n = setupI18n({
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  // locale: locale,
  // locale: getStoredLocale(),
  // messages: {
  //   [getStoredLocale()]: mEnLocale,
  // },
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: mEnLocale,
  },
});
const curLocale = getStoredLocale();
console.log('i18n.global.availableLocales', i18n.global.availableLocales);
console.log('curLocale', curLocale);
if (!i18n.global.availableLocales.includes(curLocale)) {
  await loadLocaleMessages(i18n, curLocale);
}
export default i18n;
