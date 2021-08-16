import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    const total = expenses.reduce((acc, { value, currency, exchangeRates }) => (
      acc + parseFloat(exchangeRates[currency].ask) * parseFloat(value)
    ), 0);

    return (
      <header>
        <span>
          Bem vindo
          <h4 data-testid="email-field">{email}</h4>
        </span>
        <span>
          Total gasto:
          <span data-testid="total-field">
            {total}
          </span>
          <span data-testid="header-currency-field"> BRL</span>
        </span>

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
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      currency: PropTypes.string,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(Header);
