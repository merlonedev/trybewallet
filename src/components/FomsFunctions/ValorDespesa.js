import React, { Component } from 'react';

class ValorDespesa extends Component {
  render() {
    return (
      <div>
        <label htmlFor="teste-despesa">
          Valor
          <input
            id="teste-despesa"
            placeholder="adicionar valor da despesa"
          />
        </label>
      </div>
    );
  }
}
export default ValorDespesa;
