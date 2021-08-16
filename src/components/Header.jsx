import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchAPI from '../services';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
    };
    this.handleTotal = this.handleTotal.bind(this);
  }

  handleTotal() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, currentValue) => {
      acc += parseInt(currentValue.value);
      return acc;
    }, 0);
    return total;
  }

  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <h1>
          Header
        </h1>
        <p data-testid="email-field">{ userEmail }</p>
        <p data-testid="total-field"> {this.handleTotal()} </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
