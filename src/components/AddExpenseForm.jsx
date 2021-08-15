import React, { Component } from 'react';
import LoginInput from './LoginInput';
import Select from './Select';
import fetchAPI from '../services';

const paymentMethods = [
  { name: 'Cartão de Crédito', value: 'credit' },
  { name: 'Dinheiro', value: 'money' },
  { name: 'Cartão de Débito', value: 'debit' },
];

const expenseCategory = [
  { name: 'Alimentação', value: 'food' },
  { name: 'Lazer', value: 'lazer' },
  { name: 'Trabalho', value: 'job' },
  { name: 'Transporte', value: 'transport' },
  { name: 'Saúde', value: 'health' },
];

class AddExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currencyType: '',
      paymentMethod: '',
      category: '',
      currencyTypes: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.getCurrencyTypes = this.getCurrencyTypes.bind(this);
  }

  componentDidMount() {
    this.getCurrencyTypes();
  }

  async getCurrencyTypes() {
    const URL = 'https://economia.awesomeapi.com.br/json/all';
    const results = await fetchAPI(URL);
    const coins = Object.keys(results).map((coin) => ({ name: coin, value: coin })).filter((coin) => coin.name !== 'USDT' && coin.name !== 'DOGE');
    this.setState({ currencyTypes: coins }, () => console.log(this.state));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currencyTypes } = this.state;
    return (
      <form>
        <LoginInput
          name="value"
          labelText="Valor"
          type="text"
          value={ value }
          onChange={ this.handleChange }
        />
        <Select options={ currencyTypes } name="currencyType" labelText="Moeda" onChange={this.handleChange} />
        <Select options={ paymentMethods } name="paymentMethod" labelText="Método de pagamento" onChange={this.handleChange} />
        <Select options={ expenseCategory } name="category" labelText="Tag" onChange={this.handleChange}/>
        <LoginInput
          name="description"
          labelText="Descrição"
          type="text"
          value={ description }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddExpenseForm;
