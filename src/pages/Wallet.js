import React from 'react';
// import { connect } from 'react-redux';
import Inputs from '../components/Inputs';
import Button from '../components/Button';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <form>
          <Inputs />
          <Button />
        </form>
      </div>);
  }
}

export default Wallet;
