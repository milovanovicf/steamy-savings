<template>
  <nav class="nav">
    <div class="logo-container">
      <router-link v-if="!openedSearch" to="/" class="logo"
        ><img src="/src/assets/images/icons/logoMain.svg" alt="imglogo"
      /></router-link>
      <SearchBar
        @search-opened="openedSearch = true"
        @search-closed="openedSearch = false"
      />
    </div>
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
  font-size: 1.2rem;
  height: 4rem;
  padding: 0.5rem 2rem;
  background-color: #161a26;
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .logo {
      margin: 0 2rem;
      text-decoration: none;
      width: 7.5rem;
      height: 7.5rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media only screen and (max-width: 1400px) {
  .nav {
    .logo-container {
      flex: 1 1 70%;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .nav {
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
</style>
