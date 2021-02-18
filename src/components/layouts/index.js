import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <div className="h-screen bg-gradient-to-r from-primary to-secondary">
      {children}
    </div>
  </>
);

export default Layout;

Layout.defaultProps = {};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
