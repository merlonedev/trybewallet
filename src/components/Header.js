import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail } = this.props;

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
          Despesa total: R$ 0,00
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
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
