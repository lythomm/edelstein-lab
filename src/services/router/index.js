import { createRouter, createWebHistory } from 'vue-router';

import Home from '../../views/Home.vue';
import Artists from '../../views/Artists.vue';
import Events from '../../views/Events.vue';
import Contact from '../../views/Contact.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/artists', name: 'Artists', component: Artists },
  { path: '/events', name: 'Events', component: Events },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
