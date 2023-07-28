<template>
  <div class="sorting">
    <h3>Deals by</h3>
    <ul class="sort-options">
      <li class="sort-options__option">
        <router-link to="/deals-by-title">Title</router-link>
      </li>
      <li class="sort-options__option">
        <router-link to="/biggest-saving">Savings</router-link>
      </li>
      <li class="sort-options__option">
        <router-link to="/deals-by-title">Price</router-link>
      </li>
      <li class="sort-options__option">
        <router-link to="/latest-releases">Release</router-link>
      </li>
      <li class="sort-options__option">
        <router-link to="/deals-by-title">Recent</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.sorting {
  background-color: #161a26;
  padding: 2rem;
  margin-right: 1rem;
  width: 10rem;
  height: max-content;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }

  .sort-options {
    &__option {
      font-size: 1.3rem;
      margin-bottom: 2rem;
      padding-bottom: 0.3rem;
      border-bottom: 1px solid #9aa4bf;

      a {
        text-decoration: none;
        color: #fff;

        &:hover {
          cursor: pointer;
          color: #9aa4bf;
        }
      }
    }
  }
}
</style>
