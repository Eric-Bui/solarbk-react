import React from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
require('dotenv').config();

MapGoogle.propTypes = {
    language: PropTypes.string,
    projectList: PropTypes.array,
};

function MapGoogle(props) {
    const { projectList } = props;
    console.log(projectList);

    return (
        <Map
            google={props.google}
            zoom={14}
            initialCenter={{
                lat: 10.7855228,
                lng: 106.7689657,
            }}
        >
            <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'SOMA'}
                position={{ lat: 10.7855228, lng: 106.7689657 }}
            >
                <InfoWindow>
                    <div>
                        <p>
                            Click on the map or drag the marker to select location where the
                            incident occurred
                        </p>
                    </div>
                </InfoWindow>
            </Marker>
        </Map>
    );
}

export default GoogleApiWrapper((props) => ({
    apiKey: process.env.REACT_APP_KEY_GOOGLE,
    language: props.language,
}))(MapGoogle);
