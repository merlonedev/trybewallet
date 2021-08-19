import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    let value = 0;
    expenses.map((e) => {
      value += parseFloat((e.exchangeRates[e.currency].ask)
      * (parseFloat(e.value)));
      return value;
    });
    return (
      <div>
        <p data-testid="email-field">
          { `Email: ${email} `}
        </p>
        <p data-testid="total-field">
          { `Despesa Total: R$ ${value}`}
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.defaultProps = {
  expense: 0,
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
