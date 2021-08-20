import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionExpenses, actionSunTotal } from '../actions';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.deleteBtn = this.deleteBtn.bind(this);
  }

  deleteBtn({ target }) {
    const { expenses, saveExpense } = this.props;
    const newExpenses = expenses.filter((el) => el.id !== Number(target.id));
    saveExpense(newExpenses);
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
        {expenses.map(({ id,
          description,
          tag,
          method,
          value, currency,
          exchangeRates,
        }) => (
          <tr key={ id }>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{value}</td>
            <td>{exchangeRates[currency].name.split('/', 1)}</td>
            <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
            <td>{Number(value * exchangeRates[currency].ask).toFixed(2)}</td>
            <td>Real</td>
            <td>
              <button name="edit" type="button">Edit</button>
              <button
                id={ id }
                name="delete"
                type="button"
                data-testid="delete-btn"
                onClick={ this.deleteBtn }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  sunTotal: state.wallet.sunTotal,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpense: (expensesState) => dispatch(actionExpenses(expensesState)),
  saveTotal: (total) => dispatch(actionSunTotal(total)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf().isRequired,
  saveExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
