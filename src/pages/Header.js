import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getExchange } from '../actions';

class Header extends React.Component {
  render() {
    const { email, currentExchange } = this.props;
    return (
      <header>
        <h2 data-testid="email-field">{ email }</h2>
        <h3 data-testid="total-field">
          Despesas totais:
          { 0 }
        </h3>
        <h3 data-testid="header-currency-field">{ currentExchange }</h3>
      </header>
    );
  }
}

const mapStatetoProps = (state) => ({
  email: state.user.email,
  currentExchange: state.wallet.currentExchange,
  // getExchange()
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currentExchange: PropTypes.string.isRequired,
};

export default connect(mapStatetoProps)(Header);
