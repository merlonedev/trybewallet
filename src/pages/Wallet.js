import React, { Component } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Table from '../components/Table';

export default class Wallet extends Component {
  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <Form />
        <Table />
      </div>);
  }
}
