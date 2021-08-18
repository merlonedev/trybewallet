import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="value">
          Valor:
          <input
            id="value"
            type="text"
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            id="description"
            type="text"
            name="descricao"
            label="Descrição: "
          />
        </label>
      </div>
    );
  }
}

export default Input;
