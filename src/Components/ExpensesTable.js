import React from 'react';
import ExpensesTableHead from './ExpensesTableHead';
import ExpensesTableValue from './ExpensesTableValue';

class ExpensesTable extends React.Component {
  render() {
    return (
      <table>
        <ExpensesTableHead />
        <ExpensesTableValue />
      </table>
    );
  }
}

export default ExpensesTable;
