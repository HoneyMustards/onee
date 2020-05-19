import React, {useState} from 'react';

import DetailBanner from './detail-banner';

const DetailPhotos = () => {

    return(
        <div className="detail-photos">
            <DetailBanner />
            <ul className="detail-photos-list">
                <li><span><img src="./images/detail/detail.png" alt="" /></span></li>
                <li><span><img src="./images/detail/detail.png" alt="" /></span></li>
                <li><span><img src="./images/detail/detail.png" alt="" /></span></li>
                <li>
                    <span>
                        <img src="./images/detail/detail.png" alt="" />
                        <div className="detail-photos-overlay">+32</div>
                    </span>
                </li>
            </ul>
        </div>
    )
};
  
export default DetailPhotos;