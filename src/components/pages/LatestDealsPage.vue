<template>
  <template v-if="fetchedData">
    <DealsTemplate title="Latest deals" :games="allDeals" />
    <Paggination @pageChange="fetchPage" />
  </template>
  <EmptyDealsTemplate v-else />
</template>

<script>
import { fetchGames } from '../../Data';
import DealsTemplate from '../UI/DealsTemplate.vue';
import EmptyDealsTemplate from '../UI/EmptyDealsTemplate.vue';
import Paggination from '../UI/Pagination.vue';

export default {
  components: { EmptyDealsTemplate, DealsTemplate, Paggination },
  data() {
    return {
      allDeals: [],
      fetchedData: false,
      currentPage: 1,
    };
  },

  methods: {
    async getData() {
      this.allDeals = await fetchGames('Recent', this.currentPage, '32');
    },
    fetchPage(page) {
      this.currentPage = page;
      this.getData().then(() => (this.fetchedData = true));
    },
  },

  created() {
    this.getData().then(() => (this.fetchedData = true));
  },
};
</script>
