// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'

// import 'mooc-ui/dist/css/index.css'
// import Mui from 'mooc-ui'
// Vue.use(Mui)
import 'dsvue-ui/dist/css/index.css'
import MUI from "dsvue-ui";
// import MUI from '../components/lib'
// import "../components/css/index.scss";
// Vue.use(MUI);

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

const app = createApp(App);
app.use(MUI)
app.mount('#app')