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

export async function fetchTotalPageNumberByStore(storeID) {
  return await axios
    .get(
      `https://www.cheapshark.com/api/1.0/deals?storeID=${storeID}&pageSize=32`
    )
    .then((data) => {
      console.log(data.headers);
      return data.headers['x-total-page-count'];
    });
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

async function checkImageExists(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve(true);
    };
    img.onerror = () => {
      resolve(false);
    };
    img.src = url;
  });
}

async function checkImageUrl(id) {
  const imagePaths = [
    `https://steamcdn-a.akamaihd.net/steam/apps/${id}/capsule_616x353.jpg`,
    `https://steamcdn-a.akamaihd.net/steam/apps/${id}/thumbnail.jpg`,
    `https://steamcdn-a.akamaihd.net/steam/apps/${id}/header.jpg`,
  ];

  for (const imagePath of imagePaths) {
    const imageExists = await checkImageExists(imagePath);
    if (imageExists) {
      return imagePath;
    }
  }

  return null;
}

function formatTitle(title) {
  if (title && title.length > 32) {
    return title.slice(0, 32) + '...';
  } else {
    return title;
  }
}

export async function formatData(data) {
  for (const game of data) {
    const imageUrl = await checkImageUrl(game.steamAppID);
    const formatedTitle = formatTitle(game.title || game.external);
    game.formatedTitle = formatedTitle;
    if (game.steamAppID && imageUrl) {
      game.imageSrc = imageUrl;
    } else {
      game.imageSrc = game.thumb;
    }
  }
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
      `/src/assets/images/banner/banner1mobile.avif`,
      import.meta.url
    ),
  },
  {
    id: 2,
    url: new URL(
      `/src/assets/images/banner/banner2mobile.avif`,
      import.meta.url
    ),
  },
  {
    id: 3,
    url: new URL(
      `/src/assets/images/banner/banner3mobile.avif`,
      import.meta.url
    ),
  },
  {
    id: 4,
    url: new URL(
      `/src/assets/images/banner/banner4mobile.avif`,
      import.meta.url
    ),
  },
  {
    id: 5,
    url: new URL(
      `/src/assets/images/banner/banner5mobile.avif`,
      import.meta.url
    ),
  },
  {
    id: 6,
    url: new URL(
      `/src/assets/images/banner/banner6mobile.avif`,
      import.meta.url
    ),
  },
];
