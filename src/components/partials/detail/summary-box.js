import React, {useState} from 'react';

const SummaryBox = (props) => {

    return(
        <div className="summary-box">
            <span className="summary-box-label">{props.label}</span>
            <span className="summary-box-text">{props.children}</span>
        </div>
    )
};
  
export default SummaryBox;