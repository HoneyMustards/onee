import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import CardItem from './card-item';

import Items from '../../../data/items.json';

const items = Items.map((item,i) => 
    <CardItem
        key={i}
        variant="card-item-in-map"                    
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
        {...item}
    />
);

const Map = (props) => {

    return (
        <div className={`map`}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB0ibrp-9Z8kOifA9qc9HQ8vgPmhsAZK9E' }}
                defaultCenter={{
                    lat: 59.95,
                    lng: 30.33
                }}
                defaultZoom={8} 
            >
                {items}
            </GoogleMapReact>
        </div>

    )
}

export default Map;