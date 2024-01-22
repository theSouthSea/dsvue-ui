import './style.css';
import 'element-plus/dist/index.css';

import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

// import { createI18n } from 'vue-i18n';
import i18n from '@/i18n';

import App from './App.vue';
import router from './router';
// const obj = {
//   abc: 'abc',
//   bb: 123,
// };
// console.log('obj', obj);
// const i18n = createI18n({
//   // something vue-i18n options here ...
//   // 使用 Composition API 模式，则需要将其设置为false
//   legacy: false,
//   // 全局注入 $t 函数
//   globalInjection: true,
//   locale,
//   messages,
// });
const app = createApp(App);
const pinia = createPinia();
app.use(ElementPlus);
app.use(i18n);
app.use(pinia);
app.use(router);
app.mount('#app');
