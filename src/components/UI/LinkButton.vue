<template>
  <div class="btn">
    <router-link :to="`/deals/${dealType}`">View more</router-link>
  </div>
</template>

<script>
export default {
  props: ['dealType'],
};
</script>

<style lang="scss" scoped>
.btn {
  text-align: center;
  margin: 5rem 0 10rem 0;

  a {
    text-decoration: none;
    color: #fff;
    border: 1px solid #9aa4bf;
    padding: 1rem 2rem;
    transition: all 200ms ease-in-out;

    &:hover {
      background-color: #9aa4bf;
    }
  }
}
</style>
