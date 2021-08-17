import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense, editExpense } from '../actions';

class Table extends React.Component {
  constructor() {
    super();

    this.tableHead = this.tableHead.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  tableHead() {
    return (
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
    );
  }

  removeItem(id) {
    const { deleteExpense } = this.props;
    deleteExpense(id);
  }

  editItem(id) {
    const { edit } = this.props;
    edit(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        { this.tableHead() }
        <tbody>
          { expenses
            .map(({ id, description, tag, method, value, currency, exchangeRates }) => (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ Number(value) }</td>
                <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
                <td>{ Number(value * exchangeRates[currency].ask).toFixed(2) }</td>
                <td>Real</td>
                <td>
                  <button
                    onClick={ () => this.editItem(id) }
                    data-testid="edit-btn"
                    type="button"
                  >
                    Editar
                  </button>
                  <button
                    data-testid="delete-btn"
                    onClick={ () => this.removeItem(id) }
                    type="button"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            )) }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (state) => dispatch(removeExpense(state)),
  edit: (state) => dispatch(editExpense(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
