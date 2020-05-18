import React from 'react';
import style from './dashboard-notification.module.scss'

const DashboardNotification = (props) => {
    return (
        <div className="box d-flex justify-content-around">
            <div className={style.box}>
                <i className={"icon icon-calendar " + style.icon}></i>
                <div className="ml-3">
                    <p className="d-flex align-items-center mb-0">
                        <span className={style.count}>24</span>
                        <a className={style.more} href="#">View All</a>
                    </p>
                    <span className={style.summary}>Upcoming Reservations</span>
                </div>
            </div>
            <div className={style.divider}></div>
            <div className={style.box}>
                <i className={"icon star " + style.icon}></i>
                <div className="ml-3">
                    <p className="d-flex align-items-center mb-0">
                        <span className={style.count}>18</span>
                        <a className={style.more} href="#">View All</a>
                    </p>
                    <span className={style.summary}>Unanswered Messages</span>
                </div>
            </div>        
        </div>
    )
}


export default DashboardNotification;