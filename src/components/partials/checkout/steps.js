import React, {useState} from 'react';
import PropTypes from 'prop-types';

const stepList = ["Booking", "Payment", "Confirmation"];

const Steps = (props) => {

    const { active } = props;
    const allSteps = stepList.map((item,i) => {

        let stepClass = '';

        if(active > i+1) {
            stepClass = 'completed';
        } else if(active === i+1) {
            stepClass = 'active';
        }

        return (
            <li key={i} className={stepClass}>
                <div className="steps-number"><span>{i+1}</span></div>
                <span className="steps-name">{item}</span>
            </li>
        )
    });

    return(
        <div className="steps">
            <ul className="steps-list">
                {allSteps}
            </ul>
        </div>
    )
};

Steps.propTypes = {
    active: PropTypes.number
};

Steps.defaultProps = {
    active: 1
};

export default Steps;
