import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

class Table extends React.Component {
  constructor() {
    super();
    this.expenseDelete = this.expenseDelete.bind(this);
  }

  expenseDelete(id) {
    const { deleteEx } = this.props;
    deleteEx(id);
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
        { expenses
          .map(({ description, tag, method, value, exchangeRates, currency, id }) => (
            <tbody key={ id }>
              <tr>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                <td>{ Math.round(exchangeRates[currency].ask * 100) / 100 }</td>
                <td>
                  {
                    Math
                      .round(value * exchangeRates[currency]
                        .ask * 100) / 100
                  }
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.expenseDelete(id) }
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            </tbody>
          )) }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteEx: (state) => dispatch(deleteExpense(state)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteEx: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
