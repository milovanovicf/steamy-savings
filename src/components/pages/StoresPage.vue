<template>
  <DealsTemplate
    v-if="fetchedData"
    :title="'Browse deals by stores'"
    :games="allStores"
    :isStore="true"
    linkUrl="stores"
  />
  <EmptyDealsTemplate v-else />
</template>

<script>
import { fetchStores } from '../../Data';
import DealsTemplate from '../UI/DealsTemplate.vue';
import EmptyDealsTemplate from '../UI/EmptyDealsTemplate.vue';

export default {
  components: { DealsTemplate, EmptyDealsTemplate },
  data() {
    return {
      allStores: [],
      fetchedData: false,
    };
  },
  methods: {
    async getData() {
      this.allStores = await fetchStores();
    },
  },
  created() {
    this.getData().then(() => (this.fetchedData = true));
  },
};
</script>
