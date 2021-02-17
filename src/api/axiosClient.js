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
        console.log(error);
        const { config, status, data } = error.response;

        const urlList = ['/auth/local/register', '/auth/local'];
        const isUrlAssett = urlList.includes(config.url);

        if (isUrlAssett && status === 400) {
            const errorList = data.data || [];
            const firstError = errorList.length > 0 ? errorList[0] : {};
            const messageList = firstError.messages || [];
            const firstMessage = messageList.length > 0 ? messageList[0] : {};
            throw new Error(firstMessage.message);
        }

        return Promise.reject(error.response);
    }
);

export default axiosClient;
