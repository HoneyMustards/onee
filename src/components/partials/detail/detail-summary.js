import React, {useState} from 'react';

import Button from '../../elements/form/button';
import SummaryBox from './summary-box';

const DetailSummary = (props) => {

    return(
        <div className="detail-summary">
            {props.property &&
            <div className="summary-property">
                <div className="summary-property-img"><img src="./images/detail/detail.png" alt="" /></div>
                <div className="summary-property-content">
                    <div className="summary-property-name">Pine Cabin With Great Sea Views In Peaceful Location</div>
                    <div className="summary-property-location"><i className="icon icon-pin"></i>Miami, Florida USA</div>
                </div>
            </div>}
            <div className="detail-summary-line">
                <div className="column">
                    <SummaryBox label='Check-In'>Mon, Dec 1</SummaryBox>
                </div>
                <div className="column">
                    <SummaryBox label='Check-Out'>Tue, Dec 17</SummaryBox>
                </div>
            </div>
            {!props.property &&
            <div className="detail-summary-line">
                <SummaryBox label='Guest'>2 Adults, 2 Children</SummaryBox>
            </div>}
            <div className="detail-summary-line">
                <SummaryBox label='Guests'>
                    <ul className="summary-box-list">
                        <li>John Doe</li>
                        <li>Jessica Doe</li>
                        <li>Jane Doe</li>
                    </ul>
                </SummaryBox>
            </div>
            <div className="detail-summary-line">
                <SummaryBox label='Billing Info'>
                    <ul className="summary-box-list">
                        <li>John Doe <br /> johndoe@email.com <br /> +1 (333) 444 6765 </li>
                        <li><p>Onee Hospitality Partners AG Gubelstrasse 11 6300 Zug, Switzerland</p></li>
                    </ul>
                </SummaryBox>
            </div>
            <div className="detail-summary-line">
                <SummaryBox label='Contact Info'>
                    <ul className="summary-box-list">
                        <li>John Doe</li>
                        <li>+1 (333) 444 6765</li>
                        <li>johndoe@email.com</li>
                    </ul>
                </SummaryBox>
            </div>
            <div className="detail-summary-line">
                <SummaryBox label='Contact Info'>
                    <ul className="summary-box-list">
                        <li>Airport Transfer</li>
                        <li>Baby Sitter</li>
                        <li>Private Cook</li>
                        <li>Housemaid</li>
                    </ul>
                </SummaryBox>
            </div>
            <div className="detail-summary-line total-line">
                <div className="detail-summary-row mt-10">
                    <span>$450 x 16 nights</span> $7200
                </div>
                <div className="detail-summary-row">
                    <span>Service fee
                    <i className="icon icon-question ml-1"></i>
                    </span> $300
                </div>
                <div className="detail-summary-total">
                    <span>Total</span> $7500
                </div>
            </div>
            {!props.property &&
            <div className="detail-summary-buttons">
                <Button className="btn-secondary btn-block btn-lg">Book Now</Button>
                <div className="detail-summary-favourite">
                    <i className="icon icon-heart"></i>
                </div>
            </div>}
        </div>
    )
};
  
export default DetailSummary;