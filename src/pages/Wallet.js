import React from 'react';
import { connect } from 'react-redux';
import WalletHeader from './WalletHeader';

class Wallet extends React.Component {
  render() {
    return <WalletHeader />;
  }
}

export default connect()(Wallet);
