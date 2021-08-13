import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class WalletHeader extends React.Component {
  render() {
    const { userEmail, totalValue } = this.props;
    return (
      <header>
        <h1>TrybeWallet</h1>
        <h3 data-testid="email-field">
          Email:&nbsp;
          {userEmail}
        </h3>
        <h3>
          Despesa total: R$&nbsp;
          <span data-testid="total-field">{totalValue.toFixed(2)}</span>
        </h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps, null)(WalletHeader);

WalletHeader.propTypes = {
  userEmail: propTypes.string.isRequired,
  totalValue: propTypes.number.isRequired,
};
