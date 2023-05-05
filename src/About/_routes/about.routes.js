
export const aboutRoutes = [
  { 
    path: '/',
    component: () => import('@/About/_views/About.vue'),
    meta: {
      requiresAuth: false
    }
  },
  { 
    path: '/about',
    component: () => import('@/About/_views/About.vue'),
    meta: {
      requiresAuth: false
    }
  }
]