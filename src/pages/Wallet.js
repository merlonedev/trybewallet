import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormsWallet from '../Components/FormsWallet';
import Header from '../Components/Header';

class Wallet extends Component {
  render() {
    return (
      <>
        <Header />
        <FormsWallet />
      </>
    );
  }
}

export default connect()(Wallet);
