<template>
  <nav class="nav">
    <div class="logo-container">
      <router-link v-if="!openedSearch" to="/" class="logo"
        ><img src="/src/assets/images/icons/logoMainPng.png" alt="imglogo"
      /></router-link>
    </div>
    <SearchBar
      @search-opened="openedSearch = true"
      @search-closed="openedSearch = false"
    />
  </nav>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
  components: { SearchBar },
  data() {
    return {
      openedSearch: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  padding: 0.5rem 2rem;
  background-color: #161a26;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .logo {
      display: flex;
      align-items: center;
      margin: 0 2rem;
      text-decoration: none;
      width: 7.5rem;
      height: 7.5rem;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .nav {
    .logo-container {
      .logo {
        margin: 0 1rem 0 0;
      }
    }
  }
}

@media only screen and (max-width: 390px) {
  .nav {
    flex-direction: column;
    padding-top: 0;
    height: auto;

    .logo-container {
      .logo {
        width: 7rem;
        height: 5rem;
        margin: 0;
      }
    }
  }
}
</style>
