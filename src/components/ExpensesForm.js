import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpensesForm extends Component {
  render() {
    const { expenses, onClick } = this.props;
    const { description, tag, method, value, id } = expenses;

    return (
      <tr key={ id } className="table-expense">
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{expenses.exchangeRates[expenses.currency].name.split('/')[0]}</td>
        <td>
          {parseFloat(
            expenses.exchangeRates[expenses.currency].ask,
          ).toFixed(2)}
        </td>
        <td>
          {
            (parseFloat(expenses.value)
                  * parseFloat(expenses.exchangeRates[expenses.currency].ask))
              .toFixed(2)
          }
        </td>
        <td>Real</td>
        <td>
          <button
            className="btn-table material-icons"
            type="button"
            onClick={ this.handleEdition }
          >
            edit
          </button>
          <button
            className="btn-table material-icons"
            data-testid="delete-btn"
            type="button"
            onClick={ onClick }
          >
            delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ExpensesForm;

ExpensesForm.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};
