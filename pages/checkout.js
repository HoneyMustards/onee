import React, { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";

import Layout from '../src/components/layouts/layout';
import Newsletter from '../src/components/partials/home/newsletter';
import Footer from '../src/components/shared/footer/footer';

import DetailSummary from '../src/components/partials/detail/detail-summary';
import Steps from '../src/components/partials/checkout/steps';
import Input from '../src/components/elements/form/input';
import Button from '../src/components/elements/form/button';

import BookingStep from '../src/components/partials/checkout/booking-step';
import AdditionalServicesStep from '../src/components/partials/checkout/services-step';
import PaymentStep from '../src/components/partials/checkout/payment-step';
import ComfirmationStep from '../src/components/partials/checkout/comfirmation-step';

const Checkout = () => {

  
    return (
      <Layout>
          <Steps />
          
          <div className="detail-page">
            <div className="row ">    
                <PaymentStep />
                <div className="col-md-12 col-lg-4 checkout-sidebar">
                    <DetailSummary property={true} />
                </div>
            </div>
          </div>

          <Newsletter />
          <Footer />
      </Layout>
    );
}

export default Checkout;