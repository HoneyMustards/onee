import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Layout from '../../../src/components/layouts/layout';
import PageHeader from '../../../src/components/elements/page-header';
import PageMenu from '../../../src/components/elements/page-menu';
import AccordionStatus from '../../../src/components/elements/accordion-status';
import Footer from '../../../src/components/shared/footer/footer';


const Summary = () => {
    return (
        <Layout>
            <PageHeader header="Platinium Account" />
            <PageMenu active="booking" />
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-12">
                        <div className="box" style={{padding: '30px 40px'}}>
                            <h2 className="mb-3">My Bookings</h2>
                            <Tabs className="tab" defaultActiveKey="active">
                                <Tab eventKey="active" title="Active">
                                    <AccordionStatus />
                                </Tab>
                                <Tab eventKey="pending" title="Pending">
                                    <div>2</div>
                                </Tab>
                                <Tab eventKey="approvals" title="Approvals">
                                    <div>3</div>
                                </Tab>
                                <Tab eventKey="completed" title="Completed">
                                    <div>4</div>
                                </Tab>
                                <Tab eventKey="all" title="All">
                                    <div>5</div>
                                </Tab>                                                                
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
            <Footer variant="is-border" />
        </Layout>
    )
}

export default Summary;