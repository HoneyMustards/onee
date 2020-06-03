import React from 'react';
import Layout from '../../../src/components/layouts/layout';
import PageHeader from '../../../src/components/elements/page-header';
import PageMenu from '../../../src/components/elements/page-menu';
import Calendar from '../../../src/components/elements/calendar';
import Footer from '../../../src/components/shared/footer/footer';
import moment from 'moment';
import eventList from '../../../data/calendar.json';


console.log();


const  eventItem = (props)   => {
    return (
        <div>
            <img className="calender-event-image" src={props.event.imageUrl} /> {props.event.title}
        </div>
    )
}

const CalendarPricing = () => {
    return (
        <Layout>
            <PageHeader header="Platinium Account" />
            <PageMenu active="booking" />
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-8">
                        <div className="box" style={{ padding: '30px 40px' }}>
                            <Calendar
                                events= {eventList}
                                style={{ height: 500 }}
                            />
                        </div>
                    </div>
                    <div className="col-4">
                        aaaa
                    </div>
                </div>
            </div>
            <Footer variant="is-border" />
        </Layout>
    )
}

export default CalendarPricing;