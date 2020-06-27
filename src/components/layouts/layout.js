import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {IntlProvider} from 'react-intl';
import Router from "next/router";

import Loading from "../elements/loading"
import Header from '../shared/header/header';

// languages
import en from "../../locales/locale-en.json";
import tr from "../../locales/locale-tr.json";

const messages = { en,tr };

const Layout = props => {

    const [lang, setLang] = useState('en');
    const [locale, setLocale] = useState('en');
    const [loading, setLoading] = useState(false);

    Router.onRouteChangeStart = (url) => {
        setLoading(true);
    };

    Router.onRouteChangeComplete = (url) => {
        setLoading(false);
    };

    return (
        <IntlProvider messages={messages[lang]} locale={locale}>
            <div className="container-fluid page-wrap">
                <Head>
                    <title>Onee | {props.title}</title>
                    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
                    <base href="/"></base>
                </Head>
                { loading && <Loading /> }
                <Header />
                <div className="main">
                    {props.children}
                </div>
            </div>
        </IntlProvider>
    )
};

export default Layout;
