<template>
  <div class="deals">
    <h2>{{ title }}</h2>
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
      <Sorting v-if="!notFullPage && !isStore" />
      <div class="display-container">
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
    };
  },
  methods: {
    changeView(view) {
      this.view = view;
    },
  },
};
</script>

<style scoped lang="scss">
.deals {
  margin: 1rem 12rem;
  position: relative;

  h2 {
    text-transform: uppercase;
    font-size: 1.8rem;
    margin-bottom: 5rem;
  }

  .view {
    position: absolute;
    right: 0;
    top: 4rem;
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

@media only screen and (max-width: 1400px) {
  .deals {
    margin: 10rem;
  }
}

@media only screen and (max-width: 1200px) {
  .deals {
    margin: 10rem 5rem;
  }
}

@media only screen and (max-width: 900px) {
  .deals {
    margin: 10rem 2rem;
  }
}
</style>
