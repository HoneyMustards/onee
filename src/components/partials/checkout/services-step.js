import React, { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";
import { Formik, Form, FieldArray } from "formik";

import Checkbox from '../../elements/form/checkbox';
import Textarea from '../../elements/form/textarea';
import Button from '../../elements/form/button';

const ServicesStep = () => {

    const initialValue = {
        billing: {
            name: '',
            lastname: '',
            phone: '',
            email: '',
            address: ''
        }
    }

    return (
        <div className="col-md-12 col-lg-8 detail-container">
            <div className="detail-content">
                <div className="checkout-services">
                    
                        <Formik
                            initialValues={initialValue}
                            onSubmit={values =>
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    console.log(values)
                                }, 100)
                            }
                            render={({ values, handleChange }) => (
                                <Form>
                                
                                <div className="checkout-section">
                                    <div className="checkout-title">Additional Services</div>
                                    <div className="form-content">
                                        <div className="form-line row justify-content-start">
                                            <div className="col-3 check-item">
                                                <Checkbox >Private Cook</Checkbox>
                                            </div>
                                            <div className="col-3 check-item">
                                                <Checkbox >Private Cook</Checkbox>
                                            </div>
                                            <div className="col-3 check-item">
                                                <Checkbox >Private Cook</Checkbox>
                                            </div>
                                            <div className="col-3 check-item">
                                                <Checkbox >Private Cook</Checkbox>
                                            </div>
                                            <div className="col-3 check-item">
                                                <Checkbox >Private Cook</Checkbox>
                                            </div>
                                            <div className="col-3 check-item">
                                                <Checkbox >Private Cook</Checkbox>
                                            </div>
                                        </div>
                                        
                                        <div className="form-line">
                                            <Textarea rows={3} className="form-input" label="Notes" name="billing.address" onChange={handleChange} value={values.billing.address} />
                                        </div>
                                    </div>
                                </div>

                                
                                <button type="submit">Submit</button>
                                </Form>
                            )}
                            />
                            
                    
                </div>
            </div>
            <div className="checkout-buttons">
                <Button className="btn-outline-secondary btn-lg">Booking</Button>
                <Button className="btn-secondary btn-lg">Payment</Button>
            </div>
        </div>
    );
}

export default ServicesStep;