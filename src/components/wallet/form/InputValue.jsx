import React from 'react';
import PropTypes from 'prop-types';

class InputValue extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="wallet-value">
        Valor
        <input
          type="number"
          name="value"
          value={ value }
          id="wallet-value"
          onChange={ onChange }
          placeholder="Valor gasto"
          min="0"
        />
      </label>
    );
  }
}

InputValue.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputValue;
