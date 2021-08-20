import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: [],
    };

    this.addCoins = this.addCoins.bind(this);
  }

  async componentDidMount() {
    const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resultAPI = await fetchAPI.json();
    const resultCoins = Object.keys(resultAPI).filter((key) => key !== 'USDT');
    this.addCoins(resultCoins);
  }

  async addCoins(coinsList) {
    this.setState(() => ({
      coins: coinsList,
    }));
  }

  render() {
    const { coins } = this.state;
    console.log(coins);

    return (
      <div>
        <label htmlFor="expenseValue">
          Valor
          <input id="expenseValue" type="text" />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" type="text" />
        </label>
        <label htmlFor="coins">
          Moeda
          <select id="coins">
            {coins.map((coin, index) => <option key={ index }>{coin}</option>)}
          </select>
        </label>
        <label htmlFor="payMethods">
          Método de pagamento
          <select id="payMethods">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select id="category">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Form;
