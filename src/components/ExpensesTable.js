import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesForm from './ExpensesForm';
import { deleteExpense } from '../actions';

class ExpensesTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete({ target }) {
    const { deleteLine } = this.props;
    const { id } = target;
    deleteLine(id);
  }

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
        <tbody>
          { expenses.map((expense) => (
            <ExpensesForm
              expenses={ expense }
              key={ expense.id }
              onClick={ this.handleDelete }
            />
          ))}
        </tbody>
      </table>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteLine: (id) => dispatch(deleteExpense(id)),
});

export default connect(null, mapDispatchToProps)(ExpensesTable);

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.objectOf),
  deleteLine: PropTypes.func.isRequired,
};

ExpensesTable.defaultProps = {
  expenses: undefined,
};
