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
    const { email } = this.props;
    return (
      <main>
        <h3 data-testid="email-field">
          { email }
        </h3>
        <h2 data-testid="total-field">
          0
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
};

const mapDispatchToProps = (dispatch) => ({
  FetchCurrencies: (state) => dispatch(actionFetchAPI(state)) });

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
