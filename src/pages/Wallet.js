import React from 'react';
import AddForm from '../components/AddForm';
import ExpensesTable from '../components/ExpensesTable';
import Header from '../components/Header';
import '../styles/wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddForm />
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
