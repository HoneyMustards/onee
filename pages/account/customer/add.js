import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import Layout from '../../../src/components/layouts/layout';
import PageHeader from '../../../src/components/elements/page-header';
import PageMenu from '../../../src/components/elements/page-menu';
import NotificationBox from '../../../src/components/elements/notification-box';
import ActivityBox from '../../../src/components/elements/activity-box';
import SavedBox from '../../../src/components/elements/saved-box';
import CustomerSearchBox from  "../../../src/components/elements/customer-search-box";
import CustomerItem from  "../../../src/components/elements/customer-item";
import Footer from '../../../src/components/shared/footer/footer';
import style from './style.module.scss';


const Summary = () => {
    const [template, setTemplate] = useState();

    return (
        <Layout>
            <PageHeader header="Platinium Account" />
            <PageMenu active="customers"/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="box" style={{padding:"30px 40px 118px"}}>
                            <div className={style.boxHeader}>
                                <h2>Customers</h2>
                                <div>
                                    <Button  variant="outline-secondary"><i className="icon icon-filter  mr-2"></i> Filter</Button>
                                    <Button  variant="outline-secondary"><i className="icon icon-sort  mr-2"></i> Sort</Button>
                                </div>
                            </div>
                            {template}
                        </div>
                        <div className={style.boxFooter}></div>
                    </div>
                    
                </div>
            </div>
            <Footer variant="is-border" />
        </Layout>
    )
}

export default Summary;