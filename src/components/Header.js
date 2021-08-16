import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    const total = expenses.reduce((acc, { value, currency, exchangeRates }) => (
      acc + parseFloat(exchangeRates[currency].ask) * parseFloat(value)
    ), 0).toFixed(2);

    return (
      <header>
        <span>
          Bem vindo:
          <span data-testid="email-field">
            {' '}
            { email }
            {' '}
          </span>
        </span>
        <br />
        <sapn>
          Total gasto:
          <span data-testid="total-field">
            {' '}
            {total}
            {' '}
            <span data-testid="header-currency-field"> BRL</span>
          </span>
        </sapn>

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
