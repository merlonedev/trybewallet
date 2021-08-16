import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  totalExpenses() {
    const { expenses } = this.props;
    if (expenses.length < 1) return 0;
    const accumulate = expenses.reduce((acc, expense) => {
      const { [expense.currency]: currency } = expense.exchangeRates;
      acc += currency.ask * expense.value;
      return acc;
    }, 0);
    return accumulate;
  }

  render() {
    const { email } = this.props;
    const expense = this.totalExpenses();
    const total = expense.toFixed(2);
    return (
      <header>
        <h1>MyWallet</h1>
        <div>
          <p data-testid="email-field">{`Email: ${email}`}</p>
          <p data-testid="total-field">
            {`Dispesas Total: $ ${total} `}
            <span data-testid="header-currency-field">BRL</span>
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
