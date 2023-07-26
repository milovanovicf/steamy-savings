import axios from 'axios';

export async function fetchGames(sortBy, pageNumber, pageSize) {
  return await axios
    .get(
      `https://www.cheapshark.com/api/1.0/deals?sortBy=${sortBy}&pageNumber=${
        pageNumber - 1
      }&pageSize=${pageSize}`
    )
    .then((data) => data.data);
}

export async function fetchTotalPageNumber() {
  return await axios
    .get(`https://www.cheapshark.com/api/1.0/deals?sortBy=Recent&pageSize=32`)
    .then((data) => data.headers['x-total-page-count']);
}

export async function fetchByStore(storeID, pageNumber, pageSize) {
  return await axios
    .get(
      `https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}&pageNumber=${
        pageNumber - 1
      }&pageSize=${pageSize}`
    )
    .then((data) => data.data);
}

export async function fetchStores() {
  return await axios
    .get('https://www.cheapshark.com/api/1.0/stores')
    .then((data) => data.data.filter((store) => store.isActive === 1));
}

export async function findStore(id) {
  return await axios
    .get('https://www.cheapshark.com/api/1.0/stores')
    .then((data) => data.data.filter((store) => store.storeID === id));
}

export async function getData(params) {
  return await axios
    .get(`https://www.cheapshark.com/api/1.0/games?title=${params}`)
    .then((data) => data.data);
}

export const banners = [
  {
    id: 1,
    url: new URL(`/src/assets/images/banner/banner1.png`, import.meta.url),
  },
  {
    id: 2,
    url: new URL(`/src/assets/images/banner/banner2.png`, import.meta.url),
  },
  {
    id: 3,
    url: new URL(`/src/assets/images/banner/banner3.png`, import.meta.url),
  },
  {
    id: 4,
    url: new URL(`/src/assets/images/banner/banner4.png`, import.meta.url),
  },
  {
    id: 5,
    url: new URL(`/src/assets/images/banner/banner5.png`, import.meta.url),
  },
  {
    id: 6,
    url: new URL(`/src/assets/images/banner/banner6.png`, import.meta.url),
  },
];

export const bannersMobile = [
  {
    id: 1,
    url: new URL(
      `/src/assets/images/banner/banner1mobile.jpg`,
      import.meta.url
    ),
  },
  {
    id: 2,
    url: new URL(
      `/src/assets/images/banner/banner2mobile.jpg`,
      import.meta.url
    ),
  },
  {
    id: 3,
    url: new URL(
      `/src/assets/images/banner/banner3mobile.jpg`,
      import.meta.url
    ),
  },
  {
    id: 4,
    url: new URL(
      `/src/assets/images/banner/banner4mobile.jpg`,
      import.meta.url
    ),
  },
  {
    id: 5,
    url: new URL(
      `/src/assets/images/banner/banner5mobile.jpg`,
      import.meta.url
    ),
  },
  {
    id: 6,
    url: new URL(
      `/src/assets/images/banner/banner6mobile.jpg`,
      import.meta.url
    ),
  },
];
