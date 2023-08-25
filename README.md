# Steamy Savings

[Live version](https://steamysavings.netlify.app/)

Steamy Savings is all about finding the best prices on digital game downloads for PC. We keep track of game prices on a number of stores such as Steam, GreenManGaming, GOG and Humble Bundle. Whether you want to view the top deals, search for a specific game, sign up for email price alerts, or just browse, Steamy Savings has just what you're looking for. If you want to compare digital game download prices, and find the cheapest place to buy, then you came to the right site!

Created with VueJS and using [CheapSharkAPI](https://apidocs.cheapshark.com/) for it's data.
It features a Serach option to help users find their favourite game faster, using [Debounce](https://lodash.com/docs/4.17.15#debounce) from Lodash to prevent sending unnecessary to the API.
Since website is displaying many images at once it uses [vue-lazyload](https://www.npmjs.com/package/vue-lazyload) for lazy loading the images.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
