<template>
  <DealsTemplate
    :title="'Browse deals by stores'"
    :games="allStores"
    :isStore="true"
    linkUrl="stores"
    :notFullPage="true"
  />
</template>

<script>
import DealsTemplate from './UI/DealsTemplate.vue';
import { fetchStores } from '../Data';

export default {
  components: { DealsTemplate },
  data() {
    return {
      allStores: [],
    };
  },
  methods: {
    async getData() {
      this.allStores = await fetchStores().then((data) => data.slice(0, 8));
    },
  },
  created() {
    this.getData();
  },
};
</script>
