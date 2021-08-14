import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { props: { label, submit, disabled } } = this;
    return (
      <button
        type="button"
        onClick={ submit }
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
  submit: func.isRequired,
};

export default Button;
