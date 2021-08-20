import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';
import getCurrencies from '../actions/getCurrencies';
import getExpenses from '../actions/getExpenses';

class Form extends Component {
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
    this.fetchCurrencies = this.fetchCurrencies.bind(this);
  }

  async componentDidMount() {
    const { currency } = this.props;
    await this.fetchCurrencies(currency);
  }

  async fetchCurrencies(currency) {
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const response = await fetchApi.json();
    delete response.USDT;
    currency(response);
    return response;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async handleSubmit() {
    const { currency, expenses } = this.props;
    const response = await this.fetchCurrencies(currency);
    this.setState(({ id }) => ({
      id: id + 1,
      exchangeRates: response,
    }), () => { expenses(this.state); });
  }

  render() {
    const { tag, method, description, value, currency, expenses } = this.state;
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
          currencies={ currencies }
          handleChange={ this.handleChange }
          tag={ tag }
          method={ method }
        />
        <button
          type="button"
          onClick={ () => { this.handleSubmit(); } }
          expenses={ expenses }
        >
          Adicionar Despesas
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.object,
  currency: PropTypes.func,
  expenses: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currency: (currencies) => dispatch(getCurrencies(currencies)),
  expenses: (expenses) => dispatch(getExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
