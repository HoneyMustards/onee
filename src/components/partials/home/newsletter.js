import React, {useState, useEffect} from 'react';
import { FormattedMessage } from "react-intl";

import Input from '../../elements/form/input';
import Button from '../../elements/form/button';

const Newsletter = () => {

    return(
        <section className="newsletter">
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <h1 className="section-title"><FormattedMessage id="newsletter.title"/></h1>
                    <p className="section-description"><FormattedMessage id="newsletter.desc"/></p>
                    <hr className="newsletter-hr"/>
                </div>
                <div className="col-md-12 col-lg-6 newsletter-content">
                    <div className="input-group input-group-lg input-group-shadow">
                        <Input placeholder="E-mail address" />
                        <div className="input-group-append">
                            <Button className="btn-secondary">SUBSCRIBE</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
  
export default Newsletter;