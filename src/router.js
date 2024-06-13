import { createRouter, createWebHistory } from 'vue-router';
import Admin from './views/Admin.vue';
import Home from './views/Home.vue'; // Assuming you have a Home component
import NotFound from './views/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/admin', component: Admin },
  // Set up a 404 page
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;