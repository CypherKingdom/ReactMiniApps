import React from 'react';
import Map, { Marker } from 'react-map-gl';
import { ImLocation } from 'react-icons/im';
import 'mapbox-gl/dist/mapbox-gl.css';
import classes from './IPAddress.module.css'

const MapComponent = ({ longitude, latitude }) => {
  return (
    <div className={classes.map}>
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: 3.5
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <Marker longitude={longitude} latitude={latitude} anchor="bottom">
          <ImLocation className={classes.mark} />
        </Marker>
      </Map>
    </div>
  );
};

export default MapComponent;