import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getApi from '../api';
import { getCurrencies, requestExpenses } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      paymentMethod: 'Dinheiro',
      category: 'Alimentação',

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
      paymentMethod,
      category,
    } = this.state;
    const expenses = {
      id,
      value,
      description,
      currency,
      method: paymentMethod,
      tag: category,
    };
    requestExpensesData(expenses);
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  render() {
    const { currencies } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input type="text" name="value" id="valor" onChange={ this.handleInputs }/>
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" name="description" id="descricao" onChange={ this.handleInputs }/>
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            name="currency"
            id="currency"
            onChange={ this.handleInputs }
          >
            {/* <option>Teste<option/> */}
            { currencies.map((coin, index) => (
              <option key={ index }>
                { coin }
              </option>))}
          </select>
        </label>
        <label htmlFor="category">
          Tag:
          <select name="category" id="category" onChange={ this.handleInputs }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select name="paymentMethod" id="pagamento" onChange={ this.handleInputs }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <button name="button" type="button" onClick={ () => this.submitExpenses() }>
          Adicionar despesa
        </button>
      </form>
    );
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
