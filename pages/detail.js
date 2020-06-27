import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

//Data
import amenitiesList from '../data/amenities.json';
import comments from '../data/comments.json';
import nearbyList from '../data/nearby.json';

import Layout from '../src/components/layouts/layout';
import SearchBox from '../src/components/elements/search-box';
import Newsletter from '../src/components/partials/home/newsletter';
import Footer from '../src/components/shared/footer/footer';

import Rating from '../src/components/elements/rating';
import Amenities from '../src/components/elements/amenities';
import Nearby from '../src/components/elements/nearby';
import Comments from '../src/components/elements/comments';
import Map from '../src/components/elements/map';
import PropertySlider from '../src/components/elements/property-slider';
import DetailPhotos from '../src/components/partials/detail/photos';
import DetailSummary from '../src/components/partials/detail/detail-summary';
import DetailBanner from '../src/components/partials/detail/detail-banner';
import Gallery from '../src/components/partials/detail/gallery';
//import api from '../src/api'
import Persist from '../src/service/persist.service';

// Actions
import { setProperty } from '../store/property/actions';

import fetch from 'node-fetch'

const Detail = (props) => {

    const property = props.data.data;

    console.log(property);

    useEffect(() => {
        props.onSetProperty(property);
        Persist.set('property', property);
    }, []);

    const [gallery, setGallery] = useState(false);

    return (
      <Layout title={property?.title}>
          <div className="search-box-container detail">
            <SearchBox />
          </div>

          <div className="detail-page">
            <div className="row">
                <div className="col-md-12 col-lg-8 detail-container">
                    <DetailBanner photo={property?.photos.items[0]} />
                    <div className="detail-content">
                        <div className="detail-content-top">
                            <div className="detail-content-header">

                                <h1 className="detail-title">{property?.title}</h1>
                                {/*<Rating point={3} />*/}
                            </div>

                            <div className="detail-content-info">
                                <div className="detail-content-location">
                                    <i className="icon icon-pin fs-23"></i> {property.location?.address.city}, {property.location?.address.country} <a className="link btn-text">View on map</a>
                                </div>
                                <div className="detail-content-id">Property ID: {property?.id}</div>
                            </div>
                        </div>

                        <Amenities list={amenitiesList} />

                        <h2 className="detail-content-title">Description</h2>
                        <p className="detail-content-text">
                            {property.basicInfo.description.desc}
                        </p>
                        <hr/>

                        {/*<Comments comments={comments} />
                        <hr/>*/}
                        <Nearby list={nearbyList} />

                        <div className="detail-map">
                            <Map className='detail-type is-open' />
                        </div>
                    </div>

                    <PropertySlider properties={comments} className="mt-50" />

                    <PropertySlider properties={comments} className="mt-50" />

                </div>
                <div className="col-md-12 col-lg-4 detail-sidebar">
                    <DetailPhotos photos={property?.photos.items} />
                    <DetailSummary detail={true}/>
                </div>
            </div>
          </div>

          <Gallery photos={property?.photos.items} />

          <Newsletter />
          <Footer />
      </Layout>
    );
};

export async function getServerSideProps({query}) {

    const res = await fetch(`${process.env.API_BASE_URL}/properties/${query.id}`);
    const data = await res.json();

    return {
        props: { data : data }
    }
}

const mapStateToProps = (state) => {
    return {
        gallery: state.property.gallery
    }
};

const mapDispatchToProps = (dispatch) => ({
    onSetProperty: (property) => dispatch(setProperty(property))
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
