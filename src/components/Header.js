import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.getExpenses = this.getExpenses.bind(this);
  }

  getExpenses() {
    const { expenses } = this.props;
    return (expenses.reduce((acc, cur) => acc + Number(cur.value)
     * Object.values(cur.exchangeRates)
       .find((elm) => elm.code === cur.currency).ask, 0).toFixed(2));
  }

  render() {
    const { emailFromRedux, expenses } = this.props;
    return (
      <div>
        <p data-testid="email-field">
          E-mail:
          {emailFromRedux}
        </p>
        <p data-testid="total-field">
          Despesas:
          {expenses ? this.getExpenses() : 0}
        </p>
        <p data-testid="header-currency-field">
          Câmbio: BRL
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailFromRedux: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  emailFromRedux: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Header);
