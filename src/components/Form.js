import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, addExpense } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchAPI: fetchCurr } = this.props;
    fetchCurr();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    const {
      fetchAPI: fetchCurr,
      currencies,
      addExpense: addExp,
      expenses,
    } = this.props;
    fetchCurr();
    const id = expenses.length ? expenses.length : 0;
    const expenseObj = { ...this.state, id, exchangeRates: currencies };
    addExp(expenseObj);
  }

  selectCurrencies(currencies) {
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          onChange={ this.handleChange }
        >
          {currencies.map((cur) => <option key={ cur } value={ cur }>{ cur }</option>)}
        </select>
      </label>
    );
  }

  selectMethod(method) {
    return (
      <label
        htmlFor="input-payment"
        value={ method }
        onChange={ this.handleChange }
      >
        Método de pagamento
        <select name="method" id="input-payment">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  selectTag(tag) {
    return (
      <label htmlFor="tag-input">
        Tag
        <select name="tag" id="tag-input" value={ tag } onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form action="">
        <label htmlFor="input-value">
          Valor
          <input
            type="number"
            name="value"
            id="input-value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        {this.selectCurrencies(Object.keys(currencies), currency)}
        {this.selectMethod(method)}
        {this.selectTag(tag)}
        <button
          id="add"
          type="submit"
          name="Adicionar despesa"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

Form.defaultProps = {
  expenses: [],
};

Form.propTypes = {
  fetchAPI: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchAPI()),
  addExpense: (expense) => dispatch(addExpense(expense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
