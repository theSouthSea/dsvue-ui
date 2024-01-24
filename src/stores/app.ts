// import { createStore } from 'vuex';
import { defineStore } from 'pinia';

import { LANG } from '@/constant';
import i18n, { loadLocaleMessages, setI18nLanguage } from '@/i18n';
interface State {
  language: Language;
}
export const useApp = defineStore('app', {
  state: (): State => ({
    language: (localStorage.getItem(LANG) as Language) || 'zh',
  }),
  // mutations: {
  //   setLanguage(state, lang) {
  //     // 设置缓存
  //     localStorage.setItem(LANG, lang);
  //     // 修改状态
  //     state.language = lang;
  //   },
  // },
  actions: {
    async setLanguage(lang: Language) {
      // 设置缓存
      localStorage.setItem(LANG, lang);
      // i18n.global.locale.value = lang;
      // i18n.locale.value = lang;
      // await loadLocaleMessages(i18n, lang);
      if (!i18n.global.availableLocales.includes(lang)) {
        await loadLocaleMessages(i18n, lang);
      }
      setI18nLanguage(i18n, lang);
      // 修改状态
      this.language = lang;
    },
  },
  // modules: {},
  // getters: {
  //   language: (state) => state.language,
  // },
});
