import React from 'react';
import PropTypes from 'prop-types';

TableProject.propTypes = {
    data: PropTypes.array,
};

function TableProject({projectList}) {
    return (
       <>
        {projectList.map(project => (
            <div key={project.project_info.project_uid}>{project.project_info.project_ssoc_name}</div>
        ))}
       </>
    );
}

export default TableProject;