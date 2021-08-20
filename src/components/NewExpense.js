import React from 'react';
import Input from './input';
import Select from './Select';

class NewExpense extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      description: '',
      currencies: [],
      currency: 'USD',
      payment: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  async fetchCurrency() {
    const endpoint = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(endpoint);
    const data = await response.json();
    const currencies = Object.keys(data)
      .filter((currency) => currency !== 'USDT');
    this.setState({ currencies });
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState(() => ({
      [name]: value,
    }));
  }

  renderInputs() {
    const {
      value,
      description,
    } = this.state;

    return (
      <div>
        <Input
          labelText="Valor:"
          name="value"
          inputType="text"
          inputPlaceholder="Valor da Compra"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          labelText="Descrição:"
          name="description"
          inputType="text"
          inputPlaceholder="Descrição"
          value={ description }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  renderSelects() {
    const {
      currencies,
      currency,
      payment,
      tag,
    } = this.state;

    return (
      <div>
        <Select
          options={ currencies }
          labelText="Moeda:"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        />
        <Select
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          labelText="Método de pagamento:"
          name="payment"
          value={ payment }
          onChange={ this.handleChange }
        />
        <Select
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          labelText="Tag:"
          name="tag"
          value={ tag }
          onChange={ this.handleChange }
        />
      </div>
    );
  }

  render() {
    return (
      <form>
        { this.renderInputs() }
        { this.renderSelects() }
      </form>
    );
  }
}

export default NewExpense;
