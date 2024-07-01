// src/router.template.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // Assuming you have a Home component
import NotFound from './views/NotFound.vue';
import Category from './views/Category.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/categories/category/:categoryName', component: Category },
  { path: '/:pathMatch(.*)*', component: NotFound },
  // @admin-route
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
