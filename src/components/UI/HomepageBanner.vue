<template>
  <div>
    <HomepageEmptyBanner v-if="loading" />
    <div class="banner-holder" v-else>
      <h2 class="title">
        <router-link to="deals/Featured/1">featured</router-link>
        <img
          src="../../assets/images/icons/arrow-right-336-svgrepo-com.svg"
          alt=""
        />
      </h2>
      <div class="banner">
        <a class="main-img" :href="gameLink(firstGame)" target="_blank">
          <img v-lazy="firstGame.imageSrc" alt="thumbnail" />
          <div class="price">
            <h2>{{ firstGame.title }}</h2>
            <div class="amount">
              <p class="amount__old">${{ firstGame.normalPrice }}</p>
              <p class="amount__new">{{ firstGame.salePrice }}</p>
            </div>
            <div class="purchase-now">
              <p>PURCHASE NOW</p>
            </div>
          </div>
        </a>
        <div class="small-images">
          <a
            class="small-image"
            v-for="game in restOfGames"
            :href="gameLink(game)"
            target="_blank"
          >
            <img v-lazy="game.imageSrc" alt="thumbnail" />
            <p>{{ game.title }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchGames } from '../../Data';
import HomepageEmptyBanner from './HomepageEmptyBanner.vue';

export default {
  components: { HomepageEmptyBanner },

  data() {
    return {
      firstGame: {},
      restOfGames: [],
      loading: true,
    };
  },
  methods: {
    gameLink(game) {
      return `https://cheapshark.com/redirect?dealID=${
        game.dealID || game.cheapestDealID
      }`;
    },
  },
  async created() {
    this.loading = true;
    try {
      const games = await fetchGames('Recent', 1, 15);
      const filteredGames = games.filter((game) => game.steamAppID);
      this.firstGame = filteredGames[0];
      this.restOfGames = filteredGames.slice(1, 4);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped lang="scss">
.banner-holder {
  margin: 5rem 0 10rem 0;

  .title {
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 2rem;
    width: max-content;
    display: flex;
    align-items: center;

    img {
      width: 1rem;
      height: 1rem;
      margin-left: 1rem;
      transition: 200ms all;
    }

    &:hover img {
      transform: translateX(0.5rem);
    }

    &:hover a {
      color: #c9c9c9;
    }

    a {
      color: #fff;
      text-decoration: none;
      transition: all 200ms;
    }
  }

  .banner {
    display: flex;
    justify-content: space-between;

    .main-img {
      position: relative;
      background-color: #131313;
      width: 75%;
      cursor: pointer;
      color: #fff;
      transition: all 200ms;
      border-radius: 10px;
      overflow: hidden;

      img {
        opacity: 0.6;
        width: 100%;
        height: 100%;
        transition: all 200ms;
        object-fit: cover;
      }

      .price {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 3rem;

        .amount {
          display: flex;
          align-items: center;
          margin: 0.5rem 0;

          &__old {
            text-decoration: line-through;
            margin-right: 0.5rem;
            font-size: 1rem;
            color: #c9c9c9;
            font-size: 1.3rem;
          }

          &__new {
            font-size: 1.7rem;
          }
        }

        .purchase-now {
          margin-top: 0.5rem;
          display: flex;

          p {
            margin-right: 0.5rem;
            background-color: #fff;
            padding: 1.1rem 1.5rem;
            border-radius: 0.5rem;
            color: #000;
          }

          .store-logo {
            width: 3rem;
            height: 3rem;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }

    .small-images {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 20%;

      .small-image {
        background-color: #3b3b3b;
        width: 100%;
        height: 30%;
        position: relative;
        color: #fff;
        transition: all 200ms;
        border-radius: 10px;
        overflow: hidden;

        &:hover {
          background-color: #555555;
        }

        &:hover img {
          opacity: 0.7;
        }

        p {
          position: absolute;
          bottom: 0;
          left: 0;
          margin: 1rem;
          font-size: 1.3rem;
        }

        img {
          opacity: 0.8;
          width: 100%;
          height: 100%;
          transition: all 200ms;
          object-fit: cover;
        }
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .banner-holder {
    .banner {
      .main-img {
        width: 70%;
      }

      .small-images {
        width: 25%;
      }
    }
  }
}

@media only screen and (max-width: 850px) {
  .banner-holder {
    .banner {
      flex-direction: column;
      gap: 1rem;

      .main-img {
        width: 100%;
      }

      .small-images {
        width: 100%;
        flex-direction: row;
        gap: 1rem;
      }
    }
  }
}
</style>
