import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useAuth0 } from "../../../../react-auth0-spa";
import { connect } from 'react-redux';
import { setUser, setToken } from '../../../../store/user/action';

import Profile from './profile';
import GuestUser from './guest-user';
import MobileMenu from './nav/mobile-menu';
import Profilemobile from './nav/profile-mobile';

const Header = (props) => {

  const { loading, user, getTokenSilently } = useAuth0();

  const initUser = async () => {
    try {
      const token = await getTokenSilently();

      props.onSetUser(user);
      props.onSetToken(token);

    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  } else {
    initUser();
  }

  return(
    <header className="header">
      <div className="row">
        <div className="col-4 col-md-3 mobile-menu-btn">
          <MobileMenu />
        </div>
        <div className="col-4 col-md-3">
          <Link href="/"><div className="logo"></div></Link>
        </div>
        <div className="col-4 col-md-9 header-content">
          { user ? <Profile /> : <GuestUser /> }
        </div>
        <Profilemobile />
      </div>
    </header>
  )
};

const mapStateToProps = state => ({
  user: state.user.content
});

const mapDispatchToProps = {
  onSetUser: setUser,
  onSetToken: setToken
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);