import React from 'react';
import AddExpenseForm from '../components/AddExpenseForm';
import Header from '../components/Header';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpenseForm />
        <ExpenseTable />
      </div>
    );
  }
}

export default Wallet;
