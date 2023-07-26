<template>
  <DealsTemplate
    v-if="fetchedData"
    :title="'Latest Releases'"
    :games="allDeals"
    linkUrl="latest-releases"
    :notFullPage="true"
  />
  <EmptyDealsTemplate v-else />
</template>

<script>
import DealsTemplate from './UI/DealsTemplate.vue';
import EmptyDealsTemplate from './UI/EmptyDealsTemplate.vue';
import { fetchGames } from '../Data';

export default {
  components: { DealsTemplate, EmptyDealsTemplate },
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
    },
  },
  created() {
    this.getData().then(() => (this.fetchedData = true));
  },
};
</script>
