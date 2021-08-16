import React from 'react';

class InputText extends React.Component {
  render() {
    return (
      <label htmlFor="wallet-expense">
        Descrição
        <input
          type="text"
          name="expense"
          id="wallet-expense"
          placeholder="Sua despesa"
        />
      </label>
    );
  }
}

export default InputText;
