import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrinquedosView from '@/views/Categorias/BrinquedosView.vue'
import ProdutoView from '@/views/ProdutoView.vue'

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
    {
      path: '/produto',
      name: 'produto',
      component: ProdutoView
    },
  ]
})

export default router
