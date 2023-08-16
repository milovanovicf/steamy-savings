<template>
  <DealsTemplate
    v-if="fetchedData"
    :title="'Biggest Saving'"
    :data="allDeals"
    linkUrl="biggestSaving"
    :notFullPage="true"
  />
  <Loader v-else />
</template>

<script>
import DealsTemplate from './UI/DealsTemplate.vue';
import { fetchGames, formatData } from '../Data';
import Loader from './UI/Loader.vue';

export default {
  components: { DealsTemplate, Loader },
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
      formatData(this.allDeals).then(() => (this.fetchedData = true));
    },
  },
  created() {
    this.getData();
  },
};
</script>
