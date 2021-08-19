import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesTable extends Component {
  renderExpenses() {
    const { expenses } = this.props;
    return expenses.map((expense) => (
      <tr key={ expense.id }>
        <td>
          { expense.description }
        </td>
        <td>
          { expense.tag }
        </td>
        <td>
          { expense.method }
        </td>
        <td>
          { expense.value }
        </td>
        <td>
          { expense.exchangeRates[expense.currency].name }
        </td>
        <td>
          { Number((Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)) }
        </td>
        <td>
          { (expense.value * expense.exchangeRates[expense.currency].ask).toFixed(2) }
        </td>
        <td>
          Real
        </td>
      </tr>));
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Seus gastos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          {
            this.renderExpenses()
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
};

ExpensesTable.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps)(ExpensesTable);
