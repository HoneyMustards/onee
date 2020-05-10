import React, {useState, useRef} from 'react';
import { FormattedMessage } from "react-intl";

import Link from '../../../elements/link';
import GuestUser from '../guest-user';
import CustomerDropdown from "../customer-dropdown";
import ProfileMenus from "./profile-menu";

const Profilemobile = (props) => {
    const [show, setShow] = useState(false);

    return(
      <div className="col-4 col-md-9 profile-mobile">
        <div className="profile" onClick={() => setShow(!show)}>
          <div className="profile-photo"><img src="./profile/avatar.png" alt=""/></div>
          <div className="badge badge-pill badge-secondary badge-notification">3</div>
        </div>
        
        <div className={`mobile-menu-container ${show && 'show'}`}>
          <div className={`mobile-menu right `}>
            <div className="mobile-menu-header">
              <i className="icon icon-close" onClick={() => setShow(!show)}></i>
            </div>
            <CustomerDropdown />
            <ProfileMenus />
          </div>
          <div className="mobile-menu-overlay" onClick={() => setShow(!show)}></div>
        </div>
      </div>
    )
  }

  export default Profilemobile;