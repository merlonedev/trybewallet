import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI2, addExpense } from '../actions';
import Input from './Input';
import Select from './Select';
import { payMethodOptions, tagList } from '../helpers/selectOptions';
import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      currency: 'BRL',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };

    this.baseState = this.state;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addExpense(newExpense) {
    const { expenses } = this.props;
    const expensesList = { ...expenses, newExpense };
    return expensesList;
  }

  handleSubmit(e) {
    e.preventDefault();
    const { state, props: { rates, expenseDispatch, ratesDispatch } } = this;

    ratesDispatch();
    const expense = [{ ...state, exchangeRates: rates }];
    expenseDispatch(addExpense(expense));

    this.setState(this.baseState, state.id += 1);
    // baseState tirado de https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d
  }

  handleChange(e) {
    const input = e.target;

    this.setState({
      [input.id]: input.value,
    });
  }

  render() {
    const {
      props: { loading, currencies },
      state: { value, currency, method, tag, description },
    } = this;
    return (
      <div>
        { loading && <h3>Carregando...</h3> }
        <form onSubmit={ this.handleSubmit }>
          <Input id="value" name="value" value={ value } onChange={ this.handleChange } />
          <Select
            id="currency"
            name="Moeda"
            options={ currencies }
            value={ currency }
            onChange={ this.handleChange }
          />
          <Select
            id="payMethod"
            name="Método de pagamento"
            options={ payMethodOptions }
            value={ method }
            onChange={ this.handleChange }
          />
          <Select
            id="tag"
            name="Tag"
            options={ tagList }
            value={ tag }
            onChange={ this.handleChange }
          />
          <Input
            id="description"
            name="Descrição"
            value={ description }
            onChange={ this.handleChange }
          />
          <Button
            type="submit"
            disabled={ false }
            name="Adicionar"
          />
        </form>
      </div>
    );
  }
}

const { bool, arrayOf, string, func, objectOf } = PropTypes;
Form.propTypes = {
  loading: bool.isRequired,
  currencies: arrayOf(string),
  rates: objectOf(objectOf(string)),
  expenses: objectOf(objectOf(string)),
  ratesDispatch: func.isRequired,
  expenseDispatch: func.isRequired,
};

Form.defaultProps = {
  currencies: 'BRL',
  rates: {},
  expenses: 0,
};

const mapStateToProps = (state) => {
  const { rates, expenses } = state.wallet;
  return {
    rates,
    expenses,
  };
};

const mapDispatchToProps = (dispatch) => ({
  ratesDispatch: () => dispatch(fetchAPI2()),
  expenseDispatch: (expense) => dispatch(addExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
