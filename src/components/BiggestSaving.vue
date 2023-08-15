<template>
  <DealsTemplate
    v-if="fetchedData"
    :title="'Biggest Saving'"
    :data="allDeals"
    linkUrl="biggestSaving"
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
      this.allDeals = await fetchGames('Savings', 1, '32').then((data) =>
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
