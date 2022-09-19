import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '@/layout/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeLayout,
      children: [
        {
          path: '',
          name: 'Inbox',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/inbox.vue'),
          meta: {
            pageTitle: 'Inbox'
          }
        },
        {
          path: '/archive',
          name: 'archive',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/archive.vue'),
          meta: {
            pageTitle: 'Archive'
          }
        }
      ]
    },
  ]
})

export default router
