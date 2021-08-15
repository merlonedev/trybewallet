import React from 'react';
import HeaderWallet from '../components/HeaderWallet';
import FormsWallet from '../components/FormsWallet';

export default class Wallet extends React.Component {
  render() {
    return (
      <div>
        <HeaderWallet />
        <FormsWallet />
      </div>
    );
  }
}
