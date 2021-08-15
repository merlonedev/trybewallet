import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../component/Form';
import Table from '../component/Table';
import { currency } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { coinsOptions } = this.props;
    coinsOptions();
  }

  render() {
    const { userEmail, expenses } = this.props;
    const despesa = '0.00';
    const valor = expenses.length >= 1 ? expenses.reduce((acc, cur) => (
      acc + (parseFloat(cur.value) * cur.exchangeRates[cur.currency].ask)
    ), 0).toFixed(2) : despesa;
    return (
      <div>
        <header>
          <h1
            data-testid="email-field"
          >
            { userEmail }
          </h1>
          <p data-testid="total-field">
            {`despesas total: $${valor}` }
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
        <Form />
        <Table />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  coinsOptions: () => dispatch(currency()),
});

Wallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  userEmail: PropTypes.string.isRequired,
  coinsOptions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
