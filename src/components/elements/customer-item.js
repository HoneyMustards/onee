import React from 'react';

const CustomerItem = () => {
    return (
        <div className="customer-item">
            <div className="content">
                <img className="image" src="./profile/avatar.png" />
                <div>
                    <p className="name">Ethem Budak</p>
                    <p className="title">Travel Agent at Onee</p>
                </div>
            </div>
            <div className="actions">
                <div className="actions-item"><i className="icon icon-people"></i> View</div>
                <div className="actions-item"><i className="icon icon-people"></i> Edit</div>
            </div>
        </div>
    )
}

export default CustomerItem;