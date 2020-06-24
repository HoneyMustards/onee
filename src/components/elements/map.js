import React, {useState, Fragment, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import CardItem from './card-item';

const Marker = (props) => {

    const { markerShow, place } = props;
    const show = markerShow === place.id;

    const markerStyle = {
        fontSize: '32px',
        borderRadius:'50%',
        color: show ? '#24A8E0' : '#ef5729',
        cursor: 'pointer',
        zIndex: 10,
    }, infoWindowStyle = {
        position: 'relative',
        bottom: 230,
        left: '-90px',
        boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    };

    return (
        <Fragment>
            <i className='icon icon-pin-map' style={markerStyle}></i>
            {show && <div style={infoWindowStyle}> <CardItem variant="card-item-in-map" {...place} /> </div>}
        </Fragment>
    );
};

const Map = ({properties}) => {

    const [markerShow, setMarkerShow] = useState();
    let items;

    if(properties){
        items = properties.data.data.content.slice(0,5).map((item,i) => {
            try{
                if(item){
                    return (
                        <Marker place={item} markerShow={markerShow} key={item.id} lat={`3${i+3}.923533`} lng={`3${i+3}.865287`} />
                    )
                }
            } catch(err){
            }
        });
    }

    const onChildClickCallback = (key) => {
        markerShow === key ? setMarkerShow('') : setMarkerShow(key);
    };

    return (
        <div className={`map`}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.MAP_KEY }}
                defaultCenter={{
                    lat: 41.010761,
                    lng: 28.970959
                }}
                defaultZoom={1}
                onChildClick={onChildClickCallback}
            >
                {items}
            </GoogleMapReact>
        </div>

    )
};

export default Map;
