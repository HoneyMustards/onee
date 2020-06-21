import App from 'next/app';
import { Provider } from 'react-redux';
import { Auth0Provider } from "../react-auth0-spa";
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/store';

import 'rc-slider/assets/index.css';
import '../src/assets/styles/_page.scss';
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps, store}) {

  return (
    <Auth0Provider domain={process.env.DOMAIN} client_id={process.env.CLIENT_ID} redirect_uri="http://localhost:5000">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Auth0Provider>
  )
}

export default withRedux(initStore)(MyApp);
