// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import DataImport from '../components/DataImport.vue';
import UserProfile from '../components/UserProfile.vue';

const routes = [
  {
    path: '/',
    component: DataImport, // 设定默认组件
  },
  {
    path: '/data-import',
    component: DataImport,
  },
  {
    path: '/user-profile',
    component: UserProfile,
    props: true, // 确保接收参数
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
