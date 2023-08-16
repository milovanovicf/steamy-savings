<template>
  <div class="about-page">
    <h2>About Us</h2>
    <p>
      <b>Steamy Savings</b> is all about finding the best prices on digital game
      downloads for PC. We keep track of game prices on a number of stores such
      as Steam, GreenManGaming, GOG and Humble Bundle.
    </p>
    <p>
      We find the best deals through
      <a href="https://apidocs.cheapshark.com/">CheapShark API</a>, so make sure
      to check them out as well.
    </p>
    <p>
      Whether you want to view the top deals, search for a specific game, sign
      up for email price alerts, or just browse, Steamy Savings has just what
      you're looking for.
    </p>
    <p>
      If you want to compare digital game download prices, and find the cheapest
      place to buy, then you came to the right site!
    </p>
  </div>
</template>

<style scoped lang="scss">
.about-page {
  width: 80%;
  margin: 5rem auto 10rem auto;
  background-color: #161a26;
  padding: 4rem 3rem;
  box-sizing: border-box;

  h2 {
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  a {
    color: #9aa4bf;

    &:hover {
      color: #c5d2f5;
    }
  }
}

@media only screen and (max-width: 750px) {
  .about-page {
    width: 85%;
    padding: 3rem 2rem;
  }
}

@media only screen and (max-width: 600px) {
  .about-page {
    width: 90%;
    margin: 3rem auto 7rem auto;
    padding: 3rem 1rem;
  }
}
</style>
