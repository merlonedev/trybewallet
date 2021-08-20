import React from 'react';
import Forms from '../components/wallet/form/Forms';
import Header from '../components/wallet/Header';
import Table from '../components/wallet/Table';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <header>
          <Header />
        </header>
        <section>
          <Forms />
          <Table />
        </section>
      </main>
    );
  }
}

export default Wallet;
