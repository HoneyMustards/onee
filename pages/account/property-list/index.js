import React from 'react';
import { Tab, Tabs, Button } from 'react-bootstrap';
import Layout from '../../../src/components/layouts/layout';
import PageHeader from '../../../src/components/elements/page-header';
import PageMenu from '../../../src/components/elements/page-menu';
import PropertyListTable from './table.js';
import Footer from '../../../src/components/shared/footer/footer';
import style from './property-list.module.scss';


const PropertyList = () => {
    return (
        <Layout>
            <PageHeader header="Platinium Account" />
            <PageMenu active="booking" />
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-12">
                        <div className="box" style={{ padding: '30px 40px' }}>
                            <h2 className="mb-3">Property List</h2>
                            <Tabs className="tab" defaultActiveKey="approved">
                                <Tab eventKey="approved" title="Approved">
                                    <PropertyListTable />
                                </Tab>
                                <Tab eventKey="incomplete" title="Incomplete">
                                    <div>2</div>
                                </Tab>
                                <Tab eventKey="unapproved" title="Unapproved">
                                    <div>3</div>
                                </Tab>
                                <Tab eventKey="all" title="All">
                                    <div>4</div>
                                </Tab>
                            </Tabs>
                            <div className={style.footer}>
                                <p>Listing 10/120</p>
                                <Button variant="outline-secondary"> Show More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer variant="is-border" />
        </Layout>
    )
}

export default PropertyList;