import React, {useState} from 'react';
import {connect} from "react-redux";

import DetailBanner from './detail-banner';

// Actions
import {showGallery} from "../../../../store/property/actions";

const DetailPhotos = ({photos, onShowGallery}) => {

    return (
        <div className="detail-photos">
            <DetailBanner photo={photos[0]} />
            <ul className="detail-photos-list">
                {
                    photos?.slice(1,5).map((item,i) =>
                        <li key={i}>
                            <span onClick={() => onShowGallery(i+1)}>
                                <img src={item.url} alt="" />
                                {(i === 3 && photos.length > 5) && <div className="detail-photos-overlay">+{photos.length - 5}</div>}
                            </span>
                        </li>
                    )
                }
            </ul>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    onShowGallery: (property) => dispatch(showGallery(property))
});

export default connect(null, mapDispatchToProps)(DetailPhotos);
