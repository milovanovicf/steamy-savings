<template>
  <nav class="nav">
    <div class="logo-search">
      <router-link to="/" class="logo" :class="{ 'logo-mobile': isMobile }"
        ><img :src="logoSrc" alt="imglogo"
      /></router-link>
      <SearchBar @search-opened="openedSearch = !openedSearch" />
    </div>
    <div class="log-in">
      <ul class="log-in-list">
        <li class="log-in-list__item"><a href="#">Wish List</a></li>
        <li class="log-in-list__item"><a href="#">Games</a></li>
        <li class="log-in-list__item"><a href="#">Log in/Sign up</a></li>
      </ul>
    </div>
    <div v-if="!openedSearch" class="mobile-menu">
      <div
        class="mobile-menu__btn"
        :class="{ 'open-button': menuOpened }"
        @click="menuOpened = !menuOpened"
      >
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <ul class="mobile-menu-list" :class="{ open: menuOpened }">
        <li class="mobile-menu-list__item"><a href="#">Wish List</a></li>
        <li class="mobile-menu-list__item"><a href="#">Games</a></li>
        <li class="mobile-menu-list__item"><a href="#">Log in/Sign up</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
  components: { SearchBar },
  emits: ['searchOpened'],
  data() {
    return {
      menuOpened: false,
      openedSearch: false,
      isMobile: window.innerWidth < 900,
    };
  },
  computed: {
    logoSrc() {
      return new URL(
        `/src/assets/images/icons/${
          !this.isMobile ? 'logoMain' : 'logoImg'
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
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  height: 4rem;
  padding: 0.5rem 2rem;
  background-color: #161a26;
  .logo-search {
    display: flex;
    align-items: center;
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
      width: 4rem;
      height: 3.5rem;
    }
  }

  .log-in {
    flex: 0 0 20%;

    .log-in-list {
      display: flex;
      justify-content: space-evenly;
      font-size: 1.1rem;

      li {
        a {
          text-decoration: none;
          color: #fff;
          transition: all 150ms ease-in;
        }

        &:hover > a {
          color: #9aa4bf;
        }
      }
    }
  }

  .mobile-menu {
    display: none;
    &__btn {
      position: absolute;
      top: 0;
      right: 0;
      margin: 1.5rem 2rem;
      z-index: 99;

      .line {
        width: 30px;
        height: 3px;
        background-color: #fff;
        display: block;
        margin: 7px auto;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }
    }

    .open-button .line:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
      background-color: #161a26;
    }

    .open-button .line:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
      background-color: #161a26;
    }

    .open-button .line:nth-child(2) {
      opacity: 0;
    }
    &-list {
      position: fixed;
      top: 0;
      right: -100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 2.5rem;
      z-index: 98;
      background-color: #9aa4bf;
      transition: all 200ms ease-in-out;

      li:not(last-child) {
        margin-bottom: 5rem;
        a {
          text-decoration: none;
          color: #161a26;
        }
      }
    }
  }

  .open {
    right: 0;
  }
}

@media only screen and (max-width: 1400px) {
  .nav {
    .logo-search {
      flex: 1 1 70%;
    }
    .log-in {
      flex: 1 1 25%;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .nav {
    .log-in {
      display: none;
    }
    .mobile-menu {
      display: block;
    }
  }
}

@media only screen and (max-width: 750px) {
  .nav {
    .logo-search {
      .logo {
        margin: 0 1rem 0 0;
      }
    }
  }
}
</style>
