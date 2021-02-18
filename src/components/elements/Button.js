import * as React from 'react';
import PropTypes from 'prop-types';

function Button({ name, secondary, isFullWidth, ...props }) {
  if (secondary) {
    return (
      <button
        className={`${
          isFullWidth && 'w-full'
        } font-sans bg-white py-2 px-6 text-pink-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-600`}
        type="button"
        {...props}
      >
        {name}
      </button>
    );
  }
  return (
    <button
      className={`${
        isFullWidth && 'w-full'
      } font-sans bg-gradient-to-r from-primary to-secondary py-2 px-6 text-white font-semibold  rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600`}
      type="button"
      {...props}
    >
      {name}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  name: 'Hello Universe',
  type: 'button',
  secondary: false,
  isFullWidth: false,
};

Button.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  secondary: PropTypes.bool,
  isFullWidth: PropTypes.bool,
};
