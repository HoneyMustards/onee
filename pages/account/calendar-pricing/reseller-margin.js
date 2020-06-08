import React from 'react';
import Select from '../../../src/components/elements/form/select';
import { InputGroup, FormControl, Button }  from 'react-bootstrap';
import style from './style.module.scss';

const ResellerMargin = () => {
    const list1 = [
        {
            value: 1,
            text: 'All Properties'
        }
    ];

    const list2 = [
        {
            value: 1,
            text: 'All Travel Advisors'
        }
    ];

    return (
        <div className={"box " + style.box}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4 className="box__title">Reseller Margin</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-1 mb-1">
                        <Select variant="base" width="100%" options={list1}  />
                    </div>
                    <div className="col-12 mt-1 mb-1">
                        <Select variant="base" width="100%" options={list2}  />
                    </div>     
                    <div className="col-12 mt-1 mb-1">
                    <InputGroup className="mb-3 base">
                        <FormControl                        
                        placeholder="10%"
                        />
                        <InputGroup.Append>
                        <Button variant="secondary">
                            Save
                        </Button>
                        </InputGroup.Append>
                    </InputGroup>
                    </div>                                        
                </div>                
            </div>
        </div>
    )
}

export default ResellerMargin;