import React, {useState, useEffect} from 'react';
import { FormattedMessage } from "react-intl";
import {Tabs, Tab} from 'react-bootstrap'

import Destination from '../../elements/destination';
import destinationList from '../../../../data/tab-destination.json';


const TabDestination = () => {
    const [key, setKey] = useState('Ko Samui');

    const destinations = destinationList.map((dest,i) =>  
        <Tab key={i} eventKey={dest.destination} title={dest.destination}>
            <div className="row">
            {
                dest.items.map((item,i) => 
                    <div className="col-6 col-md-3 tab-item" key={i} >
                        <Destination {...item} />   
                    </div>
                )
            }
            </div>
        </Tab>
    );  
    
    return(
        <section className="row section-home">
            <div className="col-md-12">
                <h1 className="section-title"><FormattedMessage id="home.tab-destination"/></h1>
                <p className="section-description"><FormattedMessage id="home.tab-destination-desc"/></p>
                <hr className="section-hr"/>
            </div>
            <div className="col-md-12 tab-column">
                <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                    {destinations}
                </Tabs>
            </div>
        </section>
    )
};
  
export default TabDestination;