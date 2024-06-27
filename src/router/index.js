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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/CategoriesView.vue')
    },
    {
      path: '/category/:cateName',
      name: 'categoryChild',
      component: () => import('../views/CateChildView.vue'),
      props: true,
    },
    {
      path: '/product/:productName/:productId',
      name: 'productDetail',
      component: () => import('../views/DetailView.vue'),
      props: true,
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsCateView.vue')
    },
    {
      path: '/news/:id',
      name: 'newsDetail',
      component: () => import('../views/NewsDetailView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/search',
      name: 'searchResults',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: 'notFound',
      component: () => import('../views/404View.vue')
    }
  ]
})

export default router
