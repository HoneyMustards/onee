import React, {useState} from 'react';

const ProfileMenus = () => {

  return(
    <ul className="menu-list list">
        <li>Summary</li>
        <li>My Bookings</li>
        <li>Customers</li>
        <li>Saved Searches</li>
        <li>Promotions</li>
        <li>Inbox <div className="badge badge-pill badge-secondary badge-notification">3</div></li>
        <li>To Do List</li>
        <li>Edit My Profile</li>
        <li>Help</li>
        <li>Log Out</li>
    </ul>
  )
};
  
export default ProfileMenus;