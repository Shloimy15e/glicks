// src/router.template.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // Assuming you have a Home component
import NotFound from './views/NotFound.vue';
import Category from './views/Category.vue';
import FAQ from './views/FAQ.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/categories/category/:categoryName', component: Category, name: 'category-view' },
  { path: '/faq', component: FAQ, name: 'faq' },
  { path: '/:pathMatch(.*)*', component: NotFound, name: 'not-found' },
  
  {
    path: '/admin',
    component: () => import('./views/admin/Admin.vue')
  },
  {
  path: '/admin/addItems',
  component: () => import('./views/admin/AddItems.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition || { top: 0 };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
