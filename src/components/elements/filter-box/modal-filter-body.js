import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Checkbox from "../form/checkbox";

const ModalFilterBody = (props) => {

    const [template, setTemplate] = useState();
    const [accordion, setAccordion] = useState(0);

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
        <Accordion defaultActiveKey="0">
            {temp}
        </Accordion>
    )
}

export default ModalFilterBody;