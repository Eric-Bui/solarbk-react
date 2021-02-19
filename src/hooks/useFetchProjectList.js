import pvApi from 'api/pvApi';
import StorageKeys from 'constants/storage-key';
import { useEffect, useState } from 'react';

const useFetchProjectList = (props) => {
    const token = localStorage.getItem(StorageKeys.TOKEN);
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        const fetchListProject = async () => {
            const listProject = await pvApi.fectListProject(token);
            setProjectList(listProject);
        };
        fetchListProject();
    }, []);
    return projectList;
}

export default useFetchProjectList;
