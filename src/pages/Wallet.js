import React from 'react';
import Header from './Header';
import Form from './Form/Form';
import Table from './Form/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

export default Wallet;
