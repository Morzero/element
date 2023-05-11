import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/Test',
      name: 'Test',
      component: () => import('../views/TestView.vue')
    },

  ]
})
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.token ? true : false;
  // 如果跳转的是登录页面，则判断用户是否已经登录，如果已经登录则直接跳转到Home页面
  if (to.path === '/login') {
    if (isLogin) {
      next('/');
    } else {
      next();
    }
  } else {
    // 如果跳转的不是登录页面，则判断用户是否已经登录，如果没有登录则跳转到登录页面
    if (isLogin) {
      next();
    } else {
      next('/login');
    }
  }
})


export default router
