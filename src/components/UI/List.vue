<template>
  <div class="list">
    <div class="title_container">
      <h2 class="title">
        <router-link :to="`/${linkUrl}`">{{ title }}</router-link>
        <img
          src="../../assets/images/icons/arrow-right-336-svgrepo-com.svg"
          alt=""
        />
      </h2>
      <div class="buttons">
        <button
          @click="prevPage"
          :disabled="counter === 0"
          class="slide-button"
        >
          <img
            src="../../assets/images/icons/arrow-left-335-svgrepo-com.svg"
            alt=""
          />
        </button>
        <button
          @click="nextPage"
          :disabled="counter === 3"
          class="slide-button"
        >
          <img
            src="../../assets/images/icons/arrow-right-336-svgrepo-com.svg"
            alt=""
          />
        </button>
      </div>
    </div>
    <div class="list__items" ref="slider">
      <div v-for="game in games" :key="game.dealID || game.cheapestDealID">
        <a
          class="list__item"
          :href="
            'https://cheapshark.com/redirect?dealID=' +
            (game.dealID || game.cheapestDealID)
          "
          target="_blank"
          :title="game.formatedTitle"
        >
          <div class="img-container">
            <div v-if="game.title" class="store-logo-container">
              <img
                :src="`https://www.cheapshark.com/img/stores/logos/${
                  game.storeID - 1
                }.png`"
                alt="storeLogo"
                class="store-logo"
              />
            </div>
            <p v-if="game.savings > 0" class="discount">
              {{ Math.round(game.savings) }}%
            </p>
            <img v-lazy="game.imageSrc" alt="thumbnail" />
          </div>
          <div class="element-details">
            <div v-if="!isStore" class="price">
              <div class="name">
                {{ isStore ? game.storeName : game.formatedTitle }}
              </div>
              <div v-if="game.savings > 0" class="amount">
                <p class="amount__old">${{ game.normalPrice }}</p>
                <p class="amount__new">
                  {{ game.salePrice }}
                </p>
              </div>
              <p v-else>{{ game.comingSoon || game.cheapest }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['games', 'isStore', 'title', 'linkUrl'],
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    prevPage() {
      this.counter--;
      this.slide();
    },
    nextPage() {
      this.counter++;
      this.slide();
    },
    slide() {
      this.$refs.slider.querySelectorAll('.list__item').forEach((game) => {
        game.style.transform = `translateX(-${this.counter * 1440}px)`;
        if (window.innerWidth <= 1400) {
          game.style.transform = `translateX(-${this.counter * 1030}px)`;
        }
        if (window.innerWidth <= 1024) {
          game.style.transform = `translateX(-${this.counter * 860}px)`;
        }

        if (window.innerWidth <= 768) {
          game.style.transform = `translateX(-${this.counter * 720}px)`;
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
.list {
  margin-bottom: 10rem;

  .title_container {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      text-transform: uppercase;
      font-size: 2rem;
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
        text-decoration: none;
        color: #fff;
        transition: all 200ms;
      }
    }

    .buttons {
      display: flex;

      .slide-button {
        border: none;
        border-radius: 5px;
        background: none;
        cursor: pointer;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        transition: all 200ms;

        &:disabled {
          background-color: #616161;
          cursor: not-allowed;
        }

        &:nth-child(1) {
          margin-right: 1rem;
        }

        img {
          height: 1rem;
          width: 1rem;
        }
      }
    }
  }

  &__items {
    display: flex;
    gap: 1rem;
    transition: all 200ms;
    overflow: hidden;

    .list__item {
      height: 20rem;
      width: 17rem;
      background-color: #080c16;
      display: flex;
      flex-direction: column;
      text-decoration: none;
      transition: all 300ms;
      border-radius: 10px;
      overflow: hidden;

      &:hover .element-details {
        background-color: #273047;
      }

      .img-container {
        flex: 1 1 80%;
        position: relative;
        height: 10rem;

        .store-logo-container {
          position: absolute;
          top: 0;
          left: 0;
          color: #fff;
          margin: 0.5rem;

          width: 2.5rem;
          height: 2.5rem;

          img {
            width: 100%;
            height: 100%;
          }
        }

        img {
          width: 100%;
          height: 100%;
        }

        .discount {
          position: absolute;
          top: 0;
          right: 0;
          color: #fff;
          padding: 0.5rem;
          margin: 0.5rem;
          background-color: #dc2f43;
          font-size: 1rem;
        }
      }

      .element-details {
        flex: 1 1 25%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.8rem;
        background-color: #161a26;
        color: #fff;
        font-size: 1.15rem;
        transition: all 200ms ease-in;

        .price {
          .name {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
          }
          .amount {
            display: flex;
            align-items: center;

            &__old {
              font-size: 1rem;
              text-decoration: line-through;
              color: #c9c9c9;
            }

            &__new {
              margin-left: 0.5rem;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1400px) {
  .list {
    .list__item {
      width: 11.9rem;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .list {
    margin-bottom: 7rem;

    .list__item {
      width: 17rem;
      height: 15rem;
    }
  }
}

@media only screen and (max-width: 1024px) {
  .list {
    .list__item {
      width: 14rem;
      height: 15rem;
    }
  }
}
</style>
