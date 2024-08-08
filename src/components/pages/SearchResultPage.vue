<template>
  <div>
    <DealsEmptyTemplate v-if="loading" />
    <div v-else>
      <DealsTemplate
        :title="
          'Search resuts for ' + `&quot;${this.$route.params.param}&quot;`
        "
        :data="searchResult"
      />
    </div>
  </div>
</template>

<script>
import { searchGame } from '../../Data';
import DealsTemplate from '../UI/DealsTemplate.vue';
import DealsEmptyTemplate from '../UI/DealsEmptyTemplate.vue';

export default {
  components: { DealsTemplate, DealsEmptyTemplate },

  data() {
    return {
      searchResult: [],
      loading: true,
    };
  },

  async mounted() {
    this.loading = true;
    try {
      this.searchResult = await searchGame(this.$route.params.param);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.loading = false;
    }
  },
  watch: {
    '$route.params': {
      async handler(newParams, oldParams) {
        this.loading = true;
        try {
          this.searchResult = await searchGame(newParams.param);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          this.loading = false;
        }
      },
    },
  },
};
</script>
