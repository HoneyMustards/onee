import React, { useState } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import CardItem from './card-item';

import Items from '../../../data/items.json';

const createPopover = (mapItem) => {
    const popover = (
        <Popover className="map-popover">
            <CardItem
                variant="card-item-in-map"
                {...mapItem}
            />
        </Popover>
    );

    return popover;
}

const items = Items.map((item,i) => 
        <OverlayTrigger trigger="click" overlay={createPopover(item)} key={i} lat={Math.random() * 60} lng={Math.random() * 60} >
            <i className="icon icon-pin" style={{fontSize: '32px', backgroundColor: 'red', color:'white', borderRadius:'50%'}}></i>
        </OverlayTrigger> 
);


const Map = (props) => {

    return (
        <div className={`map`}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB0ibrp-9Z8kOifA9qc9HQ8vgPmhsAZK9E' }}
                defaultCenter={{
                    lat: 41.010761,
                    lng: 28.970959
                }}
                defaultZoom={1}
            >
                {items}
            </GoogleMapReact>
        </div>

    )
}

export default Map;