import React from 'react';
import Header from '../components/Header';
import AddExpensesForm from '../components/AddExpensesForm';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddExpensesForm />
        <ExpenseTable />
      </>
    );
  }
}

export default Wallet;
