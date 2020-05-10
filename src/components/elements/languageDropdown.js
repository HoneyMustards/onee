import React, {useState} from 'react';

import Link from './link';

const LanguageDropdown = props => {

    return(
        <Link className="btn-outline-primary mt-10 btn-drop language-btn"><img src="./en_flag.png" /> <span>USD</span> <i className="icon icon-down fs-6"></i></Link>
    )
};

export default LanguageDropdown;