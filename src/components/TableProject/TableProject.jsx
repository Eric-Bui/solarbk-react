import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

TableProject.propTypes = {
    data: PropTypes.array,
};

function TableProject({ handleClick ,projectList }) {
    // console.log(projectList);
    const handleChooseProject = (project) => {
        handleClick(project);
    } 
    return (
        <>
            {projectList.map((project) => (
                <div 
                    key={project.project_info.project_uid}
                    onClick={() => {handleChooseProject(project)}}
                >
                    {project.project_info.project_ssoc_name}
                </div>
            ))}
        </>
    );
}

export default TableProject;
