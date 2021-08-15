import React from 'react';
import Header from '../components/Header';
import AddExpenseForm from '../components/AddExpenseForm';
import fetchAPI from '../services';
class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpenseForm />
      </>
    );
  }
}

export default Wallet;
