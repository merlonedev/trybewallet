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
    console.log(this.props);
    const { currencies } = this.props;
    return (
      <main>
        <Header />
        <Form currencies={ currencies } />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrenciesInComponent: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  fetchCurrenciesInComponent: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
