<template>
  <div class="deals">
    <h2></h2>
    <div class="grid">
      <div v-for="template in templateObject" class="grid__element">
        <div class="img-container"></div>
        <div class="element-details">
          <div class="name"></div>
          <div class="price"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      templateObject: ['', '', '', '', '', '', '', ''],
    };
  },
};
</script>

<style scoped lang="scss">
.deals {
  margin: 12rem 15rem;

  h2 {
    height: 3rem;
    width: 20rem;
    background-color: #242c41;
    margin-bottom: 1rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;

    &__element {
      height: 15rem;
      background-color: #242c41;
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
          height: 2rem;
          width: 10rem;
          background-color: #242c41;
        }

        .price {
          height: 2rem;
          width: 3rem;
          background-color: #242c41;
        }
      }
    }
  }

  .btn {
    text-align: center;
    margin: 3rem 0;

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
</style>
