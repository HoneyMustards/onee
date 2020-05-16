import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/store';

import 'rc-slider/assets/index.css';
import '../src/assets/styles/_page.scss';

function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default withRedux(initStore)(MyApp);