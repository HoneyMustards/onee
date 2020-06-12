import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
    
    const totalPoint = 5;
    const average = Math.round(props.point);
    const emptyCount = totalPoint - average;

    let filledTemplate = [];
    let emptyTemplate = [];

    for (var i = 0; i < average; i++) {
        filledTemplate.push(<i className="rating-icon filled icon star" key={i}/>);
    }

    for (var i = 0; i < emptyCount; i++) {
        emptyTemplate.push(<i className="rating-icon icon star" key={i}/>);
    }

    return (
        <div className="rating">
            <div className="rating-content">
                {filledTemplate}
                {emptyTemplate}
            </div>
            {props.count && <span className="rating-count">({props.count})</span>}
        </div>
    )
}

Rating.propTypes = {
    point: PropTypes.number,
    count: PropTypes.number,
}

Rating.defaultProps = {
    point: null,
    count: null
} 

export default Rating;