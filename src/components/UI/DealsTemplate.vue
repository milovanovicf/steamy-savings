<template>
  <div class="deals" :class="{ whenFullPage: !notFullPage }">
    <div class="title">
      <h2>{{ title }}</h2>
      <img
        v-if="isMobile && notFullPage"
        class="toggle-arrow"
        @click="dealsOpened = !dealsOpened"
        :src="toggleOpenBtn"
      />
    </div>
    <div v-if="!notFullPage && !isStore && !isMobile" class="view">
      View
      <button @click="changeView('square')">
        <img
          class="view__button"
          :class="{ active: view === 'square' }"
          src="../../assets/images/icons/squares.svg"
        />
      </button>
      <button @click="changeView('line')">
        <img
          class="view__button"
          :class="{ active: view === 'line' }"
          src="../../assets/images/icons/rectangles.svg"
        />
      </button>
    </div>
    <div class="deals__main">
      <Sorting v-if="!notFullPage && !isStore && !isMobile" />
      <div v-if="dealsOpened" class="display-container">
        <Grid v-if="view === 'square'" :games="games" :isStore="isStore" />
        <Flex v-if="view === 'line'" :games="games" :isStore="isStore" />
      </div>
    </div>
    <div v-if="notFullPage" class="btn">
      <router-link :to="`/${linkUrl}`">View more</router-link>
    </div>
  </div>
</template>

<script>
import Grid from './Grid.vue';
import Flex from './Flex.vue';
import Sorting from './Sorting.vue';

export default {
  components: { Grid, Flex, Sorting },
  props: ['title', 'games', 'isStore', 'linkUrl', 'notFullPage'],
  data() {
    return {
      view: 'square',
      isMobile: window.innerWidth < 900,
      dealsOpened: true,
    };
  },
  methods: {
    changeView(view) {
      this.view = view;
    },
  },
  computed: {
    toggleOpenBtn() {
      return new URL(
        `/src/assets/images/icons/${
          !this.dealsOpened
            ? 'arrow-down-338-svgrepo-com'
            : 'arrow-up-338-svgrepo-com'
        }.svg`,
        import.meta.url
      );
    },
  },
};
</script>

<style scoped lang="scss">
.deals {
  width: 70%;
  margin: 8rem auto;
  position: relative;

  .title {
    display: flex;
    justify-content: space-between;

    img {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      filter: invert(100%) sepia(0%) saturate(31%) hue-rotate(156deg)
        brightness(107%) contrast(108%);
    }
  }

  h2 {
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .view {
    position: absolute;
    right: 0;
    top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 6.5rem;

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }

    .view__button {
      width: 1.4rem;
      height: 1.4rem;

      &:hover {
        filter: invert(70%) sepia(6%) saturate(2486%) hue-rotate(188deg)
          brightness(85%) contrast(78%);
      }
    }

    .active {
      filter: invert(70%) sepia(6%) saturate(2486%) hue-rotate(188deg)
        brightness(85%) contrast(78%);
    }
  }

  &__main {
    display: flex;
    justify-content: start;
    position: relative;
  }

  .display-container {
    width: 100%;
  }
  .btn {
    text-align: center;
    margin: 5rem 0;

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
}

.whenFullPage {
  width: 80%;
}

@media only screen and (max-width: 1600px) {
  .deals {
    width: 80%;
  }
}

@media only screen and (max-width: 700px) {
  .deals {
    width: 90%;
  }
}
</style>
