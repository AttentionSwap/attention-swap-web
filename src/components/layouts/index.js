import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <body className="h-screen bg-gradient-to-r from-primary to-secondary">
      {children}
    </body>
  </>
);

export default Layout;

Layout.defaultProps = {};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
