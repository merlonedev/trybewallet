import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCurriencies, userExpencies } from '../actions/index.login';

class FormsWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      // expenses: '',
      exchangeRates: {},
      id: 0,
    };
    this.getCoins = this.getCoins.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
    this.inputLabel = this.inputLabel.bind(this);
    this.inputPaymente = this.inputPaymente.bind(this);
    this.inputTag = this.inputTag.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
  }

  componentDidMount() {
    const { setDispatch } = this.props;
    setDispatch();
  }

  getCoins() {
    const { coinsMap } = this.props;
    const setMoedas = [];
    coinsMap.forEach((el, index) => setMoedas.push(
      (<option key={ index }>{el}</option>),
    ));
    return setMoedas;
  }

  async handlerSubmit(event) {
    const { expenses, setExpenses } = this.props;
    event.preventDefault();
    const id = expenses.length;
    await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((resolver) => resolver.json())
      .then((result) => {
        this.setState({
          id,
          exchangeRates: result,
        });
      });
    setExpenses(this.state);
  }

  handlerChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  inputLabel(value) {
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          value={ value }
          id="value"
          name="value"
          onChange={ this.handlerChange }
        />
      </label>
    );
  }

  inputPaymente(method) {
    return (
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          value={ method }
          name="method"
          onChange={ this.handlerChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  inputTag(tag) {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" onChange={ this.handlerChange } value={ tag }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  inputDescription(description) {
    return (
      <label htmlFor="description">
        Descrição
        <input
          value={ description }
          type="text"
          id="description"
          name="description"
          onChange={ this.handlerChange }
        />
      </label>
    );
  }

  render() {
    const { description, value, tag, method, currency } = this.state;
    return (
      <form onSubmit={ this.handlerSubmit }>
        { this.inputLabel(value) }
        <label htmlFor="currency">
          Moedas
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handlerChange }
          >
            { this.getCoins() }
          </select>
        </label>
        { this.inputPaymente(method) }
        { this.inputTag(tag) }
        {this.inputDescription(description)}
        <button type="submit">Adicionar despesa </button>
      </form>
    );
  }
}

FormsWallet.propTypes = {
  setDispatch: PropTypes.func.isRequired,
  coinsMap: PropTypes.arrayOf(PropTypes.object).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  setExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  coinsMap: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (payload) => dispatch(userExpencies(payload)),
  setDispatch: () => dispatch(fetchApiCurriencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsWallet);
