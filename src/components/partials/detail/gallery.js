import React, {useState, useEffect} from 'react';
import Swiper from 'react-id-swiper';

import {showGallery} from "../../../../store/property/actions";
import {connect} from "react-redux";

const Gallery = (props) => {

    const { photos, propertyTitle, gallery } = props;

    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        runCallbacksOnInit: true,
        lazy: true,
        activeSlideKey: String(gallery),
        rebuildOnUpdate: true,
        onInit: (swiper) => {
            this.swiper = swiper
        },
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
    };

    const allPhotos = photos?.map((item,i) =>
        <div className="swiper-slide" key={i}>
            <img src={item.url} alt={propertyTitle}/>
            <div className="gallery-bottom">
                {propertyTitle}
                <span className="gallery-page-number">{i+1}/{photos.length}</span>
            </div>
        </div>
    );

    return(
        <React.Fragment>
            <div className={`gallery ${gallery !== false ? 'show':''}`}>
                <div className="gallery-top">
                    <i className='icon icon-close' onClick={() => props.onShowGallery(false)}> </i>
                </div>
                <Swiper {...params}>
                    {allPhotos}
                </Swiper>
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => {
    return {
        gallery: state.property.gallery,
        propertyTitle: state.property.property.title
    }
};

const mapDispatchToProps = (dispatch) => ({
    onShowGallery: (property) => dispatch(showGallery(property))
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

