import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tableCategories } from '../services';
import { actionDeleteExpense } from '../actions';

class ExpensesTable extends Component {
  render() {
    const { expenses, deleteExpense } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {tableCategories.map((name) => <th key={ name }>{name}</th>)}
          </tr>
        </thead>
        <tbody>
          { expenses.map((
            { id, description, tag, method, value, exchangeRates, currency },
          ) => {
            const { name, ask } = exchangeRates[currency];
            const currencyExchange = name.split('/');
            const fixedAskValue = parseFloat(ask).toFixed(2);
            const valueInBRL = (+value * +ask).toFixed(2);
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{currencyExchange[0]}</td>
                <td>{fixedAskValue}</td>
                <td>{valueInBRL}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    value={ id }
                    onClick={ deleteExpense }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: ({ target: { value } }) => dispatch(actionDeleteExpense(value)),
  // editExpense: ({ target: { value } }) => dispatch(actionEditExpense(value)),
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  deleteExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
