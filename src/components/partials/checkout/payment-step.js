import React, { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { Formik, useFormik } from "formik";
import Cards from 'react-credit-cards';
import InputMask from 'react-input-mask';
import Accordion from 'react-bootstrap/Accordion';

import Checkbox from '../../elements/form/checkbox';
import Input from '../../elements/form/input';
import Button from '../../elements/form/button';
import AccordionButton from '../../elements/accordion/accordion-button';

const PaymentStep = (props) => {

    const [accordion, setAccordion] = useState(0);
    const [focus, setFocus] = useState();

    const keyNumber = (key) => {
        accordion == key ? setAccordion(null) : setAccordion(key);
    };

    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            cardName: '',
            expiry: '',
            cvc: ''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        }
    });

    const maskClear = (e,minChar) => {
        const val = e.target.value.split('_').join('').trim();

        if(val.length < minChar){
            e.target.value = '';
        }
    }

    return (
        <div className="col-md-12 col-lg-8 detail-container checkout">
            <form onSubmit={formik.handleSubmit}>

                <div className="section-accordion">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={AccordionButton} className={`accordion-btn ${accordion === 0 ? 'active' : ''}`} variant="link" eventKey="0"  onClick={() => keyNumber(0)}>
                            <div className="section-accordion-title">
                                <span className="accordion-btn-check"></span>
                                Credit Card / Bank Card
                            </div>
                            <i className="icon icon-down"></i>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <div className="collapse-content row">
                                <div className="col-6">
                                    <div className="form-line form-input">
                                    <InputMask mask="9999 9999 9999 9999" onBlur={(e) => maskClear(e,16)} value={formik.values.cardNumber} onChange={formik.handleChange}>
                                        {(inputProps) => (
                                            <div className="input-box form-input">
                                                <input type="text" className="form-control" name="cardNumber" id="cardNumber" required="required" />
                                                <label htmlFor="cardNumber">Card Number</label>
                                            </div>
                                        )}
                                    </InputMask>
                                        
                                    </div>
                                    <div className="form-line">
                                        <Input className="form-input" label="Name on Card" name="cardName" onChange={formik.handleChange}/>
                                    </div>
                                    <div className="form-line column">
                                        <InputMask mask="99/99" value={formik.values.expiry} onChange={formik.handleChange}>
                                            {(inputProps) => (
                                                <div className="input-box form-input">
                                                    <input type="text" className="form-control" name="expiry" id="expiry" required="required" />
                                                    <label htmlFor="expiry">Expiry Date</label>
                                                </div>
                                            )}
                                        </InputMask>
                                        <Input className="form-input" label="CCV" name="cvc" onChange={formik.handleChange} onFocus={(e) => setFocus(e.target.name)} />
                                    </div>
                                </div>
                                <div className="col-6">
                                <Cards
                                    cvc={formik.values.cvc}
                                    expiry={formik.values.expiry}
                                    focused={focus}
                                    name={formik.values.cardName}
                                    number={formik.values.cardNumber}
                                />
                                </div>
                            </div>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={AccordionButton} className={`accordion-btn ${accordion === 1 ? 'active' : ''}`} variant="link" eventKey="1"  onClick={() => keyNumber(1)}>
                            <div className="section-accordion-title">
                                <span className="accordion-btn-check"></span>
                                Bank Transfer
                            </div>
                            <i className="icon icon-down"></i>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <div className="collapse-content row">
                                <div className="col-6">
                                    <div className="form-line">
                                        Bank Transfer
                                    </div>
                                </div>
                                <div className="col-6"></div>
                            </div>
                        </Accordion.Collapse>
                    </Accordion>
                </div>

                <div className="detail-content mt-20">
                    <div className="payment-protection">
                        <div className="payment-protection-col">
                            <strong>Payment Protection</strong>
                            Book & Pay on Onee and get:
                            <a href="#" className="text-secondary">Book with Confidence Guarantee</a>
                        </div>
                        <div className="payment-protection-col">
                            <ul>
                                <li>* Comprehensive Payment Protection</li>
                                <li>* Emergency Booking Assistance</li>
                                <li>* 24hr Customer Service</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="payment-terms">
                    By clicking “Submit Payment” you are agreeing to our <a href="#" className="text-secondary"><strong>Terms and Conditions, Privacy Policy, Cancellation Policy, Damage Policy, House Rules</strong></a> and to receive booking-related texts. Standard messaging rates may apply.
                </div>
                
                <div className="checkout-buttons">
                    <Button className="btn-outline-secondary btn-lg">Additional Services</Button>
                    <Button className="btn-secondary btn-lg">Submit Payment</Button>
                </div>

            </form>
        </div>
    );
}

export default PaymentStep;