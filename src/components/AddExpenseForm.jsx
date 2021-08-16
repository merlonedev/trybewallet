import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginInput from './LoginInput';
import Select from './Select';
import { actionAddExpense, fetchCurrencies } from '../actions';
import { expenseCategory, paymentMethods } from '../services';

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'USD',
      tag: 'Alimentação',
      description: '',
      method: 'Cartão de crédito',
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchAPICurrencies } = this.props;
    fetchAPICurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    // console.log(target);
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { expenses, addExpense } = this.props;

    addExpense(this.state, expenses.length);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <LoginInput
          name="value"
          labelText="Valor"
          type="number"
          value={ value }
          onChange={ this.handleChange }
        />
        <Select
          selectValue={ currency }
          options={ currencies }
          name="currency"
          labelText="Moeda"
          onChange={ this.handleChange }
        />
        <Select
          selectValue={ method }
          options={ paymentMethods }
          name="method"
          labelText="Método de pagamento"
          onChange={ this.handleChange }
        />
        <Select
          selectValue={ tag }
          options={ expenseCategory }
          name="tag"
          labelText="Tag"
          onChange={ this.handleChange }
        />
        <LoginInput
          name="description"
          labelText="Descrição"
          type="text"
          value={ description }
          onChange={ this.handleChange }
        />
        <button type="submit">
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAPICurrencies: () => dispatch(fetchCurrencies()),
  addExpense: (state, id) => dispatch(actionAddExpense(state, id)),
});

AddExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
  expenses: PropTypes.arrayOf(PropTypes.object),
  fetchAPICurrencies: PropTypes.func,
  addExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(AddExpenseForm);
