import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dataTable from './dataTable';
import { deleteBtn } from '../actions';

class Table extends React.Component {
  constructor() {
    super();

    this.upExchangeRates = this.upExchangeRates.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  upExchangeRates(item) {
    const { ask } = item.exchangeRates[item.currency];
    const numberASK = +ask;
    return numberASK.toFixed(2);
  }

  renderTable(item) {
    const { value } = item;
    const itemTable = item.exchangeRates[item.currency].ask;
    return (itemTable * value).toFixed(2);
  }

  render() {
    const { expenses, deleteExpense } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {
              dataTable.map((headerTable) => <th key={ headerTable }>{ headerTable }</th>)
            }
          </tr>
        </thead>
        <tbody>
          { expenses.map((item, index) => (
            <tr key={ index }>
              <td>{ item.description }</td>
              <td>{ item.tag }</td>
              <td>{ item.method }</td>
              <td>{ item.value }</td>
              <td>{ item.exchangeRates[item.currency].name }</td>
              <td>{ this.upExchangeRates(item) }</td>
              <td>{ this.renderTable(item) }</td>
              <td>Real</td>
              <td />
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ deleteExpense }
              >
                Deletar
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: ({ target: { value: index } }) => dispatch(
    deleteBtn(index),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})),
}.isRequired;
