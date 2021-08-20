import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Table.css';
import { deleteExpense } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(expenses) {
    const { deleteExpenses } = this.props;
    deleteExpenses(expenses);
  }

  render() {
    const { expenses, deleteExpenses } = this.props;
    return (
      <tbody className="table">
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
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>
              {parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}
            </td>
            <td>
              {(parseFloat(expense.value)
                * parseFloat(expense.exchangeRates[expense.currency].ask)).toFixed(2)}
            </td>
            <td>Real</td>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => deleteExpenses(expense.id) }
            >
              X
            </button>
          </tr>))}
      </tbody>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  deleteExpenses: PropTypes.func.isRequired,
};

function mapStateToProps({ wallet }) {
  return {
    expenses: wallet.expenses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteExpenses: (expense) => dispatch(deleteExpense(expense)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
