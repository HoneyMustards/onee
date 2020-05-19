import React from 'react';

const ActivityBox = () => {
    return (
        <div className="box activity-box">
            <div className="header">
                <h3 className="title">Recent Activity</h3>
                <span className="time">Last 6 Months</span>
            </div>
            <div className="body">
                <div className="activity-item">
                    <h4 className="title">Reservation for John Doe</h4>
                    <table className="table-summary">
                        <tr>
                            <th>Property ID</th>
                            <td> : </td>
                            <td>800123477</td>
                        </tr>
                        <tr>
                            <th>Earning</th>
                            <td> : </td>
                            <td>$730</td>
                        </tr>
                        <tr>
                            <th>Completion Date</th>
                            <td> : </td>
                            <td>11/02/2019</td>
                        </tr>
                        <tr>
                            <th>Booking Dates</th>
                            <td> : </td>
                            <td>02/13/2020 - 02/17/2020</td>
                        </tr>
                        <tr>
                            <th>Accommodating List</th>
                            <td> : </td>
                            <td>John Doe, Jane Doe, James Doe</td>
                        </tr>
                        <tr>
                            <th>Additional Service List</th>
                            <td> : </td>
                            <td>Private Cook</td>
                        </tr>
                    </table>
                    <div className="more">More Details</div>
                </div>            
            </div>
            <div className="body">
                <div className="activity-item">
                    <h4 className="title">Reservation for John Doe</h4>
                    <table className="table-summary">
                        <tr>
                            <th>Property ID</th>
                            <td> : </td>
                            <td>800123477</td>
                        </tr>
                        <tr>
                            <th>Earning</th>
                            <td> : </td>
                            <td>$730</td>
                        </tr>
                        <tr>
                            <th>Completion Date</th>
                            <td> : </td>
                            <td>11/02/2019</td>
                        </tr>
                        <tr>
                            <th>Booking Dates</th>
                            <td> : </td>
                            <td>02/13/2020 - 02/17/2020</td>
                        </tr>
                        <tr>
                            <th>Accommodating List</th>
                            <td> : </td>
                            <td>John Doe, Jane Doe, James Doe</td>
                        </tr>
                        <tr>
                            <th>Additional Service List</th>
                            <td> : </td>
                            <td>Private Cook</td>
                        </tr>
                    </table>
                    <div className="more">More Details</div>
                </div>            
            </div>            
            <div className="footer">
                <div className="more text-center">
                    View All History
                </div>    
            </div>
        </div>
    )
}

export default ActivityBox;