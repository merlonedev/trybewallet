import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';

class ExpensesForm extends React.Component {
  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  render() {
    const { currencies } = this.props;
    const currenciesFiltered = Object.keys(currencies)
      .filter((currency) => currency !== 'USDT');
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" name="value" />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" aria-label="moeda" name="currency">
            {currenciesFiltered.map((currency) => (
              <option key={ currency }>{currency}</option>
            ))}
          </select>
        </label>
        <label htmlFor="método de pagamento">
          Método de pagamento
          <select id="método de pagamento" aria-label="método de pagamento" name="method">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-de-credito">Cartão de crédito</option>
            <option value="cartao-de-debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense-type">
          Tag
          <select id="expense-type" arial-label="tag" name="tag">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" name="description" />
        </label>
        <button type="button" name="submit-button">
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

ExpensesForm.propTypes = {
  getCurrency: PropTypes.func,
  currencies: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
