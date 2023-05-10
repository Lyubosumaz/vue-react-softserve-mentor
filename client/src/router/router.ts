import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { auth } from '@/firebase/firebase'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/user',
    children: [
      { path: 'sign-in', component: () => import('../views/SignIn.vue') },
      { path: 'sign-up', component: () => import('../views/SignUp.vue') },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (auth.currentUser) {
      next()
    } else {
      alert("you don't have access!")
      next('/user/sign-in')
    }
  } else {
    next()
  }
})

export default router
