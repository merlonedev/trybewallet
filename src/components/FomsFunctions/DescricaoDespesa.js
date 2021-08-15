import React, { Component } from 'react';

class DescricaoDespesa extends Component {
  render() {
    return (
      <div>
        <label htmlFor="teste-descricao">
          Descrição
          <input
            id="teste-descricao"
            placeholder="adicionar descriçao da despesa"
          />
        </label>
      </div>
    );
  }
}

export default DescricaoDespesa;
