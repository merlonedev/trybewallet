import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from './Select';
import { fetchCurrencies, fetchCurrency } from '../actions/fetchCurrency';
import { addExpense } from '../actions/expenses';

const FOOD = 'Alimentação';
const MONEY = 'Dinheiro';
const COIN = 'USD';

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyList: [],
      description: '',
      currency: COIN,
      method: MONEY,
      tag: FOOD,
      value: 0,
    };

    this.handleCategory = this.handleCategory.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.categoryTag = this.categoryTag.bind(this);
    this.paymentMethod = this.paymentMethod.bind(this);
    this.loadCurrencyList = this.loadCurrencyList.bind(this);
    this.newExpense = this.newExpense.bind(this);
    this.insertInputs = this.insertInputs.bind(this);
  }

  componentDidMount() {
    const { fetchAllMoney } = this.props;
    fetchAllMoney().then(() => this.loadCurrencyList());
  }

  handleCurrency(event) {
    this.setState({ currency: event.target.value });
  }

  handlePayment(event) {
    this.setState({ method: event.target.value });
  }

  handleCategory(event) {
    this.setState({ tag: event.target.value });
  }

  handleDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleValue(event) {
    this.setState({ value: event.target.value });
  }

  paymentMethod() {
    return [
      { value: MONEY, content: MONEY },
      { value: 'Cartão de crédito', content: 'Cartão de crédito' },
      { value: 'Cartão de débito', content: 'Cartão de débito' },
    ];
  }

  categoryTag() {
    return [
      { value: FOOD, content: FOOD },
      { value: 'Lazer', content: 'Lazer' },
      { value: 'Trabalho', content: 'Trabalho' },
      { value: 'Transporte', content: 'Transporte' },
      { value: 'Saúde', content: 'Saúde' },
    ];
  }

  loadCurrencyList() {
    const { exchangeRates } = this.props;
    const mylist = Object.keys(exchangeRates).filter((name) => name !== 'USDT');
    const newList = [];
    mylist.forEach((item) => {
      newList.push({ value: item, content: item });
    });
    this.setState({ currencyList: newList });
  }

  insertInputs() {
    const { description, value } = this.state;
    return (
      <div>
        <label htmlFor="value-input">
          Valor:
          <input
            id="value-input"
            type="number"
            placeholder="Exemplo: 100"
            value={ value }
            onChange={ this.handleValue }
          />
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            id="description-input"
            type="text"
            placeholder="Exemplo: McDonalds"
            value={ description }
            onChange={ this.handleDescription }
          />
        </label>
      </div>
    );
  }

  newExpense() {
    const { fetchAllMoney, exchangeRates, addNewExpense } = this.props;
    const { currency, method, description, tag, value } = this.state;
    const newExpense = {
      currency,
      method,
      tag,
      description,
      value,
      exchangeRates,
    };
    fetchAllMoney();
    addNewExpense(newExpense);
  }

  render() {
    const { currencyList, currency, method, tag } = this.state;
    const { exchangeRates } = this.props;
    if (exchangeRates.length === 0) return <p>Loading...</p>;
    return (
      <form name="add-expenses">
        { this.insertInputs() }
        <Select
          name="currency-select"
          labelText="Moeda:"
          selectedOption={ currency }
          onSelectedChange={ this.handleCurrency }
          optionList={ currencyList }
        />
        <Select
          name="payment-select"
          labelText="Método de Pagamento:"
          selectedOption={ method }
          onSelectedChange={ this.handlePayment }
          optionList={ this.paymentMethod() }
        />
        <Select
          name="category-select"
          labelText="Tag:"
          selectedOption={ tag }
          onSelectedChange={ this.handleCategory }
          optionList={ this.categoryTag() }
        />
        <button
          name="add-expense-btn"
          type="button"
          onClick={ this.newExpense }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  exchangeRates: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllMoney: () => dispatch(fetchCurrencies()),
  fetchMoney: (code) => dispatch(fetchCurrency(code)),
  addNewExpense: (expense) => dispatch(addExpense(expense)),
});

AddExpense.propTypes = {
  exchangeRates: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  // fetchMoney: PropTypes.func.isRequired,
  fetchAllMoney: PropTypes.func.isRequired,
  addNewExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
