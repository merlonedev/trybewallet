import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// prettier-ignore
class Table extends React.Component {
  render() {
    const { wallet: { expenses, isLoading } } = this.props;
    console.log(expenses);
    if (isLoading) {
      return (<h1>Carregando...</h1>);
    }
    return (
      <table className="pure-table pure-table-bordered">
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
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            const curr = expense.currency;
            // Source: https://stackoverflow.com/questions/922544/using-variable-keys-to-access-values-in-javascript-objects
            const exchange = expense.exchangeRates[curr].ask;
            const conversion = exchange * expense.value;
            const roundedExchange = Math.round(exchange * 100) / 100;
            const roundedConversion = Math.round(conversion * 100) / 100;
            return (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{expense.value}</td>
                <td>{expense.exchangeRates[curr].name}</td>
                <td>{roundedExchange.toFixed(2)}</td>
                <td>{roundedConversion.toFixed(2)}</td>
                <td>Real</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

export default connect(mapStateToProps, null)(Table);

Table.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.shape({
      map: PropTypes.func,
    }),
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
};
