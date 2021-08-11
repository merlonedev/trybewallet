import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    const valor = 0;
    const currency = 'BRL';

    return (
      <header>
        <p data-testid="email-field">{ `Email: ${email}` }</p>
        <p data-testid="total-field">{ `Despesa Total: ${valor}` }</p>
        <p data-testid="header-currency-field">{ currency }</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ user }) => ({
  email: user.email,
});

export default connect(mapStateToProps)(Header);
