import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  totalExpenses() {
    const { expenses } = this.props;
    const total = expenses.map((teste) => {
      const accesAsk = Number(teste.exchangeRates[teste.currency].ask);
      const value = Number(teste.value);
      return accesAsk * value;
    }).reduce((acc, crr) => acc + crr, 0);
    return (total);
  }

  render() {
    const { email } = this.props;
    const amount = this.totalExpenses();
    const exchange = 'BRL';
    return (
      <header>
        <div>
          <p data-testid="email-field">
            {`E-mail:${email}`}
          </p>
          <p data-testid="total-field">
            {`Despesa total:${amount}`}
          </p>
          <p data-testid="header-currency-field">
            {`Cambio:${exchange}`}
          </p>
        </div>
      </header>

    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default connect(mapStateToProps)(Header);
