import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { ROUTE_NAMES } from '../constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: ROUTE_NAMES.HOME,
      component: HomeView
    },
    {
      path: '/changed-rates',
      name: ROUTE_NAMES.CHANGED_RATES,
      component: () => import('../views/ChangedRates.vue')
    },
    {
      path: '/search',
      name: ROUTE_NAMES.SEARCH,
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/edit/:id',
      name: ROUTE_NAMES.EDIT,
      component: () => import('../views/EditView.vue')
    }
  ]
})

export default router
