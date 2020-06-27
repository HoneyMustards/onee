import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showGallery } from "../../../../store/property/actions";

const DetailBanner = (props) => {

    return(
        <div className="detail-banner" onClick={() => props.onShowGallery(0)}>
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

const mapDispatchToProps = (dispatch) => ({
    onShowGallery: (property) => dispatch(showGallery(property))
});

export default connect(null, mapDispatchToProps)(DetailBanner);
