import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrenciesInComponent } = this.props;
    fetchCurrenciesInComponent();
  }

  render() {
    return (
      <main>
        <Header />
        <Form />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesInComponent: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  fetchCurrenciesInComponent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
