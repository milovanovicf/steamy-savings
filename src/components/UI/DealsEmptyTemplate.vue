<template>
  <div>
    <div class="title"></div>
    <div class="grid">
      <a v-for="element of emptyArray" class="grid__element">
        <div class="element-details"></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emptyArray: new Array(30),
    };
  },
};
</script>
<style scoped lang="scss">
.title {
  width: 25rem;
  height: 3rem;
  background-color: #22283a;
  margin: 5rem 15rem 2rem 15rem;
  border-radius: 10px;
}

.grid {
  margin: 0 15rem 5rem 15rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  row-gap: 3rem;

  &__element {
    height: 20rem;
    background-color: #131d35;
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
      background-color: #22283a;
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
  .title {
    margin: 5rem 10rem 2rem 10rem;
  }

  .grid {
    margin: 0 10rem 5rem 10rem;
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
