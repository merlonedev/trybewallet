import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const conver = expenses.map(({ value, currency, exchangeRates }) => {
      const { ask } = exchangeRates[currency];
      return (Number(ask) * Number(value));
    }).reduce((somatoria, valorAtual) => somatoria + valorAtual, 0);
    return (
      <div>
        <header>
          TrybeWallet
          <p data-testid="email-field">
            e-mail usuário(a):
            { email }
          </p>
          <p data-testid="total-field">
            Despesa:
            { conver }
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf).isRequired };

export default connect(mapStateToProps, null)(Header);
