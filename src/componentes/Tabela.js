import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeLine } from '../actions';

class Tabela extends Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove({ target }) {
    const { expenses, removeLi } = this.props;
    const filtro = expenses.filter((expense) => expense.id !== Number(target.id));
    removeLi(filtro);
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
          {expenses.map((
            { id, description, tag, method, value, exchangeRates, currency },
          ) => (
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
                  onClick={ this.remove }
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
  removeLi: (id) => dispatch(removeLine(id)),
});

Tabela.propTypes = {
  expenses: PropTypes.objectOf.isRequired,
  removeLi: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
