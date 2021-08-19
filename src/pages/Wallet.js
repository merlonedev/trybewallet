import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import FormWallet from '../components/formWallet';

class Wallet extends React.Component {
  render() {
    const { loginEmail } = this.props;
    const gasto = 0;
    return (
      <div>
        <header>
          <FormWallet />
          <div data-testid="email-field">{ `Email: ${loginEmail}` }</div>
          <div data-testid="total-field">
            { gasto }
          </div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginEmail: state.user.email,
});

Wallet.propTypes = {
  loginEmail: propTypes.string.isRequired,
};
export default connect(mapStateToProps)(Wallet);
