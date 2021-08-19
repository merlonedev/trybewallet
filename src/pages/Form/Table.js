import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpansesAction } from '../../actions/index';

class Table extends Component {
  constructor(props) {
    super(props);
    this.renderLines = this.renderLines.bind(this);
    // this.dispatchDelete = this.dispatchDelete.bind(this);
  }

  // dispatchDelete() {
  // const { delet } = this.props;
  // delet(id);
  // }

  renderLines() {
    const { expenses, deleteExpansesAction: delet } = this.props;
    return expenses.map(({
      id,
      description,
      tag,
      method,
      value,
      currency,
      exchangeRates,
    }) => {
      const { name, ask } = exchangeRates[currency];
      return (
        <tr key={ name }>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ value }</td>
          <td>{ name }</td>
          <td>{ Number(ask).toFixed(2) }</td>
          <td>{ (value * ask).toFixed(2) }</td>
          <td>Real</td>
          <td>
            Editar/Excluir
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => delet(id) }
            >
              Deletar
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
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
            {this.renderLines()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = { deleteExpansesAction };

Table.propTypes = {
  expenses: PropTypes.func.isRequired,
  deleteExpansesAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
