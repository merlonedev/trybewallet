import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense, sumExpenses, editExpense } from '../actions';

class BodyTable extends Component {
  handleRemoveClick(id) {
    const { removeExpense, setTotal } = this.props;
    removeExpense(id);
    setTotal();
  }

  handleEditClick(id) {
    const { editingExpense } = this.props;
    editingExpense(id);
  }

  editButton(id) {
    return (
      <button
        type="button"
        data-testid="edit-btn"
        onClick={ () => this.handleEditClick(id) }
      >
        Editar
      </button>
    );
  }

  removeButton(id) {
    return (
      <button
        type="button"
        data-testid="delete-btn"
        onClick={ () => this.handleRemoveClick(id) }
      >
        Deletar
      </button>
    );
  }

  render() {
    const { expenses } = this.props;
    if (!expenses) return null;
    return (
      <tbody>
        { expenses.map((expense) => {
          const {
            id,
            description,
            tag,
            method,
            value,
            currency,
            exchangeRates: { [currency]: { name, ask } },
          } = expense;

          const [actualCurrency] = name.split('/');
          const exchange = (+ask).toFixed(2);
          const convertedValue = (value * ask).toFixed(2);
          const conversionCurrency = 'Real';

          return (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ actualCurrency }</td>
              <td>{ exchange }</td>
              <td>{ convertedValue }</td>
              <td>{ conversionCurrency }</td>
              <td>
                { this.editButton(id)}
                {this.removeButton(id)}
              </td>
            </tr>
          );
        }) }
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  editingExpense: (id) => dispatch(editExpense(id)),
  removeExpense: (id) => dispatch(deleteExpense(id)),
  setTotal: () => dispatch(sumExpenses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BodyTable);

BodyTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    exchangeRates: PropTypes.shape(PropTypes.object.isRequired).isRequired,
  })).isRequired,
  removeExpense: PropTypes.func.isRequired,
  setTotal: PropTypes.func.isRequired,
  editingExpense: PropTypes.func.isRequired,
};
