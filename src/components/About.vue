<template>
  <div class="about">
    <div class="logo">
      <router-link to="/"
        ><img src="/src/assets/images/icons/logoMainPng.png" alt="logoImg"
      /></router-link>
    </div>
    <div class="info column">
      <h2>Information</h2>
      <router-link to="/about">About Us</router-link>
      <router-link to="/stores">Stores</router-link>
    </div>
    <div class="games column">
      <h2>Deals</h2>
      <router-link to="/deals/Reviews/1">By Reviews</router-link>
      <router-link to="/deals/Price/1">By Price</router-link>
      <router-link to="/deals/Title/1">By Title</router-link>
    </div>
    <div class="newsletter column">
      <h2>Subscibe to our newsletter</h2>
      <p>
        Sign in for our weekly newsletter to get the latest news, updates and
        amazing deals.
      </p>
      <div class="confirm">
        <input type="checkbox" name="confirm" id="confirm" />
        <label for="confirm"
          >I agree to receive weekly mails about latest deals.</label
        >
      </div>
      <div class="email">
        <input type="email" disabled placeholder="Enter your emails address" />
        <a href="#" disabled>Subscribe</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.about {
  display: flex;
  justify-content: space-between;
  padding: 5rem;
  background-color: #161a26;
  height: 15rem;
  margin: 0 12rem;

  h2 {
    font-size: 1.5rem;
  }

  p,
  a,
  label {
    font-size: 1.1rem;
    color: #9aa4bf;
  }

  label {
    font-size: 0.9rem;
  }

  .logo {
    flex: 1 1 5%;
    width: 6.5rem;
    height: 6.5rem;

    h2 {
      font-size: 2rem;
      background-color: #ff5722;
      width: max-content;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .info,
  .games {
    a {
      display: block;

      &:hover {
        color: #c5d2f5;
      }
    }
  }

  .column {
    flex: 1 1 5%;

    h2 {
      padding-bottom: 0.5rem;
    }

    a,
    p {
      padding: 0.5rem 0;
      text-decoration: none;
    }
  }

  .newsletter {
    flex: 1 1 20%;

    .confirm {
      padding-bottom: 1rem;
      display: flex;
      align-items: center;

      input,
      label {
        cursor: pointer;
      }
    }

    .email {
      input {
        padding: 0.5rem;
        outline: none;
        color: #161a26;
        border: 1px solid #9aa4bf;
        width: 15rem;

        &::placeholder {
          color: #9aa4bf;
        }

        &:disabled {
          cursor: not-allowed;
        }
      }
      a {
        text-decoration: none;
        color: #fff;
        border: 1px solid #9aa4bf;
        padding: 0.5rem 1.5rem;
        margin: 0 1rem;
        transition: all 200ms ease-in-out;
        font-size: 1rem;

        // &:hover {
        //   background-color: #9aa4bf;
        // }

        &:disabled {
          cursor: not-allowed;
          background-color: red;
        }
      }
    }
  }
}

@media only screen and (max-width: 1600px) {
  .about {
    padding: 5rem 2rem;

    .logo {
      width: 5.5rem;
      height: 5.5rem;
    }

    .newsletter {
      .email {
        input {
          margin-bottom: 2rem;
        }
        a {
          margin: 0;
        }
      }
    }
  }
}

@media only screen and (max-width: 1400px) {
  .about {
    margin: 0 10rem;
  }
}

@media only screen and (max-width: 1200px) {
  .about {
    margin: 0 5rem;
  }
}

@media only screen and (max-width: 1000px) {
  .about {
    height: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .logo {
      padding-bottom: 2rem;
      width: 12rem;
    }

    .column {
      margin-bottom: 3rem;
    }

    .newsletter {
      .confirm {
        justify-content: center;
      }
      .email {
        a {
          margin: 2rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 700px) {
  .about {
    margin: 0 1rem;
    padding: 2rem 0;
  }
}
</style>
