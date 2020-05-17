import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const CommentItem = (props) => {
    const {title, text, name, time, rating} = props;

    return(
        <div className="swiper-slide">
            <div className="comment-item">
                <div className="comment-title">{title}</div>
                <div className="comment-text">{text}</div>
                <div className="comment-bottom">
                    <div>
                        <div className="comment-name">{name}</div>
                        <div className="comment-time">{time}</div>
                    </div>
                    <div className="comment-rating">{rating}</div>
                </div>
            </div>
        </div>
    )
};

CommentItem.propTypes = {
    list: PropTypes.array
}

CommentItem.defaultProps = {
    list: []
} 

export default CommentItem;