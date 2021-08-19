import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail, totalExpenses } = this.props;

    return (
      <header>
        <h1>Bem-Vindo(a) à Trybe Wallet</h1>
        <p
          data-testid="email-field"
        >
          Email:
          { userEmail }
        </p>
        <p
          data-testid="total-field"
        >
          Despesa total: R$
          { totalExpenses }
        </p>
        <p
          data-testid="header-currency-field"
        >
          Câmbio utilizado: BRL
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalExpenses: state.wallet.totalExpenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number,
};

Header.defaultProps = {
  totalExpenses: 0,
};

export default connect(mapStateToProps)(Header);
