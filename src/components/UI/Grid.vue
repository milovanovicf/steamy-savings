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
      :title="game.title || game.external"
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
        <div class="name">
          {{ isStore ? game.storeName : game.formatedTitle }}
        </div>
        <div v-if="!isStore" class="price">
          <div v-if="game.savings > 0">
            <p class="price__new">
              {{ game.salePrice === '0.00' ? 'FREE' : `$${game.salePrice}` }}
            </p>
            <p class="price__old">${{ game.normalPrice }}</p>
          </div>
          <p v-else>{{ game.normalPrice || game.cheapest }}$</p>
        </div>
      </div>
    </a>
    <router-link
      v-else
      v-for="store in games"
      :to="`stores/${store.storeID}`"
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
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  &__element {
    height: 16rem;
    background-color: teal;
    display: flex;
    flex-direction: column;
    text-decoration: none;

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

      .name {
        width: 70%;
      }

      .price {
        &__old {
          font-size: 0.9rem;
          text-decoration: line-through;
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

@media only screen and (max-width: 1300px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
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
