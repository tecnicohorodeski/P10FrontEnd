import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrinquedosView from '../views/Categorias/BrinquedosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/brinquedos',
      name: 'brinquedos',
      component: BrinquedosView
    },
  ]
})

export default router
