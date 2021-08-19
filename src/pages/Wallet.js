import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../Components/Form';
import { actionFetchAPI } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { FetchCurrencies } = this.props;
    FetchCurrencies();
  }

  render() {
    const { email, expenses } = this.props;
    let totalExpense = 0;
    if (expenses.length > 0) {
      expenses.forEach(({ value, exchangeRates, currency }) => {
        totalExpense += Number(value) * Number(exchangeRates[currency].ask);
      });
    }
    return (
      <main>
        <h3 data-testid="email-field">
          { email }
        </h3>
        <h2 data-testid="total-field">
          { totalExpense }
        </h2>
        <h3 data-testid="header-currency-field">
          BRL
        </h3>
        <Form />
      </main>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  FetchCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  FetchCurrencies: (state) => dispatch(actionFetchAPI(state)) });

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
