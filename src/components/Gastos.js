import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DELETE_EXPENSE } from '../actions/index';

class Gastos extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  valorConvertido() {
    const { expense } = this.props;
    const { value, currency, exchangeRates } = expense;
    const { [currency]: moeda } = exchangeRates;
    const valorConvertido = moeda.ask * Number(value);
    return valorConvertido;
  }

  handleClick() {
    const { deleteExp, expense } = this.props;
    deleteExp(expense.id);
  }

  render() {
    const { expense } = this.props;
    const { exchangeRates, currency } = expense;
    const { [currency]: moeda } = exchangeRates;
    const { name, ask } = moeda;
    return (
      <tr>
        <td>{expense.description}</td>
        <td>{expense.tag}</td>
        <td>{expense.method}</td>
        <td>{expense.value}</td>
        <td>{name.split('/')[0]}</td>
        <td>{Number(ask).toFixed(2)}</td>
        <td>{this.valorConvertido().toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button type="button" data-testid="edit-btn">Editar</button>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ this.handleClick }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

Gastos.propTypes = {
  expense: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExp: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteExp: (value) => dispatch(DELETE_EXPENSE(value)),
});
export default connect(null, mapDispatchToProps)(Gastos);
