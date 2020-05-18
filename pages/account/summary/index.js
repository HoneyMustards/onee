import React from 'react';
import Layout from '../../../src/components/layouts/layout';
import PageHeader from '../../../src/components/elements/page-header';
import PageMenu from '../../../src/components/elements/page-menu';
import DashboardNotifaciton from './dashboard-notification';
import DashboardFrequency from './dashboard-frequency';
import DashboardStats from './dashboard-stats';
import DashboardGraphic from './dashboard-graphic';

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
                        <div className="box"></div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
        </Layout>
    )
}

export default Summary;