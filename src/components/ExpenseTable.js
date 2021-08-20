import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shape, arrayOf, string } from 'prop-types';
import ExpenseRow from './ExpenseRow';

class ExpenseTable extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <thead>
          {expenses ? expenses.map((expense) => (
            <ExpenseRow key={ expense.id } expense={ expense } />
          )) : null}
        </thead>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseTable.propTypes = {
  expenses: arrayOf(shape({
    description: string,
    tag: string,
    method: string,
    value: string,
    currency: string,
  })).isRequired,
};

export default connect(mapStateToProps)(ExpenseTable);
