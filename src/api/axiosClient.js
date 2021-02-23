import axios from 'axios';
require('dotenv').config()


const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_API + '/api/v1/',
    'Content-Type': 'application/json',
});

axiosClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const { data } = error.response;
        return Promise.reject(data);
    }
);

export default axiosClient;
