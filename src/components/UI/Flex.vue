<template>
  <div class="list">
    <a
      :href="
        'https://cheapshark.com/redirect?dealID=' +
        (game.dealID || game.cheapestDealID)
      "
      v-for="game in games"
      class="list__element"
      target="_blank"
      :title="game.title || game.external"
    >
      <div class="game-info">
        <div class="img-container">
          <img v-lazy="game.imageSrc" alt="thumbnail" />
        </div>
        <p class="title">{{ game.title || game.external }}</p>
      </div>
      <div class="price">
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
        <div class="amount">
          <div v-if="game.savings > 0">
            <p class="amount__new">
              {{ game.salePrice === '0.00' ? 'FREE' : `$${game.salePrice}` }}
            </p>
            <p class="amount__old">${{ game.normalPrice }}</p>
          </div>
          <p v-else>{{ game.normalPrice || game.cheapest }}$</p>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: ['games', 'isStore'],
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &__element {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    height: 9rem;
    text-decoration: none;
    background-color: #161a26;
    transition: all 200ms ease-in;

    &:hover {
      background-color: #273047;
    }

    .game-info {
      display: flex;
      align-items: center;
      height: 100%;
      .img-container {
        width: 18rem;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .title {
        padding: 0 2rem;
        font-size: 1.3rem;
      }
    }

    .price {
      display: flex;
      align-items: center;
      padding-right: 5rem;
      flex: 0 0 25%;
      justify-content: space-between;

      .store-logo-container {
        width: 2.5rem;
        height: 2.5rem;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .discount {
        color: #fff;
        padding: 0.5rem 1rem;
        margin: 0.5rem;
        background-color: #dc2f43;
        font-size: 1.5rem;
      }

      .amount {
        &__new {
          font-size: 1.3rem;
        }
        &__old {
          font-size: 1rem;
          text-decoration: line-through;
        }
      }

      .heart {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>
