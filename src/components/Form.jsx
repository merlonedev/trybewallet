import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, fetchApiCurrency } from '../actions/index';
import Input from './Input';

const paymentOption = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const categoryOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '100',
      description: 'teste 1',
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
    const { _addExpense, expenses } = this.props;
    const state = { ...this.state };
    const lenght = expenses.length;

    _addExpense(state);

    if (lenght >= 0) {
      this.setState({ id: lenght + 1 });
    }
  }

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;
    return (
      <form>
        <Input
          id="Valor"
          name="value"
          type="number"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          id="Descrição"
          name="description"
          type="text"
          value={ description }
          onChange={ this.handleChange }
        />
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency" onChange={ this.handleChange }>
            {currencies.map((item, index) => (
              <option key={ index } value={ item }>{ item }</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select name="method" id="method" onChange={ this.handleChange }>
            {paymentOption.map((item) => (
              <option key={ item } value={ item }>{ item }</option>
            ))}
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
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
  _addExpense: (expense) => dispatch(addExpense(expense)),
  addCurrencies: () => dispatch(fetchApiCurrency()),
});

Form.propTypes = {
  value: PropTypes.string,
  addExpense: PropTypes.func.isRequired,
  addCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);
