import React, { Component } from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';

export default class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <main>
          <Table />
        </main>
      </div>
    );
  }
}
