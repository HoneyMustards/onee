import React from 'react';
import { InputGroup, FormControl, Button }  from 'react-bootstrap';

const CustomerSearchBox = () => {
    return (
        <div className="box customer-search-box">
            <div className="body">
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Search a Customer"
                    />
                    <InputGroup.Append>
                    <Button variant="secondary">
                        <i className="icon icon-search icon-1-5"></i>
                    </Button>
                    </InputGroup.Append>
                </InputGroup>

            </div>
            <div className="footer d-flex justify-content-between">
                <p className="more">
                    + Add New Customer
                </p>
                <p className="more">
                    + Add New Customer List
                </p>
            </div>
        </div>
    )
}

export default CustomerSearchBox;