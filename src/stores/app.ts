// import { createStore } from 'vuex';
import { defineStore } from 'pinia';

import { LANG } from '@/constant';
import i18n from '@/i18n';
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
    setLanguage(lang: Language) {
      // 设置缓存
      localStorage.setItem(LANG, lang);
      i18n.global.locale.value = lang;
      // 修改状态
      this.language = lang;
    },
  },
  // modules: {},
  // getters: {
  //   language: (state) => state.language,
  // },
});
