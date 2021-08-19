import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';
import HeaderTable from './HeaderTable';

class Table extends React.Component {
  render() {
    const { expenses, deleteItem } = this.props;
    return (
      <table>
        <HeaderTable />
        <tbody>
          { console.log(expenses) }
          { expenses.map((expense, index) => {
            const { description, tag, method, value, exchangeRates, currency } = expense;
            const aux = parseFloat((exchangeRates[currency].ask)
            * (parseFloat(value)));
            return (
              <tr key={ index }>
                <td>{ description }</td>
                <td>{ tag }</td>
                <td>{ method }</td>
                <td>{ value }</td>
                <td>{ exchangeRates[currency].name.split('/')[0] }</td>
                <td>
                  {parseFloat(exchangeRates[currency].ask).toFixed(2)}
                </td>
                <td>{ aux.toFixed(2) }</td>
                <td>Real</td>
                <td id={ index }>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => deleteItem(index) }
                  >
                    Deletar
                  </button>

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (prevState) => ({
  expenses: prevState.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteExpense(item)),
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
