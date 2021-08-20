import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import FormWallet from '../components/formWallet';
import './Wallet.css';

class Wallet extends React.Component {
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
    const { loginEmail } = this.props;
    return (
      <div>
        <header>
          <div data-testid="email-field">{ `Email: ${loginEmail}` }</div>
          <div data-testid="total-field">
            { this.setTotalExpenses() }
          </div>
          <div data-testid="header-currency-field">BRL</div>
          <FormWallet />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  loginEmail: propTypes.string.isRequired,
  expenses: propTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
