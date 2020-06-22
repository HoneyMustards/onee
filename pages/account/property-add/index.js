import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Layout from '../../../src/components/layouts/layout';
import PageHeader from '../../../src/components/elements/page-header';
import PageMenu from '../../../src/components/elements/page-menu';
import Calendar from '../../../src/components/elements/calendar';
import Counter from '../../../src/components/elements/visitor-counter';
import Footer from '../../../src/components/shared/footer/footer';
import Select from '../../../src/components/elements/form/select';
import Input from '../../../src/components/elements/form/input';
import Textarea from '../../../src/components/elements/form/textarea';
import AccordionButton from '../../../src/components/elements/accordion/accordion-button';
import CheckboxImage from '../../../src/components/elements/checkbox-image';
import AddImage from '../../../src/components/elements/add-image';
import ImageList from './image-list';
import Checkbox from '../../../src/components/elements/form/checkbox';
import Map from './map';
import { Formik, Form, FieldArray } from "formik";
import style from './style.module.scss';
// import Input from '../../elements/form/input';
// import Button from '../../elements/form/button';


const list1 = [
    {
        value: 1,
        text: 'Single Bed'
    },
    {
        value: 2,
        text: 'Double Bed'
    }
];

const PropertyAdd = () => {
    const [accordion, setAccordion] = useState(0);
    const keyNumber = (key) => {
        accordion == key ? setAccordion(null) : setAccordion(key);
    };

    return (
        <Layout>
            <PageHeader header="Platinium Account" />
            <PageMenu active="booking" />
            <div className="container mt-5 mb-5">
                <div className="row">

                    <div className="col-12">
                        <div className="section-accordion">
                            <Accordion defaultActiveKey="0">
                                {/* begin */}
                                <Accordion.Toggle as={AccordionButton} className={`accordion-btn ${accordion === 0 ? 'active' : ''}`} variant="link" eventKey="0" onClick={() => keyNumber(0)}>
                                    <div className="section-accordion-title">
                                        Photos
                                    </div>
                                    <i className="icon icon-down"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <div className="collapse-content row">
                                        <div className={"col-md-10 " + style.photosWrapper}>
                                            <ImageList />
                                        </div>
                                        <div className="col-md-2">
                                            <AddImage />
                                        </div>
                                        <div className={"col-md-12 " + style.photosActions}>
                                            <p className={style.photosAction}>
                                                Delete Selection(s)
                                        </p>
                                            <p className={style.photosAction}>
                                                Make Cover Photo
                                        </p>
                                            <p className={style.photosDescription}>
                                                Drag and drop for photo order.
                                        </p>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                                {/* end */}
                                {/* begin */}
                                <Accordion.Toggle as={AccordionButton} className={`accordion-btn ${accordion === 1 ? 'active' : ''}`} variant="link" eventKey="1" onClick={() => keyNumber(1)}>
                                    <div className="section-accordion-title">
                                        Rooms & Spaces
                                    </div>
                                    <i className="icon icon-down"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <div className="collapse-content row">
                                        <div className="col-md-5">
                                            <div className="visitor-line">
                                                <span>Beds</span>
                                                <Counter value={1} />
                                            </div>
                                            <div className="visitor-line">
                                                <span>Bedrooms</span>
                                                <Counter value={1} />
                                            </div>
                                            <div className="visitor-line">
                                                <span>Bathroom</span>
                                                <Counter value={1} />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className={style.divider}></div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="visitor-line">
                                                <span>Villa m2</span>
                                                <input type="text" className={style.formText} />
                                            </div>
                                            <div className="visitor-line">
                                                <span>Bedroom 1 m2</span>
                                                <input type="text" className={style.formText} />
                                            </div>
                                            <div className="visitor-line">
                                                <span>Bedroom 2 m2</span>
                                                <input type="text" className={style.formText} />
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                                {/* end */}
                                {/* begin */}
                                <Accordion.Toggle as={AccordionButton} className={`accordion-btn ${accordion === 2 ? 'active' : ''}`} variant="link" eventKey="2" onClick={() => keyNumber(2)}>
                                    <div className="section-accordion-title">
                                        Location
                                    </div>
                                    <i className="icon icon-down"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <div className="collapse-content row">
                                        <div className="col-md-6">
                                            <div className="form-line">
                                                <Input className="form-input" label="Country" name="country" />
                                            </div>
                                            <div className="form-line">
                                                <Input className="form-input" label="City" name="city" />
                                            </div>
                                            <div className="form-line">
                                                <Textarea rows={3} className="form-input" label="Adress" name="address" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <Map />
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                                {/* end */}
                                {/* begin */}
                                <Accordion.Toggle as={AccordionButton} className={`accordion-btn ${accordion === 3 ? 'active' : ''}`} variant="link" eventKey="3" onClick={() => keyNumber(3)}>
                                    <div className="section-accordion-title">
                                        Amenities
                                    </div>
                                    <i className="icon icon-down"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <div className="collapse-content row">
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                                {/* end */}
                                {/* begin */}
                                <Accordion.Toggle as={AccordionButton} className={`accordion-btn ${accordion === 4 ? 'active' : ''}`} variant="link" eventKey="4" onClick={() => keyNumber(4)}>
                                    <div className="section-accordion-title">
                                        Room Facilities
                                    </div>
                                    <i className="icon icon-down"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                    <div className="collapse-content row">
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                                {/* end */}
                                {/* begin */}
                                <Accordion.Toggle as={AccordionButton} className={`accordion-btn ${accordion === 5 ? 'active' : ''}`} variant="link" eventKey="5" onClick={() => keyNumber(5)}>
                                    <div className="section-accordion-title">
                                        Safety & Accesibility
                                    </div>
                                    <i className="icon icon-down"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                    <div className="collapse-content row">
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                                {/* end */}
                                {/* begin */}
                                <Accordion.Toggle as={AccordionButton} className={`accordion-btn ${accordion === 6 ? 'active' : ''}`} variant="link" eventKey="6" onClick={() => keyNumber(6)}>
                                    <div className="section-accordion-title">
                                        Facilities
                                    </div>
                                    <i className="icon icon-down"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6">
                                    <div className="collapse-content row">
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                                {/* end */}
                                {/* begin */}
                                <Accordion.Toggle as={AccordionButton} className={`accordion-btn ${accordion === 7 ? 'active' : ''}`} variant="link" eventKey="7" onClick={() => keyNumber(7)}>
                                    <div className="section-accordion-title">
                                        Bed Preference
                                    </div>
                                    <i className="icon icon-down"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="7">
                                    <div className="collapse-content row">
                                        <div className="col-md-5">
                                            <div className={"form-line " + style.flexWrap}>
                                                <h4 className={style.counterHeader}>Bedroom</h4>
                                                <div className={style.counter}>
                                                    <Select options={list1} variant={style.counterSelect} />
                                                    <button className="count-btn">+</button>
                                                </div>
                                            </div>
                                            <div className={"form-line " + style.flexWrap}>
                                                <h4 className={style.counterHeader}>Bedroom</h4>
                                                <div className={style.counter}>
                                                    <Select options={list1} variant={style.counterSelect} />
                                                    <button className="count-btn">+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2"><div className={style.divider}></div></div>
                                        <div className="col-md-5">
                                            <div className={"form-line " + style.flexWrap}>
                                                <h4 className={style.counterHeader}>Bedroom</h4>
                                                <div className={style.counter}>
                                                    <Select options={list1} variant={style.counterSelect} />
                                                    <button className="count-btn">+</button>
                                                </div>
                                                <div className={style.counter}>
                                                    <Select options={list1} variant={style.counterSelect} />
                                                    <button className="count-btn">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                                {/* end */}
                                {/* begin */}
                                <Accordion.Toggle as={AccordionButton} className={`accordion-btn ${accordion === 8 ? 'active' : ''}`} variant="link" eventKey="8" onClick={() => keyNumber(8)}>
                                    <div className="section-accordion-title">
                                        House Rules
                                    </div>
                                    <i className="icon icon-down"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="8">
                                    <div className="collapse-content row">
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-6 form-line mt-4">
                                            <Textarea rows={2} className="form-input" label="Add a note"></Textarea>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                                {/* end */}
                                {/* begin */}
                                <Accordion.Toggle as={AccordionButton} className={`accordion-btn ${accordion === 9 ? 'active' : ''}`} variant="link" eventKey="9" onClick={() => keyNumber(9)}>
                                    <div className="section-accordion-title">
                                        Neigborhoods
                                    </div>
                                    <i className="icon icon-down"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="9">
                                    <div className="collapse-content row">
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                                {/* end */}
                                {/* begin */}
                                <Accordion.Toggle as={AccordionButton} className={`accordion-btn ${accordion === 10 ? 'active' : ''}`} variant="link" eventKey="10" onClick={() => keyNumber(10)}>
                                    <div className="section-accordion-title">
                                        Nearby Activities
                                    </div>
                                    <i className="icon icon-down"></i>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="10">
                                    <div className="collapse-content row">
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                        <div className="col-md-3 form-line">
                                            <Checkbox>Kitchen</Checkbox>
                                        </div>
                                    </div>
                                </Accordion.Collapse>
                                {/* end */}
                            </Accordion>
                        </div>
                    </div>

                </div>
            </div>
            <Footer variant="is-border" />
        </Layout>
    )
}

export default PropertyAdd;