import React from 'react';
import Forms from '../components/wallet/form/Forms';
import Header from '../components/wallet/Header';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <header>
          <Header />
        </header>
        <section>
          <Forms />
        </section>
      </main>
    );
  }
}

export default Wallet;
