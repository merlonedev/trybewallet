import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_EXPENSES } from '../actions/index';

class Formulario extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { expenses, getexpenses } = this.props;
    await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json())
      .then((r) => {
        this.setState({
          id: expenses.length,
          exchangeRates: r,
        });
      });
    getexpenses(this.state);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  utilValue(value) {
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          name="value"
          id="value"
          onChange={ this.handleChange }
          value={ value }
        />
      </label>
    );
  }

  utilCurrency(currency, currencies) {
    return (
      <label htmlFor="moeda">
        Moeda
        <select
          id="moeda"
          onChange={ this.handleChange }
          name="currency"
          value={ currency }
        >
          {currencies.map((currencie) => (
            <option
              key={ currencie.code }
              value={ currencie.code }
            >
              {currencie.code}

            </option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        { this.utilValue(value) }
        { this.utilCurrency(currency, currencies)}
        <label htmlFor="method">
          Método de Pagamento
          <select
            id="method"
            name="method"
            onChange={ this.handleChange }
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag" onChange={ this.handleChange } value={ tag }>
            <option value="Alimentacao">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            name="description"
            id="description"
            onChange={ this.handleChange }
            value={ description }
          />
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getexpenses: (value) => dispatch(GET_EXPENSES(value)),
});

Formulario.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getexpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
