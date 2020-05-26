import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

import CommentItem from './commentItem';

const Comments = (props) => {

    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState('first');

    const params = {
        slidesPerView: 2,
        spaceBetween: 10,
        on: {
            slideChange: function () {
                if(this.isBeginning){
                    setActiveIndex('first')
                } else if(this.isEnd) {
                    setActiveIndex('last')
                } else {
                    setActiveIndex(this.activeIndex)
                }
            },
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
    }

    const commentAll = props.comments.map((item,i) =>  
        <CommentItem key={i} {...item} />
    );

    return(

        <div className="comments">
            <h2 className="detail-content-title">Reviews</h2>
            <div className="comments-list row">
                {swiper && <button className={`swiper-button-prev ${activeIndex === 'first' ? 'disable':''}`} onClick={() => swiper.slidePrev()}></button>}
                {swiper && <button className={`swiper-button-next ${activeIndex === 'last' ? 'disable':''}`} onClick={() => swiper.slideNext()}></button>}
                <Swiper {...params} getSwiper={setSwiper}>
                    {commentAll}
                </Swiper>
            </div>
            {swiper && <div className="comments-total">{swiper.activeIndex+1}-{swiper.activeIndex+2} of {swiper.params.children.length}</div>}
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