import React, {useState} from 'react';
import { useAuth0 } from "../../../../../react-auth0-spa";

import Link from '../../../elements/link';

const ProfileMenus = () => {

  const { logout } = useAuth0();

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
        <li onClick={() => logout()}>Log Out</li>
    </ul>
  )
};
  
export default ProfileMenus;