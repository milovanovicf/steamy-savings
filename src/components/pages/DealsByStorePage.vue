<template>
  <template v-if="fetchedData">
    <DealsTemplate :title="`Deals from ${store}`" :games="dealsByStore" />
    <Pagination @pageChange="fetchPage" />
  </template>
  <EmptyDealsTemplate v-else />
</template>

<script>
import { fetchByStore, findStore } from '../../Data';
import DealsTemplate from '../UI/DealsTemplate.vue';
import EmptyDealsTemplate from '../UI/EmptyDealsTemplate.vue';
import Pagination from '../UI/Pagination.vue';

export default {
  components: { EmptyDealsTemplate, Pagination, DealsTemplate },
  data() {
    return {
      dealsByStore: {},
      store: '',
      currentPage: 1,
      fetchedData: false,
    };
  },

  methods: {
    async getData() {
      this.dealsByStore = await fetchByStore(
        this.$route.fullPath.slice(8),
        this.currentPage,
        32
      );
      this.store = await findStore(this.$route.fullPath.slice(8)).then(
        (data) => data[0].storeName
      );
    },
    fetchPage(page) {
      this.currentPage = page;
      this.getData().then(() => (this.fetchedData = true));
    },
  },

  mounted() {
    this.getData().then(() => (this.fetchedData = true));
  },
};
</script>
