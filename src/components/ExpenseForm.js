import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchCoinApi from '../services/fetchCoinApi';
import { successFetch, addExpense } from '../actions/wallet';

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.renderCurrency = this.renderCurrency.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.renderCurrency();
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  handleClick() {
    this.renderCurrency();
    const { setExpense } = this.props;
    this.setState((state) => ({
      id: state.id + 1,
    }));
    setExpense(this.state);
  }

  async renderCurrency() {
    const { getCoin } = this.props;
    const currencies = await fetchCoinApi();
    const filteredCurrencies = Object.keys(currencies)
      .filter((coin) => coin !== 'USDT');
    getCoin(
      filteredCurrencies,
    );
    this.setState({
      exchangeRates: currencies,
    });
  }

  render() {
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" name="currency" onChange={ this.handleChange }>
            {currencies
              .map((coin, index) => <option key={ index }>{ coin }</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" name="method" onChange={ this.handleChange }>
            {payment.map((item, index) => <option key={ index }>{ item }</option>)}
          </select>
        </label>
        <label htmlFor="expense">
          Tag
          <select id="expense" name="tag" onChange={ this.handleChange }>
            {tag.map((item, index) => <option key={ index }>{ item }</option>)}
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ () => this.handleClick() }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCoin: (coin) => dispatch(successFetch(coin)),
  setExpense: (expense) => dispatch(addExpense(expense)),
});

ExpenseForm.propTypes = {
  getCoin: PropTypes.func.isRequired,
  setExpense: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
