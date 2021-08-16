import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);

    this.delExpense = this.delExpense.bind(this);
  }

  delExpense({ target }) {
    const { delExpense } = this.props;
    const { id } = target;
    delExpense(id);
  }

  renderButton(id) {
    return (
      <button
        type="button"
        data-testid="deletebtn"
        id={ id }
        onClick={ this.delExpense }
      >
        X
      </button>
    );
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
          {
            expenses.map(({
              id,
              description,
              tag,
              method,
              value,
              currency,
              exchangeRates,
            }) => (
              <tr key={ `Exp ${id}` }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{Number(value * exchangeRates[currency].ask).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  { this.renderButton(id) }
                </td>
              </tr>
            ))
          }
        </thead>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  delExpense: (id) => dispatch(deleteExpense(id)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  delExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
