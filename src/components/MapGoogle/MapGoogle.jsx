import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Feature, Marker, Popup } from 'react-mapbox-gl';
import markerUrl from 'assets/images/logo-map.png';
require('dotenv').config();

MapGoogle.propTypes = {
    language: PropTypes.string,
    projectList: PropTypes.array,
};

const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_KEY,
});

function MapGoogle(props) {
    const [showContent, setShowContent] = useState(false);
    const { projectList } = props;
    // console.log(projectList);

    return (
        <Map
            className="map-container"
            style="mapbox://styles/mapbox/streets-v8"
            zoom={[10]}
            center={[106.7689657, 10.7855228]}
            containerStyle={{
                height: '500px',
                width: '100%',
            }}
        >
            {projectList.map((project) => (
                <div key={project.project_info.project_uid}>
                    <Marker
                        onMouseEnter={() => setShowContent(true)}
                        onMouseLeave={() => setShowContent(false)}
                        coordinates={[project.project_info.project_longitude, project.project_info.project_latitude]}
                        anchor="bottom"
                    >
                        <img
                            style={{ height: '40px', width: '40px', cursor: 'pointer' }}
                            src={markerUrl}
                        />
                    </Marker>
                    {showContent && (
                        <Popup
                            coordinates={[project.project_info.project_longitude, project.project_info.project_latitude]}
                            offset={{
                                'bottom-left': [12, -38],
                                bottom: [0, -38],
                                'bottom-right': [-12, -38],
                            }}
                        >
                            <h1>Popup</h1>
                        </Popup>
                    )}
                </div>
            ))}
        </Map>
    );
}

export default MapGoogle;
