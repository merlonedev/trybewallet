import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/index';
// Removido o editExpense de ../actions/index.
// Recolocar novamente para o botão editar.

class ShowExpenses extends Component {
  constructor() {
    super();

    this.removeItem = this.removeItem.bind(this);
    // this.editItem = this.editItem.bind(this);
  }

  removeItem({ target }) {
    const { deleteExpense } = this.props;
    deleteExpense(target.dataset.id);
  }

  // Continuar mais tarde função do botão editar
  //   editItem({ target }) {
  //     const { editingExpense } = this.props;
  //
  //   }
  /* ______________________________________________ */

  // construindo itens das linhas da tabela
  createTableRows() {
    const { expenses } = this.props;
    return expenses.map((item) => (
      <tr key={ item.id }>
        <td>{item.description}</td>
        <td>{item.tag}</td>
        <td>{item.method}</td>
        <td>{item.value}</td>
        <td>{item.exchangeRates[item.currency].name}</td>
        <td>{parseFloat(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
        <td>
          {parseFloat(item.value * item.exchangeRates[item.currency].ask).toFixed(2)}
        </td>
        <td>Real</td>
        {/* <td>
          <button
            type="button"
            data-testid="edit-btn"
            data-id={ item.id }
            onClick={ this.editItem }
          >
            Editar
          </button>
        </td> */}
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            data-id={ item.id }
            onClick={ this.removeItem }
          >
            Excluir
          </button>
        </td>
      </tr>
    ));
  }

  // Renderizando a tabela
  render() {
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
        <tbody>
          {this.createTableRows()}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(removeExpense(id)),
//   editingExpense: (id) => dispatch(editExpense(id)),
});

ShowExpenses.propTypes = {
  expenses: PropTypes.array,
  deleteExpense: PropTypes.func,
//   editExpense: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(ShowExpenses);
