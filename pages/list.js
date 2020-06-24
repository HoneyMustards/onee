import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { setInstantBooking, setFilter, getFilter } from '../store/filter/actions';

import { Button, ButtonGroup } from 'react-bootstrap';
import Layout from '../src/components/layouts/layout';
import SearchBox from '../src/components/elements/search-box';
import FilterBox from '../src/components/elements/filter-box';
import Newsletter from '../src/components/partials/home/newsletter';
import Footer from '../src/components/shared/footer/footer';
import CardItem from '../src/components/elements/card-item';
import Map from '../src/components/elements/map';

import Persist from '../src/service/persist.service';

const List = (props) => {

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isFilterModal, setIsFilterModal] = useState(false);
  const [isFilterOverlay, setIsFilterOverlay] = useState(false);
  const [openClass, setOpenClass] = useState();
  const [scrollTop, setScrollTop] = useState(0);
  const [properties, setProperties] = useState();
  const [cardTemplate, setCardTemplate] = useState();
  const toggleMap = () => setIsMapOpen(!isMapOpen);
  const showFilterOverlay = () => setIsFilterOverlay(true);
  const hideFilterOverlay = () => setIsFilterOverlay(false);

  const handleInstantBooking = status => {
    props.dispatch(setInstantBooking(status));
    Persist.set('filter', props.filter);
  };
  const handleShowFilterModal = status => setIsFilterModal(true);
  const handleHideFilterModal = status => setIsFilterModal(false);

  useEffect(() => {
    /*
    const getState = Persist.get('filter');
    console.log(getState);
    if (getState) {
      props.dispatch(setFilter(getState));
    }
    */
  }, []);

  useEffect(() => {
    props.onGetFilter().then(response => {
      setProperties(response);
    })
  }, []);

  useEffect(() => {
    let template;
    if ( typeof properties != 'undefined') {
      template = properties.data.data.content.map((property, index) => {
          return (
            <div className="item col-md-4 mt-3 mb-3" key={index}>
              <CardItem {...property} />
            </div>
          )
      }
      );
    }
    setCardTemplate(template);

  }, [properties]);


  useEffect(() => {
    if (isMapOpen) {
      setOpenClass('is-open list-type')
    } else {
      setOpenClass('')
    }
  }, [isMapOpen]);

  // window.addEventListener('scroll', () => {
  //   if(window.scrollY < 81){
  //       setScrollTop(window.scrollY);
  //   } else {
  //       setScrollTop(80);
  //   }
  // })

  // const items = properties.map((item,i) =>
  //     <div className="item col-md-4 mt-3 mb-3" key={i}>
  //         <CardItem {...item} />
  //     </div>
  // );

  return (
    <Layout>
      <div className="mobile-filter-toggle">
        <ButtonGroup size="lg">
          <Button variant="secondary" onClick={() => { setIsFilterModal(true) }}><i className="icon icon-filter  mr-2"></i> Filter</Button>
          <Button variant="secondary"><i className="icon icon-sort  mr-2"></i> Sort</Button>
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
        handleShowFilterModal={handleShowFilterModal}
        handleHideFilterModal={handleHideFilterModal}
        filter={props.filter}
        isFilterModalShow={isFilterModal}
      />
      <div className="list-container">

        <div className={`filter-overlay ${isFilterOverlay ? '' : 'd-none'}`}></div>
        {/* <div className={`map-container ${openClass}`} style={{ top: 210 - scrollTop }}> */}
        <div className={`map-container ${openClass}`}>
          <div className={"map-toggle  " + openClass} onClick={toggleMap}>
            {isMapOpen ? 'Hide Map' : 'Show Map'}
          </div>
          <Map properties={properties} />
        </div>
        <div className={`list-container-items ${isMapOpen ? 'open-map' : ''}`}>
          <div className="row">
            <div className="col-12">
              <p className="mt-20 page-info">20 of the 30 villas are listing. You may also contact us about our Hidden Gems. <span className="page-info-contact">Contact with the nearest travel advisor.</span></p>
            </div>
          </div>
          <div className="row">
            {/* {items} */}
            {cardTemplate}
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </Layout>
  );
};


const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = {
  onGetFilter: getFilter
};


export default connect(mapStateToProps, mapDispatchToProps)(List);