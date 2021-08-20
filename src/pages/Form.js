import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getApi from '../api';
import { getCurrencies, requestExpenses } from '../actions';
// import Category from './components/Category';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',

    };
    this.returnApi = this.returnApi.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.submitExpenses = this.submitExpenses.bind(this);
  }

  componentDidMount() {
    this.returnApi();
  }

  async returnApi() {
    const getCoin = await getApi();
    const listCoin = Object.keys(getCoin).filter((coin) => coin !== 'USDT');
    const { sendCurrenciesToStore } = this.props;
    sendCurrenciesToStore(listCoin);
    this.setState({ currencies: listCoin });
  }

  handleInputs({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  submitExpenses() {
    const { requestExpensesData } = this.props;
    const {
      id,
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const payMethod = method;
    const payTag = tag;
    const expenses = {
      id,
      value,
      description,
      currency,
      method: payMethod,
      tag: payTag,
    };
    requestExpensesData(expenses);
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  renderPage() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" name="value" id="value" onChange={ this.handleInputs } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleInputs }
          />
        </label>
      </form>);
  }

  renderPage2() {
    return (
      <form>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag" onChange={ this.handleInputs }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>);
  }

  render() {
    const { currencies } = this.state;
    return (
      <div>
        { this.renderPage() }
        <form>
          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              id="currency"
              onChange={ this.handleInputs }
            >
              { currencies.map((coin, index) => (
                <option key={ index }>
                  { coin }
                </option>))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select name="method" id="method" onChange={ this.handleInputs }>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
            {/* <Category onChangeOpt={ this.handleInputs } /> */}
          </label>
          { this.renderPage2() }
          <button name="button" type="button" onClick={ () => this.submitExpenses() }>
            Adicionar despesa
          </button>
        </form>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendCurrenciesToStore: (currencies) => dispatch(getCurrencies(currencies)),
  requestExpensesData: (expense) => dispatch(requestExpenses(expense)),
});

Form.propTypes = {
  sendCurrenciesToStore: PropTypes.arrayOf(PropTypes.object),
  requestExpensesData: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(null, mapDispatchToProps)(Form);
