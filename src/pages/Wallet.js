import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesForm from '../components/ExpensesForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <div>
        <header>
          <span data-testid="email-field">
            {`Email: ${email}` }
          </span>
          <br />
          <span>Despesas totais: </span>
          <span data-testid="total-field">
            { expenses.toFixed(2) }
          </span>
          <br />
          <span data-testid="header-currency-field">
            BRL
          </span>
        </header>
        <ExpensesForm />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses.reduce(
    (acm, atual) => parseFloat(atual.value * atual
      .exchangeRates[atual.currency].ask)
      + acm, 0,
  ),
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
