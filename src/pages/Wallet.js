import React from 'react';
import PropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
import fetchApi from '../forms/fetchApiMoeda';
import cotacoesApi from '../components/cotacoesApi';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.addDespesas = this.addDespesas.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderMethod = this.renderMethod.bind(this);
    this.renderBtnAdd = this.renderBtnAdd.bind(this);
  }

  componentDidMount() {
    const { getApi } = this.props;
    getApi();
  }

  addDespesas() {
    const { state } = this;
    const { getCotApi } = this.props;
    return getCotApi(state);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  renderHeader() {
    const { email, expenses } = this.props;
    return (
      <div>
        <header>
          <h1>Wallet</h1>
          <div data-testid="email-field">{ email }</div>
          <div data-testid="total-field">
            {
              expenses
                .reduce((acc, cont) => {
                  const { currency, value, exchangeRates } = cont;
                  const { ask } = exchangeRates[currency];
                  return acc + (value * ask);
                }, 0)
            }
          </div>
          <div data-testid="header-currency-field">BRL</div>
        </header>
      </div>
    );
  }

  renderCurrency() {
    const { currency } = this.state;
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { currencies.map((coin) => (<option key={ coin }>{ coin }</option>)) }
        </select>
      </label>
    );
  }

  renderValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          id="value"
          type="text"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          name="description"
          id="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          name="method"
          id="method"
          value={ method }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de débito">Cartão de débito</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select name="tag" id="tag" value={ tag } onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderBtnAdd() {
    return (
      <button
        type="button"
        onClick={ this.addDespesas }
      >
        Adicionar Despesa
      </button>
    );
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
        { this.renderCurrency() }
        { this.renderValue() }
        { this.renderDescription() }
        { this.renderMethod() }
        { this.renderTag() }
        { this.renderBtnAdd() }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getApi: () => dispatch(fetchApi()),
  getCotApi: (data) => dispatch(cotacoesApi(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(string),
  getApi: PropTypes.func,
  getCotApi: PropTypes.func,
}.isRequired;
