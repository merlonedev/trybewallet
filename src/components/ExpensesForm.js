import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, addExpenseAction } from '../actions';

class ExpensesForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleInput = this.handleInput.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  resetState() {
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  addExpense() {
    const { getCurrency, currencies, sendExpense } = this.props;
    const { resetState } = this;
    getCurrency();
    const newExpense = {
      ...this.state,
      exchangeRates: currencies,
    };
    sendExpense(newExpense);
    this.setState((previousState) => ({ id: previousState.id + 1 }));
    resetState();
  }

  render() {
    const { handleInput, addExpense } = this;
    const { currencies } = this.props;
    const currenciesFiltered = Object.keys(currencies)
      .filter((currency) => currency !== 'USDT');
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input id="valor" name="value" onChange={ handleInput } />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" aria-label="moeda" name="currency" onChange={ handleInput }>
            {currenciesFiltered.map((currency) => (
              <option key={ currency }>{currency}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" aria-label="method" name="method" onChange={ handleInput }>
            <option value="dinheiro">Dinheiro</option>
            <option value="cartao-de-credito">Cartão de crédito</option>
            <option value="cartao-de-debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expense-type">
          Tag
          <select id="expense-type" arial-label="tag" name="tag" onChange={ handleInput }>
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" name="description" onChange={ handleInput } />
        </label>
        <button type="button" name="submit-button" onClick={ addExpense }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
  sendExpense: (expenses) => dispatch(addExpenseAction(expenses)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

ExpensesForm.propTypes = {
  getCurrency: PropTypes.func,
  currencies: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
