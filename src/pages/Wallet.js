import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import FormWallet from '../components/formWallet';
import WalletTable from '../components/WalletTable';
import './Wallet.css';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.setTotalExpenses = this.setTotalExpenses.bind(this);
  }

  setTotalExpenses() {
    const { expense } = this.props;
    const totalExpenses = expense.reduce((acc, { value, currency, exchangeRates }) => {
      const { ask } = exchangeRates[currency];
      return acc + (value * ask);
    }, 0);

    return totalExpenses.toFixed(2);
  }

  render() {
    const { loginEmail } = this.props;
    return (
      <header>
        <h1>TRYBEWALLET</h1>
        <p data-testid="email-field">{`Email: ${loginEmail}`}</p>
        <p data-testid="total-field">
          {this.setTotalExpenses()}
        </p>
        <p data-testid="header-currency-field">BRL</p>
        <FormWallet />
        <WalletTable />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  loginEmail: state.user.email,
  expense: state.wallet.expenses,
});

Wallet.propTypes = {
  loginEmail: propTypes.string.isRequired,
  expense: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
