import React from 'react';

class ExpenseForm extends React.Component {
  render() {
    const payment = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>

        <label htmlFor="valor">
          Valor
          <input type="number" id="valor" />
        </label>

        <label htmlFor="descricao">
          Descrição
          <input type="text" id="descricao" />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            <option> </option>
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento
          <select id="payment-method">
            { payment.map((item, index) => <option key={ index }>{ item }</option>) }
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select id="tag">
            { tag.map((item, index) => <option key={ index }>{ item }</option>) }
          </select>
        </label>

      </form>
    );
  }
}

export default ExpenseForm;
