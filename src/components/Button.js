import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { props: { label, handleSubmit } } = this;
    return (
      <button
        type="button"
        onClick={ handleSubmit }
      >
        { label }
      </button>
    );
  }
}

const { string, func } = PropTypes;

Button.propTypes = {
  label: string.isRequired,
  handleSubmit: func.isRequired,
};

export default Button;
