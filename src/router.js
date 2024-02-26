import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'; // Adjust the path accordingly
import Station from './views/station/Station.vue'; // Adjust the path accordingly

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/station/:shortcode',
      name: 'station',
      
      component: Station
  },
  // Add other routes if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
