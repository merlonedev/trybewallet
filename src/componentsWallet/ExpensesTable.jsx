import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAction } from '../actions';

class ExpensesTable extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    const { deleteIdDispatch } = this.props;
    deleteIdDispatch(id);
  }

  render() {
    const { expensesState } = this.props;

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
          {expensesState.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{expense.exchangeRates[expense.currency].name}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {(expense.exchangeRates[expense.currency].ask * expense.value).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button type="button">Editar</button>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => this.handleClick(expense.id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      //  Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir
    );
  }
}

const mapStateToProps = (state) => ({
  expensesState: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteIdDispatch: (id) => dispatch(deleteAction(id)),
});

ExpensesTable.propTypes = {
  expensesState: PropTypes.arrayOf(PropTypes.shape({
    currency: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  deleteIdDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
