import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  getTotal() {
    const { expenses } = this.props;
    if (expenses.length === 0) return 0;
    const result = expenses.reduce((acc, total) => {
      const { [total.currency]: moeda } = total.exchangeRates;
      acc += moeda.ask * total.value;
      return acc;
    }, 0);
    return result;
  }

  render() {
    const { email } = this.props;
    const soma = this.getTotal();
    const despesas = soma.toFixed(2);
    return (
      <header>
        <h1>Saturno Wallet</h1>
        <h3 data-testid="email-field">
          Email:
          {email}
        </h3>
        <h3 data-testid="total-field">
          Despesa Total: R$
          {despesas}
        </h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  total: state.wallet.total,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
