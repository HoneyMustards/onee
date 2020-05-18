import React from 'react';
import Select from '../../../src/components/elements/form/select';
import style from './dashboard-stats.module.scss'

const DashboardGraphic = () => {
    const list = [
        {
            value: 1,
            text: 'Select a month'
        },
        {
            value: 2,
            text: 'March 2020'
        }    
    ];
    return (
        <div className={"box " + style.box}>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className={style.header}>Earning</h2>
                <Select width="200px" placeHolder="date" options={list} />
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default DashboardGraphic;