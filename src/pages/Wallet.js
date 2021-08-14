import React from 'react';
import HeaderWallet from '../components/HeaderWallet';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <HeaderWallet />
        <WalletForm />
        <WalletTable />
      </>);
  }
}

export default Wallet;
