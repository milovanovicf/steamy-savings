<template>
  <div class="latest-deal">
    <div class="banner-container">
      <router-link
        to="/deals/Recent"
        class="banner"
        v-for="banner in !isMobile ? banners : bannersMobile"
        :key="banner.id"
        :class="{ active: currentBanner === banner.id }"
      >
        <img :src="banner.url" alt="slide" />
      </router-link>
    </div>
    <img
      src="../../assets/images/banner/angle-left-svgrepo-com.svg"
      class="controls left"
      @click="slideChange"
    />
    <img
      src="../../assets/images/banner/angle-right-svgrepo-com.svg"
      class="controls right"
      @click="slideChange"
    />
    <div class="btn">
      <router-link to="/deals/Recent">View all latest deals</router-link>
    </div>
  </div>
</template>

<script>
import { banners, bannersMobile } from '../../Data';

export default {
  data() {
    return {
      banners: banners,
      bannersMobile: bannersMobile,
      currentBanner: 1,
      screenWidth: window.innerWidth,
      isMobile: window.innerWidth < 900,
    };
  },
  methods: {
    slideChange(btn) {
      const button = btn.target.className;
      if (button.includes('left')) {
        this.currentBanner++;
        if (this.currentBanner > this.banners.length) this.currentBanner = 1;
      } else if (button.includes('right')) {
        this.currentBanner--;
        if (this.currentBanner < 1) this.currentBanner = this.banners.length;
      }
    },
    automaticSlideChange() {
      setInterval(() => {
        this.currentBanner += 1;
        if (this.currentBanner > this.banners.length) this.currentBanner = 1;
      }, 8000);
    },
  },
  mounted() {
    this.automaticSlideChange();
  },
};
</script>

<style scoped lang="scss">
.latest-deal {
  position: relative;
  margin: 5rem 0;
  text-align: center;

  .banner-container {
    position: relative;
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      display: block;
    }
    .banner {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transform: scale(0);
      transition: all 400ms ease-in-out;

      &.active {
        transform: scale(1);
        opacity: 1;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
  }

  .controls {
    position: absolute;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
  }

  .left {
    left: 0;
    top: 35%;
  }

  .right {
    right: 0;
    top: 35%;
  }

  .btn {
    text-align: center;
    margin: 3rem 0 0 0;

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
@media only screen and (max-width: 1200px) {
  .latest-deal {
    .banner-container {
      height: 15rem;
    }
  }
}

@media only screen and (max-width: 750px) {
  .latest-deal {
    margin: 3rem 0;

    h2 {
      font-size: 1.3rem;
    }
    .banner-container {
      height: 20rem;
      margin: 0 1rem;
    }

    .btn {
      text-align: center;
      margin: 0;

      a {
        color: #fff;
        border: 1px solid #9aa4bf;
        padding: 1rem 2rem;
      }
    }

    .controls {
      position: absolute;
      cursor: pointer;
      width: 2.5rem;
      height: 2.5rem;
    }

    .left {
      top: 25%;
    }

    .right {
      top: 25%;
    }
  }
}

@media only screen and (max-width: 600px) {
  .latest-deal {
    .banner-container {
      height: 13rem;

      margin: 0;
    }
  }
}
</style>
