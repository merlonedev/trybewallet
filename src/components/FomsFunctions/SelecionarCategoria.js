import React, { Component } from 'react';

class SelecionarCategoria extends Component {
  render() {
    return (
      <div>
        <label htmlFor="teste-categoria">
          Tag
          <select id="teste-categoria">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}
export default SelecionarCategoria;
