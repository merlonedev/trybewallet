import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import deleteExpenses from '../actions/deleteExpenses';

class Table extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(expenses) {
    const { deleteExpense } = this.props;
    deleteExpense(expenses);
  }

  render() {
    const { expenses, deleteExpense } = this.props;
    return (
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
        {expenses.map((expense) => (
          <tr key={ Math.random() }>
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method }</td>
            <td>{ expense.value }</td>
            <td>{ expense.exchangeRates[expense.currency].name }</td>
            <td>
              { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
            </td>
            <td>
              { (parseFloat(expense.value)
               * parseFloat(expense.exchangeRates[expense.currency].ask)).toFixed(2) }
            </td>
            <td>Real</td>
            <button
              data-testid="delete-btn"
              type="button"
              onClick={ () => deleteExpense(expense.id) }
            >
              x
            </button>
          </tr>))}
      </tbody>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expense) => dispatch(deleteExpenses(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
