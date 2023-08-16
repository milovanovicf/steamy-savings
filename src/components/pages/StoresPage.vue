<template>
  <DealsTemplate
    v-if="fetchedData"
    :title="'Browse deals by stores'"
    :data="allStores"
    :isStore="true"
    linkUrl="stores"
  />
</template>

<script>
import { fetchStores } from '../../Data';
import DealsTemplate from '../UI/DealsTemplate.vue';

export default {
  components: { DealsTemplate },
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
