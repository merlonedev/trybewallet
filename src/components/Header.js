import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, allExpenses } = this.props;
    return (
      <header>
        <p>
          E-mail:
          <span data-testid="email-field">
            { email }
          </span>
        </p>
        <p>
          Despesa Total: R$
          <span data-testid="total-field">
            { Math.round(allExpenses * 100) / 100 }
          </span>
          <span data-testid="header-currency-field">BRL</span>
        </p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  allExpenses: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  allExpenses: state.wallet.expenses
    .reduce((
      acc,
      { value, currency, exchangeRates },
    ) => {
      if (Object.keys(exchangeRates).length) {
        return acc + (parseFloat(+exchangeRates[currency].ask) * value);
      }
      return acc;
    }, 0),
});

export default connect(mapStateToProps)(Header);
