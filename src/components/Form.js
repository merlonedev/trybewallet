import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseAmount from './expensesForm/ExpenseAmount';
import ExpenseDescription from './expensesForm/ExpenseDescription';
import SelectCurrency from './expensesForm/SelectCurrency';
import PaymentMethod from './expensesForm/PaymentMethod';
import SelectCategory from './expensesForm/SelectCategory';

class Form extends Component {
  render() {
    const {
      value, description, currency, method, tag, handleChange, expenses,
    } = this.props;
    return (
      <div>
        <form>
          <ExpenseAmount
            value={ value }
            handleChange={ handleChange }
          />
          <ExpenseDescription
            description={ description }
            handleChange={ handleChange }
          />
          <SelectCurrency
            currency={ currency }
            handleChange={ handleChange }
          />
          <PaymentMethod
            method={ method }
            handleChange={ handleChange }
          />
          <SelectCategory
            tag={ tag }
            handleChange={ handleChange }
          />
          <button
            type="button"
            onClick={ expenses }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  expenses: PropTypes.func.isRequired,
};

export default Form;
