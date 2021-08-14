import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './wallet.css';
import WalletHeader from '../components/WalletHeader';
import { thunkExchange } from '../actions';
import WalletValueInput from '../components/WalletValueInput';
import WalletDescriptionInput from '../components/WalletDescriptionInput';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.idCounter = this.idCounter.bind(this);
    this.renderMetPag = this.renderMetPag.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderMoeda = this.renderMoeda.bind(this);
    this.updateExpenses = this.updateExpenses.bind(this);
    this.calculateExpenses = this.calculateExpenses.bind(this);

    this.state = {
      currencies: {},
      totalValue: 0,
      id: -1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  handleChange(event) {
    const { name } = event.target;
    let { value } = event.target;
    if (typeof value === 'number') {
      value = value.toString();
    }
    this.setState({
      [name]: value,
    });
  }

  async updateExpenses() {
    this.idCounter();
    const { fetchExchange } = this.props;
    const { value, description, currency, method, tag, id } = this.state;
    const stateObject = {
      id: id + 1,
      value,
      description,
      currency,
      method,
      tag,
    };
    await fetchExchange(stateObject);
    this.calculateExpenses();
  }

  idCounter() {
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
  }

  async fetchCurrencies() {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      this.setState({
        currencies: data,
      });
    } catch (error) {
      return console.error(error);
    }
  }

  calculateExpenses() {
    const { expensesInfo } = this.props;
    const totalValue = expensesInfo.reduce((acc, { value, currency, exchangeRates }) => {
      const convertedValue = +value * exchangeRates[currency].ask;
      return convertedValue + acc;
    }, 0);
    this.setState({ totalValue });
  }

  renderMetPag() {
    const { method } = this.state;
    return (
      <label htmlFor="met-pagamento">
        Método de pagamento&nbsp;
        <select
          type="text"
          id="met-pagamento"
          name="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag&nbsp;
        <select
          type="text"
          id="tag"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  renderMoeda() {
    const { currencies } = this.state;
    const listaMoedas = Object.keys(currencies);
    const currencyFiltered = listaMoedas
      .filter((item) => item !== 'USDT' && item !== 'DOGE');
    return (
      <label htmlFor="moeda">
        Moeda&nbsp;
        <select
          type="text"
          id="moeda"
          name="currency"
          onChange={ this.handleChange }
        >
          { currencyFiltered
            .map((item) => <option key={ item }>{item}</option>) }
        </select>
      </label>
    );
  }

  render() {
    const { totalValue } = this.state;
    return (
      <div>
        <WalletHeader totalValue={ totalValue } />
        <form className="wallet-form">
          <WalletValueInput handleChange={ this.handleChange } />
          <WalletDescriptionInput handleChange={ this.handleChange } />
          { this.renderMoeda() }
          { this.renderTag() }
          { this.renderMetPag() }
          <button type="button" onClick={ this.updateExpenses }>
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesInfo: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchExchange: (expense) => dispatch(thunkExchange(expense)),
});

Wallet.propTypes = {
  fetchExchange: propTypes.func.isRequired,
  expensesInfo: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
