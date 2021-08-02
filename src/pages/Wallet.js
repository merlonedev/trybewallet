import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import SelectApi from '../components/SelectApi';
import SelectPayment from '../components/SelectPayment';
import SelectTag from '../components/SelectTag';

class Wallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currenciesKeys: [],
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  async fetchCurrencies() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const fetchApi = await fetch(url);
    const response = await fetchApi.json();
    this.setState({
      currenciesKeys: Object.keys(response).filter((coin) => coin !== 'USDT'),
    });
  }

  render() {
    const { expenses, email } = this.props;
    const { currenciesKeys } = this.state;
    console.log(currenciesKeys);
    return (
      <>
        <header>
          <h3 data-testid="email-field">{ email }</h3>
          <h3 data-testid="total-field" label="Valor">{ expenses }</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <form>
          <Input type="text" label="Valor" name="valor" />
          <Input type="text" label="Descrição" name="descricao" />
          <SelectApi label="Moeda" endpoint={ currenciesKeys } />
          <SelectPayment label="Método de pagamento" name="payment" />
          <SelectTag label="Tag" name="tag" />
        </form>
      </>
    );
  }
}

Wallet.propTypes = {
  expenses: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
