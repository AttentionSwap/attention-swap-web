import React from 'react';
import PropTypes from 'prop-types';

const Pager = ({ children, isTopPadded }) => (
  <div className={`mx-auto max-w-screen-xl px-4 ${isTopPadded && 'py-6'}`}>
    {children}
  </div>
);

export default Pager;
Pager.defaultProps = {
  isTopPadded: false,
};

Pager.propTypes = {
  children: PropTypes.node.isRequired,
  isTopPadded: PropTypes.bool,
};
