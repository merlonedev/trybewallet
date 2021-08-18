import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: 'BRL',
    };
  }

  sumTotal() {
    const { expenses } = this.props;
    if (expenses.length < 1) return 0;
    const total = expenses.reduce((acc, expense) => {
      const { [expense.currency]: coinCurrency } = expense.exchangeRates;
      acc += coinCurrency.ask * expense.value;
      return acc;
    }, 0);
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;
    const { coins } = this.state;
    return (
      <header>
        {/* <img /> */}
        <span data-testid="email-field">
          {email}
        </span>
        <span data-testid="total-field">
          { this.sumTotal() }
        </span>
        <span data-testid="header-currency-field">
          {coins}
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
