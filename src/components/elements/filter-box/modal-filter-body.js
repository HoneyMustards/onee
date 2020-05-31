import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Checkbox from "../form/checkbox";
import OverlayPrice from './overlay-price';
import Counter from '../visitor-counter';

const ModalFilterBody = (props) => {

    const [template, setTemplate] = useState();
    const [accordion, setAccordion] = useState('price');

    const keyNumber = (key) => {
        accordion == key ? setAccordion(null) : setAccordion(key);
    };

    const temp = props.list.map((item, index) =>
        <React.Fragment key={index}>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} className={accordion == index ? 'active' : ''} variant="link" eventKey={index} onClick={() => keyNumber(index)}>
                        {item.name}
                        <i className="icon icon-down"></i>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                        <div className="container">
                            <div className="row">
                                {
                                    item.list.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <div className="col-4 mt-2 mb-2 p-0">
                                                <Checkbox checked={item.status}>{item.name}</Checkbox>
                                            </div>
                                        </React.Fragment>
                                    ))
                                }
                            </div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </React.Fragment>
    );

    return (
        <Accordion defaultActiveKey="price">
            <Card className="d-md-none">
                <Card.Header>
                    <Accordion.Toggle as={Button} className={accordion == 'price' ? 'active' : ''} variant="link" eventKey={'price'} onClick={() => keyNumber('price')}>
                        Price
                        <i className="icon icon-down"></i>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={'price'}>
                    <Card.Body>
                        <div className="container">
                            <div className="row">
                                <OverlayPrice prices={[100, 750]} />
                            </div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="d-md-none">
                <Card.Header>
                    <Accordion.Toggle as={Button} className={accordion == 'bedrooms' ? 'active' : ''} variant="link" eventKey={'bedrooms'} onClick={() => keyNumber('bedrooms')}>
                        Bedrooms
                        <i className="icon icon-down"></i>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={'bedrooms'}>
                    <Card.Body>
                        <div className="container">
                            <div className="row">
                                <div className="visitor-line" style={{ width: '100%' }}>
                                    <span>Beds</span>
                                    <Counter value={2} />
                                </div>
                                <div className="visitor-line" style={{ width: '100%' }}>
                                    <span>Bedrooms</span>
                                    <Counter value={1} />
                                </div>
                                <div className="popover__line d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
                                    <p className="button-clear mb-0">Clear</p>
                                    <button className="btn btn-secondary">Apply</button>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card className="d-md-none">
                <Card.Header>
                    <Accordion.Toggle as={Button} className={accordion == 'instant-booking' ? 'active' : ''} variant="link" eventKey={'instant-booking'} onClick={() => keyNumber('instant-booking')}>
                        Instant Booking
                        <i className="icon icon-down"></i>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={'instant-booking'}>
                    <Card.Body>
                        <div className="container">
                            <div className="row">
                                <div className="popover__line" style={{width: '100%'}}>
                                    <p className="popover__summary">
                                        Book without waiting for owner approval
                                    </p>
                                </div>
                                <div className="popover__line" style={{width: '100%'}}>
                                    <Checkbox>Instant Book</Checkbox>
                                </div>
                                <div className="popover__line" style={{width: '100%'}}>
                                    <button className="btn btn-secondary btn-block">Apply</button>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            {temp}
        </Accordion>
    )
}

export default ModalFilterBody;