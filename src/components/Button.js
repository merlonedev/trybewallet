import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render() {
    const { text, to, disabled, onClick } = this.props;
    return (
      <Link to={ to }>
        <button
          type="button"
          onClick={ onClick }
          disabled={ disabled }
        >
          { text }
        </button>
      </Link>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
