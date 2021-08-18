import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionDelete } from '../actions/actionGastos';

class TableBody extends React.Component {
  constructor() {
    super();
    this.deleteFunc = this.deleteFunc.bind(this);
  }

  deleteFunc(id, total) {
    const { deletaTabela } = this.props;
    deletaTabela(id, total);
  }

  render() {
    const { expenses } = this.props;
    return (
      <tbody id="pai-da-tabela">
        {expenses.map((custo, index) => {
          const total = Number(custo.exchangeRates[custo.currency].ask) * custo.value;
          const cambioUtilizado = custo.exchangeRates[custo.currency].ask;
          return (
            <tr id="tabela" key={ index }>
              <td>{ custo.description }</td>
              <td>{ custo.tag }</td>
              <td>{ custo.method }</td>
              <td>{ custo.value }</td>
              <td>{ custo.exchangeRates[custo.currency].name }</td>
              <td>{ Number(cambioUtilizado).toFixed(2) }</td>
              <td>{ total }</td>
              <td>Real</td>
              <td><button data-testid="edit-btn" type="button">editar</button></td>
              <td>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => this.deleteFunc(custo.id, total) }
                >
                  excluir
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deletaTabela: (id, total) => dispatch(actionDelete(id, total)),
});

TableBody.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletaTabela: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
