import React from 'react';
import './Wallet.css';
import FormComplete from '../components/FormComplete';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormComplete />
        <main>
          <Table />
        </main>
      </div>
    );
  }
}

export default Wallet;
