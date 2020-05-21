import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

import CardItem from './card-item';

const PropertySlider = (props) => {

    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
            768: {
                slidesPerView: props.slidesPerView,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    }

    const propertyAll = props.properties.map((item, i) =>
        <div className="swiper-slide" key={i}>
            <CardItem {...item} />
        </div>
    );

    return (
        <div className={`property-slider ${props.className}`}>
            <h2 className="property-slider-title">{props.title}</h2>
            <p className="property-slider-summary text-center">{props.summary}</p>
            <hr className="section-hr"></hr>
            <div className="property-slider-navigation">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div className="property-slider-list">
                <Swiper {...params}>
                    {propertyAll}
                </Swiper>
            </div>
        </div>
    )
};

PropertySlider.propTypes = {
}

PropertySlider.defaultProps = {
    title: 'Recently Viewed',
    slidesPerView: 2
}

export default PropertySlider;