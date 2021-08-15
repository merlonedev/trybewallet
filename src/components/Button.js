import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { handleClick, text } = this.props;
    return (
      <button
        type="button"
        handleClick={ handleClick }
      >
        { text }
      </button>
    );
  }
}
Button.propTypes = {
  handleClick: PropTypes.func,
}.isRequired;

export default Button;
