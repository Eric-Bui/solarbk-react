import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

TableProject.propTypes = {
    data: PropTypes.array,
};

function TableProject({projectList}) {
    // console.log(projectList);
    const info = useSelector(state => state.user);
    console.log(info);
    return (
       <>
        {projectList.map(project => (
            <div key={project.project_info.project_uid}>{project.project_info.project_ssoc_name}</div>
        ))}
       </>
    );
}

export default TableProject;