import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
// import { initStore } from '../../store/store';
import { setInstantBooking } from '../../store/filter/actions';
// import { UPDATE_FILTER } from '../../store/filter/actions.type';

// import { FormattedMessage } from "react-intl";

import { Button, ButtonGroup } from 'react-bootstrap';
import Layout from '../../src/components/layouts/layout';
import SearchBox from '../../src/components/elements/search-box';
import FilterBox from '../../src/components/elements/filter-box';
import Newsletter from '../../src/components/partials/home/newsletter';
import Footer from '../../src/components/shared/footer/footer';

import CardItem from '../../src/components/elements/card-item';
import Map from '../../src/components/elements/map';

import globalStyles from './style'


const List = (props) => {

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isFilterOverlay, setIsFilterOverlay] = useState(false);
  const [openClass, setOpenClass] = useState();
  const toggleMap = () => setIsMapOpen(!isMapOpen);
  const showFilterOverlay = () => setIsFilterOverlay(true);
  const hideFilterOverlay = () => setIsFilterOverlay(false);

  const handleInstantBooking = status => props.dispatch(setInstantBooking(status));

  useEffect(() => {
    if (isMapOpen) {
      setOpenClass('is-open')
    } else {
      setOpenClass('')
    }
  }, [isMapOpen])

  return (
    <Layout>
      <div className="mobile-filter-toggle">
        <ButtonGroup size="lg">
          <Button variant="secondary"><i className="icon icon-search  mr-2"></i> Filter</Button>
          <Button variant="secondary"><i className="icon icon-search  mr-2"></i> Sort</Button>
          <Button variant="secondary" onClick={() => { setIsMapOpen(true) }}><i className="icon icon-search  mr-2"></i> Map</Button>
        </ButtonGroup>         
      </div>
      <div className="search-box-container detail">
        <SearchBox hasAddFavourite={true} />
      </div>
      <FilterBox 
        variant="d-none d-md-flex" 
        handleShowFilter={showFilterOverlay} 
        handleHideFilter={hideFilterOverlay}
        handleInstantBooking={handleInstantBooking}  
      />
      <div style={{ position: 'relative' }}>
        <div className={"map-toggle  " + openClass} onClick={toggleMap}>
           { isMapOpen ? 'Hide Map' : 'Show Map' }
        </div>
        <div className={"filter-overlay" + (isFilterOverlay ? '' : 'd-none')}></div>
        <Map variant={openClass} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="mt-5 summmary">20 of the 30 villas are listing. You may also contact us about our Hidden Gems. <span className="summary-contact">Contact with the nearest travel advisor.</span></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-3 mb-3">
              <CardItem isBadge={true} />
            </div>
            <div className="col-md-4 mt-3 mb-3">
              <CardItem isBadge={true} />
            </div>
            <div className="col-md-4 mt-3 mb-3">
              <CardItem isBadge={true} />
            </div>
            <div className="col-md-4 mt-3 mb-3">
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

// List.getInitialProps = ({ store }) => store.dispatch(addCount());


const mapStateToProps = (state, props) => {
  return state;
}
export default connect(mapStateToProps)(List); 