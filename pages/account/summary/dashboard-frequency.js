import React from 'react';
import style from './dashboard-notification.module.scss'

const DashboardFrequency = (props) => {
    return (
        <div className="box">
            <p className={"text-center mb-4 " + style.title}>Frequency in the last 6 months:</p>
            <div className="d-flex justify-content-around">
                <div className="text-center">                
                    <p className={style.count}>50</p>
                    <p className={style.summary}>Booking</p>
                </div>
                <div className={style.divider}></div>
                <div className="text-center">                
                    <p className={style.count}>13%</p>
                    <p className={style.summary}>Reservation Rate</p>
                </div>
            </div>
        </div>
    )
}


export default DashboardFrequency;