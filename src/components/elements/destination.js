import React from 'react';
import PropTypes from 'prop-types';

const Destination = props => {

    return(
        <div className="destination">
            <div className="destination-name">{props.name}</div>
            <div className="destination-img"><img src={props.image} alt=""/></div>
            {props.price && <div className="destination-price">from $6.900</div>}
        </div>
    )
};

Destination.propTypes = {
    name: PropTypes.string
};

Destination.defaultProps = {
    name: ''
};

export default Destination;
