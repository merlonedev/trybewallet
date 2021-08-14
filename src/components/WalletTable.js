/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletTable extends React.Component {
  tableHeader() {
    return (
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
    );
  }

  findCurrency(currency, exchangeRates) {
    const currencieName = exchangeRates[currency].name.split('/');
    return currencieName[0];
  }

  convertValue(expense) {
    const currencieValue = expense.value * expense.exchangeRates[expense.currency].ask;
    return currencieValue.toFixed(2);
  }

  findCambio(expense, currency) {
    const currencieCambio = parseFloat(expense.exchangeRates[currency].ask);
    return currencieCambio.toFixed(2);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        { this.tableHeader() }
        { expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>
              {expense.description}
            </td>
            <td>
              {expense.tag}
            </td>
            <td>
              {expense.method}
            </td>
            <td>
              {expense.value}
            </td>
            <td>
              {this.findCurrency(expense.currency, expense.exchangeRates)}
            </td>
            <td>
              {this.findCambio(expense, expense.currency)}
            </td>
            <td>
              {this.convertValue(expense)}
            </td>
            <td>
              Real
            </td>
            <td>
              <button type="button">
                Editar/Excluir
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

WalletTable.propTypes = {
  expenses: PropTypes.shape.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletTable);
