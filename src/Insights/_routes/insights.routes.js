
export const insightsRoutes = [
  { 
    path: '/insights',
    component: () => import('@/Insights/_views/Insights.vue')
  },
  { 
    path: '/insights/:id',
    component: () => import('@/Insights/_views/InsightPage.vue')
  }
]