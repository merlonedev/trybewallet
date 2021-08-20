import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { button, onClick, disabled, testId } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ onClick }
          disabled={ disabled }
          data-testId={ testId }
        >
          { button }
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  button: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  testId: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  testId: '',
};

export default Button;
