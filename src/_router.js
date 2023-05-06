import { createRouter, createWebHistory } from 'vue-router';

import { aboutRoutes } from '@/About/_routes/about.routes.js';
import { insightsRoutes } from '@/Insights/_routes/insights.routes.js';
import { projectsRoutes } from '@/Projects/_routes/projects.routes.js';
import { contactRoutes } from '@/Contact/_routes/contact.routes.js';

const routes = [
  ...aboutRoutes,
  ...insightsRoutes,
  ...projectsRoutes,
  ...contactRoutes,
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/Shared/_views/NotFound.vue')
  }
];

export const router = createRouter({
  history: createWebHistory('/'), // base directory option now here createWebHistory('/base-directory/'),
  routes
});

router.beforeEach( async (_to, _from, _next) => {
  _next()
})

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] }
}).href
