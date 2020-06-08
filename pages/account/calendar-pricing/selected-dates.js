import React from 'react';
import Button from 'react-bootstrap/Button';
import SingleDatePicker from '../../../src/components/elements/datepicker-single';
import Input from '../../../src/components/elements/form/input';
import Checkbox from '../../../src/components/elements/form/checkbox';
import style from './style.module.scss';

const SelectedDates = () => {
    return (
        <div className={"box " + style.box}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4 className="box__title">Selected Dates</h4>
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-6 pr-2">
                        <SingleDatePicker />
                    </div>
                    <div className="col-6 pl-2">
                        <SingleDatePicker />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <h4 className="box__title">Availability</h4>
                    </div>
                </div>
                <div className="row mt-2 mb-4">
                    <div className="col-md-4 col-6 mb-4 mb-md-0">
                        <Checkbox type="radio" className="form-radio" name="availability">Available</Checkbox>
                    </div>
                    <div className="col-md-4 col-6 mb-4 mb-md-0">
                        <Checkbox type="radio" className="form-radio" name="availability">Preapproved</Checkbox>
                    </div>
                    <div className="col-md-4 col-6 mb-4 mb-md-0">
                        <Checkbox type="radio" className="form-radio" name="availability">Blocked</Checkbox>
                    </div>                                                            
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <h4 className="box__title">Nightly Price</h4>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12">
                        <Input variant="base" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 pr-2">
                        <Button style={{ width: '100%' }} variant="outline-secondary">Cancel</Button>
                    </div>
                    <div className="col-6 pl-2">
                        <Button style={{ width: '100%' }} variant="secondary">Save</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedDates;