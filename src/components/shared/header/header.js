import React, {useState} from 'react';

import Profile from './profile';
import GuestUser from './guest-user';
import MobileMenu from './nav/mobile-menu';
import Profilemobile from './nav/profile-mobile';

const Header = () => {

  const [user, setUser] = useState('Ethem Budak');

  return(
    <header className="header">
      <div className="row">
        <div className="col-4 col-md-3 mobile-menu-btn">
          <MobileMenu />
        </div>
        <div className="col-4 col-md-3">
          <div className="logo"></div>
        </div>
        <div className="col-4 col-md-9 header-content">
          { user ? <Profile user={user} /> : <GuestUser /> }
        </div>
        <Profilemobile />
      </div>
    </header>
  )
};
  
export default Header;