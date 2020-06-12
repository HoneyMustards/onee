import React, { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";

const ComfirmationStep = () => {

    return (
        <div className="col-md-12 col-lg-8 detail-container">
            <div className="detail-content">
                <div className="checkout-comfirmation">
                    <div className="comfirmation-success">
                        <div className="comfirmation-success-message"><i className="icon icon-check"></i> Your booking has been successfully processed!</div>
                        <div className="comfirmation-success-code">Reservation Code: <span>8007651234</span></div>
                        <div className="comfirmation-success-info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComfirmationStep;