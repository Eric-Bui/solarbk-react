import axiosClient from './axiosClient';

const handleHeader = (token) => {
    const options = {
        'Content-Type': 'application/json',
      'x-language': 'en',
      'x-timezone': 'Asia/Ho_Chi_Minh',
      authorization: token,
    }
    return options;
}

const pvApi = {
    fectListProject(token) {
        const url = 'project/list';
        const headers = handleHeader(token);
        return axiosClient.get(url, {
            headers
        })

    },
};

export default pvApi;
