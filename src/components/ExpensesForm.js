import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class ExpensesForm extends Component {
  render() {
    const { expenses, deleteLine } = this.props;
    const { description, tag, method, value, id } = expenses;

    return (
      <div>
        <tbody>
          <tr key={ id } className="table-expense">
            <th>{description}</th>
            <th>{tag}</th>
            <th>{method}</th>
            <th>{value}</th>
            <th>{expenses.exchangeRates[expenses.currency].name.split('/')[0]}</th>
            <th>
              {parseFloat(
                expenses.exchangeRates[expenses.currency].ask,
              ).toFixed(2)}
            </th>
            <th>
              {
                (parseFloat(expenses.value)
                  * parseFloat(expenses.exchangeRates[expenses.currency].ask))
                  .toFixed(2)
              }
            </th>
            <th>Real Brasileiro</th>
            <th>
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
                onClick={ (event) => (deleteLine(event)) }
              >
                delete
              </button>
            </th>
          </tr>
        </tbody>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteLine: (line) => dispatch(deleteExpense(line)),
});

export default connect(null, mapDispatchToProps)(ExpensesForm);

ExpensesForm.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteLine: PropTypes.func.isRequired,
};
