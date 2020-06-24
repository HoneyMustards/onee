import React from 'react';
import PropTypes from 'prop-types';

const DetailBanner = (props) => {

    return(
        <div className="detail-banner">
            <img src={props.photo.url} alt=""/>
        </div>
    )
};

DetailBanner.propTypes = {
    photo: PropTypes.object
};

DetailBanner.defaultProps = {
    photo: {
        url: './images/detail/detail.png'
    }
};

export default DetailBanner;
