import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { arrayOf, string } from 'prop-types';
import fetchApi from './FetchApi';
// import Button from './Button';

class Expenses extends Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { currency, onClickButton, onChangeButton, description, method, tag } = this.props;
    return (
      <form>
        {/* <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            value={ value }
            onChange={ onChangeButton }
          />
        </label> */}
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            value={ description }
            onChange={ onChangeButton }
          />
        </label>
        <label htmlFor="coin">
          Moeda
          <select id="coin" value={ currency } onChange={ onChangeButton }>
            { currency.map((cur) => (<option key={ cur }>{ cur }</option>)) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de Pagamento
          <select id="payment" value={ method } onChange={ onChangeButton }>
            <option value="money">Dinheiro</option>
            <option value="creditCard">Cartão de crédito</option>
            <option value="debitCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" value={ tag } onChange={ onChangeButton }>
            <option value="alimentation">Alimentação</option>
            <option value="recreation">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ onClickButton }>Adicionar Despesa</button>
      </form>
    );
  }
}

Expenses.propTypes = PropTypes.exact({
  getCurrencies: PropTypes.func.isRequired,
  currency: arrayOf(string).isRequired,
  onClickButton: PropTypes.func.isRequired,
}).isRequired;

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchApi()),
});

const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
