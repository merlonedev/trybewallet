import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { arrayOf, string } from 'prop-types';
import fetchApi from './FetchApi';

class Expenses extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currency } = this.props;
    console.log(currency);
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin">
            { currency.map((cur) => (<option key={ cur }>{ cur }</option>)) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select id="payment">
            <option value="money">Dinheiro</option>
            <option value="creditCard">Cartão de crédito</option>
            <option value="debitCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag">
            <option value="alimentation">Alimentação</option>
            <option value="recreation">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Expenses.propTypes = PropTypes.exact({
  getCurrencies: PropTypes.func.isRequired,
  currency: arrayOf(string).isRequired,
}).isRequired;

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchApi()),
});

const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
