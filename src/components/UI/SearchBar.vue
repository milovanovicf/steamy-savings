<template>
  <div class="search">
    <input
      v-if="!isMobile"
      v-model="search"
      type="text"
      placeholder="Search"
      class="search__input"
      :class="{ mobile: isMobile }"
      @blur="clearSearch"
      @keyup.enter="displayQuery"
      ref="searchInput"
    />
    <ul class="search__results">
      <li v-for="result in searchResults">
        <a href="">{{ result.external }}</a>
      </li>

      <a v-if="moreThanSix" href="#" @click="displayQuery" class="view-all"
        >View All</a
      >
    </ul>
  </div>
  <img
    class="search-icon"
    :class="{ 'icon-mobile': isMobile }"
    src="../../assets/images/icons/search-svgrepo-com.svg"
    alt="searchBtn"
    @click="displayQuery"
  />
</template>

<script>
import { getData } from '../../Data';
import { debounce } from 'lodash';

export default {
  data() {
    return {
      search: '',
      searchResults: [],
      moreThanSix: false,
      isMobile: window.innerWidth < 650,
    };
  },
  emits: ['search-opened'],
  watch: {
    search: debounce(function (value) {
      this.searchQuery(value);
    }, 500),
  },
  methods: {
    clearSearch() {
      setTimeout(() => {
        this.searchResults = [];
        this.moreThanSix = false;
        this.isMobile = !this.isMobile;
        this.$emit('searchOpened');
      }, 350);
    },
    async searchQuery(value) {
      if (!value) {
        return;
      }
      if (value.length >= 3) {
        const response = await getData(this.search);
        this.searchResults = response.filter((result) => {
          return result.external.toLowerCase().includes(value.toLowerCase());
        });
        if (this.searchResults.length > 6) {
          this.searchResults = this.searchResults.slice(0, 6);
          this.moreThanSix = true;
        }
      } else {
        this.searchResults = [];
        this.moreThanSix = false;
      }
    },
    displayQuery() {
      this.$emit('searchOpened');
      this.isMobile = !this.isMobile;

      if (!this.isMobile) {
        this.$nextTick(() => {
          this.$refs.searchInput.focus();
        });
      }

      if (!this.search) return;

      this.$router.replace({
        name: 'searchResult',
        params: {
          param: this.search,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  position: relative;

  &__input {
    border: none;
    outline: 0;
    width: 20rem;
    padding: 0.5rem 0 0.5rem 1rem;
    border-bottom: 1px solid #959595;
    transition: all 150ms ease-in;

    &::placeholder {
      color: #7c7c7c;
      transition: all 150ms ease-in;
    }
  }

  &__results {
    position: absolute;
    left: 0;
    top: 2.2rem;
    width: 100%;
    height: 100%;
    z-index: 99;

    li {
      padding: 0 1rem;
      background-color: #9aa4bf;

      &:not(:nth-last-child(-n + 2)) > a {
        border-bottom: 1px solid #242c41;
      }

      &:hover {
        background-color: #242c41;
      }

      a {
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 1rem 0;
      }
    }

    .view-all {
      text-decoration: none;
      background-color: #242c41;
      padding: 0.5rem;
      color: #fff;
      height: 100%;
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.search-icon {
  width: 2rem;
  height: 2rem;
  filter: invert(100%) sepia(0%) saturate(5809%) hue-rotate(71deg)
    brightness(106%) contrast(90%);
  margin-left: 0.7rem;

  &:hover {
    cursor: pointer;
    filter: invert(68%) sepia(18%) saturate(370%) hue-rotate(186deg)
      brightness(94%) contrast(88%);
  }
}

.icon-mobile {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(25%, -50%);
}

@media only screen and (max-width: 750px) {
  .search {
    &__input {
      width: 15rem;
    }
  }

  .search-icon {
    margin: 0.2rem 0;
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
