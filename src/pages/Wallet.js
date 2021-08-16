import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './wallet.css';
import WalletHeader from '../components/WalletHeader';
import { thunkExchange } from '../actions';
import WalletValueInput from '../components/WalletValueInput';
import WalletDescriptionInput from '../components/WalletDescriptionInput';
import WalletCurrencyInput from '../components/WalletCurrencyInput';
import WalletTagInput from '../components/WalletTagInput';
import WalletPaymentMethod from '../components/WalletPaymentMethod';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.idCounter = this.idCounter.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const { currencies, totalValue } = this.state;
    return (
      <div>
        <WalletHeader totalValue={ totalValue } />
        <form className="wallet-form">
          <WalletValueInput handleChange={ this.handleChange } />
          <WalletDescriptionInput handleChange={ this.handleChange } />
          <WalletCurrencyInput
            handleChange={ this.handleChange }
            currencies={ currencies }
          />
          <WalletTagInput handleChange={ this.handleChange } />
          <WalletPaymentMethod handleChange={ this.handleChange } />
          <button
            className="expense-button"
            type="button"
            onClick={ this.updateExpenses }
          >
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
