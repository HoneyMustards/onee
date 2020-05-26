import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Card from 'react-bootstrap/Card';;
import status from '../../../data/accordion-status.json';

const AccordionStatus = () => {

    const [template, setTemplate] = useState();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAllClose, setIsAllClose] = useState(false);

    const changeActiveIndex = (newIndex) => {
        setActiveIndex(newIndex)
    }

    const changeAllClose = (status) => {
        setIsAllClose(status);
    }

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionToggle(eventKey, () => {
            if (eventKey == activeIndex && !isAllClose) {
                changeAllClose(true);
            } else {
                changeAllClose(false);
                changeActiveIndex(eventKey);
            }
        });
        return (
            <span onClick={decoratedOnClick}>
                {children} Details
            </span>
        );
    }


    useEffect(() => {
        const temp = status.map((value, index) => {
            return (
                <Card key={index}>
                    <Card.Header>
                        <div className="d-flex justify-content-between">
                            <p className={"text-left text-header " + value.statusType} style={{ width: '15%' }}><strong>{value.statusTitle}</strong></p>
                            <p className="text-left text-header" style={{ width: '30%' }}>John Doe <span className="color-light"> (2 Adults, 2 Children)</span></p>
                            <p className="text-left text-header" style={{ width: '15%' }}>Mon, Dec 1</p>
                            <p className="text-left text-header" style={{ width: '15%' }}>Tue, Dec 17</p>
                            <p className="text-left text-header" style={{ width: '15%' }}><strong>$6.174</strong></p>
                            <p className="text-left text-header toggle" style={{ width: '10%' }}>
                                <CustomToggle eventKey={index}>
                                    {(activeIndex == index && !isAllClose) ? 'Hide' : 'Show'}
                                </CustomToggle>
                            </p>
                        </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                        <Card.Body>
                            <div className="body-info d-flex justify-content-between">
                                <div>
                                    <h3>John Doe</h3>
                                    <h4>Villa Rose / ID:800123477</h4>
                                    <p>
                                        You have a confirmed reservation for Jul 30 – Aug 3. Be sure to message your guest with check-in details before they arrive.
                                    </p>
                                </div>
                                <div>
                                    <h3>Property Manager</h3>
                                    <h4 className="mt-3">Ethem Budak
                                    e.budak@traveladvisor.com
                                    +1 (555) 444 3322
                                    </h4>
                                </div>
                                <div className="text-right">
                                    <button className="btn btn-secondary mb-3">Change Reservation</button>
                                    <button className="btn btn-secondary">Cahnge Reservation</button>
                                </div>
                            </div>
                            <div className="body-action">
                                <span>Send E-mail</span>
                                <span>Send Calendar</span>
                                <span>Print Summary Itinerary</span>
                                <span>Print PDF for Client</span>
                                <span>Transfer the Bookingl</span>
                            </div>
                            <div className="body-summary">
                                <strong>Your cancellation policy for guests is Flexible.</strong>
                                <p>
                                    The penalties for canceling this reservation include getting a public review that shows you canceled, paying a cancellation fee, and having the canceled nights blocked on your calendar. Read cancellation penalties
                                </p>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            )
        });
        setTemplate(temp);
    }, [activeIndex, isAllClose]);


    return (
        <div>
            <div className="accordion-status-values d-flex justify-content-between">
                <p className="text-left text-header" style={{ width: '15%' }}>Status</p>
                <p className="text-left text-header" style={{ width: '30%' }}>Guests</p>
                <p className="text-left text-header" style={{ width: '15%' }}>Check-In</p>
                <p className="text-left text-header" style={{ width: '15%' }}>Check-Out</p>
                <p className="text-left text-header" style={{ width: '15%' }}>Total Payment</p>
                <p className="text-left text-header toggle" style={{ width: '10%' }}></p>
            </div>
            <Accordion className="accordion-status" defaultActiveKey={0}>
                {template}
            </Accordion>
        </div>

    )
}

export default AccordionStatus;