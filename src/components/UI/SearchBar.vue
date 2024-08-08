<template>
  <div class="search">
    <input
      v-model="search"
      type="search"
      placeholder="Search..."
      class="search__input"
      @blur="clearSearch"
      @focus="searchQuery"
      @keyup.enter="displayQuery"
      ref="searchInput"
    />
    <ul class="search__results">
      <li v-for="result in searchResults">
        <a
          :href="
            'https://cheapshark.com/redirect?dealID=' + result.cheapestDealID
          "
          target="_blank"
          >{{ result.external }}</a
        >
      </li>

      <a v-if="moreThanSix" href="#" @click="displayQuery" class="view-all"
        >View All</a
      >
    </ul>
  </div>
</template>

<script>
import { searchGame } from '../../Data';
import { debounce } from 'lodash';

export default {
  data() {
    return {
      search: '',
      searchResults: [],
      moreThanSix: false,
    };
  },
  emits: ['searchOpened', 'searchClosed'],
  watch: {
    search: debounce(function (value) {
      this.searchQuery(value);
    }, 500),
  },
  methods: {
    updateScreenSize() {
      this.isLargeScreen = window.innerWidth >= 768;
    },
    clearSearch() {
      setTimeout(() => {
        this.searchResults = [];
        this.moreThanSix = false;
      }, 350);
    },
    async searchQuery(value) {
      const searchValue = value.target ? value.target.value : value;
      if (!searchValue) {
        return;
      }
      if (searchValue.length >= 3) {
        const response = await searchGame(this.search, 7);
        this.searchResults = response.filter((result) => {
          return result.external
            .toLowerCase()
            .includes(searchValue.toLowerCase());
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
      if (!this.search) return;

      this.$router.replace({
        name: 'searchResult',
        params: {
          param: this.search,
        },
      });
      this.clearSearch();
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
    transition: all 150ms ease-in;
    background-color: #283249;
    caret-color: #fff;
    border-radius: 15px;

    &::placeholder {
      color: #fff;
      transition: all 150ms ease-in;
    }

    &:focus {
      background-color: #34405e;
      color: #fff;
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
