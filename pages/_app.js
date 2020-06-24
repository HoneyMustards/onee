import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/store';

import 'rc-slider/assets/index.css';
import '../src/assets/styles/_page.scss';

import Router from 'next/router';
import { Auth0Provider } from 'use-auth0-hooks';

/**
 * Where to send the user after they have signed in.
 */
const onRedirectCallback = appState => {
  if (appState && appState.returnTo) {
    Router.push({
      pathname: appState.returnTo.pathname,
      query: appState.returnTo.query
    })
  }
};

/**
 * When it hasn't been possible to retrieve a new access token.
 * @param {Error} err
 * @param {AccessTokenRequestOptions} options
 */
const onAccessTokenError = (err, options) => {
  console.error('Failed to retrieve access token: ', err);
};

/**
 * When signing in fails for some reason, we want to show it here.
 * @param {Error} err
 */
const onLoginError = (err) => {
  Router.push({
    pathname: '/oops',
    query: {
      message: err.error_description || err.message
    }
  })
};

/**
 * When redirecting to the login page you'll end up in this state where the login page is still loading.
 * You can render a message to show that the user is being redirected.
 */
const onRedirecting = () => {
  return (
    <div>
      <p>Signing you in</p>
    </div>
  );
};

function MyApp({ Component, pageProps, store }) {

    return (
      <Provider store={store}>
        <Auth0Provider
          domain={process.env.AUTH0_DOMAIN}
          clientId={process.env.AUTH0_CLIENT_ID}
          redirectUri={process.env.REDIRECT_URI}
          onLoginError={onLoginError}
          onAccessTokenError={onAccessTokenError}
          onRedirecting={onRedirecting}
          onRedirectCallback={onRedirectCallback}>
              <Component {...pageProps} />
        </Auth0Provider>
      </Provider>
    );

}

export default withRedux(initStore)(MyApp);
