import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Nearby = (props) => {

    const nearbyList = props.list.map((item,i) =>  
        <li key={i} className="nearby-item">
            <b>{item.name}</b> {item.distance}
        </li>
    ); 

    return(
        <div className="nearby">
            <h2 className="detail-content-title">What's Nearby</h2>
            <ul className="nearby-list">
                {nearbyList}
            </ul>
        </div>
    )
};

Nearby.propTypes = {   
}

Nearby.defaultProps = {
} 
  
export default Nearby;