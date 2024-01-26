// 导入和Vue Router
import { createRouter, createWebHistory } from 'vue-router';

import i18n, { loadLocaleMessages, setI18nLanguage, SUPPORT_LOCALES } from '@/i18n';
// 导入页面组件
import HomePage from '@/views/Counter.vue';

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/mouseposition', component: () => import('@/views/MousePosition.vue') },
    { path: '/vmodeldemo', component: () => import('@/views/VmodelDemo.vue') },
    { path: '/vmodelThory', component: () => import('@/views/VmodelThoery.vue') },
    { path: '/todoreact', component: () => import('@/views/TodoReact.vue') },
    { path: '/todo', component: () => import('@/views/Todo.vue') },
    { path: '/login', component: () => import('@/views/Login.vue') },
    { path: '/iconpreview', component: () => import('@/views/IconPreview.vue') },
  ],
});
// router.beforeEach(async (to, from, next) => {
//   const paramsLocale = to.params.locale as Language;
//   if (paramsLocale) {
//     // use locale if paramsLocale is not in SUPPORT_LOCALES
//     if (!SUPPORT_LOCALES.includes(paramsLocale)) {
//       return next(`/${paramsLocale}`);
//     }

//     // load locale messages
//     if (!i18n.global.availableLocales.includes(paramsLocale)) {
//       await loadLocaleMessages(i18n, paramsLocale);
//     }

//     // set i18n language
//     setI18nLanguage(i18n, paramsLocale);
//   }

//   return next();
// });
// 导出路由实例
export default router;
