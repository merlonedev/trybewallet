import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCurrenciesAction,
  saveExpenseAction,
  updateTotalPriceAction,
} from '../actions/index';

class AddExpensesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      id: 0,
      value: '',
      currency: 'USD',
      payment: 'Cartão de crédito',
      tag: 'Alimentação',
      description: '',
    };
    this.getApi = this.getApi.bind(this);
    this.hC = this.hC.bind(this);
    this.createExpense = this.createExpense.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.calculatePrice = this.calculatePrice.bind(this);
  }

  async componentDidMount() {
    const { getCurrencies } = this.props;
    this.getApi(getCurrencies);
  }

  async getApi(fn) {
    const api = 'https://economia.awesomeapi.com.br/json/all';
    const result = await fetch(api).then((response) => response.json());
    const filtredKeys = Object.keys(result).filter((key) => key !== 'USDT');
    delete result.USDT;
    this.setState({ currencies: filtredKeys });
    if (fn !== undefined) fn(result);
  }

  calculatePrice() {
    const { expenses, updateTotalPrice } = this.props;
    let newPrice = 0;
    expenses.forEach((expense) => {
      const currentValue = expense.value
        * expense.exchangeRates[expense.currency].ask;
      newPrice += currentValue;
      // const fixedValue = currentValue.toFixed(2);
      // console.log(fixedValue);
    });
    const fixedPrice = newPrice.toFixed(2);
    updateTotalPrice(fixedPrice);
  }

  hC({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleClick() {
    this.getApi(this.createExpense);
  }

  createExpense(data) {
    const { value, currency, payment, tag, description, id } = this.state;
    const { saveExpense } = this.props;
    const expense = {
      id,
      value,
      currency,
      method: payment,
      tag,
      description,
      exchangeRates: data,
    };
    const newId = id + 1;
    this.setState({ id: newId,
      value: '',
      currency: 'USD',
      payment: 'Cartão de crédito',
      tag: 'Alimentação',
      description: '',
    });
    saveExpense(expense);
    this.calculatePrice();
    return expense;
  }

  render() {
    const { currencies } = this.state;
    return (
      <form>
        <label htmlFor="expense-value">
          Valor
          <input type="number" id="expense-value" name="value" onChange={ this.hC } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" name="currency" onChange={ this.hC }>
            { currencies.map((currency) => (
              <option
                key={ currency }
                value={ currency }
              >
                { currency }
              </option>
            )) }
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select id="payment-method" name="payment" onChange={ this.hC }>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Dinheiro">Dinheiro</option>
          </select>
        </label>
        <label htmlFor="tag">
          tag
          <select id="tag" name="tag" onChange={ this.hC }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" name="description" onChange={ this.hC } />
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: (data) => dispatch(getCurrenciesAction(data)),
  saveExpense: (expense) => dispatch(saveExpenseAction(expense)),
  updateTotalPrice: (price) => dispatch(updateTotalPriceAction(price)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

AddExpensesForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
  updateTotalPrice: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensesForm);
