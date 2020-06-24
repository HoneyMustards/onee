import React, {useState} from 'react';

import DetailBanner from './detail-banner';

const DetailPhotos = ({photos}) => {

    return(
        <div className="detail-photos">
            <DetailBanner photo={photos[0]} />
            <ul className="detail-photos-list">
                {
                    photos.slice(1,5).map((item,i) =>
                        <li key={i}>
                            <span>
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

export default DetailPhotos;
