<template>
  <nav class="nav">
    <div class="logo-container">
      <router-link to="/" class="logo" :class="{ 'logo-mobile': openedSearch }"
        ><img :src="logoSrc" alt="imglogo"
      /></router-link>
      <SearchBar @search-opened="openedSearch = !openedSearch" />
    </div>
  </nav>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
  components: { SearchBar },
  data() {
    return {
      menuOpened: false,
      openedSearch: false,
    };
  },
  computed: {
    logoSrc() {
      return new URL(
        `/src/assets/images/icons/${
          !this.openedSearch ? 'logoMain' : 'logoImg'
        }.svg`,
        import.meta.url
      );
    },
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
    .logo-mobile {
      width: 3rem;
      height: 3.5rem;
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
