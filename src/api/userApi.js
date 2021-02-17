import axiosClient from './axiosClient';

const userApi = {
    register(info) {
        const url = `/auth/local/register`;
        return axiosClient.post(url, info);
    },
    login(info) {
        const url = `/auth/local`;
        return axiosClient.post(url, info);
    },
};

export default userApi;
