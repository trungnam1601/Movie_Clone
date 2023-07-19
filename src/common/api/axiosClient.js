// api/axiosClient.js
import axios from 'axios';
import apiConfig from './apiConfig';

const axiosClient = axios.create({
    baseURL: apiConfig.BASE_URL,
    // headers: {
    //     'content-type': 'application/json',
    // },
    // params: {
    //     api_key: apiConfig.API_KEY,
    // },
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        // Handle errors
        throw error;
    },
);
export default axiosClient;
