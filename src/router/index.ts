import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/404',
      component: () => import('@/views/404.vue'),
    },
    //----------//
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [{
        path: '/',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: 'Home', icon: 'home' }
      }]
    },
    {
      path: '/system',
      component: Layout,
      redirect: '/system/menu',
      children: [{
        path: 'menu',
        name: 'Menu',
        component: () => import('@/views/system/menu/index.vue'),
        meta: { title: 'Menu', icon: 'menu' }
      },{
        path: 'role',
        name: 'Role',
        component: () => import('@/views/system/role/index.vue'),
        meta: { title: 'Role', icon: 'role' }
      },{
        path: 'user',
        name: 'User',
        component: () => import('@/views/system/user/index.vue'),
        meta: { title: 'user', icon: 'user' }
      }]
    },
   
  ]
})

export const error404 = { path: '*', redirect: '/404', hidden: true };

export default router
