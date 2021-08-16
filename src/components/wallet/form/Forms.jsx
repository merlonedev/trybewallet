import React from 'react';
import InputExpense from './InputExpense';
import InputValue from './InputValue';
import SelectCurrency from './SelectCurrency';
import SelectPayMet from './SelectPayMet';
import SelectTag from './SelectTag';

class Forms extends React.Component {
  render() {
    return (
      <form>
        <InputExpense />
        <InputValue />
        <SelectCurrency />
        <SelectPayMet />
        <SelectTag />
      </form>
    );
  }
}

export default Forms;
