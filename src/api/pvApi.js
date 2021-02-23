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

    getDataByWidget(uid, token, widgets) {
        const url = 'project/widget';
        const headers = handleHeader(token);

        const params = {
            project_uid: uid,
            skip_page: 'true',
            widgets_list: widgets,
        }
        return axiosClient.get(url, {
            params,
            headers
        })
    }
};

export default pvApi;
