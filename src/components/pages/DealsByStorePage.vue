<template>
  <div>
    <DealsEmptyTemplate v-if="loading" />
    <div v-else>
      <DealsTemplate
        :title="`Deals from ${store.storeName}`"
        :data="dealsByStore"
      />
      <Pagination
        @pageChange="fetchPage"
        :isStore="true"
        :storeId="this.$route.params.storeId"
      />
    </div>
  </div>
</template>

<script>
import { fetchByStore, findStore } from '../../Data';
import DealsTemplate from '../UI/DealsTemplate.vue';
import DealsEmptyTemplate from '../UI/DealsEmptyTemplate.vue';
import Pagination from '../UI/Pagination.vue';

export default {
  components: { Pagination, DealsTemplate, DealsEmptyTemplate },
  data() {
    return {
      dealsByStore: [],
      store: '',
      loading: true,
    };
  },
  watch: {
    '$route.params.pageNumber'() {
      this.getData();
    },
  },
  methods: {
    async getData() {
      this.dealsByStore = await fetchByStore(
        this.$route.fullPath.slice(8),
        this.currentPage,
        32
      );
      this.store = await findStore(this.$route.fullPath.slice(8)).then(
        (data) => data[0].storeName
      );
    },
    fetchPage(page) {
      this.$router.push(`/stores/${this.$route.params.storeId}/${page}`);
    },
  },

  created() {
    this.getData();
  },
};
</script>
