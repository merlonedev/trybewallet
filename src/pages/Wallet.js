import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../components/ExpenseForm';

class Wallet extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">
          { email }
        </p>
        <p data-testid="total-field"> 0 </p>
        <p data-testid="header-currency-field"> BRL </p>
        <ExpenseForm />
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isrequired;

export default connect(mapStateToProps)(Wallet);
