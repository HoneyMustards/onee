import App from 'next/app';
import { Provider } from 'react-redux';
import { Auth0Provider } from "../react-auth0-spa";
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/store';

import 'rc-slider/assets/index.css';
import '../src/assets/styles/_page.scss';
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps, store, url }) {

  useEffect(() => {
    
  })

  return (
    <Auth0Provider domain={process.env.DOMAIN} client_id={process.env.CLIENT_ID} redirect_uri={url}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Auth0Provider>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      url: window.location.href
    },
  }
}

export default withRedux(initStore)(MyApp);
