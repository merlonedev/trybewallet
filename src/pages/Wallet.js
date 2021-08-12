import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <h3 data-testid="email-field">
          Email da pessoa retirado do estado Global
        </h3>
        <h2 data-testid="total-field">
          Campo de despesa geral
        </h2>
        <h3 data-testid="header-currency-field">
          BRL
        </h3>
        <form>
          <label htmlFor="value">
            Valor
            <input type="text" name="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input type="text" name="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select name="currency">
              <option value="BRL" selected>BRL</option>
            </select>
          </label>
          <label htmlFor="payment">
            Método de Pagamento
            <select name="payment">
              <option value="money" selected>Dinheiro</option>
              <option value="credit">Cartão de Crédito</option>
              <option value="debit">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select name="tag">
              <option value="food" selected>Alimentação</option>
              <option value="fun">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transportation">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </main>
    );
  }
}

export default Wallet;
