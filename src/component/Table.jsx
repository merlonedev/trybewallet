import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends React.Component {
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
          .map((iten, index) => (
            <tbody key={ index }>
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
                <td><button type="button">Deletar</button></td>
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

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Table);
