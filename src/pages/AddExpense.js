import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestCurrency, addExpense } from '../actions';

class AddExpense extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChangeAddInput = this.handleChangeAddInput.bind(this);
    this.valueAndDescribe = this.valueAndDescribe.bind(this);
    this.payAndTag = this.payAndTag.bind(this);
  }

  componentDidMount() {
    const { recieveCurrency } = this.props;
    recieveCurrency();
  }

  handleChangeAddInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  valueAndDescribe() {
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            name="value"
            id="value"
            onChange={ this.handleChangeAddInput }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChangeAddInput }
          />
        </label>
      </form>
    );
  }

  payAndTag() {
    return (
      <form>
        <label htmlFor="method">
          Método de pagamento
          <select
            type="select"
            name="method"
            id="method"
            onChange={ this.handleChangeAddInput }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            type="select"
            name="tag"
            id="tag"
            onChange={ this.handleChangeAddInput }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    const { mapCurrencies, thisExpense } = this.props;
    delete mapCurrencies.USDT;
    const { value, description, method, tag } = this.state;
    return (
      <>
        {this.valueAndDescribe()}
        <form>
          <label htmlFor="currency">
            Moeda
            <select
              type="select"
              name="currency"
              id="currency"
              onChange={ this.handleChangeAddInput }
            >
              {Object.values(mapCurrencies)
                .map((currency, index) => <option key={ index }>{currency.code}</option>)}
            </select>
          </label>
        </form>
        {this.payAndTag()}
        <button
          type="reset"
          onClick={ () => {
            thisExpense(this.state);
          } }
        >
          Adicionar despesa
        </button>
        <p>{value}</p>
        <p>{description}</p>
        <p>{method}</p>
        <p>{tag}</p>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  recieveCurrency: () => dispatch(requestCurrency()),
  thisExpense: (expenses) => dispatch(addExpense(expenses)),
});

const mapStateToProps = (state) => ({
  mapCurrencies: state.wallet.currencies,
  currencies: state.wallet.currencies,
  id: state.wallet.id,
});

AddExpense.propTypes = {
  coins: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
