import React from 'react';
import './Wallet.css';
import Input from '../components/Input';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    const { coin, money, value, tag, descricao } = this.state;
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const options = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form name="form">
        <Header />
        <Input
          name="value"
          onChange={ this.handleChange }
          value={ value }
          label="Valor: "
          type="number"
        />
        <Select
          name="coin"
          onChange={ this.handleChange }
          value={ coin }
          label="Moeda: "
          options={ payment }
        />
        <Select
          name="money"
          onChange={ this.handleChange }
          value={ money }
          label="Método de pagamento: "
          options={ payment }
        />
        <Select
          name="tag"
          onChange={ this.handleChange }
          value={ tag }
          label="Tag: "
          options={ options }
        />
        <TextArea
          name="descricao"
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
