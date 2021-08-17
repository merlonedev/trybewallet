import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';

class ListExpenses extends React.Component {
  constructor() {
    super();

    this.deleteExpense = this.deleteExpense.bind(this);
  }

  calculateValue() {
    const { expense } = this.props;
    const { currency, value, exchangeRates } = expense;
    const { [currency]: objCurrency } = exchangeRates;
    const { ask } = objCurrency;
    const total = ask * parseInt(value, 10);
    return total;
  }

  deleteExpense() {
    const { removeExpe, expense } = this.props;
    removeExpe(removeExpe(expense.id));
  }

  render() {
    const { expense } = this.props;
    const { description, tag, method, value, currency, exchangeRates } = expense;
    const { [currency]: moeda } = exchangeRates;
    const { name, ask } = moeda;
    const cambio = this.calculateValue();
    const newName = name.split('/')[0];
    console.log(expense);
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{`${value}`}</td>
        <td>{newName}</td>
        <td>{Number(ask).toFixed(2)}</td>
        <td>{cambio.toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            onClick={ this.deleteExpense }
            data-testid="delete-btn"
          >
            deletar
          </button>
        </td>
      </tr>
    );
  }
}

ListExpenses.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    exchangeRates: PropTypes.shape(PropTypes.object),
  }).isRequired,
  removeExpe: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeExpe: (value) => dispatch(removeExpense(value)),
});

export default connect(null, mapDispatchToProps)(ListExpenses);
