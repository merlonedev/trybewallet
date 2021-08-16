import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../Comoponents/Header';
import { fetchAPI } from '../actions';
import AddExpenses from '../Comoponents/AddExpenses';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };
  }

  componentDidMount() {
    const { getCoinsAPI } = this.props;
    getCoinsAPI();
  }

  render() {
    const { getEmail, currencies } = this.props;
    const { total } = this.state;
    console.log(currencies);
    return (
      <div>
        <Header getEmail={ getEmail } total={ total } />
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
