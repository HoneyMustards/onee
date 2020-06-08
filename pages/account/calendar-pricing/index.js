import React from 'react';
import Layout from '../../../src/components/layouts/layout';
import PageHeader from '../../../src/components/elements/page-header';
import PageMenu from '../../../src/components/elements/page-menu';
import Calendar from '../../../src/components/elements/calendar';
import Footer from '../../../src/components/shared/footer/footer';
import SelectedDates from './selected-dates';
import ResellerMargin from './reseller-margin';
import style from './style.module.scss';
import eventList from '../../../data/calendar.json';




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
                    <div className="col-md-8">
                        <div className={"box " + style.boxCalendar}>
                            <Calendar
                                events= {eventList}
                                style={{ height: 500 }}
                            />
                        </div>
                    </div>
                    <div className="col-md-4 mt-4 m-md-0">
                        <SelectedDates />

                        <br />

                        <ResellerMargin />
                    </div>
                </div>
            </div>
            <Footer variant="is-border" />
        </Layout>
    )
}

export default CalendarPricing;