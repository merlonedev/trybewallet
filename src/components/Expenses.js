import React from 'react';
import { connect } from 'react-redux';

class Expenses extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <table>
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
          { expenses.map((expense) => (
            <tr>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{expense.exchangeRates[expense.currency].name.split("/")[0]}</td>
              <td>{ (+expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
              <td>{ (expense.value * (+expense.exchangeRates[expense.currency].ask)).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <button type="button">Edit</button>
                <button type="button">Remove</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
})

export default connect(mapStateToProps)(Expenses);