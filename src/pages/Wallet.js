import React from 'react';
import './Wallet.css';
import FormComplete from '../components/FormComplete';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <FormComplete />
      </>
    );
  }
}

export default Wallet;
