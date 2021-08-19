import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from '../components/Form';
import Header from '../components/Header';
import { fetchAPI } from '../actions/index';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalExpenses: 0,
    };
    this.gastos = this.gastos.bind(this);
  }

  componentDidMount() {
    const { submitCurrencies } = this.props;
    submitCurrencies();
  }

  gastos() {
    const { wallet: { expenses }, getTotal } = this.props;
    if (expenses.length > 0 && expenses.length < 2) {
      const { exchangeRates } = expenses[0];
      const arr = Object.entries(exchangeRates)
        .filter((item) => item[0] === expenses[0].currency);
      this.setState({
        totalExpenses: (+expenses[0].value * +arr[0][1].ask)
      })
    }
    if (expenses.length > 1) {
      const { totalExpenses } = this.state;
      const { exchangeRates } = expenses[1];
      const array = Object.entries(exchangeRates)
        .filter((item) => item[0] === expenses[1].currency);
      const total2 = (+expenses[1].value * +array[0][1].ask);
      this.setState({
        totalExpenses: (totalExpenses + total2)
      })
    }
  }

  render() {
    const { totalExpenses } = this.state;
    const { user } = this.props;

    return (
      <div>
        <Header
          email={ user.email }
          totalExpenses={ totalExpenses }
        />
        <Form 
          gastos={ this.gastos }
        />
        <Table
          gastos={ this.gastos }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  submitCurrencies: () => dispatch(fetchAPI()),
});

Wallet.propTypes = {
  submitCurrencies: PropTypes.func.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
