<template>
  <DealsTemplate
    v-if="searchResult"
    :title="'Search resuts for ' + `&quot;${this.$route.params.param}&quot;`"
    :data="searchResult"
  />
  <Loader v-else />
</template>

<script>
import { getData, formatData } from '../../Data';
import DealsTemplate from '../UI/DealsTemplate.vue';
import Loader from '../UI/Loader.vue';

export default {
  components: { DealsTemplate, Loader },

  data() {
    return {
      searchResult: [],
      fetchedData: false,
    };
  },

  async mounted() {
    this.searchResult = await getData(this.$route.params.param);
    formatData(this.searchResult).then(() => (this.fetchedData = true));
  },
  watch: {
    '$route.params': {
      async handler(newParams, oldParams) {
        this.searchResult = await getData(newParams.param);
        formatData(this.searchResult);
      },
    },
  },
};
</script>
