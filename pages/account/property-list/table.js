import React, { useState, useEffect } from 'react';
import Progress from '../../../src/components/elements/progress';
import style from './property-list.module.scss';

const TableRow = () => {
    return (
        <tr>
            <td>
                <img className={style.tableImage} src="./images/detail/detail.png" />
            </td>
            <td><strong>Villa Rose</strong></td>
            <td><span>800123477</span></td>
            <td><span>Approved</span></td>
            <td><Progress complete="60" /></td>
            <td><span>%10</span></td>
            <td className={style.tableActions}>
                <span>View</span>
                <span>|</span>
                <span>Edit</span>
            </td>
        </tr>
    )
}

const PropertyListTable = () => {

    const [template, setTemplate] = useState();

    useEffect(() => {
        let temp = [];
        for (let i = 0; i < 10; i++) {
            temp.push(<TableRow/>);
        };
        setTemplate(temp);
    }, []);

    return (
        <table className={style.table}>
            <tr>
                <th></th>
                <th>Property Name</th>
                <th>Property ID</th>
                <th>Status</th>
                <th>Profile Completion</th>
                <th>Reseller Margin</th>
                <th></th>
            </tr>
            {template}
        </table>
    )
}

export default PropertyListTable;