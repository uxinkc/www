
export const insightsRoutes = [
  { 
    path: '/insights',
    component: () => import('@/Insights/_views/Insights.vue'),
    meta: {
      requiresAuth: false
    }
  },
  { 
    path: '/insights/:id',
    component: () => import('@/Insights/_views/InsightPage.vue'),
    meta: {
      requiresAuth: false
    }
  }
]