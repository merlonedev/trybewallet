import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import getCurrencies from '../actions/getCurrencies';
import getExpenses from '../actions/getExpenses';

class FormComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      currency: 'USD',
      tag: 'Alimentação',
      method: 'Dinheiro',
      description: '',
      id: -1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchWallet = this.fetchWallet.bind(this);
  }

  async componentDidMount() {
    const { currency } = this.props;
    await this.fetchWallet(currency);
  }

  async fetchWallet(currency) {
    const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const results = await fetchAPI.json();
    delete results.USDT;
    currency(results);
    return results;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleSubmit() {
    const { currency, expenses } = this.props;
    const result = await this.fetchWallet(currency);
    this.setState(({ id }) => ({
      id: id + 1,
      exchangeRates: result,
    }), () => { expenses(this.state); });
  }

  render() {
    const { value, currency, tag, method, description, expenses } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <Input
          value={ value }
          description={ description }
          handleChange={ this.handleChange }
        />
        <Select
          currency={ currency }
          method={ method }
          tag={ tag }
          handleChange={ this.handleChange }
          currencies={ currencies }
        />
        <button
          type="button"
          expenses={ expenses }
          onClick={ () => { this.handleSubmit(); } }
        >
          Adicionar Despesa
        </button>
      </form>
    );
  }
}

FormComplete.propTypes = {
  currency: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currency: (currencies) => dispatch(getCurrencies(currencies)),
  expenses: (expenses) => dispatch(getExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormComplete);
