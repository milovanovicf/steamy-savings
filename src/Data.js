import axios from 'axios';

export async function fetchGames(sortBy, pageNumber, pageSize) {
  const response = await axios.get(
    `https://www.cheapshark.com/api/1.0/deals?sortBy=${sortBy}&pageNumber=${
      pageNumber - 1
    }&pageSize=${pageSize}`
  );

  const formatedDeals = [];

  for (const game of await response.data) {
    formatedDeals.push(await formatGameData(game));
  }

  return formatedDeals;
}

export async function fetchTotalPageNumber() {
  const response = await axios.get(
    `https://www.cheapshark.com/api/1.0/deals?sortBy=Recent&pageSize=32`
  );
  return response.headers['x-total-page-count'];
}

export async function fetchTotalPageNumberByStore(storeID) {
  const response = await axios.get(
    `https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}&pageSize=30`
  );
  return response.headers['x-total-page-count'];
}

export async function fetchByStore(storeID, pageNumber, pageSize) {
  const response = await axios.get(
    `https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}&pageNumber=${
      pageNumber - 1
    }&pageSize=${pageSize}`
  );

  const formatedDeals = [];

  for (const game of await response.data) {
    formatedDeals.push(await formatGameData(game));
  }

  return formatedDeals;
}

export async function fetchStores() {
  const response = await axios.get('https://www.cheapshark.com/api/1.0/stores');
  return response.data.filter((store) => store.isActive === 1);
}

export async function findStore(id) {
  const response = await axios.get('https://www.cheapshark.com/api/1.0/stores');
  return response.data.find((store) => store.storeID === id);
}

async function formatGameData(game) {
  function formatedTitle(title) {
    return title && title.length > 32 ? title.slice(0, 32) + '...' : title;
  }

  function getDisplayPrice() {
    if (game.salePrice === '0.00') {
      return 'FREE';
    } else {
      return `$${game.salePrice}`;
    }
  }

  function isComingSoon() {
    if (game.normalPrice === '100.00' || game.normalPrice === '99.99') {
      return 'COMING SOON';
    } else {
      return `$${game.normalPrice || game.cheapest}`;
    }
  }

  return {
    ...game,
    salePrice: getDisplayPrice(),
    comingSoon: isComingSoon(),
    formatedTitle: formatedTitle(game.title || game.external),
    imageSrc: game.steamAppID
      ? `https://steamcdn-a.akamaihd.net/steam/apps/${game.steamAppID}/capsule_616x353.jpg`
      : game.thumb,
  };
}

export async function searchGame(params, limit = '60') {
  const response = await axios.get(
    `https://www.cheapshark.com/api/1.0/games?title=${params}&limit=${limit}`
  );

  const formatedDeals = [];

  for (const game of await response.data) {
    formatedDeals.push(await formatGameData(game));
  }

  return formatedDeals;
}
