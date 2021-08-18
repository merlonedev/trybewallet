import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends Component {
  constructor(props) {
    super(props);

    this.setTotalExpenses = this.setTotalExpenses.bind(this);
  }

  setTotalExpenses() {
    const { expenses } = this.props;
    const totalExpenses = expenses.reduce((acc, { value, currency, exchangeRates }) => {
      const { ask } = exchangeRates[currency];
      return acc + (value * ask);
    }, 0);

    return totalExpenses.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">
          { email }
        </p>
        <p data-testid="total-field">
          { this.setTotalExpenses() }
        </p>
        <p data-testid="header-currency-field"> BRL </p>
        <ExpenseForm />
        <ExpenseTable />
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  // total: state.wallet.total,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isrequired;

export default connect(mapStateToProps)(Wallet);
