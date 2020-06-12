import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';

const VisitorCounter = ({value}) => {

    const [count, setCount] = useState(value);

    return (
        <div className="count-box">
            <button className="count-btn" disabled={count == 0} onClick={() => setCount(count - 1)}>-</button>
            <span className="count">{count}</span>
            <button className="count-btn" onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

VisitorCounter.propTypes = {
    value: PropTypes.number
}

VisitorCounter.defaultProps = {
    value: 0
} 

export default VisitorCounter;