import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { handleSubmit, text } = this.props;
    return (
      <button
        type="button"
        onClick={ handleSubmit }
      >
        { text }
      </button>
    );
  }
}
Button.propTypes = {
  handleSubmit: PropTypes.func,
}.isRequired;

export default Button;
