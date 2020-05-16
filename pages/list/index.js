import React, { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";

import Layout from '../../src/components/layouts/layout';
import SearchBox from '../../src/components/elements/search-box';
import FilterBox from '../../src/components/elements/filter-box';
import Newsletter from '../../src/components/partials/home/newsletter';
import Footer from '../../src/components/shared/footer/footer';

import CardItem from '../../src/components/elements/card-item';
import Map from '../../src/components/elements/map';

import globalStyles from './style'


const List = () => {

  
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [openClass, setOpenClass] = useState();

  const toggleMap = () => setIsMapOpen(!isMapOpen);

  useEffect(() => {
    console.log('ss');
    if (isMapOpen) {
      setOpenClass('is-open')
    } else {
      setOpenClass('')
    }
  }, [isMapOpen])

  return (
    <Layout>
      <div className="search-box-container detail">
        <SearchBox hasAddFavourite={true} />
      </div>
      <FilterBox />
      <div style={{ position: 'relative' }}>
        <div className={"map-toggle  " + openClass} onClick={toggleMap}>
           { isMapOpen ? 'Hide Map' : 'Show Map' }
        </div>
        <Map variant={openClass} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="mt-5 summmary">20 of the 30 villas are listing. You may also contact us about our Hidden Gems. <span className="summary-contact">Contact with the nearest travel advisor.</span></p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 mt-3 mb-3">
              <CardItem isBadge={true} />
            </div>
            <div className="col-4 mt-3 mb-3">
              <CardItem isBadge={true} />
            </div>
            <div className="col-4 mt-3 mb-3">
              <CardItem isBadge={true} />
            </div>
            <div className="col-4 mt-3 mb-3">
              <CardItem isBadge={true} />
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
      <style jsx global>
        {globalStyles}
      </style>
    </Layout>
  );
}

export default List;