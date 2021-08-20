import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeleteButton from './DeleteButton';

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
        <tbody>
          {expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{expense.value}</td>
              <td>{expense.exchangeRates[expense.currency].name.split('/', 1)}</td>
              <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
              <td>
                {(Number(expense.exchangeRates[expense.currency].ask)
                  * Number(expense.value)).toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <DeleteButton expense={ expense } />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
