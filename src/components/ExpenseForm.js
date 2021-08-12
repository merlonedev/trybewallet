import React from 'react';

class ExpenseForm extends React.Component {
  render() {
    const payment = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>

        <label htmlFor="valor">
          Valor
          <input type="number" name="valor" />
        </label>

        <label htmlFor="descricao">
          Descrição
          <input type="text" name="descricao" />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select>
            <option> </option>
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento
          <select>
            { payment.map((item, index) => <option key={ index }>{ item }</option>) }
          </select>
        </label>

        <label htmlFor="tag">
          Tag
          <select>
            { tag.map((item, index) => <option key={ index }>{ item }</option>) }
          </select>
        </label>

      </form>
    );
  }
}

export default ExpenseForm;
