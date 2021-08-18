import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormsWallet from '../Components/FormsWallet';
import Header from '../Components/Header';
import Table from '../Components/Table';

class Wallet extends Component {
  render() {
    return (
      <>
        <Header />
        <FormsWallet />
        <Table />
      </>
    );
  }
}

export default connect()(Wallet);
