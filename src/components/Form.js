import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuotation } from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  handleClick() {
    const { saveExpensesFromComponent } = this.props;
    saveExpensesFromComponent(this.state);
    this.setState((prevState) => ({ id: prevState.id + 1 }));
  }

  renderCurrencies() {
    const { currencies } = this.props;
    delete currencies.USDT;
    const currenciesKeys = Object.keys(currencies);
    return currenciesKeys.map(
      (currency) => <option key={ currency }>{ currency }</option>,
    );
  }

  render() {
    const { handleChange } = this;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input id="value" onChange={ handleChange } value={ value } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" onChange={ handleChange } value={ description } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ handleChange } value={ currency }>
            { this.renderCurrencies() }
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" onChange={ handleChange } value={ method }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ handleChange } value={ tag }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpensesFromComponent: (expenses) => dispatch(getQuotation(expenses)),
});

Form.propTypes = {
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,
  saveExpensesFromComponent: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
