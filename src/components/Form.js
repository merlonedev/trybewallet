import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Currency from './Currency';
import LabelSelect from './LabelSelect';
import LabelInput from './LabelInput';
import { formWallet } from '../actions';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.getCrurrencies = this.getCrurrencies.bind(this);
    this.inputValue = this.inputValue.bind(this);
    this.submitStore = this.submitStore.bind(this);
    this.qualquer = this.qualquer.bind(this);
  }

  getCrurrencies() {
    const endPoint = 'https://economia.awesomeapi.com.br/json/all';
    fetch(endPoint)
      .then((data) => data.json())
      .then((response) => this.qualquer(response));
  }

  qualquer(data) {
    const arrayKeys = { ...data };
    this.submitStore(arrayKeys);
  }

  inputValue(e) {
    switch (e.target.name) {
    case 'Valor': this.setState({ value: e.target.value });
      break;
    case 'Método de pagamento': this.setState({ method: e.target.value });
      break;
    case 'Moeda': this.setState({ currency: e.target.value });
      break;
    case 'Tag': this.setState({ tag: e.target.value });
      break;
    case 'Descrição': this.setState({ description: e.target.value });
      break;
    default:
    }
  }

  submitStore(data) {
    const { id, value, description, currency, method, tag } = this.state;
    const { submit, gastos } = this.props;
    submit({
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: data,
    });
    gastos();
    this.setState({ id: (id + 1) });
  }

  render() {
    const { currencies } = this.props;
    const newCurrencies = { ...currencies };
    delete newCurrencies.USDT;
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const food = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form className="form">
        <LabelInput
          htmlFor="Valor"
          type="text"
          nome="Valor"
          id="Valor"
          onChange={ this.inputValue }
        />
        <Currency
          htmlFor="Moeda"
          id="Moeda"
          nome="Moeda"
          array={ newCurrencies }
          onChange={ this.inputValue }
        />
        <LabelSelect
          htmlFor="Método de pagamento"
          nome="Método de pagamento"
          array={ payment }
          target={ this.inputValue }
        />
        <LabelSelect
          htmlFor="Tag"
          nome="Tag"
          array={ food }
          target={ this.inputValue }
        />
        <LabelInput
          htmlFor="Descrição"
          type="text"
          id="Descrição"
          onChange={ this.inputValue }
        />
        <button
          type="button"
          onClick={ this.getCrurrencies }
        >
          adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispathc) => ({
  submit: (state) => dispathc(formWallet(state)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  currencies: PropTypes.shape({
    ARS: PropTypes.shape({ code: PropTypes.string.isRequired }),
    AUD: PropTypes.shape({ code: PropTypes.string.isRequired }),
    BTC: PropTypes.shape({ code: PropTypes.string.isRequired }),
    CAD: PropTypes.shape({ code: PropTypes.string.isRequired }),
    CHF: PropTypes.shape({ code: PropTypes.string.isRequired }),
    CNY: PropTypes.shape({ code: PropTypes.string.isRequired }),
    DOGE: PropTypes.shape({ code: PropTypes.string.isRequired }),
    ETH: PropTypes.shape({ code: PropTypes.string.isRequired }),
    EUR: PropTypes.shape({ code: PropTypes.string.isRequired }),
    GBP: PropTypes.shape({ code: PropTypes.string.isRequired }),
    ILS: PropTypes.shape({ code: PropTypes.string.isRequired }),
    JPY: PropTypes.shape({ code: PropTypes.string.isRequired }),
    LTC: PropTypes.shape({ code: PropTypes.string.isRequired }),
    USD: PropTypes.shape({ code: PropTypes.string.isRequired }),
    USDT: PropTypes.shape({ code: PropTypes.string.isRequired }),
    XRP: PropTypes.shape({ code: PropTypes.string.isRequired }),
  }).isRequired,
  submit: PropTypes.func.isRequired,
  gastos: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
