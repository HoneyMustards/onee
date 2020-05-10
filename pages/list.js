import React, { useState, useEffect } from 'react';
import { FormattedMessage } from "react-intl";

import Layout from '../src/components/layouts/layout';
import SearchBox from '../src/components/elements/search-box';
import Newsletter from '../src/components/partials/home/newsletter';
import Footer from '../src/components/shared/footer/footer';

const List = () => {
  
    return (
      <Layout>
          <div className="search-box-container detail">
            <SearchBox />
          </div>
          <br /><br /><br /><br /><br /><br />

          <Newsletter />
          <Footer />
      </Layout>
    );
}

export default List;