import React, {useState} from 'react';
import { FormattedMessage } from "react-intl";

import Link from '../../elements/link';

const GuestUser = () => {
    return(
      <div className="login-buttons">
        <Link link="/">
          <FormattedMessage id="nav.login" />
        </Link>
        <Link link="/register" className="btn-outline-primary">
          <FormattedMessage id="nav.register" />  
        </Link>
      </div>
    )
}

export default GuestUser;