import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, string, number, shape, bool } from 'prop-types';
import { fetchAPI, addExpense, saveEdit } from '../actions';

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      isEditing: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.saveClick = this.saveClick.bind(this);
  }

  componentDidMount() {
    const { fetchAPI: fetchCurr } = this.props;
    fetchCurr();
  }

  componentDidUpdate() {
    const { editing } = this.props;
    const { isEditing } = this.state;
    if (editing.edit && !isEditing) this.loadEdit(editing);
  }

  loadEdit(editing) {
    const { value, description, currency, method, tag } = editing.expense;
    this.setState({
      value, description, currency, method, tag, isEditing: true,
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  clearState() {
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      isEditing: false,
    });
  }

  handleClick(e) {
    e.preventDefault();
    const {
      fetchAPI: fetchCurr,
      currenciesResp,
      addExpense: addExp,
      expenses,
    } = this.props;
    fetchCurr();
    const id = expenses.length;
    const { value, description, currency, method, tag } = this.state;
    const expenseObj = {
      value,
      description,
      currency,
      method,
      tag,
      id,
      exchangeRates: currenciesResp,
    };
    addExp(expenseObj);
    this.clearState();
  }

  saveClick(e) {
    e.preventDefault();
    const { save, editing } = this.props;
    const { value, description, currency, method, tag } = this.state;
    save({ ...editing.expense, value, description, currency, method, tag });
    this.clearState();
  }

  selectCurrencies(currencies, currency) {
    return (
      <label htmlFor="currency">
        Moeda
        <select
          name="currency"
          id="currency"
          onChange={ this.handleChange }
          data-testid="currency-input"
          value={ currency }
        >
          {currencies.map((cur) => <option key={ cur } value={ cur }>{ cur }</option>)}
        </select>
      </label>
    );
  }

  selectMethod(method) {
    return (
      <label
        htmlFor="method-input"
        value={ method }
        onChange={ this.handleChange }
      >
        Método de pagamento
        <select
          name="method"
          id="method-input"
          value={ method }
          data-testid="method-input"
        >
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
        <select
          name="tag"
          id="tag-input"
          value={ tag }
          data-testid="tag-input"
          onChange={ this.handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  submitButton() {
    const { isEditing } = this.state;
    if (isEditing) {
      return (
        <button type="submit" onClick={ this.saveClick }>
          Editar despesa
        </button>
      );
    }
    return (
      <button type="submit" onClick={ this.handleClick }>
        Adicionar despesa
      </button>
    );
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form action="">
        <label htmlFor="value-input">
          Valor
          <input
            type="number"
            name="value"
            id="value-input"
            value={ value }
            data-testid="value-input"
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
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>
        {this.selectCurrencies((currencies), currency)}
        {this.selectMethod(method)}
        {this.selectTag(tag)}
        {this.submitButton()}
      </form>
    );
  }
}

AddExpenseForm.defaultProps = {
  expenses: [],
  editing: { edit: false, expense: {} },
  currenciesResp: {},
};

AddExpenseForm.propTypes = {
  fetchAPI: func.isRequired,
  addExpense: func.isRequired,
  save: func.isRequired,
  currencies: arrayOf(string).isRequired,
  currenciesResp: shape({
    USD: shape({ code: string, ask: string }),
  }),
  expenses: arrayOf(
    shape({
      id: number,
      value: string,
      description: string,
    }),
  ),
  editing: shape({
    edit: bool,
    expense: shape({
      id: number,
      value: string,
      description: string,
    }),
  }),
};

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchAPI()),
  addExpense: (expense) => dispatch(addExpense(expense)),
  save: (expense) => dispatch(saveEdit(expense)),
});
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  currenciesResp: state.wallet.currenciesResp,
  expenses: state.wallet.expenses,
  editing: state.wallet.editing,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);
