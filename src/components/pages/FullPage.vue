<template>
  <template v-if="fetchedData">
    <DealsTemplate
      :title="`Deals sorted by ${$route.params.dealType}`"
      :data="allDeals"
    />
    <Paggination @pageChange="fetchPage" />
  </template>
  <Loader v-else />
</template>

<script>
import { fetchGames, formatData } from '../../Data';
import DealsTemplate from '../UI/DealsTemplate.vue';
import Loader from '../UI/Loader.vue';
import Paggination from '../UI/Pagination.vue';

export default {
  components: { DealsTemplate, Paggination, Loader },
  data() {
    return {
      allDeals: [],
      fetchedData: false,
      currentPage: 1,
    };
  },
  watch: {
    '$route.params.dealType'(dealType, _) {
      this.getData(dealType).then(() => (this.fetchedData = true));
    },
  },
  methods: {
    async getData(sortOption = '') {
      this.allDeals = await fetchGames(sortOption, this.currentPage, '32');
      formatData(this.allDeals);
    },
    fetchPage(page) {
      this.currentPage = page;
      this.getData().then(() => (this.fetchedData = true));
    },
  },
  async created() {
    this.getData(this.$route.params.dealType).then(
      () => (this.fetchedData = true)
    );
  },
};
</script>
