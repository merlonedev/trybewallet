import React from 'react';
import PropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../actions/index';
// import Expenses from '../forms/Expenses';
import fetchExpenseApi from '../forms/FetchExpenseApi';
import fetchApi from '../forms/FetchApi';

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

    this.renderHeader = this.renderHeader.bind(this);
    this.addButton = this.addButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderValue = this.renderValue.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderCurrency = this.renderCurrency.bind(this);
    this.renderTag = this.renderTag.bind(this);
    this.renderMethod = this.renderMethod.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addButton() {
    const { state } = this;
    const { expenseData } = this.props;
    return expenseData(state);
  }

  renderValue() {
    const { value } = this.state;
    return (
      <label htmlFor="valor">
        Valor
        <input
          id="valor"
          type="number"
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
          id="description"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderCurrency() {
    const { currency } = this.state;
    const { currencies } = this.props;
    return (
      <label htmlFor="cur">
        Moeda
        <select
          id="cur"
          name="currency"
          value={ currency }
          onChange={ this.handleChange }
        >
          { currencies.map((cur) => (<option key={ cur }>{ cur }</option>)) }
        </select>
      </label>
    );
  }

  renderTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" value={ tag } onChange={ this.handleChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  renderMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="pay">
        Método de Pagamento
        <select id="pay" name="method" value={ method } onChange={ this.handleChange }>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderHeader() {
    const { email, expenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">
          {
            expenses
              .reduce((acc, current) => {
                const { currency, value, exchangeRates } = current;
                const { ask } = exchangeRates[currency];
                return acc + (value * ask);
              }, 0)
          }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }

  render() {
    return (
      <div>
        TrybeWallet
        { this.renderHeader() }
        { this.renderValue() }
        { this.renderDescription() }
        { this.renderCurrency() }
        { this.renderTag() }
        { this.renderMethod() }
        {/* <Expenses
          onClickButton={ this.addButton }
          description={ description }
          currency={ currency }
          method={ method }
          tag={ tag }
          onChangebutton={ this.handleChange }
        /> */}
        <button type="button" onClick={ this.addButton }>Adicionar Despesa</button>
      </div>
    );
  }
}

Wallet.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(string).isRequired,
  currencies: PropTypes.arrayOf(string).isRequired,
  expenseData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  xablau: (email) => dispatch(saveEmail(email)),
  expenseData: (data) => dispatch(fetchExpenseApi(data)),
  getCurrencies: () => dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
