import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { props: { expenses } } = this;
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
            <th>Moeda de converção</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(
            ({ id, description, tag, method, value, exchangeRates, currency }) => (
              <tr key={ id }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name }</td>
                <td>{ Math.round(exchangeRates[currency].ask * 100) / 100 }</td>
                <td>{ Math.round(value * exchangeRates[currency].ask * 100) / 100 }</td>
                <td>Real</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    );
  }
}
const { arrayOf, objectOf, string } = PropTypes;

Table.propTypes = {
  expenses: arrayOf(objectOf(string)).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
