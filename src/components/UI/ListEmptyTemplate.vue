<template>
  <div class="list">
    <div class="title"></div>
    <div class="list__items" ref="slider">
      <div v-for="game in emptyArray" class="list__item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emptyArray: new Array(5),
    };
  },
};
</script>
<style scoped lang="scss">
.list {
  margin-bottom: 10rem;

  .title {
    width: 25rem;
    height: 3rem;
    background-color: #22283a;
    border-radius: 10px;
    margin-bottom: 2rem;
  }

  &__items {
    display: flex;
    gap: 1rem;
    transition: all 200ms;
    overflow: hidden;

    .list__item {
      height: 20rem;
      width: 17rem;
      background-color: #22283a;
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
      width: 20.5rem;
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
