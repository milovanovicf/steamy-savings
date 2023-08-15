<template>
  <template v-if="searchResult">
    <DealsTemplate
      :title="'Search resuts for ' + `&quot;${this.$route.params.param}&quot;`"
      :data="searchResult"
    />
  </template>
</template>

<script>
import { getData, formatData } from '../../Data';
import DealsTemplate from '../UI/DealsTemplate.vue';

export default {
  components: { DealsTemplate },

  data() {
    return {
      searchResult: [],
    };
  },

  async mounted() {
    this.searchResult = await getData(this.$route.params.param);
  },
  watch: {
    '$route.params': {
      async handler(newParams, oldParams) {
        this.searchResult = await getData(newParams.param);
      },
    },
  },
};
</script>
