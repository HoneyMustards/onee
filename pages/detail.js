import React, { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { useRouter } from 'next/router'

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
import { Next } from 'react-bootstrap/PageItem';

import fetch from 'node-fetch'

const Detail = (props) => {

    const router = useRouter();

    console.log(props);

    const [gallery, setGallery] = useState(false);
  
    return (
      <Layout>
          <div className="search-box-container detail">
            <SearchBox />
          </div>
          
          <div className="detail-page">
            <div className="row">
                <div className="col-md-12 col-lg-8 detail-container">
                    <DetailBanner />
                    <div className="detail-content">
                        <div className="detail-content-top">
                            <div className="detail-content-header">
                                <h1 className="detail-title">Pine Cabin With Great Sea Views In Peaceful Location</h1>
                                <Rating point={3} />
                            </div>

                            <div className="detail-content-info">
                                <div className="detail-content-location">
                                    <i className="icon icon-pin fs-23"></i> Miami, Florida USA <a href="#" className="link btn-text">View on map</a>
                                </div>
                                <div className="detail-content-id">Property ID: 800123477</div>
                            </div>
                        </div>

                        <Amenities list={amenitiesList} />

                        <h2 className="detail-content-title">Description</h2>
                        <p className="detail-content-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br/><br/>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <hr/>

                        <Comments comments={comments} />
                        <hr/>
                        <Nearby list={nearbyList} />

                        <div className="detail-map">
                            <Map className='detail-type is-open' />
                        </div>
                    </div>

                    <PropertySlider properties={comments} className="mt-50" />

                    <PropertySlider properties={comments} className="mt-50" />

                </div>
                <div className="col-md-12 col-lg-4 detail-sidebar">
                    <DetailPhotos />
                    <DetailSummary />
                </div>
            </div>
          </div>

          <Gallery show={gallery} />

          <Newsletter />
          <Footer />
      </Layout>
    );
}

export async function getServerSideProps() {
    console.log('asd');
    // Fetch data from external API
    const res = await fetch(`https://api.github.com/repos/vercel/next.js`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}

export default Detail;
