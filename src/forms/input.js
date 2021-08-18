import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="text"
            name="valor"
            id="valor"
          />
        </label>
        <label htmlFor="descriçao">
          Descrição
          <input
            type="text"
            name="descriçao"
            id="descriçao"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select name="moeda" id="moeda">
            <option value="$">$</option>
          </select>
        </label>
        <label htmlFor="metodopg">
          Método de pagamento
          <select name="metodopg" id="metodopg">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Input;
