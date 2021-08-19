import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getExchange } from '../actions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.somation = this.somation.bind(this);
  }

  somation() {
    const { expenses } = this.props;
    console.log(expenses);
    if (!expenses.length) return '0';
    const total = expenses
      .map(({ value, exchangeRates, currency }) => +exchangeRates[currency]
        .ask * value)
      .reduce((acc, curr) => acc + curr, 0);
    return total.toFixed(2);
  }

  render() {
    const { email } = this.props;
    const currency = 'BRL';
    return (
      <header>
        <h2 data-testid="email-field">{ email }</h2>
        <h3 data-testid="total-field">
          Despesas totais:
          { this.somation() }
        </h3>
        <h3 data-testid="header-currency-field">{ currency }</h3>
      </header>
    );
  }
}

const mapStatetoProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currentExchange: state.wallet.currentExchange,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.func.isRequired,
};

export default connect(mapStatetoProps)(Header);
