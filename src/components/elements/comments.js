import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

import CommentItem from './commentItem';

const Comments = (props) => {

    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }

    const commentAll = props.comments.map((item,i) =>  
        <CommentItem key={i} {...item} />
    ); 

    return(
        <div className="comments">
            <h2 className="detail-content-title">Reviews</h2>
            <div className="amenities-list row">
                <Swiper {...params}>
                    {commentAll}
                </Swiper>
            </div>
            <div className="comments-total">1–2 of 12</div>
        </div>
    )
};

Comments.propTypes = {
    comments: PropTypes.array
}

Comments.defaultProps = {
    comments: []
} 

export default Comments;