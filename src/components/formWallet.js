import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import successFetch from '../actions/wallet';
import fetchCoinApi from '../services/fetchApi';

class FormWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: [],
    };
    this.renderCurrency = this.renderCurrency.bind(this);
  }

  componentDidMount() {
    this.renderCurrency();
    const { getCoin } = this.props;
    const { coins } = this.state;
    getCoin(coins);
  }

  async renderCurrency() {
    const moedas = await fetchCoinApi();
    const filteredCoins = Object.keys(moedas).filter((coin) => coin !== 'USDT');
    this.setState({
      coins: filteredCoins,
    });
  }

  render() {
    const payment = ['Dinheiro', 'Cartão de Crédito', 'Cartão de Débito'];
    const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    const { coins } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input type="text" id="value" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="text" id="description" />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency">
            <option>BRL</option>
            {coins.map((coin, index) => <option key={ index }>{ coin }</option>)}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment">
            {payment.map((item, index) => <option key={ index }>{ item }</option>)}
          </select>
        </label>
        <label htmlFor="expense">
          Tag
          <select id="expense">
            {tag.map((item, index) => <option key={ index }>{ item }</option>)}
          </select>
        </label>
        <button type="button" onClick={ () => this.renderCurrency() }>console</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoin: (value) => dispatch(successFetch(value)),
});

FormWallet.propTypes = {
  getCoin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FormWallet);
