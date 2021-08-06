import React from 'react';
import Expense from './Expense';
import Description from './Description';
import Value from './Value';
import Payment from './Payment';
import Currency from './Currency';

class WalletForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Value
            name="value"
            label="Valor: "
            type="text"

          />
          <Description
            name="description"
            label="Descrição: "
            type="text"
          />
          <Currency />
          <Payment />
          <Expense />
          <button
            type="submit"
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

export default WalletForm;
