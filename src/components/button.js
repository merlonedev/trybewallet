import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { button, onClick } = this.props;
    return (
      <div>
        <button type="button" onClick={ onClick }>
          { button }
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  button: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
