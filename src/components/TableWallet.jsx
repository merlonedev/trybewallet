import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import data from './Table.Data';
import { actionDeleteExpenses } from '../actions';

class TableWallet extends Component {
  constructor(props) {
    super(props);

    this.convertedValue = this.valueUpdate.bind(this);
    this.exchangeUsed = this.UpdateExchange.bind(this);
  }

  valueUpdate(item) {
    const { value } = item;
    const askItem = item.exchangeRates[item.currency].ask;
    return (askItem * value).toFixed(2);
  }

  UpdateExchange(item) {
    const { ask } = item.exchangeRates[item.currency];
    const askNumber = +ask;
    return askNumber.toFixed(2);
  }

  render() {
    const { expenses, deleteItens } = this.props;
    return (
      <thead>
        <tr>
          {data.map((head) => <th key={ head }>{head}</th>)}
        </tr>
        { expenses.map((item, index) => (
          <tr key={ index }>
            <td>{ item.description }</td>
            <td>{ item.tag }</td>
            <td>{ item.method }</td>
            <td>{ item.value }</td>
            <td>{ item.exchangeRates[item.currency].name }</td>
            <td>{ this.UpdateExchange(item) }</td>
            <td>{ this.valueUpdate(item) }</td>
            <td>Real</td>
            <td />
            <button
              type="button"
              value={ index }
              data-testid="delete-btn"
              onClick={ deleteItens }
            >
              Excluir
            </button>

          </tr>
        ))}
      </thead>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  deleteItens: ({ target: { value: index } }) => (
    dispatch(actionDeleteExpenses(index))
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(TableWallet);

TableWallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({})),
  deleteItens: PropTypes.func,
}.isRequired;

// Consultei o repositório da colega Paula Carla, para resolver este reduisito.
// https://github.com/tryber/sd-012-project-trybewallet/blob/paula-carlos-project-trybewallet/src/pages/Wallet.js
