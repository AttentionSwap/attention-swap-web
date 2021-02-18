import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Home, ContactUs } from './pages';
import { ConnectionProvider } from './utils/connection';
import { WalletProvider } from './utils/wallet';
import Layout from './components/layouts';

function Routes() {
  return (
    <HashRouter basename="/">
      <ConnectionProvider>
        <WalletProvider>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact-us" component={ContactUs} />
          </Layout>
        </WalletProvider>
      </ConnectionProvider>
    </HashRouter>
  );
}

export default Routes;
