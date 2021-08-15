import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginInput extends Component {
  render() {
    const { name, labelText, testId, type, value, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { labelText }
        <input
          name={ name }
          data-testid={ testId }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

LoginInput.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  testId: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default LoginInput;
