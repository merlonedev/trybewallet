import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeLine } from '../actions/index';

class Tabela extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.remove = this.remove.bind(this);
  }

  remove(a) {
    const { expenses, removeLine } = this.props;
    const filtro = expenses.filter((expense) => expense.id !== a.id);
    removeLine(filtro);
  }

  delete({ target }) {
    this.remove(target);
    return (target).closest('tr').remove();
  }

  render() {
    const cabecalhos = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            {cabecalhos.map((cabecalho) => (
              <th key={ cabecalho }>
                {cabecalho}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map(({ id, description, tag, method, value,
            exchangeRates, currency }) => (
            <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name }</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{ ((exchangeRates[currency].ask) * value).toFixed(2) }</td>
                <td>Real</td>
                <td>
                <button
                    type="reset"
                    data-testid="delete-btn"
                    onClick={ this.delete }
                    id={ id }
                  >
                  Excluir
                  </button>
              </td>
              </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeLine: (filtro) => dispatch(removeLine(filtro)),
});

Tabela.propTypes = {
  expenses: PropTypes.objectOf.isRequired,
  removeLine: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
