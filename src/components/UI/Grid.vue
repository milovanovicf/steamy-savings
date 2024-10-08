<template>
  <div class="grid">
    <a
      v-if="!isStore"
      v-for="game in games"
      :href="
        'https://cheapshark.com/redirect?dealID=' +
        (game.dealID || game.cheapestDealID)
      "
      target="_blank"
      class="grid__element"
      :title="game.external"
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
          <p v-else>{{ game.comingSoon }}</p>
        </div>
      </div>
    </a>
    <router-link
      v-else
      v-for="store in games"
      :to="`stores/${store.storeID}/1`"
      class="store-element"
    >
      <img
        :src="`https://www.cheapshark.com/${store.images.banner}`"
        alt="store_thumbnail"
        :class="{ storeImg: isStore }"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['games', 'isStore'],
};
</script>
<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  row-gap: 3rem;

  &__element {
    height: 20rem;
    background-color: #080c16;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    overflow: hidden;
    border-radius: 10px;

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

  .store-element {
    padding: 2rem;
    transition: all 200ms ease-in-out;
    max-width: 100%;
    max-height: 100%;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }

    &:hover {
      background-color: #9aa4bf;
    }
  }
}

@media only screen and (max-width: 1400px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media only screen and (max-width: 1000px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);

    &__element {
      height: 20rem;
    }
  }
}
</style>
