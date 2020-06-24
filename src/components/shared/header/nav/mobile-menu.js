import React, {useState, useRef} from 'react';
import { FormattedMessage } from "react-intl";

import Link from '../../../elements/link';
import GuestUser from '../guest-user';
import LanguageDropdown from '../../../elements/languageDropdown';

const MobileMenu = (props) => {
    const [show, setShow] = useState(false);

    return(
      <div className="">
        <i className="icon icon-menu" onClick={() => setShow(!show)}></i>
        
        <div className={`mobile-menu-container ${show && 'show'}`}>
          <div className={`mobile-menu left `}>
            <div className="mobile-menu-header">
              <i className="icon icon-close" onClick={() => setShow(!show)}></i>
            </div>
            <ul className="mobile-menu-list list">
              <li><Link className="btn-text">Smart Search</Link></li>
              <li><Link className="btn-text">Travel Inspiration</Link></li>
              <li><Link className="btn-text">Trending Destinations</Link></li>
              <li><Link className="btn-text">Help</Link></li>
              <li><Link className="btn-text">List Your Property</Link></li>
            </ul>
            <GuestUser />
            <LanguageDropdown />
          </div>
          <div className="mobile-menu-overlay" onClick={() => setShow(!show)}></div>
        </div>
      </div>
    )
  }


  export default MobileMenu;