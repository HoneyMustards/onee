import React, { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";

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

const Detail = () => {
  
    return (
      <Layout>
          <div className="search-box-container detail">
            <SearchBox />
          </div>
          
          <div className="detail-page">
            <div className="row">
                <div className="col-9">
                    <div className="detail-banner">
                        <img src="./images/detail/detail.png" alt=""/>
                    </div>
                    <div className="detail-content">
                        <div className="detail-content-top">
                            <div className="detail-content-header">
                                <h1 className="detail-title">Pine Cabin With Great Sea Views In Peaceful Location</h1>
                                <Rating />
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

                    </div>
                </div>
                <div className="col-3"></div>
            </div>
          </div>

          <Newsletter />
          <Footer />
      </Layout>
    );
}

export default Detail;