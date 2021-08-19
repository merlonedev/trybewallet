import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const {
      props: { email, expenses },
    } = this;
    let total = 0;
    if (expenses.length > 0) {
      total = expenses.reduce((acc, { value, currency, exchangeRates }) => {
        const adjustValue = parseFloat(value);
        const adjustRate = parseFloat(
          exchangeRates[currency].ask,
        );
        const newValue = adjustValue * adjustRate;
        const adjustNewValue = Math.floor(newValue * 100) / 100;
        return acc + adjustNewValue;
      }, 0).toFixed(2);
    }
    return (
      <div>
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field">
          { `Despesa Total R$${total}`}
        </div>
        <div data-testid="header-currency-field">
          BRL
        </div>
      </div>
    );
  }
}

const { string, object, arrayOf, oneOfType } = PropTypes;
Header.propTypes = {
  email: string.isRequired,
  expenses: oneOfType([arrayOf(string), arrayOf(object)]),
};

Header.defaultProps = {
  expenses: [],
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Header);
