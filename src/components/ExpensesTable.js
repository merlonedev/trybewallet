import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesForm from './ExpensesForm';

class ExpensesTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table className="table">
        <thead>
          <tr className="table-heading">
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
        { expenses.map((expense) => (
          <ExpensesForm expenses={ expense } key={ expense.key } />
        ))}
      </table>

    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.objectOf),
};

ExpensesTable.defaultProps = {
  expenses: undefined,
};
