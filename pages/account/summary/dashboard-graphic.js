import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Select from '../../../src/components/elements/form/select';
import { options } from '../../../data/graphs-options';
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

    options.series = [
        {
            name: 'Paid Out',
            data: [0, 20000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
            name: 'Expected',
            data: [0, 0, 0, 40000, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    ];

    const a = () => {
        options.series = [
            {
                name: 'Paid Out',
                data: [0, 40000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'Expected',
                data: [0, 0, 0, 40000, 0, 0, 0, 0, 0, 25000, 0, 0]
            }
        ];
    }

    return (
        <div className={"box " + style.box}>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className={style.header}>Earning</h2>
                <Select width="200px" placeHolder="date" options={list} />
            </div>
            <div className="d-flex align-items-center mb-5 mt-3">
                <div className="d-flex">
                    <div className={style.graphBoxPaidOut}></div>
                    <div className="ml-2">
                        <p className={style.valueSmall}>$20.000</p>
                        <p className={style.summary}>Paid out</p>
                    </div>
                </div>
                <div className="d-flex align-items-center ml-5">
                    <div className={style.graphBoxExpected}></div>
                    <div className="ml-2">
                        <p className={style.valueSmall}>$40.000</p>
                        <p className={style.summary}>Expected</p>
                    </div>
                </div>                
            </div>
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
        </div>
    )
}

export default DashboardGraphic;