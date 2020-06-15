import { FormattedMessage } from "react-intl";

import Layout from '../src/components/layouts/layout';
import SearchBox from '../src/components/elements/search-box';
import TravelInspiration from '../src/components/partials/home/travel-inspiration';
import TrendingInspiration from '../src/components/partials/home/trending-inspiration';
import TabDestination from '../src/components/partials/home/tab-destination';
import Newsletter from '../src/components/partials/home/newsletter';
import Footer from '../src/components/shared/footer/footer';

import fetch from 'node-fetch'


const Home = (props) => {

  console.log(props);
  
    return (
      <Layout>
          
          <div className="home-banner"><img src="./banner.png" /> </div>
          <div className="search-box-container">
            <SearchBox />
          </div>
          <TravelInspiration />
          <TrendingInspiration />
          <TabDestination />
          <Newsletter />
          <Footer />
      </Layout>
    );
}

export default Home;