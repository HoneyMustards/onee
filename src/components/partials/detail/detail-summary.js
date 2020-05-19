import React, {useState} from 'react';

import Button from '../../elements/form/button';
import SummaryBox from './summary-box';

const DetailSummary = () => {

    return(
        <div className="detail-summary">
            <div className="detail-summary-line">
                <div className="column">
                    <SummaryBox label='Check-In'>Mon, Dec 1</SummaryBox>
                </div>
                <div className="column">
                    <SummaryBox label='Check-Out'>Tue, Dec 17</SummaryBox>
                </div>
            </div>
            <div className="detail-summary-line">
                <SummaryBox label='Guest'>2 Adults, 2 Children</SummaryBox>
            </div>
            <div className="detail-summary-line mt-20">
                <span>$450 x 16 nights</span> $7200
            </div>
            <div className="detail-summary-line">
                <span>Service fee <i className="icon icon-question ml-1"></i> </span> $300
            </div>
            <div className="detail-summary-total">
                <span>Total</span> $7500
            </div>
            <div className="detail-summary-buttons">
                <Button className="btn-secondary btn-block btn-lg">Book Now</Button>
                <div className="detail-summary-favourite">
                    <i className="icon icon-heart"></i>
                </div>
            </div>
        </div>
    )
};
  
export default DetailSummary;