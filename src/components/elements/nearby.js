import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import uniqBy from 'lodash/uniqBy';

const Nearby = (props) => {
    // console.log(props);

    const types = {
        airport: 'airport',
        beach: 'beach'
    }

    const [list, setList] = useState([]);
    const [uniqList, setUniqList] = useState([]);

    // const [nearbyLists, setNearbyList] = useState([]);

    // const nearbyList = [];

    const handleApiLoaded = (map, maps) => {

        const center = {
            lat: 36.606381,
            lng:  31.773610
        };

        const centerPoint = new maps.LatLng(center.lat, center.lng);

        const events = {
            getDistance: (from, to, type) => {
                console.log(from, to, type)
                const serviceDistance = new maps.DistanceMatrixService();
                serviceDistance.getDistanceMatrix(
                    {
                        origins: [from],
                        destinations: [to],
                        travelMode: 'DRIVING',
                    }, (results) => {
                        console.log(results);
                        if (type = types.airport) {
                            const temp = {
                                name: 'Airport',
                                distance: results.rows[0].elements[0].distance.text
                            }
                            setList(list => [...list, temp]);
                        }

                        if (type = types.beach) {
                            const temp = {
                                name: 'Beach',
                                distance: results.rows[0].elements[0].distance.text
                            }
                            setList(list => [...list, temp]);
                        }
                        
                    });
            },
            airport: {
                get: () => {
                    const request = {
                        location: centerPoint,
                        radius: 150000,
                        keyword: [types.airport]
                    }
                    const service = new maps.places.PlacesService(map);
                    service.nearbySearch(request, (results, status) => { events.airport.callback(results, status, types.airport) });     
                },
                callback: (results, status, type) => {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        const imageUrl = 'https://maps.gstatic.com/mapfiles/place_api/icons/airport-71.png';
                        for (let i=0; i < results.length; i++) {
                            if (results[i].icon == imageUrl) {
                                const to =  new maps.LatLng(results[i].geometry.location.lat(), results[i].geometry.location.lng());
                                events.getDistance(centerPoint, to, type);
                                break;
                            }
                        }
                    }
                }
            },
            beach: {
                get: () => {
                    const request = {
                        location: centerPoint,
                        radius: 150000,
                        keyword: [types.beach]
                    }
                    const service = new maps.places.PlacesService(map);
                    service.nearbySearch(request, (results, status) => { events.beach.callback(results, status, types.beach) });     
                },
                callback: (results, status, type) => {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        const to =  new maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                        events.getDistance(centerPoint, to, type);
                    }
                }
            }
        }

        events.airport.get();
        events.beach.get();
    };

    useEffect(() => {
        const temp = uniqBy(list, 'name' );
        console.log('u', temp);
        setUniqList(temp)
    }, [list])

    // useEffect(() => {
    //     console.log(uniqList);
    // }, [uniqList])
      

    const nearbyList = uniqList.map((item, i) =>
        <li key={i} className="nearby-item">
            <b>{item.name}</b> {item.distance}
        </li>
    );

    return (
        <div className="nearby">
            <h2 className="detail-content-title">What's Nearby</h2>
            <ul className="nearby-list">
                {nearbyList}
            </ul>

            <div>
                 {/* {{uniqList}} */}
            </div>

            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB0ibrp-9Z8kOifA9qc9HQ8vgPmhsAZK9E', libraries: 'places' }}
                defaultCenter={{lat: 36.606381, lng: 28.9709593}}
                defaultZoom={15}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
            </GoogleMapReact>
        </div>
    )
};

Nearby.propTypes = {
}

Nearby.defaultProps = {
}

export default Nearby;