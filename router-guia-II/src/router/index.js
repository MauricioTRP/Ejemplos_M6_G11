import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => {
        return import('@/views/ProductsView.vue')
      }
    },
    {
      path: '/products/:id',
      name: 'single-product',
      component: () => import('@/views/SingleProduct.vue'),
      props: (route) => {
        return {
          id: Number(route.params.id),
          nombre: 'Tomaco',
          precio: 2000
        }
      },
      // ruta hijo /products/:id/comentarios
      children: [
        {
          path: 'comentarios',
          name: 'comentarios',
          component: () => import('@/views/ComentsView.vue')
        }
      ]
    }
  ]
})

export default router
