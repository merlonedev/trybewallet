import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions/wallet';

class ExpenseTable extends Component {
  constructor(props) {
    super(props);

    this.renderTableHeader = this.renderTableHeader.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const { expenses, delExpense } = this.props;
    const newExpenses = expenses.filter(({ id }) => id !== +target.value);
    delExpense(newExpenses);
  }

  renderTableHeader() {
    return (
      <table>
        <thead>
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
        </thead>
      </table>
    );
  }

  renderTableLines() {
    const { expenses } = this.props;

    return expenses.map((expense) => {
      const {
        id,
        value,
        currency,
        tag,
        method,
        description,
        exchangeRates,
      } = expense;

      const { name, ask } = exchangeRates[currency];

      const currencyType = name.split('/', 1);
      const price = (value * ask).toFixed(2);

      return (
        <tr key={ id } id={ id }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ value }</td>
          <td>{ currencyType[0] }</td>
          <td>{ Number(ask).toFixed(2) }</td>
          <td>{ price }</td>
          <td>Real</td>
          <td>
            <button
              type="button"
              onClick={ this.handleClick }
              data-testid="delete-btn"
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <thead>
          { this.renderTableHeader() }
        </thead>
        <tbody>
          { this.renderTableLines() }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delExpense: (expense) => dispatch(deleteExpense(expense)),
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(Object),
}.isrequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
