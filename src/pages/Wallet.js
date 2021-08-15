import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import TableWallet from '../components/TableWallet';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <section>
          <WalletForm />
        </section>
        <table>
          <TableWallet />
        </table>
      </div>
    );
  }
}

export default Wallet;
