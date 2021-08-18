import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApiCurriencies, userExpencies } from '../actions/index.login';

class FormsWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      expenses: [],
      exchangeRates: {},
    };
    this.getCoins = this.getCoins.bind(this);
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
    const { expenses, setExpenses } = this.state;
    event.preventDefault();
    const id = expenses.length;
    await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((resolver) => resolver.json())
      .then((result) => {
        this.setState = {
          id,
          exchangeRates: result,
        };
      });
    setExpenses(this.state);
  }

  handlerChange({ target: { value, name } }) {
    this.setState = ({
      [name]: value,
    });
  }

  inputLabel(value) {
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          id="value"
          name="value"
          value={ value }
          onChange={ this.handlerChange }
        />
      </label>
    );
  }

  inputPaymente(method) {
    return (
      <label htmlFor="payment">
        Método de pagamento
        <select
          id="payment"
          value={ method }
          name="payment"
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
        <select id="tag" name="tag" value={ tag } onChange={ this.handlerChange }>
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
          type="text"
          id="description"
          name="description"
          value={ description }
          onChange={ this.handlerChange }
        />
      </label>
    );
  }

  render() {
    const { currency, tag, method, value, description } = this.state;
    return (
      <form>
        { this.inputLabel(value) }
        <label htmlFor="coins">
          Moedas
          <select id="coins" value={ currency }>
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
  coinsMap: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  coinsMap: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  setExpenses: () => dispatch(userExpencies()),
  setDispatch: () => dispatch(fetchApiCurriencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormsWallet);
