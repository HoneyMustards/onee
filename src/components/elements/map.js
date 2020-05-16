import React from 'react';
import GoogleMapReact from 'google-map-react';
import CardItem from './card-item';


const Map = (props) => {
    return (
        <div className={"map " + props.variant}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB0ibrp-9Z8kOifA9qc9HQ8vgPmhsAZK9E' }}
                defaultCenter={{
                    lat: 59.95,
                    lng: 30.33
                }}
                defaultZoom={8}
            >

                <CardItem
                    variant="card-item-in-map"                    
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />


                <CardItem
                    variant="card-item-in-map"
                    lat={59.955413}
                    lng={35.337844}
                    text="My Marker2"
                />

            </GoogleMapReact>
        </div>

    )
}

export default Map;