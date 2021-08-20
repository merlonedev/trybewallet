import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class Table extends Component {
  renderExpenses() {
    const { expenses, removeExpense } = this.props;
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
        <td>
          <button
            type="button"
            id={ expense.id }
            onClick={ ({ target }) => removeExpense(Number(target.id)) }
            data-testid="delete-btn"
          >
            Apagar despesa
          </button>
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

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(deleteExpense(id)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  removeExpense: PropTypes.func.isRequired,
};

Table.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
