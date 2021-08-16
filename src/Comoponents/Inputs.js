import React, { Component } from 'react';

export default class Inputs extends Component {
  render() {
    return (
      <>
        <label htmlFor="input-valor">
          Valor:
          <input
            type="text"
            id="input-valor"
          />
        </label>
        <label htmlFor="input-descricao">
          Descrição:
          <input
            type="text"
            id="input-descricao"
          />
        </label>
      </>
    );
  }
}
