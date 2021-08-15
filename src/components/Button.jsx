import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { disabled, onClick, buttonText, linkTo } = this.props;
    return (
      <Link to={ linkTo }>
        <button
          type="button"
          disabled={ disabled }
          onClick={ onClick }
        >
          { buttonText }
        </button>
      </Link>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  buttonText: PropTypes.string,
}.isRequired;

export default Button;
