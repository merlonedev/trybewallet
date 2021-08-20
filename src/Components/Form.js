import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchExchangeRate } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { expenses, addExpenses } = this.props;
    addExpenses({
      id: expenses.length,
      value: document.querySelector('#value').value,
      currency: document.querySelector('#moeda').value,
      method: document.querySelector('#payment').value,
      tag: document.querySelector('#tag').value,
      description: document.querySelector('#description').value,
    });
  }

  render() {
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea type="text" id="description" rows="3" cols="10" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            { currencies.map((curr, i) => (
              <option key={ i } value={ curr }>{ curr }</option>)) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(Object).isRequired,
  addExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (expense) => dispatch(fetchExchangeRate(expense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
