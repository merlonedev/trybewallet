import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpense } from '../actions';

class Table extends React.Component {
  constructor() {
    super();
    this.removeIten = this.removeIten.bind(this);
  }

  removeIten(id) {
    const { remove } = this.props;
    remove(id);
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
          .map((iten) => (
            <tbody key={ iten.id }>
              <tr>
                <td>{ iten.description }</td>
                <td>{ iten.tag }</td>
                <td>{ iten.method }</td>
                <td>{ iten.value }</td>
                <td>{ iten.exchangeRates[iten.currency].name.split('/')[0] }</td>
                <td>{ Math.round(iten.exchangeRates[iten.currency].ask * 100) / 100 }</td>
                <td>
                  {
                    Math
                      .round(iten.value * iten.exchangeRates[iten.currency]
                        .ask * 100) / 100
                  }
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.removeIten(iten.id) }
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
  remove: (state) => dispatch(removeExpense(state)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
