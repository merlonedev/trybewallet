import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currencies, addExpense } from '../actions';

class ExpenseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      expenses: {
        value: 0,
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { expenses } = this.state;
    this.setState({
      expenses: {
        ...expenses,
        [name]: value,
      },
    });
  }

  handleClick() {
    const { fetchCurrencies, getExpenses } = this.props;
    const { expenses } = this.state;
    fetchCurrencies();
    getExpenses(expenses);
  }

  render() {
    const { coins } = this.props;
    return (
      <form>
        <label htmlFor="expense">
          Valor:
          <input type="number" id="expense" name="value" onChange={ this.handleChange } />
        </label>
        <label htmlFor="Currency">
          Moeda
          <select id="Currency" name="currency" onChange={ this.handleChange }>
            {!coins ? '' : coins.map((item) => (
              <option key={ item }>{ item }</option>))}
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select id="payment" name="method" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="category">
          tag
          <select id="category" name="tag" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            id="description"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" onClick={ this.handleClick }>
          Adicionar despesa
        </button>
      </form>
    );
  }
}
ExpenseForm.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  getExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  coins: wallet.currenciesLessUSDT });

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(currencies()),
  getExpenses: (expenses) => dispatch(addExpense(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
