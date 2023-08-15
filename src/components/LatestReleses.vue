<template>
  <DealsTemplate
    v-if="fetchedData"
    :title="'Latest Releases'"
    :data="allDeals"
    linkUrl="latestReleases"
    :notFullPage="true"
  />
</template>

<script>
import DealsTemplate from './UI/DealsTemplate.vue';
import { fetchGames, formatData } from '../Data';

export default {
  components: { DealsTemplate },
  data() {
    return {
      allDeals: {},
      fetchedData: false,
    };
  },
  methods: {
    async getData() {
      this.allDeals = await fetchGames('Release', 1, '32').then((data) =>
        data.slice(0, 8)
      );
      formatData(this.allDeals);
    },
  },
  created() {
    this.getData().then(() => (this.fetchedData = true));
  },
};
</script>
