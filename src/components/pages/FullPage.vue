<template>
  <div>
    <DealsEmptyTemplate v-if="loading" />
    <div v-else>
      <DealsTemplate
        :title="`Deals sorted by ${$route.params.dealType}`"
        :data="allDeals"
      />
      <Paggination @pageChange="fetchPage" />
    </div>
  </div>
</template>

<script>
import { fetchGames } from '../../Data';
import DealsEmptyTemplate from '../UI/DealsEmptyTemplate.vue';
import DealsTemplate from '../UI/DealsTemplate.vue';
import Paggination from '../UI/Pagination.vue';

export default {
  components: { DealsTemplate, Paggination, DealsEmptyTemplate },
  data() {
    return {
      allDeals: [],
      loading: true,
    };
  },
  watch: {
    '$route.params.dealType'() {
      this.getData();
    },
    '$route.params.pageNumber'() {
      this.getData();
    },
  },
  methods: {
    async getData() {
      this.loading = true;
      try {
        this.allDeals = await fetchGames(
          this.$route.params.dealType,
          this.$route.params.pageNumber,
          '30'
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    },
    fetchPage(page) {
      this.$router.push(`/deals/${this.$route.params.dealType}/${page}`);
    },
  },
  created() {
    this.getData();
  },
};
</script>
