<template>
  <template v-if="fetchedData">
    <DealsTemplate :title="`Deals from ${store}`" :data="dealsByStore" />
    <Pagination @pageChange="fetchPage" />
  </template>
</template>

<script>
import { fetchByStore, findStore, formatData } from '../../Data';
import DealsTemplate from '../UI/DealsTemplate.vue';
import Pagination from '../UI/Pagination.vue';

export default {
  components: { Pagination, DealsTemplate },
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
      formatData(this.dealsByStore);
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
