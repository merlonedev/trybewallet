import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

class WalletHeader extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">{ email }</span>
        <span data-testid="total-field">
          0
          <span data-testid="header-currency-field">BRL</span>
        </span>
      </header>
    );
  }
}

const mapStoreToProps = (state) => ({
  email: state.user.email,
});

WalletHeader.propTypes = {
  email: string.isRequired,
};

export default connect(mapStoreToProps)(WalletHeader);
