import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function ExpenseField(props) {
  const { expenses, edit } = props;
  return (
    <table>
      <tbody>
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
        {expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{expense.value}</td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {(expense.value * expense.exchangeRates[expense.currency].ask).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => edit(expense.id) }
              >
                Excluir/Deletar
              </button>
            </td>
          </tr>))}
      </tbody>
    </table>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpenseField.propTypes = {
  expenses: PropTypes.arrayOf(Object),
  edit: PropTypes.func.isRequired,
};

ExpenseField.defaultProps = {
  expenses: '',
};

export default connect(mapStateToProps, null)(ExpenseField);
