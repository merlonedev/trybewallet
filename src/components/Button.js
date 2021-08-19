import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { testId, disabled, type, name, deleteFunc } = this.props;
    return (
      <button
        id={ testId }
        data-testid={ testId }
        type={ type === 'submit' ? 'submit' : 'button' }
        disabled={ disabled }
        onClick={ deleteFunc }
      >
        { name }
      </button>
    );
  }
}

const { bool, string, func } = PropTypes;

Button.propTypes = {
  name: string,
  disabled: bool,
  testId: string,
  type: string,
  deleteFunc: func,
};

Button.defaultProps = {
  testId: null,
  name: 'Entrar',
  type: 'button',
  deleteFunc: null,
  disabled: false,
};

export default Button;
