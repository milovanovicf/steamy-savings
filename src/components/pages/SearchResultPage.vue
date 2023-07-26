<template>
  <template v-if="searchResult.length">
    <DealsTemplate
      :title="'Search resuts for ' + `&quot;${this.$route.params.param}&quot;`"
      :games="searchResult"
    />
  </template>
  <EmptyDealsTemplate v-else />
</template>

<script>
import { getData } from '../../Data';
import DealsTemplate from '../UI/DealsTemplate.vue';
import EmptyDealsTemplate from '../UI/EmptyDealsTemplate.vue';

export default {
  components: { DealsTemplate, EmptyDealsTemplate },

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
