import axiosClient from './axiosClient';
import apiConfig from './apiConfig';

export const category = {
    movie: 'movie',
    tv: 'tv',
};

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
};

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air',
};

const tmdbApi = {
    getMoviesList: (type, page) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, {
            params: {
                api_key: apiConfig.API_KEY,
                page: page,
            },
        });
        // const url = 'movie/' + movieType[type] + `?api_key=${apiConfig.API_KEY}&page=${page}`;
        // return axiosClient.get(url);
    },
    getTvList: (type, page) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, {
            params: {
                api_key: apiConfig.API_KEY,
                page: page,
            },
        });
        // const url = 'tv/' + tvType[type]`?api_key=${apiConfig.API_KEY}&page=${page}`;
        // return axiosClient.get(url);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {
            params: {
                api_key: apiConfig.API_KEY,
            },
        });
        // const url = category[cate] + '/' + id + `/videos?api_key=${apiConfig.API_KEY}`;
        // return axiosClient.get(url);
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, {
            params: {
                api_key: apiConfig.API_KEY,
                query: params,
            },
        });
    },
    detail: (cate, id) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, {
            params: {
                api_key: apiConfig.API_KEY,
            },
        });
        // const url = category[cate] + '/' + id;
        // return axiosClient.get(url, params);
    },

    //performer //diễn viên
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {
            params: {
                api_key: apiConfig.API_KEY,
                language: 'en-US',
            },
        });
        // const url = category[cate] + '/' + id + '/credits';
        // return axiosClient.get(url, { params: {} });
    },

    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {
            params: {
                api_key: apiConfig.API_KEY,
                language: 'en-US',
            },
        });
        // const url = category[cate] + '/' + id + '/similar';
    },
};

export default tmdbApi;
