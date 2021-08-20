import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delExpenses } from '../../actions/index';

class Expense extends Component {
  render() {
    const { expenses, deleteExpense } = this.props;
    return (
      <tbody>
        { expenses.map((expense, index) => (
          <tr key={ index }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
            <td>{parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {(expense.value * expense.exchangeRates[expense.currency].ask)
                .toFixed(2)}
            </td>
            <td>Real</td>
            <button type="button" data-testid="edit-btn">Editar</button>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => deleteExpense(expense.id) }
            >
              Excluir
            </button>
          </tr>
        ))}
      </tbody>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(delExpenses(id)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Expense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  deleteExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
