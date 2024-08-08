<template>
  <div>
    <ListEmptyTemplate v-if="loading" />
    <List
      v-else
      :title="'Biggest Saving'"
      :games="allDeals"
      linkUrl="deals/Savings/1"
      :notFullPage="true"
    />
  </div>
</template>

<script>
import List from './UI/List.vue';
import { fetchGames } from '../Data';
import ListEmptyTemplate from './UI/ListEmptyTemplate.vue';

export default {
  components: { List, ListEmptyTemplate },
  data() {
    return {
      allDeals: [],
      loading: true,
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      try {
        this.allDeals = await fetchGames('Savings', 1, '32');
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
