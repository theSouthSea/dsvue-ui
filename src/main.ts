import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
const obj = {
  abc: 'abc',
  bb: 123,
};
console.log('obj', obj);
createApp(App).mount('#app');
