import React from 'react';
import Select from '../../../src/components/elements/form/select';
import style from './dashboard-stats.module.scss'

const DashboardStats = () => {
    const list = [
        {
            value: 1,
            text: 'February 2020'
        },
        {
            value: 2,
            text: 'March 2020'
        }    
    ];
    return (
        <div className={"box " + style.box}>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className={style.header}>Stats</h2>
                <Select width="200px" placeHolder="date" options={list} />
            </div>
            <div>
                <div className="row mt-5">
                    <div className="col-4">
                        <p className={style.value}>$730</p>
                        <p className={style.summary}>Booked Earnings</p>
                    </div>
                    <div className="col-4">
                        <p className={style.value}>$730</p>
                        <p className={style.summary}>Booked Earnings</p>
                    </div>
                    <div className="col-4">
                        <p className={style.value}>$730</p>
                        <p className={style.summary}>Booked Earnings</p>
                    </div>                                                           
                </div>
                <hr className="mt-5 mb-5" />
                <div className="row mt-3">
                    <div className="col-4">
                        <p className={style.value}>$730</p>
                        <p className={style.summary}>Booked Earnings</p>
                    </div>
                    <div className="col-4">
                        <p className={style.value}>$730</p>
                        <p className={style.summary}>Booked Earnings</p>
                    </div>
                    <div className="col-4">
                        <p className={style.value}>$730</p>
                        <p className={style.summary}>Booked Earnings</p>
                    </div>                                                           
                </div>
            </div>
        </div>
    )
}

export default DashboardStats;