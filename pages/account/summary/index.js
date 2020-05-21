import React from 'react';
import Layout from '../../../src/components/layouts/layout';
import PageHeader from '../../../src/components/elements/page-header';
import PageMenu from '../../../src/components/elements/page-menu';
import DashboardNotifaciton from './dashboard-notification';
import DashboardFrequency from './dashboard-frequency';
import DashboardStats from './dashboard-stats';
import DashboardGraphic from './dashboard-graphic';
import NotificationBox from '../../../src/components/elements/notification-box';
import ActivityBox from '../../../src/components/elements/activity-box';
import SavedBox from '../../../src/components/elements/saved-box';
import CustomerSearchBox from  "../../../src/components/elements/customer-search-box";
import PropertySlider from "../../../src/components/elements/property-slider";
import Footer from '../../../src/components/shared/footer/footer';

import comments from '../../../data/comments.json';

const Summary = () => {
    return (
        <Layout>
            <PageHeader header="Platinium Account" />
            <PageMenu />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <DashboardNotifaciton />
                        <br />
                        <DashboardStats />
                        <br />
                        <DashboardFrequency />
                        <br />
                        <DashboardGraphic />
                    </div>
                    <div className="col-md-4">
                        <CustomerSearchBox />
                        <br />
                        <NotificationBox />
                        <br />
                        <ActivityBox />
                        <br />
                        <SavedBox />
                    </div>
                </div>
            </div>
            <div className="container  mt-5 mb-5">
                <div className="row"></div>
                <div className="col-12">
                    <PropertySlider properties={comments} slidesPerView={3} title="LATEST SEARCH RESULTS" summary="Book faster and get better recommendations by adding your details." />
                </div>
            </div>
            <Footer variant="is-border" />
        </Layout>
    )
}

export default Summary;