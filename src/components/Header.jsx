import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.handleTotal = this.handleTotal.bind(this);
  }

  handleTotal() {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, currentValue) => {
      acc += parseInt(currentValue.value, 10);
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
        <p data-testid="total-field">
          { this.handleTotal() }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps)(Header);
