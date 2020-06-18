import React, {useState} from 'react';
import { useAuth0 } from "../../../../../react-auth0-spa";

import Link from 'next/link';

const ProfileMenus = () => {

  //const { logout } = useAuth0();

  return(
    <ul className="menu-list list">
        <li><Link href="/account/summary"><a>Summary</a></Link></li>
        <li><Link href="/account/booking"><a>My Bookings</a></Link></li>
        <li><Link href="/account/customer"><a>Customers</a></Link></li>
        <li>Saved Searches</li>
        <li>Promotions</li>
        {/*<li>Inbox <div className="badge badge-pill badge-secondary badge-notification">3</div></li> */}
        {/*<li>To Do List</li>*/}
        <li>Edit My Profile</li>
        <li>Help</li>
        <li onClick={() => logout()}>Log Out</li>
    </ul>
  )
};
  
export default ProfileMenus;