import React, {useState} from 'react';
import { FormattedMessage } from "react-intl";
import { useAuth0 } from "../../../../pages/react-auth0-spa";

import Link from '../../elements/link';
import Button from '../../elements/form/button';

const GuestUser = () => {

  const { loginWithRedirect } = useAuth0();

  const login = () => {
      
  };

  return(
    <div className="login-buttons">
      <Button onClick={() => loginWithRedirect({})}>
        <FormattedMessage id="nav.login" />
      </Button>
      <Link link="/register" className="btn-outline-primary">
        <FormattedMessage id="nav.register" />  
      </Link>
    </div>
  )
}

export default GuestUser;