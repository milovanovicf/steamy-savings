<template>
  <div class="banner-holder">
    <div class="title"></div>
    <div class="banner">
      <div class="main-img"></div>
      <div class="small-images">
        <div class="small-image" v-for="game in emptyArray"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emptyArray: new Array(3),
    };
  },
};
</script>

<style scoped lang="scss">
.banner-holder {
  margin: 5rem 0 10rem 0;

  .title {
    width: 25rem;
    height: 3rem;
    background-color: #22283a;
    margin-bottom: 2rem;
    border-radius: 10px;
  }

  .banner {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .main-img {
      background-color: #22283a;
      width: 75%;
      height: 35rem;
    }

    .small-images {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 20%;

      .small-image {
        background-color: #22283a;
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
