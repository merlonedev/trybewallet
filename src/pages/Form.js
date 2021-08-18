import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
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
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency" label="Moeda: "> </select>
        </label>
        <label htmlFor="selected-currency">
          Método de pagamento:
          <select id="selected-currency" name="method" label="Método de pagamento: ">
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="selected-category-tag" label="Tag: ">
          Tag:
          <select id="selected-category-tag" name="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
