import React, { Component } from 'react';
import { string, shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense, editExpense } from '../actions';

class ExpenseRow extends Component {
  render() {
    const { expense, del, edit } = this.props;

    const formatValue = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return (
      <tr key={ expense.id }>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{expense.value}</td>
        <td>{expense.exchangeRates[expense.currency].name.split('/')[0]}</td>
        <td>{formatValue.format(expense.exchangeRates[expense.currency].ask)}</td>
        <td>
          {formatValue.format(
            parseFloat(expense.value)
              * parseFloat(expense.exchangeRates[expense.currency].ask),
          )}
        </td>
        <td>Real</td>
        <td className="btns-td">
          <input
            data-testid="delete-btn"
            className="btn btn-danger"
            type="button"
            value="Excluir"
            onClick={ () => del(expense.id) }
          />
          <input
            data-testid="edit-btn"
            className="btn btn-warning"
            type="button"
            value="Editar"
            onClick={ () => edit(expense) }
          />
        </td>
      </tr>
    );
  }
}

ExpenseRow.propTypes = {
  expense: shape({
    description: string,
    tag: string,
    method: string,
    value: string,
    currency: string,
  }).isRequired,
  del: func.isRequired,
  edit: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  del: (id) => dispatch(deleteExpense(id)),
  edit: (expense) => dispatch(editExpense(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseRow);
