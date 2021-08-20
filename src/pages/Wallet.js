import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from '../Components/ExpenseForm';
import { currencies } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.expensesSum = this.expensesSum.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  expensesSum() {
    const { expenses } = this.props;
    const newTotal = expenses.reduce((acc, { value, currency, exchangeRates }) => (
      acc + value * (exchangeRates[currency].ask)
    ), 0);
    return newTotal;
  }

  render() {
    const { email } = this.props;
    const { expensesSum } = this;
    return (
      <>
        <header>
          <div>Trybe Wallet</div>
          <div>
            Email:
            <p data-testid="email-field">{` ${email}`}</p>
          </div>
          <div>
            <p data-testid="total-field">
              {
                `R$${expensesSum().toFixed(2)}`
              }
            </p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </header>
        <ExpenseForm />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(currencies()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf),
};

Wallet.defaultProps = {
  expenses: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
