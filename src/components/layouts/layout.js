import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {IntlProvider} from 'react-intl';

import Header from '../shared/header/header';

// languages
import en from "../../locales/locale-en.json";
import tr from "../../locales/locale-tr.json";

const messages = { en,tr };

const Layout = props => {

    const [lang, setLang] = useState('en');
    const [locale, setLocale] = useState('en');

    return (
        <IntlProvider messages={messages[lang]} locale={locale}>
            <div className="container-fluid page-wrap">
                <Head>
                    <title>Onee</title>
                    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
                    <base href="/"></base>
                </Head>
                <Header />
                <div className="">
                    {props.children}
                </div>
            </div>
        </IntlProvider>
    )
};
  
  export default Layout;