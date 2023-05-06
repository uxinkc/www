
export const projectsRoutes = [
  { 
    path: '/projects',
    component: () => import('@/Projects/_views/Projects.vue')
  },
  { 
    path: '/projects/:id',
    component: () => import('@/Projects/_views/ProjectPage.vue')
  }
]