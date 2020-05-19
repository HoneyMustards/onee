import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Amenities = (props) => {

    const amenitiesList = props.list.map((item,i) =>  
        <li key={i} className="col-6 col-md-3 item">
            <i className={`icon ${item.icon}`}></i> {item.name}
        </li>
    ); 

    return(
        <div className="amenities">
            <ul className="amenities-list">
                {amenitiesList}
            </ul>
        </div>
    )
};

Amenities.propTypes = {
    list: PropTypes.array
}

Amenities.defaultProps = {
    list: []
} 
  
export default Amenities;