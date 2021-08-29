import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchCurrencies,
  insertExpense,
  sumExpenses,
  updateExpense } from '../actions';
import Currencies from './Currencies';

const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};
class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickUpdate = this.handleClickUpdate.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleClick() {
    const { addExpense, getCurrencies, setTotal } = this.props;
    addExpense({ ...this.state, exchangeRates: await getCurrencies() });
    setTotal();
    this.setState(INITIAL_STATE);
  }

  handleClickUpdate() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const { updateExpenses, idExpense, setTotal } = this.props;

    updateExpenses({
      id: idExpense,
      value,
      description,
      currency,
      method,
      tag,
    });
    this.setState(INITIAL_STATE);
    setTotal();
  }

  buttonFunctions() {
    const { editing } = this.props;
    if (!editing) {
      return (
        <button
          type="button"
          onClick={ this.handleClick }
          className="expenseControlButton"
        >
          Adicionar despesa
        </button>
      );
    } if (editing) {
      return (
        <button
          type="button"
          onClick={ this.handleClickUpdate }
          className="expenseControlButton"
        >
          Editar despesa
        </button>
      );
    }
  }

  selectCurrenciesFunction() {
    const { currency } = this.state;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          onChange={ this.handleChange }
          name="currency"
          data-testid="currency-input"
          className="formInputs"
          value={ currency }
        >
          <Currencies />
        </select>
      </label>
    );
  }

  selectPaymentFunction() {
    const { method } = this.state;
    return (
      <label htmlFor="payment">
        Método de pagamento:
        <select
          id="payment"
          onChange={ this.handleChange }
          name="method"
          data-testid="method-input"
          className="formInputs"
          value={ method }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  selectTagFunction() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag:
        <select
          id="tag"
          onChange={ this.handleChange }
          name="tag"
          data-testid="tag-input"
          className="formInputs"
          value={ tag }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { value, description } = this.state;
    return (
      <section>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              data-testid="value-input"
              onChange={ this.handleChange }
              type="number"
              name="value"
              id="value"
              value={ value }
            />
          </label>
          {this.selectCurrenciesFunction()}
          {this.selectPaymentFunction()}
          {this.selectTagFunction()}
          <label htmlFor="description">
            Descrição:
            <input
              onChange={ this.handleChange }
              type="text"
              name="description"
              id="description"
              data-testid="description-input"
              value={ description }
            />
          </label>
          {this.buttonFunctions()}
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  editing: state.wallet.editing,
  idExpense: state.wallet.idExpense,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  addExpense: (state) => dispatch(insertExpense(state)),
  updateExpenses: (keys) => dispatch(updateExpense(keys)),
  setTotal: () => dispatch(sumExpenses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);

FormComponent.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  setTotal: PropTypes.func.isRequired,
  editing: PropTypes.bool,
  idExpense: PropTypes.number,
  updateExpenses: PropTypes.func.isRequired,
};

FormComponent.defaultProps = {
  editing: false,
  idExpense: 0,
};
