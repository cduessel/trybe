import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
  const { showComponent, isDisable, content } = props;
  return (
    <button
      type="button"
      disabled={isDisable}
      onClick={() => showComponent()}
    >
      {content}
    </button>
  )
}
export default Button;

Button.propTypes = {
  isDisable: propTypes.bool.isRequired,
  showComponent: propTypes.func.isRequired,
};
