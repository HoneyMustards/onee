import React from 'react';

const PageMenu = (props) => {
    return (
        <ul className="page-menu">
            <a className="page-menu-link active" href="#">Summary</a>
            <a className="page-menu-link" href="#">Booking</a>
            <a className="page-menu-link" href="#">Customers</a>
            <a className="page-menu-link" href="#">Saved Searches</a>
            <a className="page-menu-link" href="#">Promotions</a>
            <a className="page-menu-link" href="#">Inbox</a>
            <a className="page-menu-link" href="#">To Do List</a>
            <a className="page-menu-link" href="#">History</a>
            <a className="page-menu-link" href="#">Invoice</a>            
        </ul>
    )
}

export default PageMenu;