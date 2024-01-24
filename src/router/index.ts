// 导入和Vue Router
import { createRouter, createWebHistory } from 'vue-router';

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
  ],
});

// 导出路由实例
export default router;
