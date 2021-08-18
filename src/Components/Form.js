import React, { Component } from 'react';

class Form extends Component {

  componentDidMount() {
    async function fetchAPI() {
      const APIlink = 'https://economia.awesomeapi.com.br/json/all';
      const result = await fetch(APIlink);
      const currencies = await result.json();
      console.log(currencies);
      return currencies;
    };
    fetchAPI()
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea type="text" id="description" rows="3" cols="10" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            {/* { currencies.map(({ code }) => <option value={ code }>{ code }</option>) } */}
            <option value="BRL" selected>BRL</option>
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
           <option value="money" selected>Dinheiro</option>
           <option value="credit">Cartão de Crédito</option>
           <option value="debit">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="food" selected>Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transportation">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
