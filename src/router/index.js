import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/models',
    name: 'Models',
    component: () => import('../pages/Models.vue')
  },
  {
    path: '/level_design',
    name: 'Levels',
    component: () => import('../pages/Levels.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../pages/Search.vue')
  },
  {
    path: '/links',
    name: 'Links',
    component: () => import('../pages/Links.vue')
  },
  {
    path: '/learn',
    name: 'Learn',
    component: () => import('../pages/Learn.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
