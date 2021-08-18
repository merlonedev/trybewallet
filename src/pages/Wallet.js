import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from '../componentes/Table';
import { fetchAPI, actionExpenses, fetchCotation } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      totalValue: 0,
    };
    this.handleExpenses = this.handleExpenses.bind(this);
    this.hC = this.hC.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  hC(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  async handleExpenses() {
    const cotacao = await fetchCotation();
    console.log(cotacao);
    const { id, value, description, currency, method, tag } = this.state;
    const { saveExpense, expenses } = this.props;
    const testState = [...expenses,
      { id, value, description, currency, method, tag, exchangeRates: cotacao }];
    saveExpense(testState);
    this.setState({
      id: id + 1,
    });
    this.sunTotalField();
  }

  async sunTotalField() {
    const { expenses } = this.props;
    console.log(expenses);
    const te = expenses
      .reduce((cont, moeda) => cont + (Number(moeda.exchangeRates[moeda.currency].ask
       * moeda.value)), 0);
    this.setState({
      totalValue: te.toFixed(2),
    });
  }

  render() {
    const { totalValue } = this.state;
    const { email, currencies } = this.props;
    return (
      <div>
        <h1>Carteira</h1>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ totalValue }</p>
        <p data-testid="header-currency-field">BRL</p>
        <form>
          <label htmlFor="value">
            Valor
            <input onChange={ this.hC } id="value" type="text" name="value" />
          </label>
          <label htmlFor="description">
            Descrição
            <input onChange={ this.hC } id="description" type="text" name="description" />
          </label>
          <label htmlFor="currency">
            Moeda
            <select onChange={ this.hC } name="currency" id="currency">
              { currencies.map((coin) => <option key={ coin }>{coin}</option>)}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select onChange={ this.hC } id="method">
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select onChange={ this.hC } name="tag" id="tag">
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
        <button type="button" onClick={ this.handleExpenses }>Adicionar despesa</button>
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchAPI()),
  saveExpense: (expensesState) => dispatch(actionExpenses(expensesState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf().isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf().isRequired,
};
