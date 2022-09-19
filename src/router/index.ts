import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

const isHash = import.meta.env.VITE_USE_HASH === 'true'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
]

export const router = createRouter({
  history: isHash ? createWebHashHistory('/') : createWebHistory('/'),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
