import React, {useState, useEffect} from 'react';
import { FormattedMessage } from "react-intl";
import {Accordion, Button, useAccordionToggle} from 'react-bootstrap';

import LanguageDropdown from '../../elements/languageDropdown';

import localNumbers from '../../../../data/local-numbers.json';

const Footer = (props) => {

    const [accordion, setAccordion] = useState();

    const keyNumber = (key) => {
        accordion == key ? setAccordion(null) : setAccordion(key);
    };

    const localNumber = localNumbers.map((item,i) => 
        <li key={i}><a href={`tel:${item.number}`}><img src={item.flag} alt={item.name}/>{item.number}</a></li>
    );

    return(
        <section className={"footer " + props.variant}>
            <div className="footer-top">
                <Accordion className="row">
                    <div className="col-sm-12 col-md">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className={`footer-title ${(accordion==0 ? 'active' : '')}`} onClick={() => keyNumber(0)}>
                            COMPANY
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <div>
                                <ul className="list footer-list">
                                    <li>About Us</li>
                                    <li>Careers</li>
                                    <li>Terms of Use</li>
                                    <li>Privacy Statement</li>
                                    <li>Give Us Feedbacks</li>
                                </ul>
                                <LanguageDropdown />
                            </div>
                        </Accordion.Collapse>
                    </div>
                    <div className="col-sm-12 col-md">
                        <Accordion.Toggle as={Button} variant="link" eventKey="1" className={`footer-title ${(accordion==1 ? 'active' : '')}`} onClick={() => keyNumber(1)}>
                            SERVICES
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <ul className="list footer-list">
                                <li>Investor Relations</li>
                                <li>Reward Program</li>
                                <li>Partners</li>
                                <li>List My Hotel</li>
                            </ul>
                        </Accordion.Collapse>
                    </div>
                    <div className="col-sm-12 col-md">
                        <Accordion.Toggle as={Button} variant="link" eventKey="2" className={`footer-title ${(accordion==2 ? 'active' : '')}`} onClick={() => keyNumber(2)}>
                            SUPPORT
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <ul className="list footer-list">
                                <li>Account</li>
                                <li>Legal</li>
                                <li>Help</li>
                                <li>Contact</li>
                                <li>Affilate Program</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </Accordion.Collapse>
                    </div>
                    <div className="col-sm-12 col-md">
                        <Accordion.Toggle as={Button} variant="link" eventKey="3" className={`footer-title ${(accordion==3 ? 'active' : '')}`} onClick={() => keyNumber(3)}>
                            CONTACT US
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <div>
                                <div className="mb-30">
                                    <div className="fw-bold">Headquarters</div>
                                    Onee Hospitality Partners AG <br/>
                                    Gubelstrasse 11<br/>
                                    6300 Zug, Switzerland
                                </div>
                                <div className="mb-30">
                                    <div className="fw-bold">UK Office</div>
                                    OneeTravel Services Ltd <br/>
                                    118 Piccadilly<br/>
                                    Mayfair W1J 7NW
                                </div>
                            </div>
                        </Accordion.Collapse>
                    </div>
                    <div className="col-sm-12 col-md text-right">
                        <Accordion.Toggle as={Button} variant="link" eventKey="4" className={`footer-title ${(accordion==4 ? 'active' : '')}`} onClick={() => keyNumber(4)}>
                            LOCAL NUMBERS
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <ul className="list footer-numbers">
                                {localNumber}
                            </ul>
                        </Accordion.Collapse>
                    </div>
                </Accordion>
            </div>
            <div className="footer-bottom">
                <div className="row">
                    <div className="col-dm-12 col-md-5 copyright">
                        © 2020 onee, all rights reserved. 
                    </div>
                    <div className="col-sm-12 col-md-7 footer-social">
                        <ul className="list social-list">
                            <li><a href="#"><i className="icon icon-linkedin"></i></a></li>
                            <li><a href="#"><i className="icon icon-instagram"></i></a></li>
                            <li><a href="#"><i className="icon icon-messenger"></i></a></li>
                            <li><a href="#"><i className="icon icon-facebook"></i></a></li>
                            <li><a href="#"><i className="icon icon-twitter"></i></a></li>
                            <li><a href="#"><i className="icon icon-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
};
  
export default Footer;