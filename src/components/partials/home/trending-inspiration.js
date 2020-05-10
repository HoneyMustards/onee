import React, {useState, useEffect} from 'react';
import { FormattedMessage } from "react-intl";
import Swiper from 'react-id-swiper';

import Destination from '../../elements/destination';
import destinationList from '../../../../data/trending-destination.json';


const TrendingInspiration = () => {
  
    const destinations = destinationList.map((item,i) =>  
        <div key={i} className="col-12 col-md-6 item">
            <Destination {...item} />
        </div>
    );  
    
    return(
        <section className="row section-home trending">
            <div className="col-md-12">
                <h1 className="section-title"><FormattedMessage id="home.trending-inspiration"/></h1>
                <p className="section-description"><FormattedMessage id="home.trending-inspiration-desc"/></p>
                <hr className="section-hr"/>
            </div>
            <div className="col-md-12">
                <div className="row trending-column">
                    {destinations}
                </div>
            </div>
        </section>
    )
};
  
export default TrendingInspiration;