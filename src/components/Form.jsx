import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApiExpenses, fetchApiCurrency } from '../actions/index';

const paymentOption = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const categoryOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Categoria',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { addCurrencies } = this.props;
    addCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }
    ));
  }

  handleClick() {
    const { addExpense, expenses } = this.props;
    const prevState = { ...this.state };

    addExpense(prevState);
    if (expenses.length > 0) {
      this.setState({ id: expenses.length + 1 });
    }
  }

  render() {
    const { currencies, value } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            name="value"
            type="number"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="description"
            type="text"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" onChange={ this.handleChange }>
            { currencies.map((item) => (
              <option key={ item } value={ item }>{ item }</option>
            )) }
          </select>
        </label>
        <label htmlFor="payment">
          Método de pagamento
          <select name="payment" onChange={ this.handleChange }>
            {paymentOption.map((item) => (
              <option key={ item } value={ item }>{ item }</option>
            ))}
          </select>
        </label>
        <label htmlFor="category">
          Tag
          <select name="category" onChange={ this.handleChange }>
            {categoryOptions.map((item) => (
              <option key={ item } value={ item }>{ item }</option>
            ))}
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (prevState) => ({
  expenses: prevState.wallet.expenses,
  currencies: prevState.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(fetchApiExpenses(expense)),
  addCurrencies: () => dispatch(fetchApiCurrency()),
});

Form.propTypes = {
  value: PropTypes.string.isRequired,
  addExpense: PropTypes.func.isRequired,
  addCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
