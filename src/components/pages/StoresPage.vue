<template>
  <DealsTemplate
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
    };
  },
  created() {
    fetchStores().then((stores) => (this.allStores = stores));
  },
};
</script>
