import { createRouter, createWebHistory } from 'vue-router';

const About = () => import('../views/About.vue');
const Users = () => import('../views/Users.vue');
const Insights = () => import('../views/Insights.vue');
//
const NotFound = () => import('../views/NotFound.vue');


const routes = [
  { 
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/users',
    name: 'users',
    component: Users
  },
  {
    path: '/insights/:id',
    name: 'insights',
    component: Insights,
    props: true
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
];

export const router = createRouter({
  history: createWebHistory('/www/'), // base diretory option now here createWebHistory('/base-directory/'),
  routes
});

router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] }
}).href
