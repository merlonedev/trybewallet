import React from 'react';
import './Wallet.css';
import Input from '../components/Input';
import Select from '../components/Select';
import TextArea from '../components/TextArea';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valor: 0,
      value: '',
      coin: 'USD',
      tag: 'Alimentação',
      money: 'Dinheiro',
      descricao: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { valor, coin, money, value, tag, descricao } = this.state;
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const options = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form name="form">
        <header>
          <p data-testid="email-field">Email: </p>
          <p data-testid="total-field">
            Despesa Total:
            { valor }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <Input
          onChange={ this.handleChange }
          value={ value }
          label="Valor: "
          type="number"
        />
        <Select
          onChange={ this.handleChange }
          value={ coin }
          label="Moeda: "
          options={ payment }
        />
        <Select
          onChange={ this.handleChange }
          value={ money }
          label="Método de pagamento: "
          options={ payment }
        />
        <Select
          onChange={ this.handleChange }
          value={ tag }
          label="Tag: "
          options={ options }
        />
        <TextArea
          onChange={ this.handleChange }
          value={ descricao }
          label="Descrição: "
          maxLength="50"
        />
      </form>
    );
  }
}

export default Wallet;
