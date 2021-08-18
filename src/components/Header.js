import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { props: { email, expenses, currencies } } = this;
    return (
      <div>
        <div data-testid="email-field">
          { email }
        </div>
        <div data-testid="total-field">
          { expenses }
        </div>
        <div data-testid="header-currency-field">
          { currencies }
        </div>
      </div>
    );
  }
}

const { string, number, arrayOf } = PropTypes;
Header.propTypes = {
  email: string.isRequired,
  expenses: number,
  currencies: arrayOf(string),
};

Header.defaultProps = {
  currencies: ['BRL'],
  expenses: 0,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Header);
