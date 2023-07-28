import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../components/pages/Homepage.vue';
import LatestDealsPage from '../components/pages/LatestDealsPage.vue';
import LatestReleasesPage from '../components/pages/LatestReleasesPage.vue';
import BiggestSavingPage from '../components/pages/BiggestSavingPage.vue';
import DealsByStorePage from '../components/pages/DealsByStorePage.vue';
import DealsByTitle from '../components/pages/DealsByTitle.vue';
import StoresPage from '../components/pages/StoresPage.vue';
import SearchResultPage from '../components/pages/SearchResultPage.vue';
import AboutPage from '../components/pages/AboutPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage,
    },
    {
      path: '/latest-deals',
      name: 'latest-deals',
      component: LatestDealsPage,
    },
    {
      path: '/latest-releases',
      name: 'latest-releases',
      component: LatestReleasesPage,
    },
    {
      path: '/biggest-saving',
      name: 'biggest-saving',
      component: BiggestSavingPage,
    },
    {
      path: '/deals-by-title',
      name: 'deals-by-title',
      component: DealsByTitle,
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
