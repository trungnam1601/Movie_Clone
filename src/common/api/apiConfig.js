const apiConfig = {
    BASE_URL: 'https://api.themoviedb.org/3/',
    API_KEY: '6a1fb59f4107b1523634b62d5c1f41f8',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
};

export default apiConfig;
