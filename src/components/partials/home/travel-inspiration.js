import React, {useState, useEffect} from 'react';
import { FormattedMessage } from "react-intl";
import Swiper from 'react-id-swiper';
import Link from 'next/link';
import Destination from '../../elements/destination';
import destinationList from '../../../../data/destination.json';


const TravelInspiration = () => {

    const params = {
      slidesPerView: 5,
      spaceBetween: 50,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    }

    const destinations = destinationList.map((item,i) => 
        <div key={i} className="swiper-slide">
          <Link href="/detail?name=ertugrul" as="detail/asdasd">
            <a>
              <Destination {...item} />
            </a>
          </Link>
        </div>
    );
    
    return(
        <section className="row section-home">
          <div className="col-md-12">
            <h1 className="section-title"><FormattedMessage id="home.travel-inspiration"/></h1>
            <p className="section-description"><FormattedMessage id="home.travel-inspiration-desc"/></p>
            <hr className="section-hr"/>
          </div>
          <div className="col-md-12">
              <Swiper {...params}>
                  {destinations}
              </Swiper>
          </div>
        </section>
    )
};
  
export default TravelInspiration;