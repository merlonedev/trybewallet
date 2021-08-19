import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { testId, disabled, type, name } = this.props;
    return (
      <button
        id={ testId }
        type={ type === 'submit' ? 'submit' : 'button' }
        disabled={ disabled }
      >
        { name }
      </button>
    );
  }
}

const { bool, string } = PropTypes;

Button.propTypes = {
  name: string,
  disabled: bool.isRequired,
  testId: string,
  type: string,
};

Button.defaultProps = {
  testId: null,
  name: 'Entrar',
  type: 'button',
};

export default Button;
