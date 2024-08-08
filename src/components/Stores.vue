<template>
  <div class="store-games-container">
    <h2 class="title">
      <router-link to="stores"> Deals by store </router-link>
      <img
        src="../assets/images/icons/arrow-right-336-svgrepo-com.svg"
        alt=""
      />
    </h2>
    <div class="store-games">
      <div class="store-games__column" v-for="dealObj of dealsFromStores">
        <div class="store-name">
          <h2>{{ dealObj.storeName }}</h2>
          <a :href="`stores/${dealObj.storeID}/1`">View More</a>
        </div>
        <a
          class="deal"
          v-for="deal of dealObj.deals"
          :href="gameLink(deal)"
          target="_blank"
        >
          <div class="img-container">
            <img v-lazy="deal.imageSrc" alt="thumbnail" />
          </div>
          <div class="text">
            <p>{{ deal.title }}</p>
            <div class="amount">
              <p class="amount__old">${{ deal.normalPrice }}</p>
              <p class="amount__new">{{ deal.salePrice }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import DealsTemplate from './UI/DealsTemplate.vue';
import LinkButton from './UI/LinkButton.vue';
import { fetchStores, fetchByStore } from '../Data';

export default {
  components: { DealsTemplate, LinkButton },
  data() {
    return {
      firstStores: [],
      dealsFromStores: [],
    };
  },
  methods: {
    async getData() {
      for (const store of this.firstStores) {
        const dealsByStore = await fetchByStore(store.storeID, 1, '5');

        this.dealsFromStores.push({
          storeID: store.storeID,
          storeName: store.storeName,
          deals: dealsByStore,
        });
      }
    },
    gameLink(game) {
      return `https://cheapshark.com/redirect?dealID=${
        game.dealID || game.cheapestDealID
      }`;
    },
  },
  async created() {
    this.firstStores = (await fetchStores()).slice(0, 3);
    await this.getData();
  },
};
</script>

<style scoped lang="scss">
.store-games-container {
  margin-bottom: 10rem;

  .title {
    text-transform: uppercase;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

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
      text-decoration: none;
      color: #fff;
      transition: all 200ms;
    }
  }

  .store-games {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    .store-name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 0.5rem;

      h2 {
        font-size: 2rem;
      }

      a {
        color: #fff;
        transition: all 200ms;

        &:hover {
          color: #c9c9c9;
        }
      }
    }

    &__column {
      display: flex;
      flex-direction: column;
      width: 33%;
      gap: 2rem;

      .deal {
        display: flex;
        align-items: center;
        gap: 1rem;
        text-decoration: none;
        color: #fff;
        transition: 200ms all;
        margin-right: 1rem;
        border-radius: 10px;
        overflow: hidden;

        &:hover {
          background-color: #9aa4bf;
        }

        .img-container {
          width: 10rem;
          height: 15rem;
          display: flex;
          align-items: center;
          margin-left: 1rem;

          img {
            width: 90%;
            height: 90%;
            object-fit: cover;
            border-radius: 10px;
          }
        }

        .text {
          width: 65%;

          p {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }

          .amount {
            display: flex;
            gap: 1rem;

            &__old {
              text-decoration: line-through;
            }
          }
        }
      }
    }

    &__column:first-child,
    &__column:nth-child(2) {
      border-right: 1px solid #c9c9c9;
    }
  }
}

@media only screen and (max-width: 1400px) {
  .store-games-container {
    .store-games {
      &__column {
        .store-name {
          h2 {
            font-size: 1.7rem;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .store-games-container {
    .store-games {
      &__column {
        .deal {
          .img-container {
            height: 10rem;
          }
          .text {
            p {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .store-games-container {
    .store-games {
      gap: 0.5rem;

      &__column {
        row-gap: 1rem;

        .store-name {
          display: block;

          h2 {
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 390px) {
  .store-games-container {
    .store-games {
      display: block;

      &__column {
        width: 100%;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
