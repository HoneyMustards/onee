import { Provider } from 'react-redux';
// import withRedux from 'next-redux-wrapper';
import { store, persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';

import 'rc-slider/assets/index.css';
import '../src/assets/styles/_page.scss';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp;