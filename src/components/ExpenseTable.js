import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpenseAction, updateTotalPriceAction } from '../actions';

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatePrice: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.calculatePrice = this.calculatePrice.bind(this);
  }

  componentDidUpdate() {
    const { updatePrice } = this.state;
    if (updatePrice === true) {
      this.calculatePrice();
    }
  }

  handleClick({ target }) {
    const { deleteExpense } = this.props;
    const expenseId = parseInt(target.name, 10);
    deleteExpense(expenseId);
    this.setState({ updatePrice: true });
  }

  calculatePrice() {
    const { expenses, updateTotalPrice } = this.props;
    let newPrice = 0;
    expenses.forEach((expense) => {
      const currentValue = expense.value
        * expense.exchangeRates[expense.currency].ask;
      newPrice += currentValue;
    });
    const fixedPrice = newPrice.toFixed(2);
    const toString = `${fixedPrice}`;
    updateTotalPrice(toString);
    this.setState({ updatePrice: false });
  }

  tableHeader() {
    return (
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
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <tbody className="header-table">
        {this.tableHeader()}
        {expenses.map((expense) => (
          <tr key={ Math.random() }>
            <td>{ expense.description }</td>
            <td>{ expense.tag }</td>
            <td>{ expense.method }</td>
            <td>{ expense.value }</td>
            <td>
              {expense.exchangeRates[expense.currency]
                .name.replace('/Real Brasileiro', '')}
            </td>
            <td>
              { parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2) }
            </td>
            <td>
              { (parseFloat(expense.value)
                * parseFloat(expense.exchangeRates[expense.currency].ask)).toFixed(2) }
            </td>
            <td>Real</td>
            <td>
              <button type="button" className="edit-btn">
                <i className="far fa-edit" aria-label="edit" />
              </button>
              <button
                name={ expense.id }
                type="button"
                className="delete-btn"
                data-testid="delete-btn"
                onClick={ this.handleClick }
              >
                <i className="far fa-trash-alt" aria-label="delete" id={ expense.id } />
              </button>
            </td>
          </tr>))}
      </tbody>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
  updateTotalPrice: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (expense) => dispatch(deleteExpenseAction(expense)),
  updateTotalPrice: (price) => dispatch(updateTotalPriceAction(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
