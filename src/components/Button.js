import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { props: { label, handleSubmit, disabled } } = this;
    return (
      <button
        type="button"
        onClick={ handleSubmit }
        disabled={ disabled }
      >
        { label }
      </button>
    );
  }
}

const { string, func, bool } = PropTypes;

Button.propTypes = {
  label: string.isRequired,
  disabled: bool.isRequired,
  handleSubmit: func.isRequired,
};

export default Button;
