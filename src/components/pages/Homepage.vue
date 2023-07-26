<template>
  <div class="featuring">
    <h2 class="featuring__title">
      See the best and latest deals and sales of your favourite PC games
    </h2>
    <HomepageBanner />
    <BiggestSaving />
    <LatestReleses />
    <Stores />
  </div>
</template>

<script>
import HomepageBanner from '../UI/HomepageBanner.vue';
import BiggestSaving from '../BiggestSaving.vue';
import Stores from '../Stores.vue';
import LatestReleses from '../LatestReleses.vue';

export default {
  components: { BiggestSaving, Stores, HomepageBanner, LatestReleses },
};
</script>

<style scoped lang="scss">
.featuring {
  h2 {
    text-align: center;
    font-size: 1.5rem;
    margin: 2rem 0 1.5rem 0;
  }
}

@media only screen and (max-width: 800px) {
  .featuring {
    h2 {
      font-size: 1.3rem;
      margin: 3rem 3rem 2rem 3rem;
    }
  }
}
</style>
