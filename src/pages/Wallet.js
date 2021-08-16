import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../components/ExpenseForm';
import Header from '../components/Header';
import { fetchCurrency } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { currencies } = this.props;
    // console.log(currencies);
    return (
      <div>
        <Header />
        <ExpenseForm currencies={ currencies } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => (
  { fetchCurrencies: (currencies) => dispatch(fetchCurrency(currencies)) }
);

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
