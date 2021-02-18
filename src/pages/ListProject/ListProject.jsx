import React from 'react';
import PropTypes from 'prop-types';
import CounterFeature from 'features/Counter';

ListProject.propTypes = {};

function ListProject(props) {
    return (
        <div>
            ListProject Components
            <CounterFeature />
        </div>
    );
}

export default ListProject;
