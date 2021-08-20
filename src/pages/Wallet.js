import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Comoponents/Header';
import { fetchAPI } from '../actions';
import AddExpenses from '../Comoponents/AddExpenses';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCoinsAPI } = this.props;
    getCoinsAPI();
  }

  render() {
    const { getEmail, currencies } = this.props;
    console.log(currencies);
    return (
      <div>
        <Header getEmail={ getEmail } />
        <AddExpenses currencies={ currencies } />
      </div>
    );
  }
}

Wallet.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getCoinsAPI: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

function mapStateToProps(state) {
  return {
    getEmail: state.user.email,
    currencies: state.wallet.currencies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCoinsAPI: () => dispatch(fetchAPI()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
