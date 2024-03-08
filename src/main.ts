import './style.css';
import './theme.css';
// import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css'; //这句是暗黑模式切换

// import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

// 第一种,全局注册组件
// import RegisterComp from '@/components/demo/registerComp/RegisterComp.vue';
// 第二种,全局注册组件
import registerComp from '@/components/demo/registerComp';
// import { createI18n } from 'vue-i18n';
import i18n from '@/i18n';

// import { useApp } from '@/stores/app';
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
// const appConfig = useApp();
app.use(pinia);
app.use(i18n);
app.use(router);
// app.component('RegisterComp', RegisterComp);
app.use(registerComp);
// app.use(_RegisterComp);
// app.use(ElementPlus);
// app.use(ElementPlus, {
//   locale: appConfig.language === 'en' ? en : zhCn,
// });
app.mount('#app');
