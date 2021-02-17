import React from 'react';
import PropTypes from 'prop-types';
import CounterFeature from 'features/Counter';

Home.propTypes = {};

function Home(props) {
    return (
        <div>
            Home Components
            <CounterFeature />
        </div>
    );
}

export default Home;
