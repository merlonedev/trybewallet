import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './componentsHeader/Form';

class Header extends Component {
  constructor(props) {
    super(props);
    this.funcSum = this.funcSum.bind(this);
  }

  funcSum() {
    const { expensesState } = this.props;
    return expensesState.reduce((acc, expense) => {
      const convertExpense = expense.exchangeRates[expense.currency].ask * expense.value;
      return acc + convertExpense;
    }, 0);
    // Vou precisar acessar:
    // currency do expense; value do expense; ask do exchangeRates.currency;
  }

  render() {
    const { emailState } = this.props;

    return (
      <header>
        <h1>Header do Wallet</h1>
        <h4 data-testid="email-field">{emailState}</h4>
        <h2 data-testid="total-field">
          Despesa Total:
          { this.funcSum() }
        </h2>
        <select data-testid="header-currency-field">
          Câmbio em uso:
          <option>BRL</option>
        </select>
        <Form />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  emailState: state.user.email,
  expensesState: state.wallet.expenses });

Header.propTypes = {
  emailState: PropTypes.string.isRequired,
  expensesState: PropTypes.arrayOf(PropTypes.shape({
    currency: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps, null)(Header);
// export default Header;
