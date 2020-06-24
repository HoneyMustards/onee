import React from 'react';
import GoogleMapReact from 'google-map-react';
import style from './style.module.scss';

const Map = () => {
    return (
        <div  className={style.mapWrapper}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB0ibrp-9Z8kOifA9qc9HQ8vgPmhsAZK9E' }}
                defaultCenter={{
                    lat: 41.010761,
                    lng: 28.970959
                }}
                defaultZoom={1}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map;