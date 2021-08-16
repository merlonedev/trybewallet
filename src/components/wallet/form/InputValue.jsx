import React from 'react';

class InputValue extends React.Component {
  render() {
    return (
      <label htmlFor="wallet-value">
        Valor
        <input
          type="number"
          name="value"
          id="wallet-value"
          placeholder="Valor gasto"
          min="0"
        />
      </label>
    );
  }
}

export default InputValue;
