import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI1 } from '../actions';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  componentDidMount() {
    const { props: { currenciesDispatch } } = this;

    currenciesDispatch();
  }

  render() {
    const { props: { isLoading, currencies } } = this;
    return (
      <div>
        <Header />
        <Form
          loading={ isLoading }
          currencies={ currencies }
        />
        TrybeWallet
      </div>
    );
  }
}

const { bool, arrayOf, string, func } = PropTypes;
Wallet.propTypes = {
  isLoading: bool.isRequired,
  currencies: arrayOf(string).isRequired,
  currenciesDispatch: func.isRequired,
};

const mapStateToProps = (state) => {
  const { isLoading, currencies } = state.wallet;
  return {
    isLoading,
    currencies,
  };
};

const mapDispatchToProps = (dispatch) => ({
  currenciesDispatch: () => dispatch(fetchAPI1()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
