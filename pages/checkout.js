import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import Layout from '../src/components/layouts/layout';
import Newsletter from '../src/components/partials/home/newsletter';
import Footer from '../src/components/shared/footer/footer';
import DetailSummary from '../src/components/partials/detail/detail-summary';
import Steps from '../src/components/partials/checkout/steps';

import BookingStep from '../src/components/partials/checkout/booking-step';
import AdditionalServicesStep from '../src/components/partials/checkout/services-step';
import PaymentStep from '../src/components/partials/checkout/payment-step';
import ComfirmationStep from '../src/components/partials/checkout/comfirmation-step';
import Persist from "../src/service/persist.service";
import {setProperty} from "../store/property/actions";

const Checkout = (props) => {

    useEffect(() => {
        const property = Persist.get('property');
        if(property){
            props.onSetProperty(property);
        }
    }, []);

    const { step } = props;

    return (
      <Layout>
          <Steps active={step} />

          <div className="detail-page">
            <div className={`row ${step === 3 && 'checkout-comfirm-page'}`}>
                {
                    {
                        1 : <BookingStep />,
                        2 : <PaymentStep />,
                        3 : <ComfirmationStep />
                    }[step]
                }
                <div className="col-md-12 col-lg-4 checkout-sidebar">
                    <DetailSummary />
                </div>
            </div>
          </div>

          <Newsletter />
          <Footer />
      </Layout>
    );
};

const mapStateToProps = (state) => {
    return {
        step: state.booking.step
    }
};

const mapDispatchToProps = (dispatch) => ({
    onSetProperty: (property) => dispatch(setProperty(property))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
