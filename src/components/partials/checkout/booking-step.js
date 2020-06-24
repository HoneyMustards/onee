import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, FieldArray } from "formik";

// Actions
import { nextStep } from '../../../../store/booking/actions';

import Input from '../../elements/form/input';
import Textarea from '../../elements/form/textarea';
import Button from '../../elements/form/button';
import Link from "next/link";
import { setBooking } from '../../../../store/booking/actions';

const BookingStep = (props) => {

    useEffect(() => {
        props.onSetBooking(props.booking.property)
    }, []);

    //const initialValues = props.booking.property

    const initialValue = {
        guests: [
            {
                name: '',
                lastname: ''
            },
            {
                name: '',
                lastname: ''
            }
        ],
        billing: {
            name: '',
            lastname: '',
            phone: '',
            email: '',
            address: ''
        },
        contact: {
            name: '',
            lastname: '',
            phone: '',
            email: ''
        }
    };

    return (
        <div className="col-md-12 col-lg-8 detail-container">
            <Formik
                initialValues={initialValue}
                onSubmit={values =>
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        props.onNextStep();
                    }, 100)
                }
                onChange={() => {
                    handleChange()
                }}
                render={({ values, handleChange }) => (
                    <Form>
                        <div className="detail-content">
                            <div className="checkout-booking-step">

                                <div className="checkout-section">
                                    <div className="checkout-title">Guests</div>
                                    <div className="form-content">
                                        <FieldArray
                                            name="guests"
                                            render={arrayHelpers => (
                                            <div>
                                                { values.guests.map((guest, index) => (
                                                    <div key={index}>
                                                        <div className="form-line column">
                                                            <div className="form-line-guest">
                                                                <Input className="form-input" label="Name" name={`guests.${index}.name`} onChange={handleChange} />
                                                                <Input className="form-input" label="Last Name" name={`guests.${index}.lastname`} onChange={handleChange} />
                                                            </div>
                                                            <button className="count-btn remove-line" type="button" onClick={() => arrayHelpers.remove(index)}>-</button>
                                                        </div>
                                                    </div>
                                                ))
                                                }
                                                <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => arrayHelpers.push('')}>+ Add</button>
                                            </div>
                                            )}
                                        />
                                    </div>
                                </div>

                                <div className="checkout-section">
                                    <div className="checkout-title">Billing Info</div>
                                    <div className="form-content">
                                        <div className="form-line column">
                                            <Input className="form-input" label="Name" name="billing.name" onChange={handleChange} value={values.billing.name} />
                                            <Input className="form-input" label="Last Name" name="billing.lastname" onChange={handleChange} value={values.billing.lastname} />
                                        </div>
                                        <div className="form-line column">
                                            <Input className="form-input" label="Phone" name="billing.phone" onChange={handleChange} value={values.billing.phone} />
                                            <Input className="form-input" label="E-mail" name="billing.email" onChange={handleChange} value={values.billing.email} />
                                        </div>
                                        <div className="form-line">
                                            <Textarea rows={3} className="form-input" label="Phone" name="billing.address" onChange={handleChange} value={values.billing.address} />
                                        </div>
                                    </div>
                                </div>

                                <div className="checkout-section">
                                    <div className="checkout-title">Contact Info</div>
                                    <div className="form-content">
                                        <div className="form-line column">
                                            <Input className="form-input" label="Name" name="contact.name" onChange={handleChange} value={values.contact.name} />
                                            <Input className="form-input" label="Last Name" name="contact.lastname" onChange={handleChange} value={values.contact.lastname} />
                                        </div>
                                        <div className="form-line column">
                                            <Input className="form-input" label="Phone" name="contact.phone" onChange={handleChange} value={values.contact.phone} />
                                            <Input className="form-input" label="E-mail" name="contact.email" onChange={handleChange} value={values.contact.email} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="checkout-buttons">
                            <Link href="/detail">
                                <Button className="btn-outline-secondary btn-lg">Property Detail</Button>
                            </Link>
                            <Button className="btn-secondary btn-lg">Payment</Button>
                        </div>
                    </Form>
                )}
            />

        </div>
    );
};

const mapStateToProps = (state) => ({
    booking: state.booking
});

const mapDispatchToProps = (dispatch) => ({
    onNextStep: () => dispatch(nextStep()),
    onSetBooking: data => dispatch(setBooking(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingStep);

