import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { props: { getEmail, getExpenses, getCurrencies } } = this;
    console.log(getCurrencies);
    return (
      <div>
        <div data-testid="email-field">
          { getEmail }
        </div>
        <div data-testid="total-field">
          { getExpenses }
        </div>
        <div data-testid="header-currency-field">
          { getCurrencies }
        </div>
      </div>
    );
  }
}

const { string, number } = PropTypes;
Header.propTypes = {
  getEmail: string.isRequired,
  getExpenses: number.isRequired,
  getCurrencies: string,
};

Header.defaultProps = {
  getCurrencies: 'BRL',
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getExpenses: state.wallet.wallet.expenses,
  getCurrencies: state.wallet.wallet.currencies,
});

export default connect(mapStateToProps)(Header);
