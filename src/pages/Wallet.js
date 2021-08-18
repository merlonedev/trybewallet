import React, { Component } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';

export default class Wallet extends Component {
  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <Form />
      </div>);
  }
}
