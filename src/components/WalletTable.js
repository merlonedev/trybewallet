import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  expenseRow(expense) {
    return (
      <tr key={ expense.id }>
        <td>{ expense.description }</td>
        <td>{ expense.tag }</td>
        <td>{ expense.method }</td>
        <td>{ parseFloat(expense.value) }</td>
        <td>{ expense.exchangeRates[expense.currency].name.split('/')[0] }</td>
        <td>{ parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
        <td>
          {
            (
              parseFloat(expense.exchangeRates[expense.currency].ask)
              * parseFloat(expense.value)
            ).toFixed(2)
          }
        </td>
        <td>Real</td>
        <td>
          <button
            id="edit-btn"
            type="button"
            // onClick={ this.sendCredentials }
          >
            Editar
          </button>
          <button
            id="delete-btn"
            data-testid="delete-btn"
            type="button"
            // onClick={ this.sendCredentials }
          >
            Deletar
          </button>
        </td>
      </tr>
    );
  }

  render() {
    const { expenses } = this.props;
    if (expenses.length === 0) return <p>Waiting for expenses</p>;
    return (
      <form name="add-expenses">
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
            { expenses.map((expense) => this.expenseRow(expense)) }
          </tbody>
        </table>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default connect(mapStateToProps)(WalletTable);
