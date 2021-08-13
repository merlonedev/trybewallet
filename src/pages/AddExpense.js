import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestCurrency, addExpense } from '../actions';

class AddExpense extends Component {
  constructor() {
    super();
    this.state = {
      // value: 0,
      // description: '',
      // currency: 'USD',
      // tag: 'Alimentação',
    };
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" name="name" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="name" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <input type="select" name="name" />
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            type="select"
            name="method"
            id="method"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            type="select"
            name="tag"
            id="tag"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  recieveCurrency: () => dispatch(requestCurrency()),
  thisExpense: (expenses) => dispatch(addExpense(expenses)),
});

const mapStateToProps = (state) => ({
  mapCurrencies: state.wallet.currencies,
  currencies: state.wallet.currencies,
  id: state.wallet.id,
});

AddExpense.propTypes = {
  coins: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
