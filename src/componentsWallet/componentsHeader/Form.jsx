import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expensesAction, currenciesAction } from '../../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };

    this.addCoins = this.addCoins.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.funcFetch = this.funcFetch.bind(this);
  }

  async componentDidMount() {
    const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resultAPI = await fetchAPI.json();
    const resultCoins = Object.keys(resultAPI).filter((key) => key !== 'USDT');
    this.addCoins(resultCoins);
  }

  async funcFetch() {
    const { expensesDispatch } = this.props;

    const fetchAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resultAPI = await fetchAPI.json();
    await this.setState({
      exchangeRates: resultAPI,
    });
    await expensesDispatch(this.state);
  }

  addCoins(coinsList) {
    const { currenciesDispatch } = this.props;
    currenciesDispatch(coinsList);
  }

  handleChange({ target: { value, id } }) {
    this.setState(() => ({
      [id]: value,
    }));
  }

  render() {
    const { currenciesState } = this.props;

    return (
      <div>
        <label htmlFor="value">
          Valor
          <input id="value" type="text" onChange={ (e) => this.handleChange(e) } />
        </label>
        <label htmlFor="description">
          Descrição
          <input id="description" type="text" onChange={ (e) => this.handleChange(e) } />
        </label>
        <label htmlFor="currency">
          Moeda
          <select id="currency" onChange={ (e) => this.handleChange(e) }>
            {currenciesState.map((coin, index) => <option key={ index }>{coin}</option>)}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select id="method" onChange={ (e) => this.handleChange(e) }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" onChange={ (e) => this.handleChange(e) }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => this.funcFetch() }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesState: state.wallet.currencies });

const mapDispatchToProps = (dispatch) => ({
  expensesDispatch: (state) => dispatch(expensesAction(state)),
  currenciesDispatch: (state) => dispatch(currenciesAction(state)),
});

Form.propTypes = {
  expensesDispatch: PropTypes.func.isRequired,
  currenciesDispatch: PropTypes.func.isRequired,
  currenciesState: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
