import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../components/pages/Homepage.vue';
import DealsByStorePage from '../components/pages/DealsByStorePage.vue';
import StoresPage from '../components/pages/StoresPage.vue';
import SearchResultPage from '../components/pages/SearchResultPage.vue';
import AboutPage from '../components/pages/AboutPage.vue';
import FullPage from '../components/pages/FullPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage,
    },
    {
      path: '/deals/:dealType',
      name: 'FullPage',
      component: FullPage,
    },
    {
      path: '/stores/:storeId',
      name: 'storeDeals',
      component: DealsByStorePage,
    },
    {
      path: '/stores/',
      name: 'store',
      component: StoresPage,
    },
    {
      path: '/search-results/:param',
      name: 'searchResult',
      component: SearchResultPage,
    },
    {
      path: '/about/',
      name: 'about',
      component: AboutPage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;
