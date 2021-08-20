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
          .map((curr, index) => (
            <tbody key={ index }>
              <tr>
                <td>{ curr.description }</td>
                <td>{ curr.tag }</td>
                <td>{ curr.method }</td>
                <td>{ curr.value }</td>
                <td>{ curr.exchangeRates[curr.currency].name.split('/')[0] }</td>
                <td>{ Math.round(curr.exchangeRates[curr.currency].ask * 100) / 100 }</td>
                <td>
                  {
                    Math
                      .round(curr.value * curr.exchangeRates[curr.currency]
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
