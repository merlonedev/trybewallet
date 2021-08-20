import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, totalExpenses } = this.props;
    return (
      <header>
        <span daa-testid="email-field">
          Email:
          { email }
        </span>
        <p>
          Total:
          <span data-testid="total-field">
            { totalExpenses.toFixed(2) }
          </span>
        </p>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

export default Header;
