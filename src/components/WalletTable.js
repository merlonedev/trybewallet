/* eslint-disable max-lines-per-function */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAll } from '../actions';

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

  deleteRow(idRow) {
    const { getRow } = this.props;
    getRow(idRow);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        { this.tableHeader() }
        { expenses.length > 0 ? expenses.map((expense) => (
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
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => this.deleteRow(expense.id) }
              >
                Editar/Excluir
              </button>
            </td>
          </tr>
        )) : ''}
      </table>
    );
  }
}

WalletTable.propTypes = {
  getRow: PropTypes.func.isRequired,
  expenses: PropTypes.shape.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getRow: (row) => dispatch(deleteAll(row)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletTable);
