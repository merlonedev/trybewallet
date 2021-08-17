import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPICurrencie, fetchAPIExpense } from '../actions';
import AddCurrency from './Forms-Function/AddCurrency';
import AddExpDescription from './Forms-Function/AddExpDescription';
import AddExpense from './Forms-Function/AddExpense';
import CategorySelection from './Forms-Function/CategorySelection';
import PaymentMetod from './Forms-Function/PaymentMetod';
import Button from './Button';
// Q8
class Form extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      // exchangeRates: {},

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // Q8

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
    // console.log(getCurrencies);
  }

  // Q8
  // pricesUpdate() {
  //   const { getPrice } = this.props;
  //   getPrice();
  //   console.log(getPrice);
  // }

  handleChange({ target }) {
    const { name, value } = target;
    console.log({ name, value });
    this.setState({ [name]: value });
  }

  // Q8
  handleSubmit() {
    const { getPrice } = this.props;
    getPrice(this.state);
  }

  render() {
    // Q8
    const { handleChange, handleSubmit } = this;
    const { value, description, currency, method, tag } = this.state;
    return (
      // Q8
      <form>
        <AddCurrency
          value={ currency }
          handleChange={ handleChange }
        />
        <AddExpDescription
          value={ description }
          handleChange={ handleChange }
        />
        <AddExpense
          value={ value }
          handleChange={ handleChange }
        />
        <CategorySelection
          value={ tag }
          handleChange={ handleChange }
        />
        <PaymentMetod
          value={ method }
          handleChange={ handleChange }
        />
        {/* questão8 - button */}
        <Button handleSubmit={ handleSubmit } text="Adicionar despesa" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchAPICurrencie()),
  getPrice: (state) => dispatch(fetchAPIExpense(state)),
});

Form.propTypes = {
  wallet: PropTypes.shape({
    currencies: PropTypes.shape(),
  }).isRequired,
  getCurrencies: PropTypes.func.isRequired,
  getPrice: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
